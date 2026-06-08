# shtarun.github.io

Personal portfolio website for **Tarun Sharma**, deployed at [shtarun.github.io](https://shtarun.github.io) via GitHub Pages.

Built with **SvelteKit 2** + **Svelte 5**, statically rendered via `@sveltejs/adapter-static`, and deployed automatically via GitHub Actions on push to `master`.

> Originally forked from academicpages (Jekyll/Minimal Mistakes). The legacy Jekyll files (`_pages/`, `_posts/`, `_sass/`, `_config.yml`, etc.) are still present in the repo but are **not used** by the new site. The active site is entirely in `src/` and `static/`.

## Running locally

```bash
npm install
npm run dev        # dev server at localhost:5173
npm run build      # static build → build/
npm run preview    # preview the built site
```

## Deploying

Deployment is automatic — push to `master` and GitHub Actions builds and deploys via `.github/workflows/deploy.yml`.

Requires GitHub Pages source to be set to **GitHub Actions** in repo settings (Settings → Pages → Source).

## Project structure

### SvelteKit app (the active site)

```
src/
├── app.html                         # HTML shell
├── routes/
│   ├── +page.svelte                 # Single-page layout (all sections)
│   ├── +layout.svelte               # Root layout (Nav, global styles)
│   └── +layout.ts                   # Prerender config
└── lib/
    ├── components/                   # UI components
    │   ├── Hero.svelte              # Landing hero with photo + tagline
    │   ├── About.svelte             # Bio section
    │   ├── Experience.svelte        # Work timeline
    │   ├── Education.svelte         # Education cards
    │   ├── Skills.svelte            # Skill categories (bento grid)
    │   ├── Projects.svelte          # Academic & personal projects
    │   ├── Publications.svelte      # Research papers
    │   ├── Leadership.svelte        # Campus leadership roles
    │   ├── Contact.svelte           # Contact links
    │   ├── Nav.svelte               # Sticky top nav
    │   ├── BentoGrid.svelte         # Responsive grid layout
    │   ├── BentoCard.svelte         # Animated card component
    │   ├── Timeline.svelte          # Timeline wrapper
    │   ├── TimelineNode.svelte      # Timeline entry
    │   ├── Modal.svelte             # Detail modal
    │   ├── Badge.svelte / Tag.svelte
    │   ├── SectionLabel.svelte      # Section header
    │   ├── GlowLine.svelte          # Decorative divider
    │   └── ParticleCanvas.svelte    # Background particle animation
    ├── data/                         # All content as TypeScript data files
    │   ├── experience.ts
    │   ├── education.ts
    │   ├── skills.ts
    │   ├── projects.ts
    │   ├── publications.ts
    │   ├── leadership.ts
    │   └── meta.ts                  # Site metadata, social links
    ├── actions/
    │   └── inview.ts                # Intersection observer action
    └── styles/
        └── global.css               # Global styles + CSS variables
```

### Static assets

```
static/
├── .nojekyll                        # Prevents GitHub Pages Jekyll processing
├── files/
│   └── Biodata_Tarun_Sharma.pdf     # Downloadable resume
└── images/
    ├── tarunsharma.jpeg             # Headshot used in Hero
    ├── Photo_Self/                  # Photo variants (Diwali, PP_White, etc.)
    ├── logos/                       # Company/institution logos
    │   ├── twinity.png
    │   ├── jlr.png
    │   ├── mks.svg
    │   ├── iitk.svg
    │   ├── eta.png
    │   └── tata-steel.png
    ├── ETA_Logo_H200.png
    └── Tata_Steel_Logo_H200.png
```

### Legacy files (not used by the new site)

These are from the original academicpages Jekyll template and remain in the repo for reference:

| Path | Contents |
|------|----------|
| `_pages/` | Jekyll markdown pages (about, cv, portfolio, etc.) |
| `_posts/` | Template blog posts |
| `_publications/` | Template publication entries |
| `_projects/` | Academic project write-ups |
| `_portfolio/` | Tata Steel / ETA internship write-ups |
| `_teaching/` | TA role entries |
| `_talks/` | Template talk entries |
| `_data/` | Jekyll data (navigation, authors) |
| `_layouts/`, `_includes/`, `_sass/` | Jekyll theme templates & styles |
| `_config.yml`, `_config.dev.yml` | Jekyll configuration |
| `Gemfile` | Ruby dependencies (Jekyll) |
| `assets/` | Legacy CSS, fonts, JS |
| `images/` | Legacy image assets (also some used by static/) |
| `files/` | PDFs — project reports, certificates, resume |
| `markdown_generator/` | Python/Jupyter scripts for generating Jekyll content |
| `talkmap/` | Leaflet-based talk location map |

### Other files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Full profile & project context for Claude Code |
| `MASTER_RESUME_TARUN_SHARMA.txt` | Plain-text master resume |
| `Profile.pdf` | LinkedIn export |
| `svelte.config.js` | SvelteKit config (adapter-static) |
| `vite.config.ts` | Vite config |
| `tsconfig.json` | TypeScript config |
| `.github/workflows/deploy.yml` | GitHub Actions deploy (auto on push to master) |
