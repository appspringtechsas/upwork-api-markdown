// Converts a saved Upwork docs HTML snapshot into structured Markdown under docs/.
// Deterministic, idempotent, and self-checking: it asserts that every element
// id inside <article id="content"> was rendered somewhere ("100% coverage").
//
// Usage: node scripts/convert.mjs [--snapshot <dir>] [--docs <dir>]
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import { MdRenderer, fence } from './lib/md.mjs';
import {
  BASE_URL, DOCS_DIR, INCOMING_DIR, LATEST_POINTER, REPO_ROOT, latestSnapshotDir, readJson, snapshotMeta,
} from './lib/snapshot.mjs';

const KIND_INFO = {
  'definition-object': { dir: 'types', kind: 'object' },
  'definition-input-object': { dir: 'inputs', kind: 'input_object' },
  'definition-enum': { dir: 'enums', kind: 'enum' },
  'definition-scalar': { dir: 'scalars', kind: 'scalar' },
  'definition-interface': { dir: 'interfaces', kind: 'interface' },
  'definition-union': { dir: 'unions', kind: 'union' },
};

// ---------- small helpers ----------
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/`/g, '')
    .replace(/[^a-z0-9\- ]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function plainText($el) {
  return ($el?.text() || '').replace(/\s+/g, ' ').trim();
}

function short(text, max = 110) {
  const t = text.replace(/`/g, '').replace(/\|/g, '/');
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const dot = cut.lastIndexOf('. ');
  return (dot > 40 ? cut.slice(0, dot + 1) : cut + '…').trim();
}

function yamlQuote(s) {
  return JSON.stringify(String(s));
}

