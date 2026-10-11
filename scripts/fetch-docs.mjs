// Downloads the Upwork GraphQL API documentation pages into a new timestamped
// snapshot under html-snapshots/. Validates size and content markers so a
// bot-block page or error page never poisons the archive.
//
// Usage: node scripts/fetch-docs.mjs [--dir <target-dir>] [--quiet]
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BASE_URL, PAGES, sha256, stamp, writeJson } from './lib/snapshot.mjs';

const BROWSER_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

function haveCurl() {
  const r = spawnSync('curl.exe', ['--version'], { encoding: 'utf8' });
  if (r.status === 0) return 'curl.exe';
  const r2 = spawnSync('curl', ['--version'], { encoding: 'utf8' });
  return r2.status === 0 ? 'curl' : null;
}

function fetchWithCurl(curlBin, url, outFile, extraHeaders = []) {
  const args = [
    '-sS', '-L', '--fail', '--compressed',
    '--retry', '5', '--retry-delay', '5', '--retry-all-errors', '--retry-connrefused',
    '-A', BROWSER_UA,
    '-H', 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    '-H', 'Accept-Language: en-US,en;q=0.9',
    ...extraHeaders,
    '--max-time', '120',
    '-o', outFile,
    url,
  ];
  const r = spawnSync(curlBin, args, { encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`curl failed for ${url}: ${r.stderr || r.stdout}`);
}

async function fetchWithNode(url, outFile) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': BROWSER_UA,
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      Referer: `${BASE_URL}index.html`,
    },
    redirect: 'follow',
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outFile, buf);
}

function collectAssetUrls(html) {
  // Every relative asset referenced by the docs: sample gql/json responses and
  // images. These carry content that is NOT inline in the HTML (lazy-loaded),
  // so we snapshot them too for complete coverage.
  const urls = new Set();
  for (const m of html.matchAll(/"(?:queryUrl|variablesUrl|responseUrl)":\s*"([^"]+)"/g)) urls.add(m[1]);
  for (const m of html.matchAll(/data-sample-response-url="([^"]+)"/g)) urls.add(m[1]);
  for (const m of html.matchAll(/src="(assets\/images\/[^"]+)"/g)) urls.add(m[1]);
  return [...urls].sort();
}

export async function fetchSnapshot(targetDir, { quiet = false } = {}) {
  fs.mkdirSync(targetDir, { recursive: true });
  const curlBin = haveCurl();
  const pages = [];
  for (const p of PAGES) {
    const outFile = path.join(targetDir, p.file);
    if (curlBin) fetchWithCurl(curlBin, p.url, outFile);
    else await fetchWithNode(p.url, outFile);
    const buf = fs.readFileSync(outFile);
    const text = buf.toString('utf8');
    if (buf.length < p.minBytes) {
      throw new Error(`${p.file} too small (${buf.length} bytes < ${p.minBytes}) — looks like an error page, aborting`);
    }
    if (!text.includes(p.mustContain)) {
      throw new Error(`${p.file} missing marker "${p.mustContain}" — looks like a block page, aborting`);
    }
    pages.push({ file: p.file, url: p.url, bytes: buf.length, sha256: sha256(buf) });
    if (!quiet) console.log(`  fetched ${p.file}: ${buf.length.toLocaleString()} bytes`);
  }

  // assets (sample responses + images). Failures are recorded, not fatal.
  const indexText = fs.readFileSync(path.join(targetDir, 'index.html'), 'utf8');
  const assetUrls = collectAssetUrls(indexText);
  const assets = [];
  let failed = 0;
  for (const rel of assetUrls) {
    const url = BASE_URL + encodeURI(rel);
    const outFile = path.join(targetDir, rel); // rel already starts with "assets/"
    try {
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      if (curlBin) fetchWithCurl(curlBin, url, outFile, ['-H', `Referer: ${BASE_URL}index.html`]);
      else await fetchWithNode(url, outFile);
      const buf = fs.readFileSync(outFile);
      assets.push({ file: rel.replace(/\\/g, '/'), url, bytes: buf.length, sha256: sha256(buf), ok: true });
    } catch (e) {
      failed++;
      assets.push({ file: rel.replace(/\\/g, '/'), url, ok: false, error: String(e.message).slice(0, 200) });
    }
  }
  if (!quiet) console.log(`  fetched ${assets.filter((a) => a.ok).length}/${assetUrls.length} assets (${failed} failed)`);
  if (assets.filter((a) => a.ok).length === 0 && assetUrls.length > 0) {
    throw new Error('all asset fetches failed — looks like a bot block, aborting');
  }

  const meta = {
    schema: 'upwork-docs-snapshot/1',
    fetchedAt: new Date().toISOString(),
    source: 'https://www.upwork.com/developer/documentation/graphql/api/docs/index.html',
    method: curlBin ? 'curl' : 'node-fetch',
    userAgent: BROWSER_UA,
    pages,
    assets,
  };
  writeJson(path.join(targetDir, 'meta.json'), meta);
  return meta;
}

// CLI entry
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const argv = process.argv.slice(2);
  const dirArg = argv[argv.indexOf('--dir') + 1];
  const target = dirArg || path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'html-snapshots', '.incoming', stamp());
  console.log(`Fetching Upwork docs into ${target}`);
  const meta = await fetchSnapshot(target, { quiet: argv.includes('--quiet') });
  console.log(`OK — snapshot written, index.html sha256=${meta.pages[0].sha256.slice(0, 12)}…`);
}
