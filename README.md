# CineBuzz — The Last Signal & Neon Titans
MovieReach / Aptech TechWiz / Digital Marketing Frontiers.

A responsive React + TypeScript front-end prototype on the provided Vinext/Vite stack. All cinema names, showtimes, inventory, prices, bookings and payments are simulated. Sample tickets say “SAMPLE/DEMO – NOT VALID FOR ENTRY”.

## Run locally
Requires Node.js 22.13+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```
Open the local URL printed by the development server. For a production build: `pnpm build`. The managed workspace uses its supervised preview service; it is not a public preview link.

## Journey
Discovery → trailer placeholder → story/cast → location → fictional cinema → date → showtime → simulated seats → validated sample details → mock card/wallet → confirmation → sample e-ticket → genre-based fictional recommendations.

## Files
- app/page.tsx: original homepage entry.
- components/cinebuzz.tsx: shared existing marketing, booking, navigation and analytics.
- components/neon-details.tsx: Neon Titans cinematic detail experience.
- app/movies/neon-titans/page.tsx: dedicated Neon Titans route and metadata.
- app/globals.css: shared palette, responsive layouts, keyboard focus and reduced-motion support.
- app/layout.tsx: English language, title, description, Open Graph text, favicon.
- public/assets/: optimized supplied images.
- docs/ASSETS.md: original-to-section mapping and missing assets.
- docs/CAMPAIGN_REPORT.md: personas, competitor scan, channels, dated calendar, keywords, budget, tracking and optimization.
- docs/QA.md: test evidence and limitations.

## Privacy and simulation
No backend booking, payment gateway, authentication, inventory API, ticket validation or outbound form submission. Details fields are discarded on leaving the details screen. Analytics contain only event names, movie identifiers and timestamps in sessionStorage. Closing the session or clearing browser data clears counters. Reload resets in-progress booking. No secrets are required. A generated DEMO reference is presentation-only.

## Assets and attribution
See docs/ASSETS.md. Supplied imagery is preserved; faces are not regenerated. No final trailer was supplied; the interactive placeholder accurately discloses this. No fake video URL. Character lines, director, studio and release details come from the user’s brief. Recommendations are original fictional concepts.

## AI disclosure / competition checklist
ChatGPT assisted with implementation, copy, documentation and QA. The team must review and disclose AI assistance according to competition rules. Campaign goals, personas and budget are assumptions. Dashboard metrics are simulated. No social post, ad campaign, email or financial transaction was executed.

The official SRS also asks for a final presentation and an MP4 demonstration. Consult docs/QA.md for which evidence is included and any remaining submission limitations. This website does not claim that all external campaign activities have been executed.
