# Agnos Website - Homepage Implementation Plan & Technical Design Document

**Version:** 1.0.0
**Status:** Approved for Implementation
**Date:** 2026-01-05
**Author:** Antigravity (AI Agent)
**Target Audience:** Development Team, Stakeholders, Designers

---

## Table of Contents

- [Agnos Website - Homepage Implementation Plan \& Technical Design Document](#agnos-website---homepage-implementation-plan--technical-design-document)
  - [Table of Contents](#table-of-contents)
  - [1. Executive Summary](#1-executive-summary)
  - [2. Brand Identity \& Design System](#2-brand-identity--design-system)
    - [2.1 Core Philosophy](#21-core-philosophy)
    - [2.2 Color Palette (The "Midnight Gold" Theme)](#22-color-palette-the-midnight-gold-theme)
    - [2.3 Typography](#23-typography)
    - [2.4 Visual Effects \& Textures](#24-visual-effects--textures)
  - [3. UX Strategy: The StoryBrand Framework](#3-ux-strategy-the-storybrand-framework)
    - [3.1 The 7-Part Framework Mapping](#31-the-7-part-framework-mapping)
    - [3.2 User Journey Flow](#32-user-journey-flow)
  - [4. Technical Architecture](#4-technical-architecture)
    - [4.1 Technology Stack](#41-technology-stack)
    - [4.2 Project Structure](#42-project-structure)
    - [4.3 Dependencies \& Libraries](#43-dependencies--libraries)
    - [4.4 Data Layer Strategy](#44-data-layer-strategy)
  - [5. Component Specifications (Detailed)](#5-component-specifications-detailed)
    - [5.1 Global Components](#51-global-components)
      - [**Navbar (`components/layout/Navbar.tsx`)**](#navbar-componentslayoutnavbartsx)
      - [**Footer (`components/layout/Footer.tsx`)**](#footer-componentslayoutfootertsx)
    - [5.2 Section 1: The Hero (`components/sections/Hero.tsx`)](#52-section-1-the-hero-componentssectionsherotsx)
    - [5.3 Section 2: The Trust Bar (`components/sections/TrustBar.tsx`)](#53-section-2-the-trust-bar-componentssectionstrustbartsx)
    - [5.4 Section 3: The Problem (`components/sections/ProblemGrid.tsx`)](#54-section-3-the-problem-componentssectionsproblemgridtsx)
    - [5.5 Section 4: The Guide (`components/sections/SolutionShowcase.tsx`)](#55-section-4-the-guide-componentssectionssolutionshowcasetsx)
    - [5.6 Section 5: The Plan (`components/sections/ThreeStepPlan.tsx`)](#56-section-5-the-plan-componentssectionsthreestepplantsx)
    - [5.7 Section 6: The Transformation (`components/sections/Testimonials.tsx`)](#57-section-6-the-transformation-componentssectionstestimonialstsx)
    - [5.8 Section 7: Final CTA (`components/sections/FinalCTA.tsx`)](#58-section-7-final-cta-componentssectionsfinalctatsx)
  - [6. Animation \& Interaction Design](#6-animation--interaction-design)
    - [6.1 Framer Motion Strategy](#61-framer-motion-strategy)
    - [6.2 Scroll Animations](#62-scroll-animations)
  - [7. Implementation Phase Checklist](#7-implementation-phase-checklist)
    - [Phase 1: Setup \& Core](#phase-1-setup--core)
    - [Phase 2: Structural Components](#phase-2-structural-components)
    - [Phase 3: Homepage - Above Fold](#phase-3-homepage---above-fold)
    - [Phase 4: Homepage - The Story](#phase-4-homepage---the-story)
    - [Phase 5: Final Polish](#phase-5-final-polish)

---

## 1. Executive Summary

The "Agnos" website is not merely a brochure; it is a high-conversion digital asset designed to position the company as the premier Enterprise Ecosystem partner in Bangladesh. The design language promotes "Authority," "Sophistication," and "Technological Mastery" through a **Deep Midnight Blue** and **Golden Glow** aesthetic.

The homepage structure strictly adheres to the **StoryBrand (SB7)** framework, guiding the user from their internal frustration with chaotic business processes to a clear, guided path toward clarity and growth.

**Key Objectives:**
1.  **Differentiate:** Stand out from generic white-and-blue corporate ERP sites.
2.  **Convert:** Drive "Discovery Call" bookings.
3.  **Educate:** Simplify the complex value of Agnos into a 3-step simple plan.

---

## 2. Brand Identity & Design System

### 2.1 Core Philosophy
**"From Chaos to Clarity"**
*   **Chaos** is represented by the complexity of the backend code we write, hidden from the user.
*   **Clarity** is represented by the clean, glowing UI the user interacts with.
*   **Agnos** is represented by the fluid animations and gradients.

### 2.2 Color Palette (The "Midnight Gold" Theme)

We will use a sophisticated dark mode palette.

**Primary Backgrounds (The Void):**
*   `--bg-void`: `#0B0E17` (Deep Midnight Blue - Distinct from black)
*   `--bg-card`: `#151E2E` (Lighter midnight blue - Cards/Sections)
*   `--bg-card-hover`: `#1E293B` (Interactive state)

**The Golden Glow (The Energy):**
*   `--gold-500`: `#F59E0B` (Base Gold)
*   `--gold-400`: `#FBBF24` (Highlight)
*   `--gold-600`: `#D97706` (Shadow/Depth)
*   `--gold-gradient`: `linear-gradient(135deg, #F59E0B 0%, #D97706 100%)`

**Typography Colors:**
*   `--text-primary`: `#F8FAFC` (White - Headings)
*   `--text-secondary`: `#94A3B8` (Slate - Body text)
*   `--text-muted`: `#64748B` (Dark Slate - Footers/Meta)
*   `--text-accent`: `transparent background-clip-text bg-gradient-to-r from-gold-400 to-gold-600`

**Utility Colors:**
*   `--success`: `#10B981` (Emerald - Success indicators)
*   `--error`: `#EF4444` (Red - Form errors)
*   `--void-border`: `#1E293B` (Subtle borders)

### 2.3 Typography

**Font Family:**
*   **Headings:** `Outfit` (Google Font) - Modern, geometric, bold.
*   **Body:** `Inter` (Google Font) - Clean, highly legible, professional.

**Scale:**
*   `h1`: `text-5xl md:text-7xl font-bold tracking-tight`
*   `h2`: `text-4xl md:text-5xl font-semibold`
*   `h3`: `text-2xl md:text-3xl font-medium`
*   `body-lg`: `text-lg`
*   `body`: `text-base`
*   `caption`: `text-sm uppercase tracking-widest`

### 2.4 Visual Effects & Textures

**1. The "Golden Seam"**
A signature design element. Thin, 1px glowing vertical lines that run through specific sections to guide the eye.
```css
.golden-seam {
  width: 1px;
  background: linear-gradient(to bottom, transparent, #F59E0B, transparent);
  box-shadow: 0 0 15px #F59E0B;
}
```

**2. Glassmorphism (Dark Mode)**
Used for cards (`FeatureCard`, `ServiceCard`).
```css
.glass-card {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

**3. The "Aurora" Background**
Subtle, moving gradient blobs in the background to prevent the "Void" from feeling dead.
Color: Very low opacity Gold (`#F59E0B`) and Deep Blue (`#172554`) mixed with the background. **Strictly No Purple.**

---

## 3. UX Strategy: The StoryBrand Framework

We are strictly following Donald Miller's **StoryBrand 7-Part Framework**.

### 3.1 The 7-Part Framework Mapping

1.  **The Character (Hero):** The Bangladeshi Business Owner.
    *   *Desire:* To scale their business and regain control.
2.  **The Problem (Villain):** "Disconnection" & "Manual Work".
    *   *External:* Spreadsheets, multiple logins, lost data.
    *   *Internal:* Stress, uncertainty, feeling "behind" the competition.
3.  **The Guide (Agnos):**
    *   *Empathy:* "We've seen the chaos."
    *   *Authority:* "Official Partner, Certified Experts."
4.  **The Plan:**
    *   1. Discovery Call.
    *   2. Custom Implementation.
    *   3. Training & Launch.
5.  **The Call to Action:**
    *   *Direct:* Book Consultation.
    *   *Transitional:* View Case Studies.
6.  **The Failure (Stakes):** Stagnation, Burnout, Data Loss.
7.  **The Success:** Automated operations, Real-time insights, Peace of mind.

### 3.2 User Journey Flow

1.  **Land:** Hooked by the promise of "Clarity" + Visual Awe (Hero).
2.  **Validate:** Sees "Official Partner" badge immediately (Trust Bar).
3.  **Resonate:** Reads the "Problem" section and nods head ("Yes, that's me").
4.  **Hope:** Sees the "Solution" (Agnos) and the Guide (Agnos).
5.  **Path:** Understands the simple 3-step Plan.
6.  **Action:** Clicks the Golden "Book Audit" Button.

---

## 4. Technical Architecture

### 4.1 Technology Stack

*   **Framework:** Next.js 16 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **Animation:** Framer Motion
*   **Fonts:** `next/font/google` (Inter, Outfit)
*   **Forms:** React Hook Form
*   **Linting:** ESLint + Prettier

### 4.2 Project Structure

```
/
├── app/
│   ├── layout.tsx        # Global Layout (Fonts, Metadata)
│   ├── page.tsx          # Homepage composition
│   ├── globals.css       # Global Variables
│   └── components/       # (Atomic Design)
│       ├── ui/           # Primitive UI (Buttons, Card)
│       ├── layout/       # Navbar, Footer
│       └── sections/     # Homepage Sections
│           ├── Hero.tsx
│           ├── TrustBar.tsx
│           ├── ProblemGrid.tsx
│           ├── SolutionShowcase.tsx
│           ├── ThreeStepPlan.tsx
│           ├── Testimonials.tsx
│           └── CTA.tsx
├── lib/
│   ├── utils.ts          # cn() helper
│   └── constants.ts      # Config (Nav links, Socials)
├── public/
│   ├── images/
│   └── icons/
└── tailwind.config.ts    # Theme setup
```

### 4.3 Dependencies & Libraries

```json
{
  "dependencies": {
    "next": "16.x",
    "react": "19.x",
    "react-dom": "19.x",
    "framer-motion": "^11.x",
    "lucide-react": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  }
}
```

### 4.4 Data Layer Strategy
To ensure the site is "Database Ready," **ALL** hardcoded text (Headlines, Paragraphs, Features, Testimonials) must be stored in `lib/data.ts`.
*   **Format:** Exported TypeScript constants/functions.
*   **Goal:** Components should effectively be "dumb" renderers of this data.
*   **Example:**
    ```typescript
    export const heroData = {
      headline: "Orchestrating Business Excellence",
      subheadline: "Transform...",
      cta: { text: "Start Transformation", link: "/audit" }
    }
    ```

---

## 5. Component Specifications (Detailed)

### 5.1 Global Components

#### **Navbar (`components/layout/Navbar.tsx`)**
*   **Position:** Fixed top, full width.
*   **Style:** Glassmorphism (`bg-void/80 backdrop-blur-md`).
*   **Elements:**
    *   **Left:** Logo (Text: "AGNOS" in Gradient Gold, Font: Outfit Bold).
    *   **Center:** Links (Home, Services, Industries, About). Hover: Underline expands from center (Gold).
    *   **Right:** Button ("Book Audit" - Outline Variant).
*   **Mobile:** Hamburger menu triggers full-screen dark overlay with stagger animation links.

#### **Footer (`components/layout/Footer.tsx`)**
*   **Background:** Solid `bg-void` (Darkest).
*   **Content:**
    *   Column 1: Logo + Tagline.
    *   Column 2: Quick Links.
    *   Column 3: Services (Agnos Implementation, Migration, Training).
    *   Column 4: Contact Info (Dhaka Address, Email, Phone).
*   **Bottom Bar:** Copyright + Social Icons.

### 5.2 Section 1: The Hero (`components/sections/Hero.tsx`)

**Objective:** The Hook.
*   **Layout:** Centered content with immersive background.
*   **Background:** Deep Midnight Blue with a subtle "Aurora" blob animation top-center.
*   **Content:**
    *   **Badge:** Pill shape `border-gold/20 bg-gold/5 text-gold` -> "Innovation at Scale".
    *   **H1:** "Orchestrating Business <span class='text-gradient-gold'>Excellence</span>".
    *   **Subheader:** "Transform operational chaos into strategic clarity with Enterprise Ecosystem."
    *   **CTA Group:**
        *   Primary: "Start Transformation" (Solid Gold Background, Dark Text).
        *   Secondary: "View Solutions" (Transparent, Gold Border).
*   **Visual:** A 3D-style abstract mesh or "Agnos" shape floating right or behind.

### 5.3 Section 2: The Trust Bar (`components/sections/TrustBar.tsx`)

**Objective:** Authority.
*   **Style:** Narrow band, `border-y border-white/5 bg-white/2`.
*   **Content:** "Trusted by forward-thinking companies:"
*   **Animation:** Infinite horizontal marquee scroll of logos (grayed out, full color on hover).

### 5.4 Section 3: The Problem (`components/sections/ProblemGrid.tsx`)

**Objective:** Agitation (The Villain).
*   **Heading:** "Is Your Growth Hitting a Ceiling?"
*   **Layout:** 3 Cards (Grid).
*   **Cards:**
    1.  **The Spreadsheet web:** Icon: `FileSpreadsheet`. Text: "Data scattered across 100+ disconnected sheets."
    2.  **The Silo Effect:** Icon: `Layers`. Text: "Sales doesn't know what Inventory has in stock."
    3.  **The Blind Pilot:** Icon: `EyeOff`. Text: "Making decisions based on last month's data."
*   **Design:** Dark Cards (`bg-card`) with Red/Orange subtle glow on hover (Danger colors).

### 5.5 Section 4: The Guide (`components/sections/SolutionShowcase.tsx`)

**Objective:** Empathy + Authority (The Solution).
*   **Heading:** "Enter the Unified Era."
*   **Graphic:** A "Before vs After" interaction.
    *   *Toggle Switch:* Left = "Chaos", Right = "Clarity".
    *   *Visual:*
        *   **Chaos:** A mess of file icons and logos.
        *   **Clarity:** A clean, glowing Agnos Dashboard screenshot.
*   **Copy:** "We replace the clutter with one cohesive operating system."

### 5.6 Section 5: The Plan (`components/sections/ThreeStepPlan.tsx`)

**Objective:** The Process (Simplicity).
*   **Structure:** Vertical timeline or Horizontal Cards connected by a Golden Line (`golden-seam`).
*   **Steps:**
    1.  **Discovery & Blueprint:** We audit your workflow.
    2.  **Meta-Implementation:** We build and migrate.
    3.  **Evolve & Scale:** Training and Go-Live.
*   **Visual:** Large Number background (`01`, `02`, `03`) in faint outline.

### 5.7 Section 6: The Transformation (`components/sections/Testimonials.tsx`)

**Objective:** Social Proof.
*   **Style:** Carousel.
*   **Content:** Quote from a CEO. "Agnos didn't just install software; they fixed our business logic."
*   **Visual:** Founder photo, Company Logo, Rating (5 Gold Stars).

### 5.8 Section 7: Final CTA (`components/sections/FinalCTA.tsx`)

**Objective:** Action.
*   **Background:** Radiant Radial Gradient (Gold center fading to Midnight).
*   **Text:** "Ready to Evolve?"
*   **Button:** Big, pulsing Gold button.

---

## 6. Animation & Interaction Design

### 6.1 Framer Motion Strategy

We will use `framer-motion` for React.

**Standard Reveal (The "Rise"):**
Used for cards and text blocks.
```typescript
const riseUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
```

**Stagger Children:**
Used for grids (Problem Grid, Plan Steps).
```typescript
const container = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}
```

**The "Pulse" (Attention):**
Used for the primary CTA button.
```typescript
const pulse = {
    scale: [1, 1.05, 1],
    transition: { repeat: Infinity, duration: 2 }
}
```

### 6.2 Scroll Animations

*   **Navbar:** Starts transparent, becomes `bg-void/90` blur after 50px scroll.
*   **Parallax:** Subtle parallax on the background "Aurora" blobs.

---

## 7. Implementation Phase Checklist

### Phase 1: Setup & Core
- [ ] Initialize Next.js Project with TypeScript.
- [ ] Install Tailwind, Framer Motion, Lucide.
- [ ] Configure `tailwind.config.ts` with "Midnight & Gold" palette.
- [ ] Set up Fonts (Outfit & Inter).
- [ ] Create `globals.css` with base styles.

### Phase 2: Structural Components
- [ ] Build `Navbar` (Responsive).
- [ ] Build `Footer`.
- [ ] Create `Button` component (Variants: Primary Gold, Secondary Outline, Ghost).
- [ ] Create `Section` wrapper (Standard padding).

### Phase 3: Homepage - Above Fold
- [ ] Build `Hero` Section.
- [ ] Implement Animated Text Gradients.
- [ ] Add "Trust Bar" marquee.

### Phase 4: Homepage - The Story
- [ ] Build `ProblemGrid` (Agitation).
- [ ] Build `SolutionShowcase` (Interactive Toggle).
- [ ] Build `ThreeStepPlan` (Process).
- [ ] Build `Testimonials` (Social Proof).

### Phase 5: Final Polish
- [ ] Add `Hero` 3D/Abstract element.
- [ ] Tune all Framer Motion start/end states.
- [ ] Mobile Responsiveness Audit.
- [ ] SEO Meta Tags (Title, Description, OG Images).

---

**End of Implementation Plan**