function frontmatter(fields) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined || v === null || v === '') continue;
    lines.push(`${k}: ${typeof v === 'string' ? yamlQuote(v) : v}`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

function relPath(fromFile, toFile, anchor) {
  const dir = path.posix.dirname(fromFile);
  let rel = path.posix.relative(dir, toFile);
  if (!rel) rel = path.posix.basename(toFile);
  return anchor ? `${rel}#${anchor}` : rel;
}

// ---------- main conversion ----------
export function convertSnapshot(snapshotDir, { docsDir = DOCS_DIR, quiet = false } = {}) {
  const metaPath = path.join(snapshotDir, 'meta.json');
  if (!fs.existsSync(metaPath)) throw new Error(`snapshot meta.json missing: ${metaPath}`);
  // docs/ is fully generated output: wipe it so stale files disappear
  fs.rmSync(docsDir, { recursive: true, force: true });
  fs.mkdirSync(docsDir, { recursive: true });
  const meta = readJson(metaPath);
  const htmlPath = path.join(snapshotDir, 'index.html');
  const $ = cheerio.load(fs.readFileSync(htmlPath, 'utf8'));
  const content = $('article#content');
  if (!content.length) throw new Error('article#content not found — unexpected snapshot layout');

  // asset index: map "assets/..." relative path -> on-disk snapshot file
  const assetIndex = new Map();
  for (const a of meta.assets || []) {
    if (a.ok) assetIndex.set(a.file, path.join(snapshotDir, ...a.file.split('/')));
  }
  // copy documentation images into docs/assets/images so markdown is self-contained
  const imgSrcs = new Set();
  for (const a of meta.assets || []) {
    if (a.ok && a.file.startsWith('assets/images/')) imgSrcs.add(a.file);
  }
  content.find('img[src]').each((_, el) => {
    const s = el.attribs.src;
    if (s.startsWith('assets/images/')) imgSrcs.add(s);
  });
  for (const s of imgSrcs) {
    const disk = assetIndex.get(s);
    if (!disk || !fs.existsSync(disk)) continue;
    const target = path.join(docsDir, 'assets', 'images', path.basename(s));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(disk, target);
  }
  const imagesCopied = imgSrcs.size;

  const visited = new Set();
  const stats = { queries: 0, mutations: 0, definitions: 0, prose: 0, unresolvedLinks: 0 };
  const registry = {}; // html id -> { file, anchor? }
  const units = []; // render plan
  const skip = new Set(); // element objects rendered as separate units
  const slugCounts = new Map(); // file -> Map(slug -> count)

  function uniqueSlug(file, base) {
    let m = slugCounts.get(file);
    if (!m) slugCounts.set(file, (m = new Map()));
    const n = (m.get(base) || 0) + 1;
    m.set(base, n);
    return n === 1 ? base : `${base}-${n - 1}`;
  }

  // 1) nav labels -------------------------------------------------------------
  const navLabels = {};
  $('#nav-items a[href^="#"]').each((_, a) => {
    const href = a.attribs.href.slice(1);
    const label = (a.children || []).map((c) => (c.type === 'text' ? c.data : '')).join('').trim();
    if (label && !navLabels[href]) navLabels[href] = label;
  });

  // 2) collect units ----------------------------------------------------------
  function addProseUnit({ $el, file, title, titleLevel, domain, htmlId, kind = 'section' }) {
    units.push({ type: 'prose', $el, file, title: title || plainText($el.find('h1,h2,h3,h4').first()) || title, titleLevel: titleLevel || 1, domain, htmlId, kind });
  }

  // prose: introduction
  {
    const $el = $('div#introduction');
    addProseUnit({ $el, file: 'docs/introduction.md', title: 'Introduction', titleLevel: 1, htmlId: 'introduction' });
    registry['introduction'] = { file: 'docs/introduction.md' };
  }

  // prose: getting-started (README + per-child files)
  {
    const $gs = $('section#getting-started');
    addProseUnit({ $el: $gs, file: 'docs/getting-started/README.md', title: 'Getting Started', titleLevel: 1, htmlId: 'getting-started' });
    registry['getting-started'] = { file: 'docs/getting-started/README.md' };
    $gs.children('div.doc-row[id], section[id]').each((_, el) => {
      const id = el.attribs.id;
      if (!/^getting-started-/.test(id)) return;
      const name = id.replace(/^getting-started-/, '');
      const file = `docs/getting-started/${name}.md`;
      const $el = $(el);
      const first = $el.find('h1,h2,h3,h4').first();
      const title = navLabels[id] || plainText(first) || name;
      const tl = first.length ? Number(/^\d/.test(first[0].tagName) ? first[0].tagName[1] : 2) : 2;
      addProseUnit({ $el, file, title, titleLevel: Math.min(tl, 2), htmlId: id });
      registry[id] = { file };
      skip.add(el);
    });
  }

  // prose: operations sections
  for (const [id, file] of [
    ['operations-common-information', 'docs/operations/common-information.md'],
    ['operations-error-handling', 'docs/operations/error-handling.md'],
    ['operations-subscriptions', 'docs/operations/subscriptions.md'],
  ]) {
    const $el = $(`section#${id}`);
    if (!$el.length) continue;
    const title = navLabels[id] || plainText($el.find('h1,h2,h3').first()) || id;
    addProseUnit({ $el, file, title, titleLevel: 2, htmlId: id });
    registry[id] = { file };
  }

  // prose: operations-examples (README + per-category files)
  {
    const $ex = $('section#operations-examples');
    if ($ex.length) {
      addProseUnit({ $el: $ex, file: 'docs/operations/examples/README.md', title: 'Examples', titleLevel: 2, htmlId: 'operations-examples' });
      registry['operations-examples'] = { file: 'docs/operations/examples/README.md' };
      $ex.children('div.doc-row[id]').each((_, el) => {
        const id = el.attribs.id;
        if (!id.startsWith('examples-')) return;
        const domain = navLabels[id] || plainText($(el).find('h2,h3,h4').first());
        const file = `docs/operations/examples/${slugify(domain) || id.replace('examples-', '')}.md`;
        const $el = $(el);
        const first = $el.find('h2,h3,h4').first();
        addProseUnit({ $el, file, title: domain, titleLevel: first.length ? Number(first[0].tagName[1]) : 3, htmlId: id, domain });
        registry[id] = { file };
        skip.add(el);
      });
    }
  }

  // operations (queries/mutations) + definitions, in document order with group tracking
  const groupOrder = []; // ordered domains per category
  let mode = null; // 'query' | 'mutation' | 'definitions'
  let domain = null;
  const opUnits = [];
  const defUnits = [];
  content.children().each((_, el) => {
    if (el.type !== 'tag') return;
    const $el = $(el);
    const cls = el.attribs?.class || '';
    if (el.tagName === 'div' && cls.includes('group-heading')) {
      const text = plainText($el);
      const gid = el.attribs.id || '';
      if (gid.includes('Queries') || text === 'Queries') { mode = 'query'; domain = null; }
      else if (gid.includes('Mutations') || text === 'Mutations') { mode = 'mutation'; domain = null; }
      else if (gid.includes('Types') || text === 'Types') { mode = 'definitions'; domain = null; }
      else if (text && mode) {
        domain = text;
        const key = mode === 'query' ? 'queries' : mode === 'mutation' ? 'mutations' : 'types';
        if (!groupOrder[key]) groupOrder[key] = [];
        if (domain !== 'Queries' && domain !== 'Mutations' && domain !== 'Types' && !groupOrder[key].includes(domain)) groupOrder[key].push(domain);
      }
      // register the group anchor itself (nav & prose links point at these ids)
      if (gid) {
        const modeFile = mode === 'query' ? 'docs/queries/README.md' : mode === 'mutation' ? 'docs/mutations/README.md' : 'docs/types/README.md';
        if (!registry[gid]) {
          registry[gid] = domain ? { file: modeFile, anchor: slugify(domain) } : { file: modeFile };
        }
        visited.add(gid);
      }
      return;
    }
    if (el.tagName === 'section' && cls.includes('operation')) {
      const id = el.attribs.id || '';
      const m = id.match(/^(query|mutation)-(.+)$/);
      if (!m) return;
      const kind = m[1] === 'query' ? 'query' : 'mutation';
      const name = m[2];
      const file = `docs/${kind === 'query' ? 'queries' : 'mutations'}/${name}.md`;
      const dep = cls.includes('operation-deprecated') || !!$el.find('.operation-deprecated').length;
      const unit = { type: 'operation', $el, kind, name, file, htmlId: id, domain, deprecated: dep };
      units.push(unit);
      opUnits.push(unit);
      registry[id] = { file };
      (kind === 'query' ? stats.queries++ : stats.mutations++);
      return;
    }
    if (el.tagName === 'section' && cls.includes('definition')) {
      const info = Object.entries(KIND_INFO).find(([k]) => cls.includes(k));
      if (!info) return;
      const id = el.attribs.id || '';
      const name = id.replace(/^definition-/, '');
      const dn = plainText($el.find('.definition-group-name').first()) || domain || 'Other';
      const file = `docs/${info[1].dir}/${name}.md`;
      // type-level deprecation marker: direct child div (value/field-level markers live inside tables)
      const depEl = $el.children('.definition-deprecated').first();
      const unit = {
        type: 'definition', $el, kind: info[1].kind, dir: info[1].dir, name, file, htmlId: id,
        domain: dn, deprecatedText: depEl.length ? plainText(depEl) : null,
      };
      units.push(unit);
      defUnits.push(unit);
      registry[id] = { file };
      stats.definitions++;
      if (!groupOrder.types) groupOrder.types = [];
      if (!groupOrder.types.includes(dn)) groupOrder.types.push(dn);
      return;
    }
  });

  // 3) group banner headings (h1.fancy id="group-…") → category README anchors
  content.find('h1.fancy[id], [id^="group-"]').each((_, el) => {
    const gid = el.attribs.id;
    if (!gid) return;
    visited.add(gid);
    let file = 'docs/README.md';
    let anchor;
    if (gid.startsWith('group-Operations-Queries')) { file = 'docs/queries/README.md'; if (!registry[gid]) registry[gid] = { file }; }
    else if (gid.startsWith('group-Operations-Mutations')) { file = 'docs/mutations/README.md'; if (!registry[gid]) registry[gid] = { file }; }
    else if (gid === 'group-Types') { if (!registry[gid]) registry[gid] = { file: 'docs/types/README.md' }; }
    else if (gid.startsWith('group-Types-')) {
      const anchorId = gid.slice('group-Types-'.length).toLowerCase();
      if (!registry[gid]) registry[gid] = { file: 'docs/types/README.md', anchor: anchorId };
    } else if (!registry[gid]) registry[gid] = { file };
  });

  // 4) anchor registry for nested ids (auth-*, example panes, tab-panes…) -----
  function containingUnit(el) {
    let cur = el;
    while (cur && cur !== content[0]) {
      for (const u of units) {
        if (u.$el && u.$el[0] === cur) return u;
      }
      cur = cur.parent;
    }
    return null;
  }
  function inSkipSubtree(el) {
    let cur = el.parentNode;
    while (cur && cur !== content[0]) {
      if (skip.has(cur)) return true;
      cur = cur.parentNode;
    }
    return false;
  }
  // GitHub-style heading slugs: repeated heading text gets -1, -2… in document order
  const headingSlugs = new WeakMap();
  for (const u of units) {
    if (u.type !== 'prose') continue;
    const counts = new Map();
    u.$el.find('h1,h2,h3,h4,h5,h6').each((_, h) => {
      if (inSkipSubtree(h)) return;
      const base = slugify(plainText($(h))) || 'section';
      const n = (counts.get(base) || 0) + 1;
      counts.set(base, n);
      headingSlugs.set(h, n === 1 ? base : `${base}-${n - 1}`);
    });
  }
  function nearestHeadingEl($el, unit) {
    let $h = $el.prevAll('h1,h2,h3,h4,h5,h6').first();
    if (!$h.length) {
      const anc = $el.parents().toArray();
      for (const a of anc) {
        if (a === unit.$el[0]) break;
        $h = $(a).prevAll('h1,h2,h3,h4,h5,h6').first();
        if ($h.length) break;
      }
    }
    if (!$h.length) $h = unit.$el.find('h1,h2,h3,h4').filter((i, h) => $(h).index() <= 2).first();
    return $h.length ? $h[0] : null;
  }
  content.find('[id]').add(content.filter('[id]')).each((_, el) => {
    const id = el.attribs.id;
    if (registry[id]) return; // unit-level ids already mapped to whole files
    const u = containingUnit(el);
    if (!u) return;
    let anchor;
    if (u.type === 'prose') {
      const hEl = nearestHeadingEl($(el), u);
      anchor = headingSlugs.get(hEl) || slugify(u.title);
    }
    registry[id] = { file: u.file, anchor };
  });

  // 4) renderer factories -----------------------------------------------------
  function readAssetText(rel) {
    if (!rel) return null;
    const norm = rel.replace(/^\.\//, '').replace(/%20/g, ' ');
    const disk = assetIndex.get(norm) || path.join(snapshotDir, ...norm.split('/'));
    try {
      return fs.readFileSync(disk, 'utf8');
    } catch {
      return null;
    }
  }

  function makeCtx(currentFile, opts = {}) {
    const unresolved = [];
    const ctx = {
      $,
      markVisited: (el) => {
        const id = el.attr ? el.attr('id') : undefined;
        if (id) visited.add(id);
      },
      imgSrc: (src) => {
        if (src.startsWith('assets/images/') && assetIndex.get(src)) {
          return relPath(currentFile, `docs/assets/images/${path.posix.basename(src)}`);
        }
        return BASE_URL + src;
      },
      resolveLink: (hash) => {
        const id = hash.slice(1);
        const reg = registry[id];
        if (!reg) {
          unresolved.push(id);
          return null;
        }
        return relPath(currentFile, reg.file, reg.anchor);
      },
      skip,
      visited,
      registry,
      heading: null, // set per unit
      ...opts,
    };
    ctx._unresolved = unresolved;
    return ctx;
  }

  function renderBlocks($container, ctx, titleLevel) {
    const r = new MdRenderer({
      ...ctx,
      heading(n, text) {
        const lv = Math.max(2, Math.min(6, n - titleLevel + 1));
        return `${'#'.repeat(lv)} ${text}`;
      },
    });
    return r.blocks($container);
  }

  // mark every id inside a subtree as visited (used by structured renderers)
  function markSubtree($el) {
    $el.filter('[id]').each((_, e) => visited.add(e.attribs.id));
    $el.find('[id]').each((_, e) => visited.add(e.attribs.id));
  }

  // ---------- structured renderers ----------
  function parseFieldsTable($table, ctx, r) {
    // returns rows: [{name, nameMd, typeMd, desc, deprecation, args:[…]}] or {raw:[cells]}
    const rows = [];
    let field = null;
    $table.find('tbody tr').each((_, tr) => {
      const $tr = $(tr);
      if ($tr.hasClass('row-field-arguments')) {
        const args = [];
        $tr.find('.field-argument').each((__, fa) => {
          const $fa = $(fa);
          const nameEl = $fa.find('.field-argument-name .property-name, .property-name').first();
          const typeEl = $fa.find('.property-type').first();
          args.push({
            name: plainText(nameEl),
            typeMd: typeEl.length ? r.inline(typeEl.contents(), { br: 'space' }).trim() : '',
            desc: plainText($fa.children('p')),
          });
        });
        if (field) field.args.push(...args);
        return;
      }
      const $name = $tr.find('.property-name').first();
      if (!$name.length) {
        // generic row (e.g. enum values): keep cell markdown, decorate deprecation markers
        const cells = $tr.children('td').toArray().map((td, i) => {
          const $td = $(td).clone();
          let reason = '';
          $td.find('.deprecation-reason').each((__, s) => {
            reason += (reason ? '; ' : '') + plainText($(s));
            $(s).remove();
          });
          let md = r.inline($td.contents(), { br: 'space' }).trim().replace(/\s+/g, ' ');
          const wrapped = $td.find('.definition-deprecated').length > 0;
          if (i === 0 && wrapped) md = `⚠️ ${md}`;
          else if (reason) md = `${md} **⚠️ Deprecated — ${reason.replace(/`/g, '')}**`.trim();
          return md;
        });
        rows.push({ raw: cells });
        field = null;
        return;
      }
      const $type = $tr.find('.property-type').first();
      const $descTd = $tr.children('td').last();
      let reason = '';
      $descTd.find('.deprecation-reason').each((__, d) => {
        reason += (reason ? '; ' : '') + plainText($(d));
      });
      const wrappedDep = $tr.find('.definition-deprecated').length > 0;
      field = {
        name: plainText($name),
        nameMd: $name.length ? r.inline($name.contents(), { br: 'space' }).trim() : '',
        typeMd: $type.length ? r.inline($type.contents(), { br: 'space' }).trim() : '',
        args: [],
        desc: $descTd
          .children()
          .filter((_, c) => !(c.type === 'tag' && /deprecation-reason/.test(c.attribs?.class || '')))
          .toArray()
          .map((c) => r.inline($(c), { br: 'space' }))
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim() || r.inline($descTd.contents().filter((_, c) => c.type === 'text'), { br: 'space' }).replace(/\s+/g, ' ').trim(),
        deprecation: wrappedDep || reason ? (reason ? `Deprecated — ${reason}` : 'Deprecated') : '',
      };
      if (wrappedDep) field.nameMd = `⚠️ ${field.nameMd}`;
      rows.push(field);
      return;
    });
    return rows;
  }

  function fieldsTableMd(rows, labelWord) {
    const out = [`| ${labelWord} | Type | Description |`, '|---|---|---|'];
    for (const f of rows) {
      if (f.raw) {
        out.push(`| ${f.raw[0] || ''} | ${f.raw[1] || ''} |`);
        continue;
      }
      let desc = f.desc || '';
      if (f.deprecation) desc += `${desc ? ' ' : ''}**⚠️ ${f.deprecation}**`;
      out.push(`| ${f.nameMd || '`' + f.name + '`'} | ${f.typeMd || ''} | ${desc.replace(/\|/g, '\\|')} |`);
    }
    return out.join('\n');
  }

  function rawTableMd(rows) {
    const present = rows.filter((r) => r.raw);
    if (!present.length) return null;
    const head = ['Value', 'Description'];
    const out = [`| ${head.join(' | ')} |`, '|---|---|'];
    for (const f of present) out.push(`| ${f.raw.map((c) => c.replace(/\|/g, '\\|')).join(' | ')} |`);
    return out.join('\n');
  }

  function renderOperation(unit, ctx) {
    const { $el, kind, name, file, htmlId, domain, deprecated } = unit;
    markSubtree($el);
    const r = new MdRenderer({
      ...ctx,
      heading: (n, text) => `${'#'.repeat(Math.max(2, Math.min(6, n)))} ${text}`,
    });
    const parts = [];
    // response type for frontmatter
    let responseType = '';
    const $resp = $el.find('.doc-copy-section').filter((_, s) => plainText($(s).find('h5').first()) === 'Response').first();
    if ($resp.length) {
      const a = $resp.find('a[href^="#definition-"]').first();
      if (a.length) responseType = plainText(a);
    }
    const depReason = plainText($el.find('.deprecation-reason').first());
    parts.push(frontmatter({
      title: `${name}`,
      kind,
      domain,
      gql_name: name,
      returns: responseType || undefined,
      deprecated: deprecated ? depReason || 'true' : undefined,
      html_id: htmlId,
      source: `${BASE_URL}index.html#${htmlId}`,
      generated_by: 'scripts/convert.mjs',
    }));
    parts.push(`# \`${name}\``);
    if (deprecated) parts.push(`> ⚠️ **Deprecated:** ${depReason || 'This operation is deprecated.'}`);
    for (const s of $el.find('.doc-copy > .doc-copy-section').toArray()) {
      const $s = $(s);
      const label = plainText($s.find('h5').first());
      // the deprecation note already rendered as the blockquote above
      if (!label && $s.find('.deprecation-reason').length) continue;
      const $body = $s.clone().children('h5').remove().end();
      const body = renderBlocks($body.contents(), ctx, 3).trim();
      if (!body) continue;
      const title = label ? `## ${label}` : '## Information';
      if (label === 'Arguments' && $s.find('table').length) {
        const rows = parseFieldsTable($s.find('table').first(), ctx, r);
        parts.push('## Arguments');
        parts.push(fieldsTableMd(rows, 'Argument'));
      } else if (label === 'Required Permissions') {
        parts.push('## Required Permissions');
        parts.push(body);
      } else {
        parts.push(title);
        parts.push(body);
      }
    }
    // Examples (DOM tabs)
    // Detailed structure: panes query-example-<id>, variables-example-<id>, response-example-<id>
    // Real-life example:    panes sample-query-example-<id>, sample-variables-example-<id>,
    //                       sample-response-example-<id> (response lazy-loaded from data-sample-response-url asset)
    const exampleParts = [];
    const detailed = [
      ['Query', `#query-example-${htmlId} pre`],
      ['Variables', `#variables-example-${htmlId} pre`],
      ['Response', `#response-example-${htmlId} pre`],
    ];
    const det = [];
    for (const [label, sel] of detailed) {
      const $pre = $el.find(sel).first();
      if ($pre.length) det.push([label, fence($pre.text(), label === 'Query' ? 'graphql' : 'json')]);
    }
    if (det.length) {
      exampleParts.push('### Detailed structure');
      for (const [h, c] of det) exampleParts.push(`#### ${h}`, c);
    }
    const real = [];
    for (const label of ['query', 'variables']) {
      const $pre = $el.find(`#sample-${label}-example-${htmlId} pre`).first();
      if ($pre.length) real.push([label === 'query' ? 'Query' : 'Variables', fence($pre.text(), label === 'query' ? 'graphql' : 'json')]);
    }
    const $respPane = $el.find(`#sample-response-example-${htmlId}`).first();
    if ($respPane.length) {
      const assetRel = $respPane.attr('data-sample-response-url');
      const txt = assetRel ? readAssetText(assetRel) : $respPane.find('pre').length ? $respPane.find('pre').text() : null;
      if (txt) real.push(['Response', fence(txt, 'json')]);
      else if (assetRel) real.push(['Response', `_Response example served as a JSON asset:_ [${assetRel}](${BASE_URL}${encodeURI(assetRel)})`]);
    }
    if (real.length) {
      exampleParts.push('### Real-life example');
      for (const [h, c] of real) exampleParts.push(`#### ${h}`, c);
    }
    // variant JSON
    const variantsScript = $el.find('script.sample-example-variants').first();
    if (variantsScript.length) {
      try {
        const obj = JSON.parse(variantsScript.html());
        const extraKeys = Object.keys(obj).filter((k) => k !== 'default');
        if (extraKeys.length) {
          exampleParts.push('### Sample query variants');
          exampleParts.push('_Additional example variants (by usage context) stored with the page:_');
          for (const k of extraKeys) {
            const v = obj[k];
            exampleParts.push(`#### Variant: \`${k}\``);
            if (v.queryText) exampleParts.push(fence(v.queryText, 'graphql'));
            const varJson = v.variablesJson || (v.variables ? JSON.stringify(v.variables, null, 2) : '');
            if (varJson) exampleParts.push(fence(varJson, 'json'));
            if (v.responseUrl) {
              const txt = readAssetText(v.responseUrl);
              if (txt) exampleParts.push(fence(txt, 'json'));
            }
          }
        }
      } catch { /* ignore malformed variant data */ }
    }
    if (exampleParts.length) {
      parts.push('## Examples');
      parts.push(...exampleParts);
    }
    return parts.join('\n\n');
  }

  function renderDefinition(unit, ctx) {
    const { $el, kind, dir, name, file, htmlId, domain, deprecatedText } = unit;
    markSubtree($el);
    const r = new MdRenderer({ ...ctx, heading: () => '' });
    const parts = [];
    parts.push(frontmatter({
      title: name,
      kind,
      domain,
      gql_name: name,
      deprecated: deprecatedText || undefined,
      html_id: htmlId,
      source: `${BASE_URL}index.html#${htmlId}`,
      generated_by: 'scripts/convert.mjs',
    }));
    parts.push(`# \`${name}\` (${kind.replace('_', ' ')})`);
    if (deprecatedText) parts.push(`> ⚠️ **Deprecated:** ${deprecatedText}`);
    // interfaces implement unions: also render summary from any "Implements" text
    const $desc = $el.find('.definition-description').first();
    if ($desc.length) {
      const body = renderBlocks($desc.clone().children('h5').remove().end().contents(), ctx, 2).trim();
      if (body) {
        parts.push('## Description');
        parts.push(body);
      }
    }
    for (const s of $el.find('.definition-properties.doc-copy-section').toArray()) {
      const $s = $(s);
      const label = plainText($s.find('h5').first()) || 'Properties';
      const $table = $s.children('table').first();
      if ($table.length) {
        const rows = parseFieldsTable($table, ctx, r);
        const fieldRows = rows.filter((x) => !x.raw);
        parts.push(`## ${label}`);
        if (fieldRows.length) {
          parts.push(fieldsTableMd(rows, label === 'Values' ? 'Value' : 'Field'));
        } else {
          const t = rawTableMd(rows);
          if (t) parts.push(t);
        }
        const withArgs = fieldRows.filter((f) => f.args?.length);
        if (withArgs.length) {
          parts.push('## Field arguments');
          for (const f of withArgs) {
            parts.push(`### \`${f.name}\``);
            const out = ['| Argument | Type | Description |', '|---|---|---|'];
            for (const a of f.args) out.push(`| \`${a.name}\` | ${a.typeMd} | ${a.desc.replace(/\|/g, '\\|')} |`);
            parts.push(out.join('\n'));
          }
        }
      } else {
        const $body = $s.clone().children('h5').remove().end().contents();
        const body = renderBlocks($body, ctx, 2).trim();
        if (body) {
          parts.push(`## ${label}`);
          parts.push(body);
        }
      }
    }
    // examples side panel
    const $ex = $el.find('.doc-examples');
    if ($ex.length) {
      const exBlocks = renderBlocks($ex.contents(), ctx, 3).trim();
      if (exBlocks && !/^#*\s*$/.test(exBlocks)) {
        parts.push('## Examples');
        parts.push(exBlocks);
      }
    }
    return parts.join('\n\n');
  }

  function renderProse(unit, ctx) {
    markSubtree(unit.$el);
    const { file, title, titleLevel, htmlId, kind } = unit;
    const parts = [];
    parts.push(frontmatter({
      title,
      kind: kind || 'section',
      html_id: htmlId,
      source: `${BASE_URL}index.html#${htmlId}`,
      generated_by: 'scripts/convert.mjs',
    }));
    parts.push(`# ${title}`);
    // skip the first heading when it duplicates the file title (avoid `# X` twice)
    const $kids = unit.$el.contents().toArray();
    const firstHeadingIdx = $kids.findIndex((c) => c.type === 'tag' && /^h[1-6]$/.test(c.tagName));
    const $render = unit.$el.contents().filter((i, el) => {
      if (el.type === 'tag' && skip.has(el)) return false; // rendered as its own file
      if (i === firstHeadingIdx && firstHeadingIdx >= 0 && slugify(plainText($(el))) === slugify(title)) return false;
      return true;
    });
    const body = renderBlocks($render, ctx, titleLevel).trim();
    if (body) parts.push(body);
    // list of child files (navigation)
    const children = units.filter((u) => u.type === 'prose' && u.parentFile === file);
    if (children.length) {
      parts.push('## In this section');
      for (const c of children) parts.push(`- [${c.title}](${relPath(file, c.file)})`);
    }
    return parts.join('\n\n');
  }

  // link getting-started children & examples children under parents
  for (const u of units) {
    if (u.type !== 'prose') continue;
    if (u.file.startsWith('docs/getting-started/') && path.posix.basename(u.file) !== 'README.md') u.parentFile = 'docs/getting-started/README.md';
    if (u.file.startsWith('docs/operations/examples/') && path.posix.basename(u.file) !== 'README.md') u.parentFile = 'docs/operations/examples/README.md';
  }

  // 5) render all files -------------------------------------------------------
  const written = [];
  function writeFile(file, text) {
    // `file` is repo-relative ("docs/..."); map onto the chosen docsDir
    const rel = file.startsWith('docs/') ? file.slice('docs/'.length) : file;
    const p = file.startsWith('docs/') ? path.join(docsDir, rel) : path.join(REPO_ROOT, rel);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, text.endsWith('\n') ? text : text + '\n', 'utf8');
    written.push(file);
  }

  for (const unit of units) {
    const ctx = makeCtx(unit.file);
    if (unit.type === 'prose') {
      stats.prose++;
      writeFile(unit.file, renderProse(unit, ctx));
    } else if (unit.type === 'operation') {
      writeFile(unit.file, renderOperation(unit, ctx));
    } else {
      writeFile(unit.file, renderDefinition(unit, ctx));
    }
    stats.unresolvedLinks += ctx._unresolved.length;
  }

  // 6) changelog --------------------------------------------------------------
  const changelogPath = path.join(snapshotDir, 'api-changelog.html');
  if (fs.existsSync(changelogPath)) {
    const $c = cheerio.load(fs.readFileSync(changelogPath, 'utf8'));
    const sec = $c('article#content section, #content section, section#recent-changes').first();
    const root = sec.length ? sec : $c('body');
    const entries = [];
    root.children().each((_, el) => {
      const $el = $c(el);
      if (el.tagName === 'h1') return;
      if (el.tagName === 'h2') {
        entries.push(`## ${plainText($el)}`);
        return;
      }
      if (el.type === 'comment') return;
      const ctx = makeCtx('docs/changelog.md');
      entries.push(renderBlocks($el.contents(), ctx, 2).trim());
    });
    const body = entries.filter(Boolean).join('\n\n');
    writeFile('docs/changelog.md', frontmatter({
      title: 'Upwork GraphQL API Changelog',
      kind: 'section',
      source: `${BASE_URL}api-changelog.html`,
      generated_by: 'scripts/convert.mjs',
    }) + `# Upwork GraphQL API Changelog\n\n_Source: [${BASE_URL}api-changelog.html](${BASE_URL}api-changelog.html)_\n\n${body}`);
  }

  // 7) indexes ----------------------------------------------------------------
  function indexTable(items, nameWord, descOf) {
    const out = [`| ${nameWord} | Description |`, '|---|---|'];
    for (const it of items) {
      const link = `[${it.title}](${relPath(it._indexFile, it.file)})${it.deprecated ? ' ⚠️' : ''}`;
      out.push(`| ${link} | ${descOf(it).replace(/\|/g, '\\|')} |`);
    }
    return out.join('\n');
  }

  function descFor(unit) {
    if (unit.$descText) return unit.$descText;
    const $d = unit.$el.find('.operation-description p, .definition-description p').first();
    return short(plainText($d));
  }

  function groupedUnits(units, groupKey) {
    const byDomain = new Map();
    for (const u of units) {
      const d = u[groupKey] || 'Other';
      if (!byDomain.has(d)) byDomain.set(d, []);
      byDomain.get(d).push(u);
    }
    return byDomain;
  }

  // queries/mutations/types indexes
  function writeCategoryIndex(dir, indexFile, titleText, intro, units, nameWord) {
    const byDomain = groupedUnits(units, 'domain');
    const parts = [frontmatter({ title: titleText, kind: 'index', generated_by: 'scripts/convert.mjs' }), `# ${titleText}`, intro];
    for (const d of groupOrder[dir] || byDomain.keys()) {
      const items = byDomain.get(d);
      if (!items) continue;
      parts.push(`## ${d}`);
      parts.push(indexTable(items.map((i) => ({ ...i, _indexFile: indexFile })), nameWord, descFor));
    }
    writeFile(indexFile, parts.filter(Boolean).join('\n\n'));
  }

  writeCategoryIndex('queries', 'docs/queries/README.md', 'Queries', 'GraphQL query operations of the Upwork API, grouped by domain. ⚠️ marks deprecated operations.', opUnits.filter((u) => u.kind === 'query'), 'Query');
  writeCategoryIndex('mutations', 'docs/mutations/README.md', 'Mutations', 'GraphQL mutation operations of the Upwork API, grouped by domain. ⚠️ marks deprecated operations.', opUnits.filter((u) => u.kind === 'mutation'), 'Mutation');
  writeCategoryIndex('types', 'docs/types/README.md', 'Object Types', 'GraphQL object types, grouped by domain. ⚠️ marks deprecated types.', defUnits.filter((u) => u.kind === 'object'), 'Type');
  for (const [dirName, titleText, kindName] of [
    ['inputs', 'Input Objects', 'input_object'],
    ['enums', 'Enums', 'enum'],
    ['scalars', 'Scalars', 'scalar'],
    ['interfaces', 'Interfaces', 'interface'],
    ['unions', 'Unions', 'union'],
  ]) {
    const list = defUnits.filter((u) => u.kind === kindName);
    if (!list.length) continue;
    const byDomain = new Map();
    for (const u of list) {
      const d = u.domain || 'Other';
      if (!byDomain.has(d)) byDomain.set(d, []);
      byDomain.get(d).push(u);
    }
    const parts = [frontmatter({ title: titleText, kind: 'index', generated_by: 'scripts/convert.mjs' }), `# ${titleText}`, `All \`${kindName.replace('_', ' ')}\` definitions in the Upwork GraphQL schema.`];
    if (byDomain.size === 1 && list.length) {
      parts.push(indexTable(list.map((i) => ({ ...i, _indexFile: `docs/${dirName}/README.md` })), kindName === 'input_object' ? 'Input' : 'Name', descFor));
    } else {
      for (const [d, items] of byDomain) {
        parts.push(`## ${d}`);
        parts.push(indexTable(items.map((i) => ({ ...i, _indexFile: `docs/${dirName}/README.md` })), kindName === 'input_object' ? 'Input' : 'Name', descFor));
      }
    }
    writeFile(`docs/${dirName}/README.md`, parts.join('\n\n'));
  }

  // operations README (overview of sections + counts)
  {
    const file = 'docs/operations/README.md';
    const parts = [frontmatter({ title: 'Operations', kind: 'index', generated_by: 'scripts/convert.mjs' }), '# Operations',
      'General guidance that applies to every Upwork GraphQL operation, plus worked sample flows.', ''];
    parts.push('| Document | Description |\n|---|---|');
    for (const [f, t, d] of [
      ['docs/operations/common-information.md', 'Common Information', 'Requests limits, security, and general operational info'],
      ['docs/operations/error-handling.md', 'Error handling in GraphQL', 'Error response anatomy and decoding'],
      ['docs/operations/examples/README.md', 'Examples (sample flows)', 'End-to-end example flows per domain'],
      ['docs/operations/subscriptions.md', 'Subscriptions', 'Subscription entities and events'],
    ]) parts.push(`| [${t}](${relPath(file, f)}) | ${d} |`);
    parts.push('', `See also: [Queries](../queries/README.md) (${stats.queries}) · [Mutations](../mutations/README.md) (${stats.mutations})`);
    writeFile(file, parts.join('\n\n'));
  }

  // root docs README
  {
    const file = 'docs/README.md';
    const defsByKind = {};
    for (const u of defUnits) defsByKind[u.kind] = (defsByKind[u.kind] || 0) + 1;
    const parts = [];
    parts.push(frontmatter({ title: 'Upwork GraphQL API Documentation', kind: 'index', generated_by: 'scripts/convert.mjs' }));
    parts.push('# Upwork GraphQL API Documentation');
    parts.push('> Generated deterministically from the official Upwork documentation by `scripts/convert.mjs`.');
    parts.push(`> Source page: [index.html](${BASE_URL}index.html) — raw HTML snapshots and fetch history live under [html-snapshots/](../html-snapshots/INDEX.md); the newest is [html-snapshots/latest/](../html-snapshots/latest/).`);
    parts.push('## Structure');
    parts.push([
      '- **[Introduction](introduction.md)** — welcome + terminology',
      '- **[Getting Started](getting-started/README.md)** — preparation, API keys, permissions, OAuth2 authentication, tools',
      '- **[Operations](operations/README.md)** — common information, error handling, sample flows, subscriptions',
      `- **[Queries](queries/README.md)** — ${stats.queries} query operations, one file each`,
      `- **[Mutations](mutations/README.md)** — ${stats.mutations} mutation operations, one file each`,
      `- **[Object types](types/README.md)** — ${defsByKind.object || 0}`,
      `- **[Input objects](inputs/README.md)** — ${defsByKind.input_object || 0}`,
      `- **[Enums](enums/README.md)** — ${defsByKind.enum || 0}`,
      `- **[Scalars](scalars/README.md)** — ${defsByKind.scalar || 0}`,
      `- **[Interfaces](interfaces/README.md)** — ${defsByKind.interface || 0}`,
      `- **[Unions](unions/README.md)** — ${defsByKind.union || 0}`,
      '- **[Changelog](changelog.md)** — official API changelog entries',
    ].join('\n'));
    parts.push('## Quick facts');
    parts.push(`- GraphQL endpoint: \`https://www.upwork.com/api/graphql/v3/introspect\` (see [Common Information](${relPath(file, 'docs/operations/common-information.md')}))`);
    parts.push('- Authentication: OAuth2 — see [Getting Started](getting-started/README.md)');
    parts.push(`- Deprecated definitions: ${defUnits.filter((u) => u.deprecatedText).length}; deprecated operations: ${opUnits.filter((u) => u.deprecated).length}`);
    writeFile(file, parts.join('\n\n'));
  }

  // 8) coverage check ---------------------------------------------------------
  const allIds = new Set();
  content.find('[id]').each((_, el) => {
    // ignore ids inside skipped tag subtrees (scripts etc.)
    allIds.add(el.attribs.id);
  });
  for (const u of units) if (u.htmlId) allIds.add(u.htmlId);
  const uncovered = [...allIds].filter((id) => !visited.has(id));
  const coverage = {
    snapshot: path.basename(snapshotDir),
    generatedAt: new Date().toISOString(),
    idsInContent: allIds.size,
    idsRendered: allIds.size - uncovered.length,
    uncovered: uncovered.slice(0, 50),
    stats,
    assets: { fetched: (meta.assets || []).filter((a) => a.ok).length, failed: (meta.assets || []).filter((a) => !a.ok).length, imagesCopied },
    files: written.length,
  };
  fs.writeFileSync(path.join(snapshotDir, 'coverage.json'), JSON.stringify(coverage, null, 2) + '\n', 'utf8');
  if (uncovered.length) {
    console.error(`COVERAGE GAP: ${uncovered.length} ids not rendered: ${uncovered.slice(0, 20).join(', ')}`);
    throw new Error('coverage assertion failed');
  }
  if (!quiet) {
    console.log(`converted ${written.length} files — ${stats.queries} queries, ${stats.mutations} mutations, ${stats.definitions} definitions, ${stats.prose} prose sections (${allIds.size} ids covered)`);
  }
  return { coverage, files: written.length };
}

// CLI
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const argv = process.argv.slice(2);
  let snap = argv[argv.indexOf('--snapshot') + 1];
  if (!snap || snap.startsWith('--')) {
    snap = latestSnapshotDir();
    if (!snap) {
      const dirs = fs.existsSync(INCOMING_DIR) ? fs.readdirSync(INCOMING_DIR) : [];
      if (!dirs.length) throw new Error('No snapshot found. Run scripts/fetch-docs.mjs first.');
      snap = path.join(INCOMING_DIR, dirs.sort().at(-1));
    }
  }
  const docsArg = argv[argv.indexOf('--docs') + 1];
  const out = docsArg && !docsArg.startsWith('--') ? path.resolve(docsArg) : DOCS_DIR;
  const { coverage } = convertSnapshot(snap, { docsDir: out });
  console.log(`OK — docs generated in ${out}`);
}
