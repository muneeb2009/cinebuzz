# CineBuzz multi-movie update — QA, September 26, 2026

## Preserved architecture
Existing React/Vinext stack, lockfile, UI primitives, branding, Last Signal marketing sections, prices, seat map, demo payment, forms, recommendations and analytics retained. Existing interactive root extracted into `components/cinebuzz.tsx` to share with the dedicated `/movies/neon-titans` route. Homepage remains the original Last Signal experience with an added two-movie catalogue and switcher.

## Browser verification
- Homepage renders both movie choices and retains all Last Signal sections.
- Dedicated Neon Titans route renders synopsis, five heroes/Titans, supporting characters, NEXUS, campaign gallery and explicit trailer placeholder.
- Complete Neon Titans desktop booking: Lahore → Meridian Cinema → October 30 → 17:30 → seats B3/B4; total PKR 2,400; deselect B4; total PKR 1,200; required details validation; demo payment; confirmation; sample ticket.
- Complete Last Signal regression booking with B3 / PKR 1,200, correct movie, runtime, language, image and sample-ticket warning.
- Movie picker change clears location/cinema/date/time/seats/reference. Continue disabled until fresh choices are made.
- Mobile Neon Titans menu and contextual Cast navigation; full mobile booking and sample ticket.
- Responsive iframe viewports 390, 768, 1024 and 1440px tested for both pages. Content scroll widths matched available widths (15px scrollbar); no horizontal overflow.
- Gallery opens correct supplied artwork and closes; no broken loaded Neon images.
- Demo analytics displays both completed test bookings and expected events; no personal data tracked.
- No application-origin console errors observed. Browser extension metadata errors excluded as infrastructure noise.
- A header CTA incorrectly forcing Last Signal was found and fixed. Retested mobile Neon header CTA.

## Limits
All bookings/payments remain simulations. No real backend or inventory. Progress resets on reload as before. Trailer videos not supplied. Neon language not specified in source: explicitly marked to be announced. Intended audience is not a certified age rating. External copies deployed outside Sites require their own redeployment.
