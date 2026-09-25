# CineBuzz QA evidence
Tested September 24, 2026 in the available Chrome cloud browser against the running local application.

## Passed functional checks
- Home renders supplied assets, synopsis, character identities, release details and working CTAs.
- Trailer opens an accessible dialog with explicit missing-video notice; close and showtimes CTA work.
- Location → cinema → date → time controls enable sequentially. Downstream choices reset when upstream data changes.
- No booking continuation without a complete screening selection.
- Unavailable seats are disabled and marked ×. Selected seats show a checkmark and accessible pressed state.
- D4 + D5 yields two tickets / PKR 2,400; deselecting D5 yields one / PKR 1,200.
- No details continuation with zero seats.
- Blank form submission is blocked. Invalid email is blocked. Valid sample data proceeds.
- Mock card and digital-wallet choices are available; neither requests actual credentials or performs a transaction.
- Full corrected flow reached confirmation with a DEMO reference and retained screening/seats/total.
- Sample ticket contains the exact prominent warning: SAMPLE/DEMO – NOT VALID FOR ENTRY.
- Selecting Mystery changes recommendations to THE SILENT ARCHIVE, ROOM NINETEEN and THE VANISHING HOUR.
- All nine event counters appear in the analytics screen. An observed QA session showed 3 visits and 2 completions = 66.7%, correctly calculated and individually labelled Simulated. Those are QA interactions, not campaign results.
- Mobile navigation opens and closes. Desktop, tablet and mobile home layouts visually inspected using embedded viewports of 1440, 1024, 768 and 390 CSS pixels. Document widths were 1425, 1009, 753 and 375 respectively (15px scrollbar), with no horizontal content overflow.
- Semantic labels, focus styles, reduced-motion override, image alt text and local-only asset references inspected.
- TypeScript no-emit check passed before final packaging; final build performed by publishing workflow.

- Mobile 390px journey completed through sample ticket using mouse/keyboard: Lahore → Meridian → October 30 → 14:00 → F8 → valid sample details → mock card → confirmation → ticket. Details, payment, confirmation and ticket all measured 375px content width within 390px viewport.

## Defects found and fixed
- crypto.randomUUID was unavailable in HTTP preview. Replaced with crypto.getRandomValues for a presentation-only DEMO reference. Repeated booking completion succeeded.
- Fixed a 7px mobile seat-grid overflow with min-width and button-padding constraints.
- Tightened telephone validation and clarified accepted characters.
- Improved hero gradient for readable text over supplied artwork.
- Updated seat guidance after selection.

## Limits
- Browser testing covered Chrome, not physical iOS/Android devices or every browser.
- The optional WebMCP registration is feature-detected; this browser’s modelContext is unavailable, so its execution could not be validated. Standard UI works independently.
- Full-page/cropped screenshot capture intermittently timed out; viewport captures are included instead.
- Browser-extension metadata errors were observed. The application error above was fixed; no further application exception occurred in the repeated complete journey.
- Final trailer MP4 and separate Ethan reveal were not supplied. Existing Ethan appearance is reused from the hero. No real trailer-playback test is possible yet.
- No real analytics, live campaign reach or financial results are claimed.
- The final competition pitch deck and screen-recorded MP4 are separate outstanding competition deliverables. This task delivers the website, campaign planning documentation and QA screenshots; it does not claim full competition submission readiness.

## Evidence
See docs/qa/*.jpg. Screenshots show multiple moments in QA; selected seat counts vary during selection/deselection tests.
