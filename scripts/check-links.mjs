// scripts/check-links.mjs — validates internal consistency of the generated docs:
//   * every relative markdown link target file exists
//   * every #anchor resolves to a heading in the target file (GitHub slug rules)
//   * every local image reference exists
// Exit code 1 + report when anything is broken. Run: node scripts/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { DOCS_DIR } from './lib/snapshot.mjs';

const issues = [];

function listFiles(dir) {
  const out = [];
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else out.push(p);
    }
  };
  walk(dir);
  return out;
}

const files = fs.existsSync(DOCS_DIR) ? listFiles(DOCS_DIR).filter((f) => f.endsWith('.md')) : [];
if (!files.length) {
  console.error('no markdown files under docs/ — run scripts/convert.mjs first');
  process.exit(1);
}

// Build heading-slug index per file (GitHub rule: lowercase, non [a-z0-9 _-] dropped,
// spaces -> '-', duplicate headings get -1, -2, … in document order).
const anchorsByFile = new Map();
function githubSlug(text, seen) {
  let base = text
    .toLowerCase()
    .replace(/`/g, '')
    .trim()
    .replace(/[^\w \-]/g, '')
    .replace(/\s+/g, '-');
  if (!base) base = 'section';
  const n = seen.get(base) || 0;
  seen.set(base, n + 1);
  return n === 0 ? base : `${base}-${n}`;
}
for (const f of files) {
  const seen = new Map();
  const set = new Set();
  const text = fs.readFileSync(f, 'utf8');
  let inFence = false;
  for (const line of text.split(/\r?\n/)) {
    if (/^```/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const m = line.match(/^(#{1,6})\s+(.*)$/);
    if (m) set.add(githubSlug(m[2], seen));
    const ax = line.match(/\{#([a-zA-Z0-9_-]+)\}/); // explicit anchors (none today, future-proof)
    if (ax) set.add(ax[1]);
  }
  anchorsByFile.set(path.resolve(f), set);
}

const linkRe = /!?\[([^\]]*)\]\(([^)\s]+)\)/g;
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  for (const m of text.matchAll(linkRe)) {
    const href = m[2];
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(href) || href.startsWith('mailto:')) continue; // external
    const [p, anchor] = href.split('#');
    const target = p ? path.resolve(path.dirname(f), decodeURIComponent(p)) : f;
    if (p && !fs.existsSync(target)) {
      issues.push(`${path.relative(DOCS_DIR, f)}: missing target ${p}`);
      continue;
    }
    if (anchor && fs.existsSync(target)) {
      const set = anchorsByFile.get(target);
      if (set && !set.has(anchor)) {
        issues.push(`${path.relative(DOCS_DIR, f)}: anchor #${anchor} not found in ${p || path.basename(target)}`);
      }
    }
  }
}

const imgRe = /!\[[^\]]*\]\(([^)\s]+)\)/g;
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  for (const m of text.matchAll(imgRe)) {
    const href = m[1];
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(href)) continue;
    const target = path.resolve(path.dirname(f), decodeURIComponent(href));
    if (!fs.existsSync(target)) issues.push(`${path.relative(DOCS_DIR, f)}: missing image ${href}`);
  }
}

// ---- table integrity: every row of a markdown table must have the same column count
function cellCount(line) {
  // split on unescaped pipes; drop the leading/trailing empty fields
  const parts = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  let count = 1;
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === '\\' ) { i++; continue; }
    if (parts[i] === '|') count++;
  }
  return count;
}
for (const f of files) {
  const lines = fs.readFileSync(f, 'utf8').split(/\r?\n/);
  let inFence = false;
  let block = [];
  const flush = () => {
    if (block.length < 2) { block = []; return; }
    const counts = new Set(block.map((l) => cellCount(l.line)));
    if (counts.size !== 1) {
      const most = [...counts].sort((a, b) => b - a)[0];
      issues.push(`${path.relative(DOCS_DIR, f)}: table near line ${block[0].n} has inconsistent columns (${[...counts].join('/')}, expected ${most})`);
    }
    block = [];
  };
  lines.forEach((line, idx) => {
    if (/^```/.test(line)) inFence = !inFence;
    const isRow = !inFence && /^\s*\|.*\|\s*$/.test(line);
    if (isRow) block.push({ line, n: idx + 1 });
    else flush();
  });
  flush();
}

if (issues.length) {
  console.error(`LINK CHECK: ${issues.length} problem(s):`);
  for (const i of issues.slice(0, 100)) console.error('  - ' + i);
  process.exit(1);
} else {
  console.log(`link check OK — ${files.length} markdown files, all internal links & anchors resolve`);
}
