# 11163 NW 69th Place, Parkland, FL 33076

**Zillow:** https://www.zillow.com/homedetails/11163-NW-69TH-Place-Parkland-FL-33076/42827020_zpid/
**MLS#:** B26059818
**Status:** FOR_SALE
**Slug:** `11163-nw-69th-place-parkland-fl-33076`
**Build date:** 2026-08-04

## Property Specs

| Price | Beds | Baths | Living area | Year built | Home type |
|-------|------|-------|-------------|------------|-----------|
| $1,250,000 | 5 | 3 | 2,686 sqft | 1999 | Single family |

> Specs confirmed from the live MLS listing data (Zillow page is bot-walled;
> photos and facts sourced from the listing's Redfin mirror, same MLS feed).
> Listing highlights: exquisitely fully renovated designer home, rare ~1/3-acre
> cone-shaped corner lot, water views, Taj Mahal quartzite kitchen with 10-ft
> waterfall island, new Cafe appliances, 24x48 matte porcelain tile, spa-style baths.

## Agent / Brokerage

- Laura Sanders — 954-650-0827 (listing agent per MLS attribution)

## Photos

- Source images: 50 downloaded → `source-images/01..50-original.jpg` (1280px, listing order)
- Vision pass: all 50 classified, zero text overlays found (nothing deleted)
- Curated hero set: 9 rooms → `scene-sources/scene-01..09-*.jpg` (16:9, 1920x1080)

## Shot List

| # | Scene clip | Source photo | Room type | Camera move |
|---|------------|--------------|-----------|-------------|
| 1 | room-01-exterior.mp4 | 01-original.jpg | Exterior front | Slow aerial-style approach |
| 2 | room-02-entry.mp4 | 08-original.jpg | Foyer | Threshold push-in |
| 3 | room-03-living.mp4 | 10-original.jpg | Formal living | Lateral glide toward french doors |
| 4 | room-04-dining.mp4 | 13-original.jpg | Dining | Slow approach to table |
| 5 | room-05-kitchen.mp4 | 18-original.jpg | Kitchen | Glide along waterfall island |
| 6 | room-06-greatroom.mp4 | 23-original.jpg | Great room | Push-in to fireplace + pool view |
| 7 | room-07-primary-bedroom.mp4 | 31-original.jpg | Primary bedroom | Calm push-in |
| 8 | room-08-primary-bath.mp4 | 32-original.jpg | Primary bath | Threshold push-in to wet room |
| 9 | room-09-pool.mp4 | 47-original.jpg | Pool / lanai | Lateral crane reveal with rise |

## Build Choices

- **Style:** Cinematic (per-room camera moves)
- **Rooms:** Auto-curate 6–10 hero shots
- **Output ratio:** Both — 16:9 master + 9:16 social cut
- **Engine:** Kling 3.0 (std, silent) via Higgsfield MCP connector — the repo's named alternate engine; Seedance 2.0 exceeded the credit budget (45 cr/clip vs 7.5)

## Outputs

- Master: `final/walkthrough-16x9.mp4` — 45.3s, 1080p30, silent, AI-cinematic (Kling 3.0)
- Social: `final/walkthrough-9x16.mp4` — 45.3s, 1080x1920, silent
- Scene clips: `scenes/room-01..09-*.mp4` — 5s Kling 3.0 image-to-video each (720p24 source, normalized 1080p30)
- Cost: 67.5 Higgsfield credits (9 × 7.5); warp-check passed on all 9 scenes, zero regenerations needed
- Full tour: `final/walkthrough-full-16x9.mp4` + `final/walkthrough-full-9x16.mp4` — 2:48, all 50
  photos in tour order (9 AI-cinematic Kling scenes at 5s + 41 Ken-Burns scenes at 3s)

## Run Notes

- Pipeline per charlesdove977/re-walkthrough-pro skill docs; Apify replaced by direct
  scrape (user choice). Zillow blocks all fetch paths (PerimeterX), so photos came from
  the listing's Redfin CDN mirror — same MLS photo set, full resolution, listing order.
- Higgsfield driven via REST API with user credentials; master animation prompt in
  reel-prompt.md (from user's reference reel).
