# All Sorted - Project Documentation

## Project Overview
**Client:** All Sorted (Australian plumbing video diagnosis service)
**Goal:** Build Next.js demo for client approval, then convert to WordPress custom theme

### What the Company Does
All Sorted helps homeowners understand their plumbing issue **before** booking a call-out through 15-minute video diagnosis ($29) with licensed plumbers.

---

## Brand Guidelines Summary

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Deep Slate Blue | `#1F2937` | Headlines, logo, primary text, nav |
| Soft Teal | `#2DD4BF` | Buttons, highlights, accents |
| Off White | `#F9FAFB` | Backgrounds, cards |
| Warm Grey | `#9CA3AF` | Secondary text, labels, dividers |
| Error Red | `#DC2626` | Errors only (muted) |

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 400 (body), 500 (subheadings), 600 (headings/buttons)
- **Style:** Sentence case, generous line spacing

### Design Principles
- Minimal, plenty of white space
- Calm, trustworthy, unhurried
- NO: yellow, red branding, tradie cliches, hype language, aggressive CTAs

---

## Implementation Plan

### Phase 1: Project Setup [COMPLETED]
- [x] Create Next.js 14 project (App Router)
- [x] Configure Tailwind CSS with brand colors
- [x] Setup Inter font (next/font/google)
- [x] Create folder structure
- [x] Setup base layout

### Phase 2: Layout & Header [COMPLETED]
- [x] Header component (Logo, availability text, Tradie Portal button)
- [x] Mobile navigation (hamburger menu)
- [x] Footer component
- [x] Base page layout

### Phase 3: Hero Section [COMPLETED]
- [x] Hero headline & subheadline
- [x] CTA Box component:
  - [x] Problem dropdown
  - [x] Postcode input
  - [x] Get Started button
  - [x] Availability indicator
- [x] Hero background/styling

### Phase 4: Content Sections [COMPLETED]
- [x] "How All Sorted Works" section
- [x] Features list with checkmarks
- [x] Testimonials slider component
- [x] Stats section
- [x] Additional info sections

### Phase 5: Multi-Step Booking Form [COMPLETED]
- [x] Modal/Dialog component
- [x] Form state management
- [x] Step 1: Commercial/Residential selection
- [x] Step 2: Job Type selection
- [x] Step 3: Service Type selection
- [x] Step 4: Job Stage selection
- [x] Step 5: Description textarea
- [x] Step 6: Photo upload (optional)
- [x] Step 7: Contact details
- [x] Final: Confirmation + Calendly placeholder
- [x] Progress indicator

### Phase 6: Terms & Conditions Page [COMPLETED]
- [x] Create /terms route
- [x] Legal content layout
- [x] Privacy policy section

### Phase 7: Polish & Optimization [ ]
- [ ] Animations (subtle transitions)
- [ ] Full mobile responsiveness testing
- [ ] SEO meta tags (additional)
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Form validation
- [ ] Final review

---

## Current Progress

### Status: PHASES 1-6 COMPLETED
### Current Phase: Phase 7 (Polish)
### Last Updated: January 7, 2025

---

## Session Log

### Session 1 - January 7, 2025
- [x] Analyzed project requirements from project-doc.md
- [x] Created implementation plan
- [x] Created CLAUDE.md documentation
- [x] Created Next.js 14 project with TypeScript & Tailwind
- [x] Configured brand colors in globals.css
- [x] Setup Inter font in layout.tsx
- [x] Created folder structure (components/layout, components/home, components/booking, components/ui)
- [x] Created UI components (Button.tsx)
- [x] Created Header component with mobile menu
- [x] Created Footer component
- [x] Created Hero section with CTA box
- [x] Created HowItWorks section
- [x] Created Features section with checkmarks
- [x] Created Stats section
- [x] Created Testimonials slider
- [x] Created BookingModal with 7-step form
- [x] Created Terms & Conditions page
- [x] Integrated all components in main page
- [x] Tested dev server - WORKING on http://localhost:3000

---

## File Structure (Current)

```
booking-wp/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Landing page (all sections)
│   ├── globals.css         # Global styles with brand colors
│   ├── favicon.ico
│   └── terms/
│       └── page.tsx        # Terms & Conditions
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Header with mobile nav
│   │   └── Footer.tsx      # Footer
│   ├── home/
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── HowItWorks.tsx  # 3-step process
│   │   ├── Features.tsx    # Checkmark features
│   │   ├── Stats.tsx       # Statistics section
│   │   └── Testimonials.tsx # Testimonial slider
│   ├── booking/
│   │   └── BookingModal.tsx # 7-step booking form
│   └── ui/
│       └── Button.tsx      # Reusable button
├── public/
│   └── images/
├── CLAUDE.md               # This file
├── project-doc.md          # Original client brief
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Quick Reference

### Key Copy (On-Brand)
- "Before you book a plumber, speak to one on video"
- "Think of it like tele-health, but for plumbing"
- "Get clear advice on what to do next"
- "82% of problems resolved on the phone"
- "No obligation"

### Competitor References
- https://hipages.com.au/
- https://jims.net/
- https://www.airtasker.com/au/

### Form Steps Summary
1. Commercial / Residential
2. Job Type (Repairs, Installation, Maintenance, Renovations, New Build, Other)
3. Service Type (Tap/Water, Sewer/Stormwater, Gas, Solar, Kitchen, Bathroom, Hot Water, Other)
4. Job Stage (Planning & Budgeting, Ready to hire, Emergency)
5. Description (text)
6. Photos (optional upload)
7. Contact (Name, Email, Phone)
8. Confirmation + Calendly ($29 for 15 mins)

---

## Notes for Next Session
- Dev server runs on http://localhost:3000
- Run `npm run dev` to start
- Phase 7 remaining: Polish & Optimization
  - Add subtle animations/transitions
  - Test mobile responsiveness thoroughly
  - Add form validation (required fields)
  - Accessibility improvements
  - Performance check with Lighthouse
- Consider adding real Calendly integration
- May need to add more images/illustrations

---

## Commands Reference

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npx tsc --noEmit
```
