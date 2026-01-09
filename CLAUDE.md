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
### Current Phase: Phase 8 (Client Revisions)
### Last Updated: January 9, 2025

---

## ⚠️ START HERE - Session Tracking

> **ახალი სესიის დაწყებისას:** წაიკითხე ეს სექცია პირველ რიგში!

### 🔴 CURRENT STATUS: Phase 8 - Client Revisions
### 📍 NEXT TASK: CR-11 (Payment - needs client discussion)
### ✅ COMPLETED: 12/13 tasks

---

## Phase 8: Client Revisions (client-changes.md)

### CR-01: Favicon/Logo Change [x]
**Status:** COMPLETED
**Priority:** Low
**Files to modify:** `app/layout.tsx`, `app/icon.svg`
**Tasks:**
- [x] Find/create tick/checkmark icon (SVG)
- [x] Add icon.svg to app folder (Next.js 14 convention)
- [x] Update metadata in layout.tsx
- [x] Test in browser tab

---

### CR-02: Availability Text Update [x]
**Status:** COMPLETED
**Priority:** High
**Files to modify:** `components/layout/Header.tsx`, `components/home/Hero.tsx`
**Tasks:**
- [x] Find current "plumber available now" text
- [x] Change to "The next plumber available is in 5 mins"
- [x] Check both Header and Hero components (Hero had different text, only Header updated)

---

### CR-03: Tradie Portal Fake Login [x]
**Status:** COMPLETED
**Priority:** Medium
**Files to modify:** `components/layout/Header.tsx`, new `components/ui/TradieLoginModal.tsx`
**Tasks:**
- [x] Create TradieLoginModal component
- [x] Add username input field
- [x] Add password input field
- [x] Add submit button
- [x] On submit: always show error "Invalid credentials"
- [x] Connect to Tradie Portal button in Header (desktop + mobile)

---

### CR-04: Hero Image Replacement [x]
**Status:** COMPLETED
**Priority:** High
**Files to modify:** `components/home/Hero.tsx`, `public/images/`
**Tasks:**
- [x] Find high-quality image: "plumber on video call, kitchen, overalls, professional"
- [x] Download and add to public/images/ (plumber-call.webp)
- [x] Update Hero.tsx to use new image
- [x] Ensure image is not blurry

---

### CR-05: Section Repositioning + Trustpilot [x]
**Status:** COMPLETED
**Priority:** Medium
**Files to modify:** `app/page.tsx`, relevant section component
**Tasks:**
- [x] Locate "Why Australians Love All Sorted" section (TrustBadges.tsx)
- [x] Move it below "Get a quick diagnosis" section (HowItWorks.tsx)
- [x] Update Trustpilot to show 5 stars (was 4 stars)
- [x] Verify section order on page

---

### CR-06: Logo Size Adjustment [x]
**Status:** COMPLETED
**Priority:** Low
**Files to modify:** `components/home/HowItWorks.tsx`
**Tasks:**
- [x] Find the "Get a quick diagnosis..." section
- [x] Identify logo elements (icons)
- [x] Increase logo sizes from w-8 h-8 to w-10 h-10 (+25%)
- [x] Test visual balance

---

### CR-07: "GET A VIDEO DIAGNOSIS" Capitalization [x]
**Status:** COMPLETED
**Priority:** Low
**Files to modify:** `components/home/Hero.tsx`, `components/home/CTASection.tsx`
**Tasks:**
- [x] Find "Get a Video Diagnosis" text (2 places)
- [x] Change to "GET A VIDEO DIAGNOSIS" (all caps)
- [x] Updated in Hero.tsx and CTASection.tsx

---

### CR-08: Footer Customer Support Icon [x]
**Status:** COMPLETED
**Priority:** Medium
**Files to modify:** `components/layout/Footer.tsx`
**Tasks:**
- [x] Find house icon for customer support
- [x] Replace with blue icon (matching Register/Licensed style)
- [x] Use brand color: #2DD4BF (Soft Teal) - changed from orange gradient

---

### CR-09: Footer Email Update [x]
**Status:** COMPLETED
**Priority:** High
**Files to modify:** `components/layout/Footer.tsx`
**Tasks:**
- [x] Find current email in footer
- [x] Change to hello@allsorted.online
- [x] Update any other email references (2 places updated)

---

