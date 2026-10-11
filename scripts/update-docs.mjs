// scripts/update-docs.mjs — daily sync of the Upwork GraphQL API documentation.
//
// Steps (in order):
//   1. git pull  (--rebase, autostash) from the configured remote
//   2. fetch fresh HTML snapshots (with validation; aborts on bot-block pages)
//   3. compare fetched content with the latest saved snapshot (SHA-256 per page)
//   4. if changed: regenerate docs/**.md from the new snapshot, archive it under
//      html-snapshots/<timestamp>/, promote it to html-snapshots/latest/, write
//      a change report under html-snapshots/change-reports/, then commit & push
//   5. if unchanged: record the check in the local run log only (no commit)
//
// Run daily via Windows Task Scheduler (see scripts/register-task.ps1) or cron:
//   0 8 * * * cd /path/to/this/repo && node scripts/update-docs.mjs >> logs/cron.log 2>&1
// Manual:  node scripts/update-docs.mjs [--force] [--no-push] [--skip-pull]

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { fetchSnapshot } from './fetch-docs.mjs';
import { convertSnapshot } from './convert.mjs';
import {
  CHANGE_LOGS_DIR, DOCS_DIR, INCOMING_DIR, LATEST_POINTER, REPO_ROOT, SNAPSHOTS_DIR,
  latestSnapshotDir, promoteToLatest, readJson, rebuildIndexMd, sha256, stamp, writeJson,
} from './lib/snapshot.mjs';

const PREVIEW_DIR = path.join(SNAPSHOTS_DIR, '.preview');

const argv = process.argv.slice(2);
const FORCE = argv.includes('--force');
const NO_PUSH = argv.includes('--no-push');
const SKIP_PULL = argv.includes('--skip-pull');

const LOG_DIR = path.join(REPO_ROOT, 'logs');
fs.mkdirSync(LOG_DIR, { recursive: true });
const logStream = fs.createWriteStream(path.join(LOG_DIR, 'update.log'), { flags: 'a' });
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  logStream.write(line + '\n');
}

function git(args, opts = {}) {
  const r = spawnSync('git', ['-C', REPO_ROOT, ...args], { encoding: 'utf8', ...opts });
  if (r.status !== 0) {
    const err = new Error(`git ${args.join(' ')} failed: ${(r.stderr || r.stdout || '').trim()}`);
    err.git = r;
    throw err;
  }
  return (r.stdout || '').trim();
}

function gitTry(args) {
  try {
    return { ok: true, out: git(args) };
  } catch (e) {
    return { ok: false, out: (e.git?.stderr || e.git?.stdout || e.message || '').trim(), err: e };
  }
}

function contentHashes(meta) {
  if (!meta) return {};
  const m = {};
  for (const p of meta.pages || []) m[p.file] = p.sha256;
  for (const a of meta.assets || []) if (a.ok) m[a.file] = a.sha256;
  return m;
}

function treeSnapshot(dir) {
  // map of relative path -> sha256 for every file under dir
  const out = new Map();
  if (!fs.existsSync(dir)) return out;
  const walk = (rel) => {
    const full = rel ? path.join(dir, rel) : dir;
    for (const ent of fs.readdirSync(full, { withFileTypes: true })) {
      const r = rel ? `${rel}/${ent.name}` : ent.name;
      if (ent.isDirectory()) walk(r);
      else out.set(r.replace(/\\/g, '/'), sha256(fs.readFileSync(path.join(dir, r))));
    }
  };
  walk('');
  return out;
}

/**
 * Meaningful change detection: the raw HTML contains volatile tokens
 * (Cloudflare injects challenge scripts per request), so raw hashes churn.
 * We instead convert the fresh snapshot into a preview docs/ tree and compare
 * file contents with the committed docs/ tree. Only markdown differences count.
 */
function compareWithCurrent(previewDocs) {
  return diffTrees(DOCS_DIR, previewDocs);
}

const BINARY_CHURN_EXT = /\.(png|jpe?g|gif|webp|ico|avif)$/i;

function diffTrees(a, b) {
  const ta = treeSnapshot(a);
  const tb = treeSnapshot(b);
  // Images are excluded from change detection: the CDN serves different
  // binary variants of the same URL per request (content negotiation), which
  // would otherwise look like a documentation change every single day.
  const key = (k) => !BINARY_CHURN_EXT.test(k);
  const added = [...tb.keys()].filter((k) => key(k) && !ta.has(k)).sort();
  const removed = [...ta.keys()].filter((k) => key(k) && !tb.has(k)).sort();
  const modified = [...tb.keys()].filter((k) => key(k) && ta.has(k) && ta.get(k) !== tb.get(k)).sort();
  return { added, removed, modified, same: added.length + removed.length + modified.length === 0 };
}

