// Generic HTML → Markdown renderer tuned for the SpectaQL static docs.
// Block elements are emitted as markdown blocks; table cells render inline.
import path from 'node:path';
import { BASE_URL } from './snapshot.mjs';

const SKIP_TAGS = new Set(['script', 'style', 'noscript', 'head', 'title', 'meta', 'link', 'button', 'iframe', 'svg', 'canvas', 'input', 'form']);
const BLOCK_TAGS = new Set(['div', 'section', 'article', 'main', 'header', 'footer', 'aside', 'nav', 'p', 'ul,ol', 'table', 'pre', 'blockquote', 'figure', 'figcaption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'br', 'tr', 'br']);
const LANG_MAP = { gql: 'graphql', graphql: 'graphql', json: 'json', bash: 'bash', shell: 'bash', sh: 'bash', javascript: 'javascript', js: 'javascript', typescript: 'typescript' };

function isBlockNode(el) {
  return BLOCK_TAGS.has(el.tagName) || (el.name && BLOCK_TAGS.has(el.name));
}

/** Dedent + normalize code text from HTML (which pretty-prints pre blocks). */
function dedent(t) {
  const lines = t.replace(/\r\n/g, '\n').split('\n');
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(min)).join('\n');
}

/** Guess a fence language when the source markup doesn't tag it. */
function guessLang(text) {
  const t = text.trim();
  if (/^(query|mutation|subscription)\s|^\{\s*(\n\s+)?(query|mutation|subscription)/m.test(t)) return 'graphql';
  if (/^(curl\b|\w+\s--request\b)/.test(t)) return 'bash';
  if (/^(GET|POST|PUT|DELETE|PATCH)\s+\S/.test(t)) return 'http';
  if (/^[{["]/.test(t)) return 'json';
  return '';
}

/** Turn raw code text into a fenced block. */
export function fence(text, lang) {
  const t = dedent(text);
  const useLang = lang || guessLang(t);
  const longest = (t.match(/`+/g) || ['']).reduce((a, b) => Math.max(a, b.length), 0);
  const tick = '`'.repeat(Math.max(3, longest + 1));
  return `${tick}${useLang}\n${t}\n${tick}`;
}

function absUrl(href) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//') || href.startsWith('#') || href.startsWith('mailto:')) return href;
  return BASE_URL + href.replace(/^\.\//, '');
}

function escapeCell(text) {
  return text.replace(/\|/g, '\\|').replace(/\n+/g, ' ').trim();
}

/**
 * ctx = {
 *   $, resolveLink(idOrHash) -> string|null   // markdown target for "#id" refs
 *   markVisited(el)                            // coverage tracking
 *   heading(n, text) -> string                 // customize heading levels
 * }
 */
export class MdRenderer {
  constructor(ctx) {
    this.ctx = ctx;
  }

  // ---- inline rendering -----------------------------------------------------
  inline(node, opts = {}) {
    const $ = this.ctx.$;
    let out = '';
    node.each((_, el) => {
      out += this.inlineNode($(el), opts);
    });
    return out;
  }

  inlineNode($el, opts = {}) {
    const el = $el[0];
    if (!el) return '';
    if (el.type === 'text') return el.data.replace(/\s+/g, ' ');
    if (el.type === 'comment') return '';
    if (el.tagName === 'br') return opts.br === 'space' ? ' ' : '\n';
    if (SKIP_TAGS.has(el.tagName)) return '';
    if (this.ctx.markVisited) this.ctx.markVisited($el);

    const inner = $el.contents().toArray().map((c) => this.inlineNode(this.ctx.$(c), opts)).join('');

    switch (el.tagName) {
      case 'code': {
        const t = $el.text();
        if (!t) return '';
        const hasTick = t.includes('`');
        const delim = hasTick ? '``' : '`';
        const pad = hasTick && (t.startsWith('`') || t.endsWith('`')) ? ' ' : '';
        return `${delim}${pad}${t.replace(/\s+/g, ' ').trim()}${pad}${delim}`;
      }
      case 'strong':
      case 'b':
        return inner.trim() ? `**${inner.trim()}**` : '';
      case 'em':
      case 'i':
        return inner.trim() ? `*${inner.trim()}*` : '';
      case 'del':
      case 's':
      case 'strike':
        return inner.trim() ? `~~${inner.trim()}~~` : '';
      case 'a': {
        const href = el.attribs?.href || '';
        const label = inner.trim() || $el.text().trim();
        if (!label) return '';
        if (href.startsWith('#')) {
          const resolved = this.ctx.resolveLink ? this.ctx.resolveLink(href) : null;
          return resolved ? `[${label}](${resolved})` : `[${label}](#${href.slice(1)})`;
        }
        return `[${label}](${absUrl(href)})`;
      }
      case 'img': {
        const rawSrc = el.attribs?.src || 'image';
        const src = this.ctx.imgSrc ? this.ctx.imgSrc(rawSrc) : absUrl(rawSrc);
        const alt = el.attribs?.alt || path.basename(rawSrc);
        return `![${alt}](${src})`;
      }
      default:
        return inner;
    }
  }

  // ---- block rendering ------------------------------------------------------
  blocks(container) {
    const out = [];
    container.each((_, el) => {
      this.blockInto(this.ctx.$(el), out);
    });
    return out.filter((s) => s !== null && s !== undefined && String(s).trim() !== '').join('\n\n') + '\n';
  }

  blockInto($el, out) {
    const el = $el[0];
    if (!el) return;
    if (el.type === 'comment') return;
    if (el.type === 'text') {
      const t = el.data.replace(/\s+/g, ' ').trim();
      if (t) out.push(t);
      return;
    }
    if (el.type !== 'tag') return;
    const tag = el.tagName;
    if (SKIP_TAGS.has(tag)) return;
    if (this.ctx.markVisited) this.ctx.markVisited($el);

    if (/^h[1-6]$/.test(tag)) {
      const text = this.inline($el.contents(), { br: 'space' }).trim();
      if (text) out.push(this.ctx.heading ? this.ctx.heading(Number(tag[1]), text, $el) : `${'#'.repeat(Number(tag[1]))} ${text}`);
      return;
    }
    if (tag === 'p') {
      const t = this.inline($el.contents()).trim();
      if (t) out.push(t);
      return;
    }
    if (tag === 'hr') {
      out.push('---');
      return;
    }
    if (tag === 'pre') {
      const code = $el.find('code').first();
      const cls = (code.attr('class') || '') + ' ' + (el.attribs?.class || '');
      const m = cls.match(/language-([\w-]+)/);
      const lang = m ? LANG_MAP[m[1]] || m[1] : '';
      out.push(fence(code.length ? code.text() : $el.text(), lang));
      return;
    }
    if (tag === 'blockquote') {
      const inner = this.blocks($el.contents());
      out.push(
        inner
          .trim()
          .split('\n')
          .map((l) => (l.trim() ? `> ${l}` : '>'))
          .join('\n'),
      );
      return;
    }
    if (tag === 'ul' || tag === 'ol') {
      out.push(this.list($el, 0, tag === 'ol'));
      return;
    }
    if (tag === 'table') {
      out.push(this.table($el));
      return;
    }
    if (tag === 'li' || tag === 'tr' || tag === 'td' || tag === 'th') {
      // encountered standalone (shouldn't normally happen) → recurse
      $el.contents().each((_, c) => this.blockInto(this.ctx.$(c), out));
      return;
    }
    // generic containers (div, section, figure…) — recurse children in order
    const isContainer = !isBlockNode(el) || ['div', 'section', 'article', 'main', 'header', 'footer', 'aside', 'figure', 'figcaption'].includes(tag);
    if (isContainer) {
      $el.contents().each((_, c) => this.blockInto(this.ctx.$(c), out));
      return;
    }
    // fallback: inline
    const t = this.inline($el.contents()).trim();
    if (t) out.push(t);
  }

  list($ul, depth, ordered) {
    const lines = [];
    const $ = this.ctx.$;
    $ul.children('li').each((i, liEl) => {
      const $li = $(liEl);
      if (this.ctx.markVisited) this.ctx.markVisited($li);
      const bullet = ordered ? `${i + 1}. ` : '- ';
      const indent = '  '.repeat(depth);
      const subLists = [];
      const parts = [];
      $li.contents().each((_, c) => {
        const $c = $(c);
        const t = c.tagName;
        if (t === 'ul' || t === 'ol') {
          subLists.push(this.list($c, depth + 1, t === 'ol'));
        } else if (t === 'p') {
          parts.push(this.inline($c.contents(), { br: 'space' }).trim());
        } else if (t === 'div' || t === 'section') {
          const inner = this.blocks($c.contents()).trim();
          if (inner) parts.push(inner.replace(/\n/g, '  \n'));
        } else if (t === 'pre') {
          const code = $c.find('code').first();
          const cls = (code.attr('class') || '') + ' ' + ($c.attr('class') || '');
          const m = cls.match(/language-([\w-]+)/);
          const lang = m ? LANG_MAP[m[1]] || m[1] : '';
          parts.push(fence(code.length ? code.text() : $c.text(), lang));
        } else {
          const s = this.inline($c, { br: 'space' });
          if (s.trim()) parts.push(s.trim());
        }
      });
      const flat = parts.filter(Boolean).join('\n\n');
      const first = flat.split('\n');
      lines.push(`${indent}${bullet}${first[0]}`);
      for (let k = 1; k < first.length; k++) {
        lines.push(`${indent}${k === 1 && first[0] === '' ? '  ' : '  '}${first[k]}`.replace(/\s+$/, ''));
      }
      for (const sub of subLists) lines.push(sub);
    });
    return lines.join('\n');
  }

  table($table) {
    const $ = this.ctx.$;
    const rows = [];
    const headCells = $table.find('thead th');
    let header = null;
    if (headCells.length) {
      header = headCells.toArray().map((th) => escapeCell(this.inline($(th).contents(), { br: 'space' }).trim())).filter((c, i, arr) => c || i < arr.length - 1);
    }
    $table.find('tbody tr').each((_, trEl) => {
      const $tr = $(trEl);
      if (this.ctx.skipRow && this.ctx.skipRow($tr)) return;
      const cells = $tr.children('td,th').toArray().map((td) => escapeCell(this.inline(this.ctx.$(td).contents(), { br: 'space' }).trim()));
      rows.push(cells);
    });
    if (header === null && rows.length) header = rows.shift();
    if (!header) return '';
    const width = header.length;
    const pad = (cells) => {
      const c = [...cells];
      while (c.length < width) c.push('');
      return c.slice(0, width);
    };
    const lines = [
      `| ${header.join(' | ')} |`,
      `|${header.map(() => '---').join('|')}|`,
      ...rows.map((r) => `| ${pad(r).join(' | ')} |`),
    ];
    return lines.join('\n');
  }
}
