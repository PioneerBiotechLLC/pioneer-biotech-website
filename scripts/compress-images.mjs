// Usage: pnpm compress:images
// Resizes any image over 2000px on its long edge and re-encodes it at a high-quality
// setting (JPEG via mozjpeg, PNG via palette quantization, WebP natively). Modifies
// files under public/ in place, at their existing paths — safe to re-run any time new
// images are added. Skips anything already smaller than the recompressed result.
// Tip: stop `next dev` first — an active dev server watching public/ can intermittently
// lock a file mid-write on Windows; the retry loop below usually recovers anyway.
import sharp from 'sharp'
import { readdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public')
const MAX_DIM = 2000
const JPEG_QUALITY = 84
const PNG_QUALITY = 82
const WEBP_QUALITY = 84

let totalBefore = 0
let totalAfter = 0
const rows = []

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
      continue
    }
    const ext = path.extname(entry.name).toLowerCase()
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue

    for (let attempt = 1; ; attempt++) {
      try {
        await processImage(full, ext)
        break
      } catch (err) {
        if (attempt < 12) {
          await new Promise((r) => setTimeout(r, 400 * attempt))
          continue
        }
        throw err
      }
    }
  }
}

async function processImage(file, ext) {
  const before = (await stat(file)).size
  const meta = await sharp(file).metadata()

  let pipeline = sharp(file, { animated: meta.pages > 1 })
  if (meta.width && meta.width > MAX_DIM) {
    pipeline = pipeline.resize({ width: MAX_DIM, withoutEnlargement: true })
  }

  let buffer
  if (ext === '.jpg' || ext === '.jpeg') {
    buffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer()
  } else if (ext === '.png') {
    buffer = await pipeline.png({ quality: PNG_QUALITY, palette: true, compressionLevel: 9, effort: 10 }).toBuffer()
  } else if (ext === '.webp') {
    buffer = await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer()
  }

  if (buffer.length < before) {
    await writeFile(file, buffer)
    totalBefore += before
    totalAfter += buffer.length
    rows.push([path.relative(ROOT, file), before, buffer.length])
  } else {
    totalBefore += before
    totalAfter += before
    rows.push([path.relative(ROOT, file), before, before, 'skipped (already smaller)'])
  }
}

await walk(ROOT)

rows.sort((a, b) => (b[1] - b[2]) - (a[1] - a[2]))
for (const [file, before, after, note] of rows) {
  const pct = before > 0 ? (100 * (1 - after / before)).toFixed(0) : 0
  console.log(`${(before / 1024).toFixed(0).padStart(6)}KB -> ${(after / 1024).toFixed(0).padStart(6)}KB  (-${pct}%)  ${file}${note ? '  [' + note + ']' : ''}`)
}
console.log('---')
console.log(`TOTAL: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB (-${(100 * (1 - totalAfter / totalBefore)).toFixed(0)}%)`)