function writeChangeReport(reportFile, { newMeta, oldMeta, mdDiff, coverage, diffText, diffNote }) {
  const lines = [];
  lines.push(`# Documentation change report — ${newMeta.fetchedAt}`);
  lines.push('');
  lines.push(`- **Source:** <${newMeta.source}>`);
  lines.push(`- **New snapshot:** \`html-snapshots/${path.basename(newMeta.snapshotDir)}\` (promoted to \`latest/\`)`);
  if (oldMeta) {
    lines.push(`- **Previous snapshot:** \`${path.basename(oldMeta.snapshotDir || '')}\` (fetched ${oldMeta.fetchedAt})`);
    const oldH = contentHashes(oldMeta);
    const changedPages = newMeta.pages.filter((p) => oldH[p.file] !== p.sha256).map((p) => p.file);
    const changedAssets = (newMeta.assets || []).filter((a) => a.ok && oldH[a.file] !== a.sha256).map((a) => a.file);
    lines.push(`- **Changed raw pages:** ${changedPages.map((p) => `\`${p}\``).join(', ') || 'none'}`);
    lines.push(`- **Changed/new assets:** ${changedAssets.length} (sample responses / images)${changedAssets.length ? `: ${changedAssets.slice(0, 12).map((p) => `\`${p}\``).join(', ')}${changedAssets.length > 12 ? ' …' : ''}` : ''}`);
  } else {
    lines.push('- **Previous snapshot:** none — this is the initial import');
  }
  lines.push(`- **Markdown files:** ${mdDiff.added.length} added, ${mdDiff.modified.length} modified, ${mdDiff.removed.length} removed`);
  if (coverage) {
    lines.push(`- **Converter coverage:** ${coverage.idsRendered}/${coverage.idsInContent} HTML ids rendered — ${coverage.stats.queries} queries, ${coverage.stats.mutations} mutations, ${coverage.stats.definitions} type/input/enum/scalar/interface/union definitions, ${coverage.stats.prose} prose sections`);
  }
  lines.push('');
  lines.push('## Added files');
  lines.push(mdDiff.added.length ? mdDiff.added.map((f) => `- \`docs/${f}\``).join('\n') : '_none_');
  lines.push('');
  lines.push('## Modified files');
  lines.push(mdDiff.modified.length ? mdDiff.modified.map((f) => `- \`docs/${f}\``).join('\n') : '_none_');
  lines.push('');
  lines.push('## Removed files');
  lines.push(mdDiff.removed.length ? mdDiff.removed.map((f) => `- \`docs/${f}\``).join('\n') : '_none_');
  lines.push('');
  if (diffText) {
    lines.push('## Markdown diff');
    lines.push('');
    lines.push('```diff');
    lines.push(diffText.trimEnd());
    lines.push('```');
  }
  if (diffNote) {
    lines.push(`> ℹ️ ${diffNote}`);
  }
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, lines.join('\n') + '\n', 'utf8');
}

