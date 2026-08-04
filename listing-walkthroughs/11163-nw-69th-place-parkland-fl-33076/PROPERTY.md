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
- Curated hero set: pending curation (target 6–10 rooms)

## Shot List

| # | Scene clip | Source photo | Room type | Camera move |
|---|------------|--------------|-----------|-------------|
| — | pending curation | | | |

## Build Choices

- **Style:** Cinematic (per-room camera moves)
- **Rooms:** Auto-curate 6–10 hero shots
- **Output ratio:** Both — 16:9 master + 9:16 social cut
- **Engine:** Seedance (Higgsfield unified API; Kling fallback)

## Outputs

- Master: `final/walkthrough-16x9.mp4` (pending)
- Social: `final/walkthrough-9x16.mp4` (pending)
- Scene clips: `scenes/` (pending)

## Run Notes

- Pipeline per charlesdove977/re-walkthrough-pro skill docs; Apify replaced by direct
  scrape (user choice). Zillow blocks all fetch paths (PerimeterX), so photos came from
  the listing's Redfin CDN mirror — same MLS photo set, full resolution, listing order.
- Higgsfield driven via REST API with user credentials; master animation prompt in
  reel-prompt.md (from user's reference reel).
