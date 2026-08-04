# Walkthrough Build Runbook — 11163 NW 69th Pl, Parkland FL

State handoff so any session (including a fresh one) can resume this build instantly.
Pipeline follows charlesdove977/re-walkthrough-pro skill docs. Approved plan summary
lives in the repo history; creative choices are in PROPERTY.md; master animation
prompt is in reel-prompt.md.

## Current state (2026-08-04)

- [x] Repo instructions fully retrieved and reviewed (benign)
- [x] Output tree created, PROPERTY.md pre-filled ($1,499,000 · 4bd · 3ba · 3,650 sqft — confirm on scrape)
- [x] Master animation prompt captured (reel-prompt.md)
- [x] Higgsfield REST API mapped (below); user has API key + secret
- [x] `.mcp.json` configured (higgsfield-mcp via npx; reads HF_API_KEY / HF_SECRET env vars)
- [ ] **BLOCKED: network** — environment must allow Zillow + Higgsfield domains (user action)
- [ ] Scrape listing → source-images/
- [ ] Curate 6–10 hero rooms (delete any photo with on-screen text — hard rule)
- [ ] Animate per-room via Higgsfield (Seedance, fallback Kling), ~5s clips, 16:9
- [ ] Stitch: normalize 1080p/30fps → concat → walkthrough-16x9.mp4; then 9:16 cut
- [ ] Verify (ffprobe + frame spot-check), commit, deliver, approval loop

## User actions required (once)

In claude.ai/code → tap the cloud/environment icon ("Default") above the message box →
gear icon on the environment → dialog:

1. **Network access**: either set **Full** (simplest), or **Custom** with
   "include default list" checked plus these lines:
   `www.zillow.com` / `zillow.com` / `*.zillowstatic.com` / `higgsfield.ai` / `*.higgsfield.ai`
2. **Environment variables** (same dialog, .env format):
   `HF_API_KEY=<api key id>` and `HF_SECRET=<api key secret>`
   (from cloud.higgsfield.ai/api-keys)

Changes apply to sessions started after saving. If the current session still gets 403s,
start a fresh session on branch `claude/video-walkthrough-real-estate-nrn49t` and say
"resume the walkthrough build per RUNBOOK.md".

## Zillow scrape (replaces Apify — user's choice)

Target: https://www.zillow.com/homedetails/11163-NW-69TH-Place-Parkland-FL-33076/42827020_zpid/
Script: `tools/scrape-zillow.js` (Playwright + bundled Chromium at
/opt/pw-browsers/chromium-*/chrome-linux/chrome). Extracts `__NEXT_DATA__` →
gdpClientCache → property facts + responsivePhotos hi-res URLs; regex fallback for
photos.zillowstatic.com URLs. Download photos → `source-images/NN-original.jpg`.
If PerimeterX bot-wall persists, ask user to attach photos in chat instead.

## Higgsfield API (extracted from official npm packages)

- Base: `https://platform.higgsfield.ai`
- Auth headers: `hf-api-key: <key>` and `hf-secret: <secret>`
- Image-to-video (unified API, one clip per source photo):
  - Seedance: `POST /bytedance/seedance/v1/pro/image-to-video` body `{"image_url": ..., "prompt": ...}`
    (probe for a newer seedance v2 slug first; fall back to v1)
  - Kling fallback: `POST /kling-video/v2.1/pro/image-to-video` same body
  - Returns `request_id` → poll `GET /requests/{id}/status` until complete; download result URL
- `image_url` must be publicly accessible (Zillow CDN URLs work directly — Higgsfield fetches them server-side)
- Optional upload: `POST /files/generate-upload-url` `{"content_type":"image/jpeg"}` → PUT bytes to
  `upload_url`, then use `public_url`
- Result videos may live on a separate CDN domain — if downloads 403, add that exact domain
  to the allowlist (or use Full network access)
- Cost guardrail: if estimated total for ~6–10 clips exceeds ~$10 in credits, confirm with user first

## Per-clip prompt

Use the template in reel-prompt.md; substitute {CAMERA_MOVE_SENTENCE} per room:

| Room | Camera move |
|------|-------------|
| Exterior (opening) | Slow drone-style aerial approach toward the facade |
| Entry/foyer | Doorway threshold reveal flowing into a steadicam walk-in |
| Living/great room | Slow smooth gimbal glide revealing the room's depth |
| Kitchen | Gimbal glide along the counter toward the island |
| Dining | Smooth glide approaching the table |
| Primary bedroom | Calm, gentle gimbal glide forward |
| Primary bath | Doorway threshold reveal with a gentle push-in |
| Secondary bedroom | Brief smooth gimbal glide |
| Backyard/pool (closing) | Rising lateral crane/drone reveal |

One move per clip; camera + lighting only; never re-describe room contents.

## Stitch (repo's exact commands; ffmpeg via `npm install ffmpeg-static`)

```bash
# normalize each scene clip
ffmpeg -y -i "$f" -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30" \
  -c:v libx264 -pix_fmt yuv420p -an "norm-$(basename "$f")"
# concat in walkthrough order
ls norm-room-*.mp4 | sort | sed "s/^/file '/;s/$/'/" > concat.txt
ffmpeg -y -f concat -safe 0 -i concat.txt -c:v libx264 -pix_fmt yuv420p -an final/walkthrough-16x9.mp4
# 9:16 social cut
ffmpeg -y -i final/walkthrough-16x9.mp4 -vf "scale=-1:1920,crop=1080:1920" -c:v libx264 -pix_fmt yuv420p -an final/walkthrough-9x16.mp4
```

Order: exterior → entry → living → kitchen → beds → baths → outdoor. Verify with ffprobe;
validate against the skill's walkthrough-quality checklist (assets present, durations sum,
no warping, no on-screen text, silent master, user approval loop).