async function main() {
  log(`=== update-docs start (force=${FORCE} noPush=${NO_PUSH} skipPull=${SKIP_PULL}) ===`);

  // 0. basic environment checks
  for (const [cmd, args, why] of [['git', ['--version'], 'git'], ['node', ['--version'], 'node']]) {
    const r = spawnSync(cmd, args, { encoding: 'utf8' });
    if (r.status !== 0) throw new Error(`${why} is required but not available`);
  }

  // 1. pull first so we commit on top of the newest remote state
  if (!SKIP_PULL) {
    const branch = gitTry(['rev-parse', '--abbrev-ref', 'HEAD']).out || 'main';
    const pull = gitTry(['pull', '--rebase', '--autostash', 'origin', branch]);
    if (pull.ok) {
      log(`git pull origin ${branch}: ${pull.out.split('\n')[0] || 'ok'}`);
    } else {
      // If push permission or remote is temporarily down, still refuse to race ahead:
      // aborting keeps local history consistent; the daily run will retry.
      log(`git pull FAILED — aborting this run. Output: ${pull.out}`);
      process.exitCode = 2;
      return;
    }
  }

  // if a previous run left unpushed commits, try to push them now
  const branchNow = gitTry(['rev-parse', '--abbrev-ref', 'HEAD']).out || 'main';
  const ahead = gitTry(['rev-list', '--count', `origin/${branchNow}..HEAD`]).out;
  if (/^[1-9]/.test(ahead || '')) {
    log(`found ${ahead} unpushed commit(s) from a previous run — pushing first`);
    const p = gitTry(['push', 'origin', branchNow]);
    log(p.ok ? 'push ok' : `push failed: ${p.out}`);
  }

  // 2. fetch
  const s = stamp();
  const incoming = path.join(INCOMING_DIR, s);
  let meta;
  try {
    meta = await fetchSnapshot(incoming, { quiet: false });
  } catch (e) {
    log(`FETCH FAILED — aborting without touching latest: ${e.message}`);
    fs.rmSync(incoming, { recursive: true, force: true });
    process.exitCode = 3;
    return;
  }

  // 3. convert the fresh snapshot into a preview docs tree and compare with
  //    the committed docs/ (raw HTML hashes churn with Cloudflare tokens)
  const previewDocs = PREVIEW_DIR;
  let coverage;
  try {
    coverage = convertSnapshot(incoming, { docsDir: previewDocs }).coverage;
  } catch (e) {
    log(`CONVERT FAILED — aborting (latest/ untouched): ${e.message}`);
    fs.rmSync(incoming, { recursive: true, force: true });
    process.exitCode = 4;
    return;
  }

  const diff = compareWithCurrent(previewDocs);
  const changed = FORCE || !diff.same;
  if (!changed) {
    log(`no meaningful documentation changes (preview docs identical to current: ${diff.added.length + diff.removed.length + diff.modified.length} diffs) — nothing to commit`);
    fs.writeFileSync(path.join(LOG_DIR, 'last-check.json'), JSON.stringify({
      checkedAt: new Date().toISOString(),
      indexSha256: meta.pages[0].sha256,
      previewFiles: coverage.files,
    }) + '\n');
    fs.rmSync(incoming, { recursive: true, force: true });
    fs.rmSync(previewDocs, { recursive: true, force: true });
    return;
  }
  log(`meaningful changes detected: ${diff.added.length} added, ${diff.removed.length} removed, ${diff.modified.length} modified markdown files`);

  // 4a. archive the snapshot under html-snapshots/<stamp>/ and drop the preview
  const snapshotTarget = path.join(SNAPSHOTS_DIR, s);
  fs.mkdirSync(snapshotTarget, { recursive: true });
  fs.cpSync(incoming, snapshotTarget, { recursive: true });
  fs.rmSync(incoming, { recursive: true, force: true });
  meta.snapshotDir = snapshotTarget;
  const latestDir0 = latestSnapshotDir();
  const oldMeta = latestDir0 ? { ...readJson(path.join(latestDir0, 'meta.json')), snapshotDir: latestDir0 } : null;

  // 4b. apply the preview as the new docs/ tree
  fs.rmSync(DOCS_DIR, { recursive: true, force: true });
  fs.cpSync(previewDocs, DOCS_DIR, { recursive: true });
  fs.rmSync(previewDocs, { recursive: true, force: true });

  // 4c. promote snapshot to "latest"
  promoteToLatest(snapshotTarget);
  writeJson(LATEST_POINTER, { ...readJson(LATEST_POINTER), coverage: { ids: coverage.idsInContent, files: coverage.files } });
  rebuildIndexMd();

  // 4d. change report (use staged intent-to-add so new files appear in the diff)
  const reportFile = path.join(CHANGE_LOGS_DIR, `${s}.md`);
  let diffText = '';
  let diffNote = '';
  const mdChanges = diff.added.length + diff.modified.length + diff.removed.length;
  if (mdChanges <= 300) {
    gitTry(['add', '-N', '--', 'docs']);
    const d = gitTry(['diff', '--', 'docs']);
    if (d.ok && d.out.length < 4_000_000) diffText = d.out;
    else diffNote = 'Markdown diff was too large to inline; see the file list above and full git history for details.';
  } else {
    diffNote = `${mdChanges} markdown files changed (bulk update); per-file diffs are in the git history for this commit.`;
  }
  writeChangeReport(reportFile, { newMeta: meta, oldMeta, mdDiff: diff, coverage, diffText, diffNote });

  // 4e. commit & push
  git(['add', '-A']);
  const commitMsg = [
    `docs: sync Upwork API documentation (${s})`,
    '',
    `Source: ${meta.source}`,
    `Snapshot: html-snapshots/${s}/ (promoted to latest/)`,
    `Changes: ${diff.added.length} added, ${diff.modified.length} modified, ${diff.removed.length} removed`,
    `Coverage: ${coverage.idsRendered}/${coverage.idsInContent} ids, ${coverage.stats.queries} queries, ${coverage.stats.mutations} mutations, ${coverage.stats.definitions} definitions, ${coverage.stats.prose} prose sections`,
    `Report: html-snapshots/change-reports/${s}.md`,
    '',
    'Co-authored-by: update-docs <scripts/update-docs.mjs@users.noreply.github.com>',
  ].join('\n');
  git(['commit', '-m', commitMsg]);
  log(`committed: ${commitMsg.split('\n')[0]}`);

  if (NO_PUSH) {
    log('skipping push (--no-push)');
    return;
  }
  const push = gitTry(['push', 'origin', branchNow]);
  if (push.ok) log('push ok');
  else log(`PUSH FAILED (commit kept locally, next run will retry): ${push.out}`);
}

main().catch((e) => {
  log(`UNEXPECTED ERROR: ${e.stack || e.message}`);
  process.exitCode = 1;
});
