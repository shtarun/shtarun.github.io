# Portfolio Redesign — Design Spec

**Date:** 2026-05-22
**Author:** Tarun Sharma + Claude
**Status:** Draft

---

## 1. Overview

Rebuild shtarun.github.io from scratch as a futuristic, AI-themed personal portfolio for Tarun Sharma. The site positions Tarun as an agentic AI builder through its design language — not through AI chatbot features, but through visual identity that screams AI/tech at every level.

**Target audience:** General professional brand — VCs, potential hires, enterprise clients, and peers should all come away impressed.

**Core principle:** "All things AI" expressed through design, not functionality. The website itself is the proof of taste and technical capability.

---

## 2. Tech Stack

**Framework:** SvelteKit with static adapter for GitHub Pages deployment.

**Why SvelteKit:**
- First-class animation support with built-in transitions and motion primitives (`svelte/transition`, `svelte/animate`, `svelte/motion`)
- Compiles to minimal vanilla JS — critical for a heavy-animation site to stay performant
- Component-based architecture keeps complex visual sections maintainable
- Static adapter generates pure HTML/CSS/JS that deploys directly to GitHub Pages via a GitHub Actions build step

**Key dependencies:**
- **SvelteKit** — framework + static site generation
- **Canvas API** (native) — particle network background (no external particle library needed, custom implementation for full control)
- **svelte/motion** — spring/tweened animations for scroll-triggered effects
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono

**Build & deploy:**
- `npm run dev` — local dev server with HMR
- `npm run build` — static build via `@sveltejs/adapter-static`
- GitHub Actions workflow: on push to `master`, build and deploy to GitHub Pages

**No external CSS frameworks.** All styling is custom — the visual identity is too specific for Tailwind or similar to be a net positive here.

---

## 3. Visual System

### 3.1 Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#0a0a0f` | Primary background |
| `--bg-shift` | `#0f0a1a` | Alternate section background for depth |
| `--bg-card` | `rgba(255,255,255,0.03)` | Card backgrounds |
| `--bg-card-hover` | `rgba(255,255,255,0.06)` | Card hover state |
| `--primary` | `#7c3aed` | Electric purple — glowing elements, active states |
| `--secondary` | `#06b6d4` | Cyan — links, secondary accents, particle connections |
| `--accent` | `#f59e0b` | Warm amber — awards, badges, callouts (sparingly) |
| `--text-primary` | `#ffffff` | Headings |
| `--text-secondary` | `#a1a1aa` | Body text |
| `--text-muted` | `#52525b` | Tertiary text, labels |

### 3.2 Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Headings | Space Grotesk | 600–700 | Geometric, modern, techy |
| Body | Inter | 300–500 | Clean readability on dark backgrounds |
| Mono/labels | JetBrains Mono | 400–500 | Dates, tags, section labels, technical metadata |

### 3.3 Recurring Visual Motifs

- **Particle network background:** Custom canvas-based particle system. Nodes float and drift. Connections draw between nearby particles. Particles near the cursor form connections to it. Density and color shift subtly per section.
- **Glassmorphic surfaces:** Semi-transparent card backgrounds with `backdrop-filter: blur()` and thin borders. On hover, a gradient border traces in (using mask-composite trick).
- **Glow lines:** Horizontal gradient lines (`transparent → purple → cyan → transparent`) used as section dividers.
- **Circuit-trace animations:** Accent lines that draw themselves on scroll (SVG path animation or CSS clip-path).
- **Grain/noise texture:** SVG-based noise overlay at low opacity for depth and tactile quality.
- **Monospace labels:** Section labels prefixed with `//` in monospace (e.g., `// experience`, `// projects`).
- **Scroll-triggered fade-ins:** Elements fade up (opacity 0 → 1, translateY 30px → 0) when entering viewport. Staggered per-card in grids.

---

## 4. Page Structure & Sections

The site is a single-page scrolling experience with smooth-scroll anchor navigation. No separate routes — all content lives on one page with progressive disclosure (expandable cards, "show more" toggles).

### 4.1 Floating Navigation

Fixed glassmorphic bar at the top center. Monospace link labels: `home · about · experience · projects · publications · contact`. Highlights active section based on scroll position. Hides on scroll-down, reappears on scroll-up. Collapses to hamburger on mobile.

