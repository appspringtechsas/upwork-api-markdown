// Shared helpers for Upwork docs snapshots.
// A snapshot is one directory under html-snapshots/ holding the raw HTML pages
// exactly as downloaded, plus a meta.json describing when/what/why.
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const SNAPSHOTS_DIR = path.join(REPO_ROOT, 'html-snapshots');
export const INCOMING_DIR = path.join(SNAPSHOTS_DIR, '.incoming');
export const LATEST_DIR = path.join(SNAPSHOTS_DIR, 'latest');
export const LATEST_POINTER = path.join(SNAPSHOTS_DIR, 'LATEST.json');
export const DOCS_DIR = path.join(REPO_ROOT, 'docs');
export const CHANGE_LOGS_DIR = path.join(SNAPSHOTS_DIR, 'change-reports');

export const BASE_URL = 'https://www.upwork.com/developer/documentation/graphql/api/docs/';
export const PAGES = [
  // name on disk            URL path                     min sensible size
  { file: 'index.html', url: `${BASE_URL}index.html`, minBytes: 200_000, mustContain: 'id="spectaql"' },
  { file: 'api-changelog.html', url: `${BASE_URL}api-changelog.html`, minBytes: 2_000, mustContain: 'Recent changes' },
];

export function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex');
}

/** Timestamp safe for Windows/Linux filenames: 2026-10-10T14-30-05Z */
export function stamp(date = new Date()) {
  return date.toISOString().replace(/:/g, '-').replace(/\.\d+Z$/, 'Z');
}

export function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

export function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

/** meta.json describing a snapshot directory. */
export function snapshotMeta(dir) {
  return readJson(path.join(dir, 'meta.json'));
}

export function latestSnapshotDir() {
  if (!fs.existsSync(LATEST_POINTER)) return null;
  const p = readJson(LATEST_POINTER);
  const dir = path.join(SNAPSHOTS_DIR, p.snapshot);
  return fs.existsSync(dir) ? dir : null;
}

/** Promote a snapshot directory to be "latest" (copied into html-snapshots/latest/). */
export function promoteToLatest(snapshotDir) {
  fs.rmSync(LATEST_DIR, { recursive: true, force: true });
  fs.cpSync(snapshotDir, LATEST_DIR, { recursive: true });
  writeJson(LATEST_POINTER, {
    snapshot: path.basename(snapshotDir),
    promotedAt: new Date().toISOString(),
    pages: snapshotMeta(snapshotDir).pages,
    assets: (snapshotMeta(snapshotDir).assets || []).filter((a) => a.ok).map((a) => ({ file: a.file, sha256: a.sha256 })),
  });
}

/** Rebuild html-snapshots/INDEX.md table from all snapshot directories. */
export function rebuildIndexMd() {
  const rows = [];
  for (const name of fs.readdirSync(SNAPSHOTS_DIR)) {
    const dir = path.join(SNAPSHOTS_DIR, name);
    if (name.startsWith('.') || name === 'latest' || name === 'change-reports') continue;
    if (!fs.existsSync(path.join(dir, 'meta.json'))) continue;
    const meta = snapshotMeta(dir);
    const idx = meta.pages.find((p) => p.file === 'index.html');
    rows.push({
      snapshot: name,
      fetchedAt: meta.fetchedAt,
      source: meta.source,
      sha256_8: idx ? idx.sha256.slice(0, 8) : '',
      bytes: idx ? idx.bytes : 0,
    });
  }
  rows.sort((a, b) => (a.fetchedAt < b.fetchedAt ? 1 : -1));
  const latest = fs.existsSync(LATEST_POINTER) ? readJson(LATEST_POINTER).snapshot : null;
  const lines = [
    '# HTML snapshots',
    '',
    'Raw copies of the Upwork GraphQL API documentation pages, newest first.',
    'Each directory contains `index.html`, `api-changelog.html` and a `meta.json`',
    'with fetch time, source URLs and SHA-256 hashes. `latest/` always mirrors the newest snapshot.',
    '',
    '| Snapshot | Fetched at (UTC) | index.html SHA-256 (first 8) | Bytes | Latest |',
    '|---|---|---|---|---|',
    ...rows.map((r) => `| [${r.snapshot}](./${r.snapshot}/) | ${r.fetchedAt} | \`${r.sha256_8}\` | ${r.bytes} | ${r.snapshot === latest ? '✅' : ''} |`),
    '',
  ];
  fs.writeFileSync(path.join(SNAPSHOTS_DIR, 'INDEX.md'), lines.join('\n'), 'utf8');
}