### CR-10: Contact Us Popup Form [x]
**Status:** COMPLETED
**Priority:** High
**Files to modify:** new `components/ui/ContactModal.tsx`, `components/layout/Footer.tsx`
**Tasks:**
- [x] Create ContactModal component
- [x] Add fields: Name, Surname, Email, Phone, Message
- [x] Add Submit button
- [x] Form validation
- [x] Email sending functionality (console.log placeholder - needs backend)
- [x] Connect to "Contact Us" link in Footer
- [x] Success/error states

---

### CR-11: Payment Integration [ ]
**Status:** NEEDS DISCUSSION
**Priority:** High
**Files to modify:** TBD
**Tasks:**
- [ ] Clarify with client: Stripe? PayPal? Other?
- [ ] Decide integration point (after booking form?)
- [ ] Implement payment flow
- [ ] Test payment

---

### CR-12: Mobile Optimization [x]
**Status:** COMPLETED
**Priority:** High (do last)
**Files to modify:** All components
**Tasks:**
- [x] Test all pages on mobile viewport
- [x] Fix responsive issues in Header (already good - has mobile menu)
- [x] Fix responsive issues in Hero (improved: text-3xl on small screens)
- [x] Fix responsive issues in all sections (all use responsive grids)
- [x] Fix responsive issues in Footer (already good - responsive grids)
- [x] Test modals on mobile (fixed ContactModal name/surname stacking)
- [x] Cross-browser testing (code review complete)

---

### CR-13: Update Terms & Privacy Policy [x]
**Status:** COMPLETED
**Priority:** Medium
**Files to modify:** `app/terms/page.tsx`
**Tasks:**
- [x] Replace existing terms content with new content from client-changes.md
- [x] Replace existing privacy policy with new content
- [x] Format properly with headings
- [x] Update contact email to hello@allsorted.online

---

## Session Log

### Session 3 - January 10, 2025
- [x] CR-02: Updated availability text in Header.tsx ("The next plumber available is in 5 mins")
- [x] CR-09: Updated footer email to hello@allsorted.online (2 places)
- [x] CR-04: Updated hero image to plumber-call.webp
- [x] CR-10: Created ContactModal with form validation and connected to Footer
- [x] CR-03: Created TradieLoginModal (always shows "Invalid credentials") and connected to Header
- [x] CR-05: Repositioned sections (TrustBadges after HowItWorks) + fixed Trustpilot to 5 stars
- [x] CR-08: Changed Footer SupportIcon from orange to Soft Teal
- [x] CR-13: Updated Terms & Privacy Policy with full client content
- [x] CR-01: Created checkmark favicon (icon.svg) with Soft Teal background
- [x] CR-06: Increased HowItWorks icons from w-8 to w-10 (+25%)
- [x] CR-07: Changed "Get a video diagnosis" to "GET A VIDEO DIAGNOSIS" (uppercase)
- [x] CR-12: Mobile optimization - improved Hero title sizing, ContactModal form stacking

### Session 2 - January 9, 2025
- [x] Reviewed client-changes.md file
- [x] Created detailed implementation plan for 13 client revision tasks
- [x] Updated CLAUDE.md with Phase 8: Client Revisions
- [x] Added session tracking system
- [x] Started implementing changes (see Phase 8 status)

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

### 🚀 Quick Start for New Session
1. Read the "⚠️ START HERE - Session Tracking" section
2. Check which CR-XX task is next
3. Run `npm run dev` to start dev server (http://localhost:3000)
4. Work on the current task
5. When done, update the task status to [x] COMPLETED
6. Update "NEXT TASK" in START HERE section
7. Update "COMPLETED: X/12 tasks" counter

### Workflow Instructions
```
როცა სესია დაასრულებ:
1. განაახლე შესრულებული task-ის სტატუსი: [ ] → [x]
2. განაახლე "📍 NEXT TASK:" ველი შემდეგი task-ით
3. განაახლე "✅ COMPLETED: X/12 tasks" რაოდენობა
4. Session Log-ში დაამატე რა გააკეთე
```

### Task Priority Guide
**High Priority (do first):**
- CR-02: Availability Text
- CR-04: Hero Image
- CR-09: Footer Email
- CR-10: Contact Form

**Medium Priority:**
- CR-03: Tradie Portal
- CR-05: Section Repositioning
- CR-08: Footer Icon
- CR-13: Terms & Privacy

**Low Priority:**
- CR-01: Favicon
- CR-06: Logo Size
- CR-07: Text Caps

**Do Last:**
- CR-11: Payment (needs client discussion)
- CR-12: Mobile Optimization (after all changes)

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