### 4.2 Hero Section

Full-viewport. Centered content against the live particle network.

**Elements:**
- **Name:** "Tarun Sharma" in large gradient typography (white → purple → cyan). Subtle glow animation (alternating drop-shadow color).
- **Tagline:** "Building Digital Twin ecosystems for the future" — typed out character by character with a blinking cursor (monospace).
- **Subtitle:** "Founder & CEO @ Twinity Labs · ex-JLR · IIT Kanpur" in muted text.
- **Quick links:** Row of pill-shaped links (linkedin, github, resume.pdf, email) with subtle border and hover glow.
- **Scroll indicator:** "scroll" label + animated chevron at the bottom.

### 4.3 About Section

**Section label:** `// about`
**Heading:** "The intersection is where it gets interesting."
**Body:** 2–3 sentences capturing Tarun's cross-domain identity — mechanical engineering to automotive software to AI to entrepreneurship. Written in first person, conversational but authoritative.

**Stats row:** 4 key metrics with large gradient numbers:
- 5+ Years at JLR
- 450+ Repos Migrated
- 300+ Test Assets
- 1 Startup Founded

### 4.4 Experience Section (Bento Grid)

**Section label:** `// experience`
**Heading:** "Where I've built things."

Bento grid layout with differently-sized glassmorphic cards. Each card has:
- Optional badge (e.g., "★ current" for Twinity Labs, "patent" for trainee role)
- Role title (heading)
- Company + date range (monospace meta)
- 1–3 sentence summary
- Tech tags (colored pills — purple for core tech, cyan for tools, amber for special callouts)

**Card sizing strategy:**
- **Wide (span 2):** Twinity Labs (current, featured), Senior SWE SDV (most recent JLR)
- **Tall (span 2 rows):** SWE SDV Nov 2023–Feb 2025 (most content-rich role)
- **Standard (1×1):** Innovation Champion, GTP, Graduate Trainee, Project Engineer, internships

**Expandable detail:** Each card is clickable. Clicking opens a centered modal overlay with backdrop blur showing the full bullet-point detail from CLAUDE.md. A close button (X) and clicking outside the modal dismisses it. This keeps the grid scannable while making the full story available.

**Grid layout (desktop, 4 columns):**
```
[ Twinity Labs (wide, col 1-2)  ] [ Senior SWE SDV (wide, col 3-4)  ]
[ Innovation (1) ] [ SWE SDV (2, tall) ] [ GTP (3)          ] [ Grad Trainee (4) ]
[ Proj Eng (1)   ] [ SWE SDV (cont)    ] [ ETA Intern (3)   ] [ Tata Intern (4)  ]
```

Responsive: 2 columns on tablet, 1 column on mobile (all cards become standard width).

### 4.5 Projects Section (Bento Grid)

**Section label:** `// projects`
**Heading:** "Things I've made."

Another bento grid for academic/engineering projects. Grouped visually:

**Featured (wide cards):**
- Master's Thesis: Railway bogie redesign — adopted by Indian Railways (highlight with amber badge "adopted by Indian Railways")
- B.Tech Project: Electromagnetic Actuator

**Standard cards:**
- Railway Vehicle Dynamics (Simpack, MATLAB)
- Machine Tool Deformance (Boring Bar)
- Railway Couplers FEA
- Robot Arm Motion Planning
- Helicopter Trim Analysis
- Inverted Pendulum Control
- Document Shredder Mechanism

**Online courses card (wide):** Deeplearning.ai specialization — Neural Style Transfer, YOLO, Face Recognition, DNNs. Single card with tag cloud.

Each project card shows: title, date (monospace), supervisor, 1-line description, and tech tags. Clicking expands to full bullet-point detail.

### 4.6 Career Timeline (Neural Pathway)

A separate section below the experience bento grid, providing a chronological narrative view. Not a toggle — both views exist on the page (bento for scanning, timeline for storytelling).

- A vertical glowing line (gradient: purple → cyan) serves as the spine
- Each career chapter is a node on the line — a glowing dot with a horizontal connection to a content card
- Nodes pulse gently. The line animates as you scroll (draws itself downward).
- Content cards appear to the right of each node with role, company, date, and key bullets.
- The top node (Twinity Labs) glows brightest. Earlier nodes progressively dim.

This section provides a chronological narrative complement to the scannable bento grid.

### 4.7 Publications Section

**Section label:** `// publications`

Single publication card with left accent gradient bar (purple → cyan). Shows title, authors (Tarun's name bolded), venue, and year. Link to PDF.

### 4.8 Skills & Domains Section

**Section label:** `// skills & domains`

Bento grid of 4 wide cards, each containing a tag cloud:
- **Software & DevOps:** Python, Rust, C++, FastAPI, Linux Kernel, GitLab CI, OpenTofu, Podman, BuildStream, CMake, Ninja, Meson
- **AI / ML:** LSTM, Neural Style Transfer, YOLO, Audio Processing, Face Recognition, Spectrograms, ML Surrogates, Predictive Maintenance
- **Cloud & Infrastructure:** AWS (S3, Lambda, EC2, Redshift), GCP, Tableau, RTI DDS
- **Mechanical & Simulation:** ANSYS, Abaqus, COMSOL, SolidWorks, Simpack, MATLAB, FEA, Multibody Dynamics

Tags use domain-specific colors: purple for software, cyan for cloud, amber for mechanical.

### 4.9 Teaching & Leadership Section

**Section label:** `// teaching & leadership`

Compact bento grid (3 cards):
- **Teaching:** TA for Engineering Graphics (100+ students) and Advanced Mechanics of Solids (100+ students) at IIT Kanpur.
- **President, AME:** Led 15-member team, managed 1.5L budget, 700+ students, organized MathWorks/Ansys trainings.
- **Awards:** JLR GDD Hackathon 1st Runner Up (gaze-controlled HUDs), Asha Khanna Award (nationwide top scorer in Mathematics, ISC 2015), JEE Advanced/Main.

### 4.10 Education Section

**Section label:** `// education`

Minimal — two entries:
- **IIT Kanpur** — B.Tech-M.Tech Dual Degree, Mechanical Engineering (2015–2020)
- **Loyola School, Jamshedpur** — Mathematics & Computer Science (2002–2015)

Styled as timeline nodes or simple glassmorphic cards.

### 4.11 Contact / Footer

**Section label:** `// let's connect`

Centered layout with:
- Quote: "Courage is willingness to take the risk once you know the odds..." — Daniel Kahneman
- Contact links row: Email, LinkedIn, GitHub, Instagram — same pill-link style as hero
- Downloadable resume link
- Small footer credit

---

## 5. Interactions & Animations

### 5.1 Particle Network (Canvas)

Custom implementation on a fixed `<canvas>` behind all content.

- 100–150 particles, drifting slowly with random velocity vectors
- Connections drawn between particles within 120px distance (cyan, fading with distance)
- Mouse proximity (150px radius) creates connections from cursor to nearby particles (purple)
- Canvas height spans the full scroll height of the page
- Scroll offset adjusts rendering position so particles appear fixed in the background
- Performance: `requestAnimationFrame` loop. Particle count reduced on mobile (60–80).

### 5.2 Scroll Animations

Using Svelte's `IntersectionObserver` action (or a custom `use:inview` action):

- **Fade-up:** Default for all sections. Opacity 0→1, translateY 30px→0, 800ms ease.
- **Staggered grid:** Bento cards fade in with 100ms stagger per card (first card, then second 100ms later, etc.)
- **Timeline draw:** The vertical glow line animates its height from 0 to full as you scroll through the timeline section (CSS `clip-path` or SVG `stroke-dashoffset`).
- **Stats counter:** Numbers count up from 0 to final value when entering viewport (using `svelte/motion` tweened store).
- **Glow lines:** Section divider lines expand from center outward on scroll.

### 5.3 Card Interactions

- **Hover:** Background brightens, subtle upward translate (2px), gradient border fades in, box-shadow with purple glow.
- **Click/expand:** Opens a centered modal overlay with backdrop blur showing full detail bullets. Smooth scale-up entrance animation.
- **Tags:** Subtle scale on hover.

### 5.4 Navigation

- Scroll-spy highlights current section link.
- Hide on scroll-down, show on scroll-up (with smooth transform transition).
- Smooth-scroll to section anchors on click.

---

## 6. Responsive Behavior

| Breakpoint | Grid | Nav | Particles | Notes |
|---|---|---|---|---|
| > 1200px (desktop) | 4-column bento | Full glassmorphic bar | 150 particles | Full experience |
| 768–1200px (tablet) | 2-column bento | Full bar, smaller text | 100 particles | Wide/featured cards span 2 |
| < 768px (mobile) | 1-column stack | Hamburger menu | 60 particles | All cards full-width, timeline stays vertical |

Hero text scales via `clamp()`. Cards stack gracefully. Particle count drops for performance.

---

## 7. Deployment

**Hosting:** GitHub Pages from the `master` branch (or a `gh-pages` branch built by Actions).

**GitHub Actions workflow:**
1. Trigger on push to `master`
2. Install Node.js and dependencies
3. `npm run build` — SvelteKit static adapter outputs to `build/`
4. Deploy `build/` to GitHub Pages

**Domain:** `shtarun.github.io` (existing). No custom domain needed initially.

**Static assets:** Profile photos, PDFs, and certificates from the existing `images/` and `files/` directories are copied into SvelteKit's `static/` folder so they remain accessible at the same URLs.

---

## 8. Content Data Architecture

All content lives in structured JS/TS data files (not markdown). This keeps things simple and avoids the overhead of a CMS or markdown processing.

```
src/
  lib/
    data/
      experience.ts    — career roles with full detail bullets
      projects.ts      — academic/engineering projects
      skills.ts        — categorized skill tags
      education.ts     — education entries
      publications.ts  — publication entries
      leadership.ts    — teaching, campus roles, awards
      meta.ts          — personal info, links, quotes
```

Each file exports typed arrays/objects. Components import directly. No API calls, no build-time data fetching — pure static data baked into the bundle.

---

## 9. Component Architecture

```
src/
  routes/
    +page.svelte         — single-page layout, imports all sections
    +layout.svelte       — global styles, font loading, particle canvas
  lib/
    components/
      Nav.svelte           — glassmorphic floating nav with scroll-spy
      Hero.svelte          — hero section with typing animation
      About.svelte         — about text + stats counter row
      BentoGrid.svelte     — reusable bento grid container
      BentoCard.svelte     — glassmorphic card with expand behavior
      Timeline.svelte      — neural pathway timeline
      TimelineNode.svelte  — individual timeline entry
      Publications.svelte  — publication card
      Skills.svelte        — skills bento with tag clouds
      Leadership.svelte    — teaching + campus roles + awards
      Education.svelte     — education entries
      Contact.svelte       — footer with quote + links
      ParticleCanvas.svelte — canvas particle network (fixed background)
      SectionLabel.svelte  — reusable "// label" component
      GlowLine.svelte      — animated section divider
      Tag.svelte            — colored tag pill
      Badge.svelte          — featured/award badge
    actions/
      inview.ts            — IntersectionObserver Svelte action for scroll animations
    styles/
      global.css           — CSS custom properties, resets, font imports
    data/
      (as described above)
  static/
    images/                — profile photos, logos
    files/                 — PDFs, reports, certificates
    favicon.ico
```

---

## 10. Performance Considerations

- **Particle system:** `requestAnimationFrame` loop with reduced particle count on mobile. Canvas only renders particles near the current viewport (skip particles more than 1 viewport height above/below scroll position).
- **Font loading:** `font-display: swap` to avoid layout shift. Preconnect to Google Fonts.
- **Images:** Lazy-load any images below the fold. Profile photo in hero is preloaded.
- **CSS:** No framework overhead. All custom, shipped as part of Svelte's scoped styles.
- **JS bundle:** SvelteKit compiles components to minimal vanilla JS. No React/Vue runtime. Expected total JS under 50KB gzipped.
- **Accessibility:** Reduced-motion media query disables particle animation and scroll effects. All interactive elements keyboard-navigable. Semantic HTML throughout.

---

## 11. Out of Scope

- AI chatbot or any interactive AI features (explicit user decision)
- Blog/posts section (no blog content exists; can be added later)
- CMS or markdown-based content management
- Custom domain setup
- Analytics integration (can be added post-launch)
- Dark/light theme toggle (site is dark-only by design)
- Talks section (commented out in current site, no content)
