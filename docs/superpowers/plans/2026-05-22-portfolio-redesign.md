# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a futuristic, AI-themed personal portfolio at shtarun.github.io using SvelteKit with a neural-network particle background, bento grid layouts, glassmorphic cards, and scroll-driven animations.

**Architecture:** Single-page SvelteKit app with static adapter for GitHub Pages. All content in typed TS data files. Canvas-based particle system as fixed background. Section components composed on one route. Modal overlays for progressive content disclosure.

**Tech Stack:** SvelteKit 2 + Svelte 5 (runes), `@sveltejs/adapter-static`, Canvas API, Google Fonts (Space Grotesk, Inter, JetBrains Mono), GitHub Actions for deployment.

**Design spec:** `docs/superpowers/specs/2026-05-22-portfolio-redesign-design.md`
**Content data:** `CLAUDE.md` (comprehensive profile data)

---

## Task 1: Scaffold SvelteKit Project

**Files:**
- Create: `svelte.config.js`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `package.json`
- Create: `src/app.html`
- Create: `src/routes/+layout.svelte`
- Create: `src/routes/+layout.ts`
- Create: `src/routes/+page.svelte`
- Create: `src/lib/styles/global.css`
- Create: `static/.nojekyll`
- Modify: `.gitignore`

- [ ] **Step 1: Create the SvelteKit project**

Run from the repo root. We scaffold manually instead of using `npx sv create` to avoid overwriting existing files.

```bash
npm init -y
npm install -D @sveltejs/kit @sveltejs/adapter-static svelte vite @sveltejs/vite-plugin-svelte typescript
```

- [ ] **Step 2: Create `svelte.config.js`**

```js
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		}
	}
};

export default config;
```

- [ ] **Step 3: Create `vite.config.ts`**

```ts
// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});
```

- [ ] **Step 4: Create `tsconfig.json`**

```json
{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true,
		"moduleResolution": "bundler"
	}
}
```

- [ ] **Step 5: Create `src/app.html`**

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
		<title>Tarun Sharma — Builder of Digital Twins</title>
		<meta name="description" content="Tarun Sharma — Founder & CEO at Twinity Labs. Building Digital Twin ecosystems. Ex-JLR, IIT Kanpur." />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```

- [ ] **Step 6: Create `src/lib/styles/global.css`**

```css
/* src/lib/styles/global.css */
*, *::before, *::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--bg-base: #0a0a0f;
	--bg-shift: #0f0a1a;
	--bg-card: rgba(255, 255, 255, 0.03);
	--bg-card-hover: rgba(255, 255, 255, 0.06);
	--border-glow: rgba(124, 58, 237, 0.3);
	--border-glow-hover: rgba(124, 58, 237, 0.6);
	--primary: #7c3aed;
	--primary-glow: rgba(124, 58, 237, 0.4);
	--secondary: #06b6d4;
	--secondary-glow: rgba(6, 182, 212, 0.4);
	--accent: #f59e0b;
	--text-primary: #ffffff;
	--text-secondary: #a1a1aa;
	--text-muted: #52525b;
	--font-heading: 'Space Grotesk', sans-serif;
	--font-body: 'Inter', sans-serif;
	--font-mono: 'JetBrains Mono', monospace;
}

html {
	scroll-behavior: smooth;
}

body {
	background: var(--bg-base);
	color: var(--text-primary);
	font-family: var(--font-body);
	line-height: 1.6;
	overflow-x: hidden;
}

body::after {
	content: '';
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
	pointer-events: none;
	z-index: 1;
	opacity: 0.5;
}

@media (prefers-reduced-motion: reduce) {
	*, *::before, *::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}
```

- [ ] **Step 7: Create `src/routes/+layout.svelte`**

```svelte
<!-- src/routes/+layout.svelte -->
<script>
	import '$lib/styles/global.css';
	let { children } = $props();
</script>

<div class="app">
	{@render children()}
</div>

<style>
	.app {
		position: relative;
		z-index: 2;
	}
</style>
```

- [ ] **Step 8: Create `src/routes/+layout.ts`**

```ts
// src/routes/+layout.ts
export const prerender = true;
export const trailingSlash = 'always';
```

- [ ] **Step 9: Create `src/routes/+page.svelte` (placeholder)**

```svelte
<!-- src/routes/+page.svelte -->
<section style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
	<h1 style="font-family: var(--font-heading); font-size: 3rem;">Tarun Sharma</h1>
</section>
```

- [ ] **Step 10: Create `static/.nojekyll` and update `.gitignore`**

Create an empty `static/.nojekyll` file (prevents GitHub Pages from using Jekyll).

Update `.gitignore` to:
```
.svelte-kit/
node_modules/
build/
.DS_Store
.preview/
.superpowers/
```

- [ ] **Step 11: Copy static assets**

```bash
mkdir -p static/images static/files
cp -r images/Photo_Self static/images/
cp images/Tata_Steel_Logo_H200.png static/images/
cp images/ETA_Logo_H200.png static/images/
cp files/Biodata_Tarun_Sharma.pdf static/files/
```

- [ ] **Step 12: Verify dev server starts**

```bash
npx vite dev --port 5173
```

Expected: Dev server starts, visiting `http://localhost:5173` shows "Tarun Sharma" heading on a dark background.

- [ ] **Step 13: Commit**

```bash
git add svelte.config.js vite.config.ts tsconfig.json package.json package-lock.json src/ static/.nojekyll .gitignore
git commit -m "feat: scaffold SvelteKit project with static adapter and global styles"
```

---

## Task 2: Content Data Files

**Files:**
- Create: `src/lib/data/meta.ts`
- Create: `src/lib/data/experience.ts`
- Create: `src/lib/data/projects.ts`
- Create: `src/lib/data/skills.ts`
- Create: `src/lib/data/education.ts`
- Create: `src/lib/data/publications.ts`
- Create: `src/lib/data/leadership.ts`

- [ ] **Step 1: Create `src/lib/data/meta.ts`**

```ts
// src/lib/data/meta.ts
export const meta = {
	name: 'Tarun Sharma',
	tagline: 'Building Digital Twin ecosystems for the future',
	subtitle: 'Founder & CEO @ Twinity Labs · ex-JLR · IIT Kanpur',
	bio: "I build at the crossroads of mechanical engineering, software, and AI. From redesigning railway suspensions adopted by Indian Railways, to architecting software-defined vehicle platforms at JLR, to now building Digital Twin solutions at Twinity Labs — I'm drawn to problems that live at the intersection of fields.",
	email: 'work.tarunsharma@gmail.com',
	phone: '+91-7703090720',
	location: 'Bengaluru, India',
	avatar: '/images/Photo_Self/Diwali_NoBackground_Sq.png',
	resumeUrl: '/files/Biodata_Tarun_Sharma.pdf',
	links: {
		linkedin: 'https://www.linkedin.com/in/tarunsha',
		github: 'https://github.com/shtarun',
		instagram: 'https://instagram.com/i.am.tarun',
		email: 'mailto:work.tarunsharma@gmail.com'
	},
	stats: [
		{ value: '5+', label: 'Years at JLR' },
		{ value: '450+', label: 'Repos Migrated' },
		{ value: '300+', label: 'Test Assets' },
		{ value: '1', label: 'Startup Founded' }
	],
	quote: {
		text: 'Courage is willingness to take the risk once you know the odds. Optimistic overconfidence means you are taking the risk because you don\'t know the odds. It\'s a big difference.',
		author: 'Daniel Kahneman'
	}
} as const;
```

- [ ] **Step 2: Create `src/lib/data/experience.ts`**

```ts
// src/lib/data/experience.ts
export type TagColor = 'purple' | 'cyan' | 'amber';

export interface ExperienceEntry {
	id: string;
	role: string;
	company: string;
	date: string;
	location: string;
	summary: string;
	details: string[];
	tags: { label: string; color: TagColor }[];
	badge?: string;
	gridSize: 'standard' | 'wide' | 'tall';
}

export const experience: ExperienceEntry[] = [
	{
		id: 'twinity',
		role: 'Founder & CEO',
		company: 'Twinity Labs',
		date: 'sept 2025 — present',
		location: 'Bengaluru, India',
		summary: 'Building an applied Digital Twin solutions venture; defining product vision, early GTM, partnerships, and pilot scoping with industrial clients.',
		details: [
			'Building an applied Digital Twin solutions venture',
			'Defining product vision, early GTM, partnerships, and pilot scoping with industrial clients'
		],
		tags: [
			{ label: 'Digital Twins', color: 'purple' },
			{ label: 'ML Surrogates', color: 'cyan' },
			{ label: 'Industrial IoT', color: 'purple' }
		],
		badge: '★ current',
		gridSize: 'wide'
	},
	{
		id: 'jlr-senior',
		role: 'Senior SWE — Software-Defined Vehicles',
		company: 'Jaguar Land Rover',
		date: 'jan 2025 — aug 2025',
		location: 'Bengaluru, India',
		summary: 'Zero-downtime migration of 450+ repos. Platform-agnostic CI/CD. Open-source IaC stack (OpenTofu, BuildBarn, Lorry).',
		details: [
			'Triggered enterprise-wide shift from commercial Terraform to OpenTofu, refactoring shared modules, remote state backends, and CI workflows',
			'Orchestrated zero-downtime migration of 450+ GitLab repos, Podman base images, and infra into JLR — kept Central Compute Module builds green',
			'Provisioned a fresh AWS account, aligning security, access, and cost controls with program growth',
			'Released MR1 pipeline with SoC/MCU parity — shrinking duplication and accelerating reuse across programs',
			'Published a standardized repo template for SDV platform integration in hours instead of days',
			'Rebuilt and validated the CCMA MCU integrated image for NXP S32N board under CI',
			'Secured alignment from senior stakeholders on SDV GitLab restructuring',
			'Enabled automated flashing in MR1 & MR2 for Central Compute Module\'s MCU'
		],
		tags: [
			{ label: 'OpenTofu', color: 'purple' },
			{ label: 'GitLab CI', color: 'cyan' },
			{ label: 'NXP S32N', color: 'purple' }
		],
		gridSize: 'wide'
	},
	{
		id: 'jlr-innovation',
		role: 'Innovation Champion — Open Innovation Hub',
		company: 'Jaguar Land Rover',
		date: 'dec 2024 — aug 2025',
		location: 'Bengaluru, India',
		summary: 'Led Digital Twin push with IndusTANTRA. Cross-functional innovation via Plug and Play startup collaborations.',
		details: [
			'Championed cross-functional innovation — identified business gaps and drove end-to-end startup collaborations via Plug and Play, owning discovery → scouting → PoC → funding',
			'Led JLR\'s Digital Twin push — engaged IndusTANTRA (Prof. N.S. Vyas, IIT Kanpur), reduced engagement turnaround from months to under 4 weeks, launched ML surrogate-modeling pilots'
		],
		tags: [
			{ label: 'Innovation', color: 'amber' },
			{ label: 'Digital Twins', color: 'purple' }
		],
		gridSize: 'standard'
	},
	{
		id: 'jlr-swe-sdv',
		role: 'SWE — Software-Defined Vehicles',
		company: 'Jaguar Land Rover',
		date: 'nov 2023 — feb 2025',
		location: 'Bengaluru, India',
		summary: 'Presented to Boards of JLR & Tata Motors. Led OS/BSP bring-up. Built deterministic platform services. AWS boot observability pipeline. ASIL-B certification leadership.',
		details: [
			'Presented multiple times to the Boards of JLR and Tata Motors on base OS/platform progress, aligning leadership on scope, risks, and milestones',
			'Drove ASIL-B certification plans for a safety-qualified Linux platform aligned to ISO 26262',
			'Maintained CCMA SoC MR2 repo; integrated Podman via BuildStream and standardized builds with CMake, Ninja, Meson',
			'Led board bring-up for OS and BSP integration — Linux kernel, network interfaces, systemd services for stable boots',
			'Implemented a Deterministic Construction Service with Codethink for JLR\'s custom Linux OS',
			'Integrated AWS, Alexa, and RTI DDS for in-vehicle connectivity, telemetry, and IPC',
			'Built automated AWS (S3, Lambda, EC2, Redshift) boot observability pipeline feeding Tableau dashboards',
			'Contributed to fault manager architecture and Safe Linux prototype (SCHED_DEADLINE kernel)',
			'Co-delivered integrated image and SDK with Codethink',
			'Mentored 4 interns on Rust vs C++ trade-offs (outcomes led to PPOs), managed 2 fresh graduates'
		],
		tags: [
			{ label: 'Linux Kernel', color: 'purple' },
			{ label: 'BuildStream', color: 'cyan' },
			{ label: 'ISO 26262', color: 'amber' },
			{ label: 'AWS', color: 'cyan' }
		],
		gridSize: 'tall'
	},
	{
		id: 'jlr-gtp',
		role: 'SWE — Global Testing Platform',
		company: 'Jaguar Land Rover',
		date: 'sept 2022 — feb 2024',
		location: 'Bengaluru, India',
		summary: 'Python Test Executable Generator. FastAPI microservice for GCP state. 300+ test assets across dSPACE/Vector/NI.',
		details: [
			'Architected a Python-based Test Executable Generator using factory/builder patterns for E2E automated test execution across dSPACE, Vector, NI on 300+ global test assets',
			'Developed "Mars Attacks," a FastAPI microservice for processing GCP data and enhancing test environment visibility',
			'Streamlined CI/CD pipelines with validation tests and automated test environment cleanup to reduce infra costs'
		],
		tags: [
			{ label: 'Python', color: 'purple' },
			{ label: 'FastAPI', color: 'cyan' }
		],
		gridSize: 'standard'
	},
	{
		id: 'jlr-trainee',
		role: 'Graduate Trainee',
		company: 'Jaguar Land Rover',
		date: 'sept 2020 — aug 2022',
		location: 'Bengaluru, India',
		summary: 'Predictive maintenance (LSTM, spectrograms). VR/XR demos for the Board. Audio-ML pipelines. Patent pending.',
		details: [
			'Engaged in predictive maintenance research using LSTM, focusing on spectrograms, clustering, and image processing — concept now with patent office',
			'Collaborated on Virtual & Extended Reality experiences, presenting innovative solutions to the Board of Directors',
			'Contributed to data pipelines, ML models for audio signal analysis, and Software-in-Loop testing',
			'Provided technical mentorship, hiring process participation, and IIT Kanpur recruitment liaison'
		],
		tags: [
			{ label: 'LSTM', color: 'purple' },
			{ label: 'Patent', color: 'amber' }
		],
		gridSize: 'standard'
	},
	{
		id: 'iitk-pe',
		role: 'Project Engineer',
		company: 'IIT Kanpur',
		date: 'jul — sept 2020',
		location: 'Kanpur, India',
		summary: 'MagRail prototype for Hyper Poland (Nevomo). Problem statement and solution framing under Prof. N.S. Vyas.',
		details: [
			'Framed the problem statement and approach for a MagRail prototype project by Hyper Poland (currently Nevomo) under Prof. Nalinaksh S. Vyas'
		],
		tags: [
			{ label: 'MagRail', color: 'purple' }
		],
		gridSize: 'standard'
	},
	{
		id: 'eta',
		role: 'Summer Intern',
		company: 'ETA Technology',
		date: 'may — jul 2018',
		location: 'Bengaluru, India',
		summary: 'Hydrostatic bearing design (60,000 kgf), friction welding machine components, failure analysis.',
		details: [
			'Designed an axially frictionless Hydrostatic Bearing for 60,000 kgf of radial force',
			'Deployed Solidworks and AutoCAD for Friction Welding Machine components',
			'Optimized Electrical Upsetting and Metal Gathering Machine parameters',
			'Failure analysis and redesign of a broken Chamfering tool'
		],
		tags: [
			{ label: 'SolidWorks', color: 'amber' },
			{ label: 'FEA', color: 'amber' }
		],
		gridSize: 'standard'
	},
	{
		id: 'tata',
		role: 'Summer Intern',
		company: 'R&D, Tata Steel',
		date: 'may — jul 2017',
		location: 'Jamshedpur, India',
		summary: 'Tensile specimen modelling in Abaqus. Results contributed to new specimen design for automotive applications.',
		details: [
			'Modelled tensile specimen using Abaqus, focused on plastic region deformation for high strain rates',
			'Results contributed to designing new specimen for specific tests for automotive applications'
		],
		tags: [
			{ label: 'Abaqus', color: 'amber' }
		],
		gridSize: 'standard'
	}
];
```

- [ ] **Step 3: Create `src/lib/data/projects.ts`**

```ts
// src/lib/data/projects.ts
import type { TagColor } from './experience';

export interface ProjectEntry {
	id: string;
	title: string;
	date: string;
	supervisor?: string;
	course?: string;
	summary: string;
	details: string[];
	tags: { label: string; color: TagColor }[];
	badge?: string;
	reportUrl?: string;
	gridSize: 'standard' | 'wide';
}

export const projects: ProjectEntry[] = [
	{
		id: 'masters-thesis',
		title: 'Primary Suspension Redesign of Railway Bogie for Improved Fatigue Life',
		date: 'jul 2019 — sept 2020',
		supervisor: 'Prof. N.S. Vyas & Prof. C. Chandraprakash',
		summary: 'Redesigned FIAT type LHB bogie suspensions. Design improvements accepted by Indian Railways for production rollout.',
		details: [
			'Redesigned primary suspension of FIAT type LHB bogies used in Indian Railways',
			'Design improvements accepted by Indian Railways — rolling out in production for all FIAT type bogies in LHB Coaches'
		],
		tags: [
			{ label: 'MATLAB', color: 'amber' },
			{ label: 'ANSYS', color: 'amber' },
			{ label: 'FEA', color: 'amber' }
		],
		badge: 'Adopted by Indian Railways',
		reportUrl: '/files/Project_Reports/RRVD_Combined_Report.pdf',
		gridSize: 'wide'
	},
	{
		id: 'btp-actuator',
		title: 'Design & Development of an Electromagnetic Actuator',
		date: 'aug 2018 — apr 2019',
		supervisor: 'Prof. Mohit Law',
		summary: 'Built 1st-gen compact Moving Iron Type actuator for active damping. Peak force ~13N in 30–140 Hz range.',
		details: [
			'Developed 1st generation compact Moving Iron Type Linear Electromagnetic Actuator for active damping (target: 100N)',
			'Peak force ~13N in 30–140 Hz range; 100N achievable with design modifications',
			'Isolated natural frequency, obtained flat frequency response in 30–140 Hz',
			'Optimized spatial/functional parameters using COMSOL & FLUX for higher force-to-volume ratio',
			'Designed low-friction linear Flexural Bearing on DS Solidworks with fatigue analysis'
		],
		tags: [
			{ label: 'COMSOL', color: 'amber' },
			{ label: 'SolidWorks', color: 'amber' },
			{ label: 'MATLAB', color: 'amber' }
		],
		reportUrl: '/files/Project_Reports/BTP_Final_Report.pdf',
		gridSize: 'wide'
	},
	{
		id: 'multibody',
		title: 'Railway Vehicle Dynamics: Multi-Body Analytical Approach',
		date: 'jul — dec 2018',
		supervisor: 'Prof. N.S. Vyas',
		summary: 'Lateral/longitudinal dynamics modelling. Simpack rail-wheel pair, ANSYS APDL beam-with-moving-load.',
		details: [
			'Determined contact patch coordinates as function of lateral perturbation via kinematic equations',
			'Solved equations of motion iteratively on MATLAB to estimate critical speed of stability',
			'Observed railway coupler response by varying frequency, stiffness, friction, and slack',
			'Developed rail-wheel pair model in Simpack; motion on straight and curved tracks with uncertainties'
		],
		tags: [
			{ label: 'Simpack', color: 'amber' },
			{ label: 'MATLAB', color: 'amber' },
			{ label: 'ANSYS', color: 'amber' }
		],
		gridSize: 'standard'
	},
	{
		id: 'boring-bar',
		title: 'Structure Integrated Sensors & Actuators for Machine Tool Deformance',
		date: 'dec 2018 — feb 2019',
		supervisor: 'Prof. Mohit Law',
		summary: 'Tuned Mass Damped Boring Bar design. Modal testing with CutPro. Chatter elimination optimization.',
		details: [
			'Designed Tuned Mass Damped Boring Bar and Compression Holder using DS Solidworks',
			'Used CutPro for modal testing of Tuned Mass Damped and Eddy Current Damped Boring Bars',
			'Optimized mass and stiffness using Maple & MATLAB for chatter elimination and higher Material Removal Rate'
		],
		tags: [
			{ label: 'SolidWorks', color: 'amber' },
			{ label: 'MATLAB', color: 'amber' }
		],
		gridSize: 'standard'
	},
	{
		id: 'couplers-fea',
		title: 'FEA of Railway Couplers in LHB Coaches',
		date: 'aug — sept 2019',
		supervisor: 'Prof. N.S. Vyas',
		summary: 'FE models for Frontier Technologies. ANSYS analysis under Buff, Draft & Bending loads. Anti-climbing simulation at 45 tonnes.',
		details: [
			'Provided Frontier Technologies with FE models of Railway Couplers used in LHB Coaches',
			'ANSYS FEA under Buff, Draft & Bending — Von-Mises stress, total/directional deformation',
			'Simulated Anti Climbing Feature under 45 tonnes of force'
		],
		tags: [
			{ label: 'ANSYS', color: 'amber' },
			{ label: 'FEA', color: 'amber' }
		],
		gridSize: 'standard'
	},
	{
		id: 'robot-arm',
		title: 'Motion Planning of a 6 DOF Robot Arm Manipulator',
		date: 'sept — nov 2019',
		supervisor: 'Prof. Ashish Dutta',
		course: 'Robot Motion Planning',
		summary: 'C-Space computation, A* path planning, Rapidly Exploring Random Trees for mobile robot.',
		details: [
			'MATLAB C-Space of 3DOF & 2DOF Robot arm with obstacles',
			'Sampling-based planners (A* Algorithm) for path planning in presence of obstacles',
			'Rapidly Exploring Random Trees for mobile robot path planning'
		],
		tags: [
			{ label: 'MATLAB', color: 'amber' },
			{ label: 'Robotics', color: 'purple' }
		],
		gridSize: 'standard'
	},
	{
		id: 'helicopter',
		title: 'Helicopter Coupled Trim Analysis — UH-60A Black Hawk',
		date: 'aug — oct 2018',
		supervisor: 'Prof. Abhishek',
		course: 'Helicopter Dynamics & Aeroelasticity',
		summary: 'BEMT numerical solution, Newmark\'s algorithm for flap response, free flight coupled trim analysis.',
		details: [
			'Programmed numerical solution to combined blade-element/momentum theory (BEMT)',
			'Newmark\'s algorithm for flap response equation in coupled trim solution',
			'Free flight coupled trim — control angles, shaft angles, hub loads vs forward speed'
		],
		tags: [
			{ label: 'MATLAB', color: 'amber' }
		],
		gridSize: 'standard'
	},
	{
		id: 'inverted-pendulum',
		title: 'Output Feedback Stabilisation of Inverted Pendulum',
		date: 'aug — nov 2018',
		supervisor: 'Prof. Ramprasad Potluri',
		course: 'Basics of Modern Control',
		summary: 'Implemented research paper on stabilization with uncertainties. Extended High Gain Observers.',
		details: [
			'Implemented output feedback stabilization of inverted pendulum on a cart with uncertainties',
			'Investigated singularly perturbed closed loop system with Extended High Gain Observers',
			'MATLAB and Visio simulation for steady state feedback equations'
		],
		tags: [
			{ label: 'MATLAB', color: 'amber' },
			{ label: 'Control', color: 'purple' }
		],
		gridSize: 'standard'
	},
	{
		id: 'document-shredder',
		title: 'Document Shredder & Automated Box Shifting Mechanism',
		date: 'aug 2016 — apr 2017',
		supervisor: 'Prof. S.K. Choudhary & Prof. Rajiv Shekhar',
		course: 'TA201A / TA202A',
		summary: 'SolidWorks/AutoCAD modelling, CNC-fabricated prototypes, business plan & marketing brochure.',
		details: [
			'SolidWorks 2016 and AutoCAD 2015 for mechanism modelling',
			'Designed and fabricated prototypes using CNC, Lathe, and Drilling machines',
			'Costing Report, Business Plan and Marketing Brochure'
		],
		tags: [
			{ label: 'SolidWorks', color: 'amber' },
			{ label: 'AutoCAD', color: 'amber' }
		],
		gridSize: 'standard'
	},
	{
		id: 'dl-courses',
		title: 'Deep Learning Specialization Projects',
		date: '2019',
		summary: 'deeplearning.ai on Coursera — Neural Style Transfer (VGG-19), Car Detection (YOLO), Face Recognition (FaceNet), DNNs for binary classification.',
		details: [
			'Shallow neural network for binary classification (flower dots, 91.25% accuracy)',
			'Deep neural network for Cat vs Non-Cat images (80% accuracy)',
			'He initialization on 3-layer DNN (99% accuracy)',
			'Neural Style Transfer on VGG-19 (Louvre + Monet)',
			'Car Detection with YOLO',
			'Face Recognition & Verification with Keras/FaceNet and triplet loss'
		],
		tags: [
			{ label: 'Neural Networks', color: 'purple' },
			{ label: 'YOLO', color: 'purple' },
			{ label: 'Keras', color: 'cyan' },
			{ label: 'VGG-19', color: 'purple' }
		],
		gridSize: 'wide'
	}
];
```

- [ ] **Step 4: Create `src/lib/data/skills.ts`**

```ts
// src/lib/data/skills.ts
import type { TagColor } from './experience';

export interface SkillCategory {
	title: string;
	tags: { label: string; color: TagColor }[];
}

export const skills: SkillCategory[] = [
	{
		title: 'Software & DevOps',
		tags: [
			{ label: 'Python', color: 'purple' },
			{ label: 'Rust', color: 'purple' },
			{ label: 'C++', color: 'purple' },
			{ label: 'FastAPI', color: 'cyan' },
			{ label: 'Linux Kernel', color: 'purple' },
			{ label: 'GitLab CI', color: 'cyan' },
			{ label: 'OpenTofu', color: 'purple' },
			{ label: 'Podman', color: 'cyan' },
			{ label: 'BuildStream', color: 'cyan' },
			{ label: 'CMake', color: 'purple' }
		]
	},
	{
		title: 'AI / ML',
		tags: [
			{ label: 'LSTM', color: 'purple' },
			{ label: 'Neural Style Transfer', color: 'cyan' },
			{ label: 'YOLO', color: 'purple' },
			{ label: 'Audio Processing', color: 'purple' },
			{ label: 'Face Recognition', color: 'cyan' },
			{ label: 'Spectrograms', color: 'purple' },
			{ label: 'ML Surrogates', color: 'cyan' },
			{ label: 'Predictive Maintenance', color: 'purple' }
		]
	},
	{
		title: 'Cloud & Infrastructure',
		tags: [
			{ label: 'AWS', color: 'cyan' },
			{ label: 'GCP', color: 'cyan' },
			{ label: 'S3', color: 'cyan' },
			{ label: 'Lambda', color: 'cyan' },
			{ label: 'EC2', color: 'cyan' },
			{ label: 'Redshift', color: 'cyan' },
			{ label: 'Tableau', color: 'cyan' },
			{ label: 'RTI DDS', color: 'purple' }
		]
	},
	{
		title: 'Mechanical & Simulation',
		tags: [
			{ label: 'ANSYS', color: 'amber' },
			{ label: 'Abaqus', color: 'amber' },
			{ label: 'COMSOL', color: 'amber' },
			{ label: 'SolidWorks', color: 'amber' },
			{ label: 'Simpack', color: 'amber' },
			{ label: 'MATLAB', color: 'amber' },
			{ label: 'FEA', color: 'amber' },
			{ label: 'Multibody Dynamics', color: 'amber' }
		]
	}
];
```

- [ ] **Step 5: Create `src/lib/data/education.ts`**

```ts
// src/lib/data/education.ts
export interface EducationEntry {
	institution: string;
	degree: string;
	years: string;
}

export const education: EducationEntry[] = [
	{
		institution: 'Indian Institute of Technology Kanpur',
		degree: 'B.Tech-M.Tech Dual Degree, Mechanical Engineering',
		years: '2015 – 2020'
	},
	{
		institution: 'Loyola School, Jamshedpur',
		degree: 'Mathematics & Computer Science',
		years: '2002 – 2015'
	}
];
```

- [ ] **Step 6: Create `src/lib/data/publications.ts`**

```ts
// src/lib/data/publications.ts
export interface Publication {
	title: string;
	authors: string;
	venue: string;
	year: number;
}

export const publications: Publication[] = [
	{
		title: 'Primary suspension failure analysis in FIAT type LHB bogies and life estimation',
		authors: 'R. Kumar, <strong>T. Sharma</strong>, A. Shekhar, N. S. Vyas',
		venue: 'Engineering Failure Analysis',
		year: 2022
	}
];
```

- [ ] **Step 7: Create `src/lib/data/leadership.ts`**

```ts
// src/lib/data/leadership.ts
export interface LeadershipEntry {
	title: string;
	items: string[];
}

export const teaching: LeadershipEntry = {
	title: 'Teaching',
	items: [
		'TA — Engineering Graphics (TA101A), IIT Kanpur: 100+ first-year UG students under Prof. Anupam Saxena & Prof. Bharat Lohani',
		'TA — Advanced Mechanics of Solids (ME321A), IIT Kanpur: 100+ junior UG students under Prof. Ishan Sharma'
	]
};

export const campusLeadership: LeadershipEntry = {
	title: 'President, Association of Mechanical Engineers',
	items: [
		'Led 15-member team managing interactions between 700+ students and 45+ faculties',
		'Sole incharge of 1.5 Lacs budget for yearlong workshops and Research Scholars\' Day',
		'Organized MathWorks & Ansys training sessions for the department'
	]
};

export const awards: { title: string; detail: string }[] = [
	{ title: '1st Runner Up — JLR GDD Hackathon', detail: 'Interactive gaze controlled HUDs (Jul 2021). Teams from all 6 GDD centers worldwide.' },
	{ title: 'Asha Khanna Award', detail: 'Nationwide top scorer in Mathematics at ISC, 2015 — Loyola School, Jamshedpur.' },
	{ title: 'JEE Advanced & JEE Main', detail: 'Qualified for admission to IITs.' }
];
```

- [ ] **Step 8: Commit**

```bash
git add src/lib/data/
git commit -m "feat: add all content data files (experience, projects, skills, education, publications, leadership)"
```

---

## Task 3: Shared UI Components (Tag, Badge, SectionLabel, GlowLine, InView Action)

**Files:**
- Create: `src/lib/components/Tag.svelte`
- Create: `src/lib/components/Badge.svelte`
- Create: `src/lib/components/SectionLabel.svelte`
- Create: `src/lib/components/GlowLine.svelte`
- Create: `src/lib/actions/inview.ts`

- [ ] **Step 1: Create `src/lib/actions/inview.ts`**

```ts
// src/lib/actions/inview.ts
export function inview(node: HTMLElement, params: { threshold?: number; delay?: number } = {}) {
	const { threshold = 0.1, delay = 0 } = params;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						node.classList.add('in-view');
					}, delay);
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
```

- [ ] **Step 2: Create `src/lib/components/Tag.svelte`**

```svelte
<!-- src/lib/components/Tag.svelte -->
<script lang="ts">
	import type { TagColor } from '$lib/data/experience';
	let { label, color = 'purple' }: { label: string; color?: TagColor } = $props();
</script>

<span class="tag {color}">{label}</span>

<style>
	.tag {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		letter-spacing: 0.03em;
		transition: transform 0.2s ease;
		display: inline-block;
	}
	.tag:hover { transform: scale(1.05); }
	.purple {
		border: 1px solid rgba(124, 58, 237, 0.25);
		color: var(--primary);
		background: rgba(124, 58, 237, 0.08);
	}
	.cyan {
		border: 1px solid rgba(6, 182, 212, 0.25);
		color: var(--secondary);
		background: rgba(6, 182, 212, 0.08);
	}
	.amber {
		border: 1px solid rgba(245, 158, 11, 0.25);
		color: var(--accent);
		background: rgba(245, 158, 11, 0.08);
	}
</style>
```

- [ ] **Step 3: Create `src/lib/components/Badge.svelte`**

```svelte
<!-- src/lib/components/Badge.svelte -->
<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<span class="badge">{text}</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-family: var(--font-mono);
		font-size: 0.65rem;
		padding: 0.2rem 0.6rem;
		border-radius: 999px;
		background: rgba(245, 158, 11, 0.1);
		border: 1px solid rgba(245, 158, 11, 0.3);
		color: var(--accent);
		margin-bottom: 0.75rem;
	}
</style>
```

- [ ] **Step 4: Create `src/lib/components/SectionLabel.svelte`**

```svelte
<!-- src/lib/components/SectionLabel.svelte -->
<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<div class="section-label">// {text}</div>

<style>
	.section-label {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.15em;
		text-transform: lowercase;
		color: var(--primary);
		margin-bottom: 2rem;
		padding: 0.25rem 0;
		border-bottom: 1px solid var(--border-glow);
	}
</style>
```

- [ ] **Step 5: Create `src/lib/components/GlowLine.svelte`**

```svelte
<!-- src/lib/components/GlowLine.svelte -->
<script lang="ts">
	import { inview } from '$lib/actions/inview';
</script>

<div class="glow-line" use:inview></div>

<style>
	.glow-line {
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
		margin: 0 auto;
		max-width: 1200px;
		opacity: 0;
		transform: scaleX(0);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	.glow-line:global(.in-view) {
		opacity: 0.4;
		transform: scaleX(1);
	}
</style>
```

- [ ] **Step 6: Verify dev server still runs**

```bash
npx vite dev --port 5173
```

Expected: No errors. Page loads.

- [ ] **Step 7: Commit**

```bash
git add src/lib/actions/ src/lib/components/Tag.svelte src/lib/components/Badge.svelte src/lib/components/SectionLabel.svelte src/lib/components/GlowLine.svelte
git commit -m "feat: add shared UI components (Tag, Badge, SectionLabel, GlowLine) and inview action"
```

---

## Task 4: ParticleCanvas Component

**Files:**
- Create: `src/lib/components/ParticleCanvas.svelte`

- [ ] **Step 1: Create `src/lib/components/ParticleCanvas.svelte`**

```svelte
<!-- src/lib/components/ParticleCanvas.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let canvas: HTMLCanvasElement;
	let animationId: number;

	onMount(() => {
		if (!browser) return;

		const ctx = canvas.getContext('2d')!;
		let width: number, height: number;
		let mouse = { x: -1000, y: -1000 };

		const isMobile = window.innerWidth < 768;
		const PARTICLE_COUNT = isMobile ? 60 : 150;
		const CONNECTION_DIST = 120;
		const MOUSE_DIST = 150;

		interface Particle {
			x: number; y: number;
			vx: number; vy: number;
			radius: number; opacity: number;
		}

		let particles: Particle[] = [];

		function resize() {
			width = canvas.width = window.innerWidth;
			height = canvas.height = document.documentElement.scrollHeight;
		}

		function createParticles() {
			particles = [];
			for (let i = 0; i < PARTICLE_COUNT; i++) {
				particles.push({
					x: Math.random() * width,
					y: Math.random() * height,
					vx: (Math.random() - 0.5) * 0.3,
					vy: (Math.random() - 0.5) * 0.3,
					radius: Math.random() * 1.5 + 0.5,
					opacity: Math.random() * 0.5 + 0.2
				});
			}
		}

		function draw() {
			ctx.clearRect(0, 0, width, height);
			const scrollY = window.scrollY;
			const viewTop = scrollY - height * 0.5;
			const viewBottom = scrollY + window.innerHeight + height * 0.5;

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0) p.x = width;
				if (p.x > width) p.x = 0;
				if (p.y < 0) p.y = height;
				if (p.y > height) p.y = 0;

				const screenY = p.y - scrollY;
				if (p.y < viewTop || p.y > viewBottom) continue;

				ctx.beginPath();
				ctx.arc(p.x, screenY, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity})`;
				ctx.fill();

				for (let j = i + 1; j < particles.length; j++) {
					const p2 = particles[j];
					if (p2.y < viewTop || p2.y > viewBottom) continue;
					const dx = p.x - p2.x;
					const dy = p.y - p2.y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < CONNECTION_DIST) {
						ctx.beginPath();
						ctx.moveTo(p.x, screenY);
						ctx.lineTo(p2.x, p2.y - scrollY);
						ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / CONNECTION_DIST)})`;
						ctx.lineWidth = 0.5;
						ctx.stroke();
					}
				}

				const dxm = p.x - mouse.x;
				const dym = p.y - (mouse.y + scrollY);
				const distm = Math.sqrt(dxm * dxm + dym * dym);
				if (distm < MOUSE_DIST) {
					ctx.beginPath();
					ctx.moveTo(p.x, screenY);
					ctx.lineTo(mouse.x, mouse.y);
					ctx.strokeStyle = `rgba(124, 58, 237, ${0.3 * (1 - distm / MOUSE_DIST)})`;
					ctx.lineWidth = 0.8;
					ctx.stroke();
				}
			}

			animationId = requestAnimationFrame(draw);
		}

		function onMouseMove(e: MouseEvent) {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}

		window.addEventListener('resize', () => { resize(); createParticles(); });
		window.addEventListener('mousemove', onMouseMove);

		const resizeObserver = new ResizeObserver(() => resize());
		resizeObserver.observe(document.body);

		resize();
		createParticles();
		draw();

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('mousemove', onMouseMove);
			resizeObserver.disconnect();
		};
	});
</script>

<canvas bind:this={canvas} class="particle-canvas"></canvas>

<style>
	.particle-canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		pointer-events: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.particle-canvas { display: none; }
	}
</style>
```

- [ ] **Step 2: Add ParticleCanvas to layout**

Update `src/routes/+layout.svelte`:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
	import '$lib/styles/global.css';
	import ParticleCanvas from '$lib/components/ParticleCanvas.svelte';
	let { children } = $props();
</script>

<ParticleCanvas />

<div class="app">
	{@render children()}
</div>

<style>
	.app {
		position: relative;
		z-index: 2;
	}
</style>
```

- [ ] **Step 3: Verify particles render in browser**

```bash
npx vite dev --port 5173
```

Expected: Dark background with floating purple particles, cyan connection lines between nearby particles, purple lines connecting particles to the mouse cursor.

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/ParticleCanvas.svelte src/routes/+layout.svelte
git commit -m "feat: add canvas-based particle network background with mouse interaction"
```

---

## Task 5: Nav Component

**Files:**
- Create: `src/lib/components/Nav.svelte`

- [ ] **Step 1: Create `src/lib/components/Nav.svelte`**

```svelte
<!-- src/lib/components/Nav.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const links = [
		{ label: 'home', href: '#hero' },
		{ label: 'about', href: '#about' },
		{ label: 'experience', href: '#experience' },
		{ label: 'projects', href: '#projects' },
		{ label: 'publications', href: '#publications' },
		{ label: 'contact', href: '#contact' }
	];

	let activeSection = $state('hero');
	let visible = $state(true);
	let menuOpen = $state(false);
	let lastScrollY = 0;

	onMount(() => {
		if (!browser) return;

		const sections = links.map((l) => document.querySelector(l.href));

		function onScroll() {
			const currentY = window.scrollY;
			visible = currentY < lastScrollY || currentY < 100;
			lastScrollY = currentY;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section && section.getBoundingClientRect().top <= 150) {
					activeSection = links[i].label;
					break;
				}
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function handleClick() {
		menuOpen = false;
	}
</script>

<nav class="nav" class:hidden={!visible}>
	<div class="nav-inner">
		{#each links as link}
			<a
				href={link.href}
				class:active={activeSection === link.label}
				onclick={handleClick}
			>
				{link.label}
			</a>
		{/each}
	</div>

	<button class="hamburger" class:open={menuOpen} onclick={() => (menuOpen = !menuOpen)} aria-label="Toggle menu">
		<span></span><span></span><span></span>
	</button>

	{#if menuOpen}
		<div class="mobile-menu">
			{#each links as link}
				<a href={link.href} class:active={activeSection === link.label} onclick={handleClick}>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
	.nav {
		position: fixed;
		top: 1.5rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 100;
		transition: transform 0.3s ease, opacity 0.3s ease;
	}
	.nav.hidden {
		transform: translateX(-50%) translateY(-100px);
		opacity: 0;
	}
	.nav-inner {
		display: flex;
		gap: 0.25rem;
		padding: 0.5rem 0.75rem;
		background: rgba(10, 10, 15, 0.6);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}
	.nav-inner a {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--text-secondary);
		text-decoration: none;
		padding: 0.4rem 0.75rem;
		border-radius: 8px;
		transition: all 0.3s ease;
		letter-spacing: 0.05em;
	}
	.nav-inner a:hover, .nav-inner a.active {
		color: var(--text-primary);
		background: rgba(124, 58, 237, 0.15);
	}
	.hamburger {
		display: none;
		background: rgba(10, 10, 15, 0.6);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 10px;
		padding: 0.6rem;
		cursor: pointer;
		flex-direction: column;
		gap: 4px;
	}
	.hamburger span {
		display: block;
		width: 20px;
		height: 2px;
		background: var(--text-secondary);
		transition: all 0.3s ease;
	}
	.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
	.hamburger.open span:nth-child(2) { opacity: 0; }
	.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }
	.mobile-menu {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 0.5rem;
		background: rgba(10, 10, 15, 0.9);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		padding: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		min-width: 160px;
	}
	.mobile-menu a {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-secondary);
		text-decoration: none;
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}
	.mobile-menu a:hover, .mobile-menu a.active {
		color: var(--text-primary);
		background: rgba(124, 58, 237, 0.15);
	}

	@media (max-width: 768px) {
		.nav-inner { display: none; }
		.hamburger { display: flex; }
	}
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/components/Nav.svelte
git commit -m "feat: add glassmorphic floating nav with scroll-spy and mobile hamburger"
```

---

## Task 6: Hero Component

**Files:**
- Create: `src/lib/components/Hero.svelte`

- [ ] **Step 1: Create `src/lib/components/Hero.svelte`**

```svelte
<!-- src/lib/components/Hero.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { meta } from '$lib/data/meta';

	let typedText = $state('');
	let showCursor = $state(true);

	onMount(() => {
		const fullText = meta.tagline;
		let i = 0;
		const typeInterval = setInterval(() => {
			if (i < fullText.length) {
				typedText = fullText.slice(0, i + 1);
				i++;
			} else {
				clearInterval(typeInterval);
			}
		}, 50);

		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 750);

		return () => {
			clearInterval(typeInterval);
			clearInterval(cursorInterval);
		};
	});
</script>

<section class="hero" id="hero">
	<h1 class="hero-name">{meta.name}</h1>
	<div class="hero-tagline">
		{typedText}<span class="cursor" class:visible={showCursor}>|</span>
	</div>
	<p class="hero-subtitle">{meta.subtitle}</p>
	<div class="hero-links">
		<a href={meta.links.linkedin} target="_blank" rel="noopener" class="hero-link">linkedin</a>
		<a href={meta.links.github} target="_blank" rel="noopener" class="hero-link">github</a>
		<a href={meta.resumeUrl} target="_blank" rel="noopener" class="hero-link">resume.pdf</a>
		<a href={meta.links.email} class="hero-link">email</a>
	</div>
	<div class="scroll-indicator">
		<span>scroll</span>
		<div class="scroll-arrow"></div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 2rem;
		position: relative;
	}
	.hero-name {
		font-family: var(--font-heading);
		font-size: clamp(3rem, 8vw, 6rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary) 50%, var(--secondary) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1rem;
		animation: glow-text 3s ease-in-out infinite alternate;
	}
	@keyframes glow-text {
		from { filter: drop-shadow(0 0 20px var(--primary-glow)); }
		to { filter: drop-shadow(0 0 40px var(--secondary-glow)); }
	}
	.hero-tagline {
		font-family: var(--font-mono);
		font-size: clamp(0.9rem, 2vw, 1.1rem);
		color: var(--text-secondary);
		min-height: 1.6em;
	}
	.cursor {
		opacity: 0;
		color: var(--primary);
	}
	.cursor.visible { opacity: 1; }
	.hero-subtitle {
		margin-top: 1.5rem;
		font-size: 1.1rem;
		color: var(--text-muted);
		font-weight: 300;
	}
	.hero-links {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
		flex-wrap: wrap;
		justify-content: center;
	}
	.hero-link {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--secondary);
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 1px solid rgba(6, 182, 212, 0.3);
		border-radius: 6px;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
		background: rgba(6, 182, 212, 0.05);
	}
	.hero-link:hover {
		border-color: var(--secondary);
		box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
		background: rgba(6, 182, 212, 0.1);
	}
	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		animation: float 2s ease-in-out infinite;
	}
	.scroll-indicator span {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.2em;
	}
	.scroll-arrow {
		width: 20px;
		height: 20px;
		border-right: 2px solid var(--primary);
		border-bottom: 2px solid var(--primary);
		transform: rotate(45deg);
		opacity: 0.5;
	}
	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(10px); }
	}
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/components/Hero.svelte
git commit -m "feat: add Hero section with gradient name, typing animation, and pill links"
```

---

## Task 7: About Component with Animated Stats Counter

**Files:**
- Create: `src/lib/components/About.svelte`

- [ ] **Step 1: Create `src/lib/components/About.svelte`**

```svelte
<!-- src/lib/components/About.svelte -->
<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { inview } from '$lib/actions/inview';
	import SectionLabel from './SectionLabel.svelte';
	import { meta } from '$lib/data/meta';

	let started = $state(false);

	const counters = meta.stats.map((s) => {
		const numericValue = parseInt(s.value.replace(/\D/g, ''), 10);
		const suffix = s.value.replace(/[0-9]/g, '');
		return {
			store: tweened(0, { duration: 2000, easing: cubicOut }),
			target: numericValue,
			suffix,
			label: s.label
		};
	});

	function startCounters() {
		if (started) return;
		started = true;
		counters.forEach((c) => c.store.set(c.target));
	}
</script>

<section class="section" id="about" use:inview={{ threshold: 0.2 }} onclass:in-view={startCounters}>
	<div class="section-inner fade-in" use:inview>
		<SectionLabel text="about" />
		<h2 class="section-heading">The intersection is where it gets interesting.</h2>
		<p class="section-desc">{meta.bio}</p>
		<div class="stats" use:inview={{ threshold: 0.3 }} onintro={startCounters}>
			{#each counters as counter}
				<div class="stat">
					<div class="stat-number">{Math.round($effect.tracking ? counter.store : counter.store.current ?? 0)}{counter.suffix}</div>
					<div class="stat-label">{counter.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.section-desc {
		color: var(--text-secondary);
		font-size: 1.05rem;
		max-width: 600px;
		margin-bottom: 3rem;
		line-height: 1.7;
	}
	.stats {
		display: flex;
		gap: 3rem;
		flex-wrap: wrap;
	}
	.stat-number {
		font-family: var(--font-heading);
		font-size: 2.5rem;
		font-weight: 700;
		background: linear-gradient(135deg, var(--primary), var(--secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	.stat-label {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-top: 0.25rem;
	}
	.fade-in {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	@media (max-width: 600px) {
		.stats { gap: 1.5rem; }
	}
</style>
```

The corrected full component (replaces the broken version above):

```svelte
<!-- src/lib/components/About.svelte -->
<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { inview } from '$lib/actions/inview';
	import SectionLabel from './SectionLabel.svelte';
	import { meta } from '$lib/data/meta';

	let started = $state(false);

	const stat0 = tweened(0, { duration: 2000, easing: cubicOut });
	const stat1 = tweened(0, { duration: 2000, easing: cubicOut });
	const stat2 = tweened(0, { duration: 2000, easing: cubicOut });
	const stat3 = tweened(0, { duration: 2000, easing: cubicOut });
	const stores = [stat0, stat1, stat2, stat3];

	const parsed = meta.stats.map((s) => ({
		target: parseInt(s.value.replace(/\D/g, ''), 10),
		suffix: s.value.replace(/[0-9]/g, ''),
		label: s.label
	}));

	function startCounters(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !started) {
					started = true;
					stores.forEach((store, i) => store.set(parsed[i].target));
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}
</script>

<section class="section" id="about">
	<div class="fade-in" use:inview>
		<SectionLabel text="about" />
		<h2 class="section-heading">The intersection is where it gets interesting.</h2>
		<p class="section-desc">{meta.bio}</p>
		<div class="stats" use:startCounters>
			{#each parsed as stat, i}
				<div class="stat">
					<div class="stat-number">{Math.round($stores[i])}{stat.suffix}</div>
					<div class="stat-label">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>
```

**Note on `$stores[i]`:** Svelte 5 requires the `$` prefix for store auto-subscription. If `$stores[i]` doesn't work due to dynamic indexing, replace the `#each` with four explicit stat blocks:

```svelte
<div class="stats" use:startCounters>
	<div class="stat">
		<div class="stat-number">{Math.round($stat0)}{parsed[0].suffix}</div>
		<div class="stat-label">{parsed[0].label}</div>
	</div>
	<div class="stat">
		<div class="stat-number">{Math.round($stat1)}{parsed[1].suffix}</div>
		<div class="stat-label">{parsed[1].label}</div>
	</div>
	<div class="stat">
		<div class="stat-number">{Math.round($stat2)}{parsed[2].suffix}</div>
		<div class="stat-label">{parsed[2].label}</div>
	</div>
	<div class="stat">
		<div class="stat-number">{Math.round($stat3)}{parsed[3].suffix}</div>
		<div class="stat-label">{parsed[3].label}</div>
	</div>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/components/About.svelte
git commit -m "feat: add About section with animated stats counters"
```

---

## Task 8: BentoGrid, BentoCard, and Modal Components

**Files:**
- Create: `src/lib/components/BentoGrid.svelte`
- Create: `src/lib/components/BentoCard.svelte`
- Create: `src/lib/components/Modal.svelte`

- [ ] **Step 1: Create `src/lib/components/Modal.svelte`**

```svelte
<!-- src/lib/components/Modal.svelte -->
<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	let { open = $bindable(false), children } = $props();

	function close() {
		open = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}
</script>

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="overlay" transition:fade={{ duration: 200 }} onclick={close} onkeydown={handleKeydown}>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="modal" transition:scale={{ duration: 300, start: 0.95 }} onclick={(e) => e.stopPropagation()} onkeydown={handleKeydown}>
			<button class="close-btn" onclick={close} aria-label="Close">✕</button>
			{@render children()}
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 200;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}
	.modal {
		background: #111118;
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
		padding: 2rem;
		max-width: 700px;
		width: 100%;
		max-height: 80vh;
		overflow-y: auto;
		position: relative;
	}
	.close-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		color: var(--text-muted);
		font-size: 1.2rem;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		transition: color 0.2s ease;
	}
	.close-btn:hover { color: var(--text-primary); }
</style>
```

- [ ] **Step 2: Create `src/lib/components/BentoCard.svelte`**

```svelte
<!-- src/lib/components/BentoCard.svelte -->
<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import Tag from './Tag.svelte';
	import Badge from './Badge.svelte';
	import Modal from './Modal.svelte';
	import type { TagColor } from '$lib/data/experience';

	let {
		title,
		meta: metaText = '',
		summary = '',
		tags = [],
		badge = '',
		details = [],
		gridSize = 'standard',
		delay = 0
	}: {
		title: string;
		meta?: string;
		summary?: string;
		tags?: { label: string; color: TagColor }[];
		badge?: string;
		details?: string[];
		gridSize?: 'standard' | 'wide' | 'tall';
		delay?: number;
	} = $props();

	let modalOpen = $state(false);

	const sizeClass = gridSize === 'wide' ? 'bento-wide' : gridSize === 'tall' ? 'bento-tall' : '';
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="bento-card {sizeClass} fade-in"
	use:inview={{ delay }}
	onclick={() => { if (details.length) modalOpen = true; }}
	onkeydown={(e) => { if (e.key === 'Enter' && details.length) modalOpen = true; }}
	role={details.length ? 'button' : undefined}
	tabindex={details.length ? 0 : undefined}
>
	{#if badge}<Badge text={badge} />{/if}
	<h3>{title}</h3>
	{#if metaText}<div class="card-meta">{metaText}</div>{/if}
	{#if summary}<p>{summary}</p>{/if}
	{#if tags.length}
		<div class="tags">
			{#each tags as tag}
				<Tag label={tag.label} color={tag.color} />
			{/each}
		</div>
	{/if}
</div>

<Modal bind:open={modalOpen}>
	{#if badge}<Badge text={badge} />{/if}
	<h3 class="modal-title">{title}</h3>
	{#if metaText}<div class="modal-meta">{metaText}</div>{/if}
	<ul class="modal-details">
		{#each details as detail}
			<li>{detail}</li>
		{/each}
	</ul>
	{#if tags.length}
		<div class="tags" style="margin-top: 1.5rem;">
			{#each tags as tag}
				<Tag label={tag.label} color={tag.color} />
			{/each}
		</div>
	{/if}
</Modal>

<style>
	.bento-card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 1.5rem;
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.bento-card::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 16px;
		padding: 1px;
		background: linear-gradient(135deg, var(--border-glow), transparent, var(--border-glow));
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		opacity: 0;
		transition: opacity 0.4s ease;
		pointer-events: none;
	}
	.bento-card:hover {
		background: var(--bg-card-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 40px rgba(124, 58, 237, 0.1);
		cursor: pointer;
	}
	.bento-card:hover::before { opacity: 1; }
	.bento-wide { grid-column: span 2; }
	.bento-tall { grid-row: span 2; }
	h3 {
		font-family: var(--font-heading);
		font-size: 1.15rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	.card-meta {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--primary);
		margin-bottom: 0.75rem;
		letter-spacing: 0.05em;
	}
	p {
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}
	.fade-in {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	.modal-title {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}
	.modal-meta {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--primary);
		margin-bottom: 1rem;
	}
	.modal-details {
		list-style: none;
		padding: 0;
	}
	.modal-details li {
		font-size: 0.9rem;
		color: var(--text-secondary);
		padding-left: 1rem;
		position: relative;
		margin-bottom: 0.6rem;
		line-height: 1.5;
	}
	.modal-details li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--primary);
		font-weight: 600;
	}

	@media (max-width: 900px) {
		.bento-wide, .bento-tall { grid-column: span 2; grid-row: span 1; }
	}
	@media (max-width: 600px) {
		.bento-wide, .bento-tall { grid-column: span 1; }
	}
</style>
```

- [ ] **Step 3: Create `src/lib/components/BentoGrid.svelte`**

```svelte
<!-- src/lib/components/BentoGrid.svelte -->
<script lang="ts">
	let { children } = $props();
</script>

<div class="bento-grid">
	{@render children()}
</div>

<style>
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(180px, auto);
		gap: 1rem;
	}
	@media (max-width: 900px) {
		.bento-grid { grid-template-columns: repeat(2, 1fr); }
	}
	@media (max-width: 600px) {
		.bento-grid { grid-template-columns: 1fr; }
	}
</style>
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/BentoGrid.svelte src/lib/components/BentoCard.svelte src/lib/components/Modal.svelte
git commit -m "feat: add BentoGrid, BentoCard with modal detail view, and Modal overlay component"
```

---

## Task 9: Experience Section

**Files:**
- Create: `src/lib/components/Experience.svelte`

- [ ] **Step 1: Create `src/lib/components/Experience.svelte`**

```svelte
<!-- src/lib/components/Experience.svelte -->
<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import BentoGrid from './BentoGrid.svelte';
	import BentoCard from './BentoCard.svelte';
	import { inview } from '$lib/actions/inview';
	import { experience } from '$lib/data/experience';
</script>

<section class="section" id="experience">
	<div class="fade-in" use:inview>
		<SectionLabel text="experience" />
		<h2 class="section-heading">Where I've built things.</h2>
		<p class="section-desc">A career spanning mechanical R&D, automotive software, AI/ML, and deep-tech entrepreneurship.</p>
	</div>
	<BentoGrid>
		{#each experience as entry, i}
			<BentoCard
				title="{entry.role} — {entry.company}"
				meta="{entry.date} · {entry.location}"
				summary={entry.summary}
				tags={entry.tags}
				badge={entry.badge ?? ''}
				details={entry.details}
				gridSize={entry.gridSize}
				delay={i * 100}
			/>
		{/each}
	</BentoGrid>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.section-desc {
		color: var(--text-secondary);
		font-size: 1.05rem;
		max-width: 600px;
		margin-bottom: 3rem;
	}
	.fade-in {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/components/Experience.svelte
git commit -m "feat: add Experience bento grid section with all career entries"
```

---

## Task 10: Timeline Component

**Files:**
- Create: `src/lib/components/Timeline.svelte`
- Create: `src/lib/components/TimelineNode.svelte`

- [ ] **Step 1: Create `src/lib/components/TimelineNode.svelte`**

```svelte
<!-- src/lib/components/TimelineNode.svelte -->
<script lang="ts">
	import { inview } from '$lib/actions/inview';

	let {
		date,
		title,
		company,
		items = [],
		delay = 0
	}: {
		date: string;
		title: string;
		company: string;
		items?: string[];
		delay?: number;
	} = $props();
</script>

<div class="timeline-node fade-in" use:inview={{ delay }}>
	<div class="node-date">{date}</div>
	<h3>{title}</h3>
	<div class="node-company">{company}</div>
	{#if items.length}
		<ul>
			{#each items as item}
				<li>{item}</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.timeline-node {
		position: relative;
		margin-bottom: 2.5rem;
		padding: 1.5rem;
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		transition: all 0.3s ease;
	}
	.timeline-node:hover {
		background: var(--bg-card-hover);
		border-color: var(--border-glow);
	}
	.timeline-node::before {
		content: '';
		position: absolute;
		left: -2.55rem;
		top: 1.75rem;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--primary);
		box-shadow: 0 0 12px var(--primary-glow), 0 0 24px var(--primary-glow);
		z-index: 1;
	}
	.timeline-node::after {
		content: '';
		position: absolute;
		left: -1.85rem;
		top: 2.05rem;
		width: 22px;
		height: 2px;
		background: linear-gradient(90deg, var(--primary), transparent);
	}
	.node-date {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--secondary);
		margin-bottom: 0.5rem;
	}
	h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}
	.node-company {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 0.75rem;
	}
	ul { list-style: none; padding: 0; }
	li {
		font-size: 0.85rem;
		color: var(--text-secondary);
		padding-left: 1rem;
		position: relative;
		margin-bottom: 0.4rem;
	}
	li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--primary);
		font-weight: 600;
	}
	.fade-in {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}
	:global(.fade-in.in-view) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
```

- [ ] **Step 2: Create `src/lib/components/Timeline.svelte`**

```svelte
<!-- src/lib/components/Timeline.svelte -->
<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import TimelineNode from './TimelineNode.svelte';
	import { inview } from '$lib/actions/inview';
</script>

<section class="section">
	<div class="fade-in" use:inview>
		<SectionLabel text="career pathway" />
		<h2 class="section-heading">The Neural Path</h2>
		<p class="section-desc">A chronological journey through the chapters.</p>
	</div>
	<div class="timeline">
		<div class="timeline-line"></div>
		<TimelineNode
			date="sept 2025 — present"
			title="Founder & CEO"
			company="Twinity Labs"
			items={['Applied Digital Twin solutions venture', 'Product vision, GTM, industrial partnerships']}
			delay={0}
		/>
		<TimelineNode
			date="sept 2020 — aug 2025"
			title="Graduate Trainee → Senior SWE"
			company="Jaguar Land Rover"
			items={['Software-Defined Vehicles platform', 'Global Testing Platform', 'Innovation Champion — Open Innovation Hub', 'Predictive maintenance research (LSTM, patent pending)']}
			delay={150}
		/>
		<TimelineNode
			date="jul 2015 — jun 2020"
			title="B.Tech-M.Tech Dual Degree"
			company="IIT Kanpur — Mechanical Engineering"
			items={['Railway bogie redesign adopted by Indian Railways', 'Electromagnetic actuator development', 'President, Association of Mechanical Engineers']}
			delay={300}
		/>
	</div>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.section-desc {
		color: var(--text-secondary);
		font-size: 1.05rem;
		max-width: 600px;
		margin-bottom: 3rem;
	}
	.timeline {
		position: relative;
		padding-left: 3rem;
	}
	.timeline-line {
		position: absolute;
		left: 0.75rem;
		top: 0;
		bottom: 0;
		width: 2px;
		background: linear-gradient(180deg, var(--primary), var(--secondary), var(--primary-glow), transparent);
	}
	.fade-in {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/Timeline.svelte src/lib/components/TimelineNode.svelte
git commit -m "feat: add neural pathway Timeline with glowing nodes and scroll animations"
```

---

## Task 11: Projects, Publications, Skills, Leadership, Education, Contact Sections

**Files:**
- Create: `src/lib/components/Projects.svelte`
- Create: `src/lib/components/Publications.svelte`
- Create: `src/lib/components/Skills.svelte`
- Create: `src/lib/components/Leadership.svelte`
- Create: `src/lib/components/Education.svelte`
- Create: `src/lib/components/Contact.svelte`

- [ ] **Step 1: Create `src/lib/components/Projects.svelte`**

```svelte
<!-- src/lib/components/Projects.svelte -->
<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import BentoGrid from './BentoGrid.svelte';
	import BentoCard from './BentoCard.svelte';
	import { inview } from '$lib/actions/inview';
	import { projects } from '$lib/data/projects';
</script>

<section class="section" id="projects">
	<div class="fade-in" use:inview>
		<SectionLabel text="projects" />
		<h2 class="section-heading">Things I've made.</h2>
		<p class="section-desc">Academic and engineering projects from IIT Kanpur and beyond.</p>
	</div>
	<BentoGrid>
		{#each projects as project, i}
			<BentoCard
				title={project.title}
				meta="{project.date}{project.supervisor ? ` · ${project.supervisor}` : ''}"
				summary={project.summary}
				tags={project.tags}
				badge={project.badge ?? ''}
				details={project.details}
				gridSize={project.gridSize}
				delay={i * 80}
			/>
		{/each}
	</BentoGrid>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.section-desc {
		color: var(--text-secondary);
		font-size: 1.05rem;
		max-width: 600px;
		margin-bottom: 3rem;
	}
	.fade-in {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }
</style>
```

- [ ] **Step 2: Create `src/lib/components/Publications.svelte`**

```svelte
<!-- src/lib/components/Publications.svelte -->
<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import { inview } from '$lib/actions/inview';
	import { publications } from '$lib/data/publications';
</script>

<section class="section" id="publications">
	<div class="fade-in" use:inview>
		<SectionLabel text="publications" />
		<h2 class="section-heading">Research</h2>
	</div>
	{#each publications as pub}
		<div class="pub-card fade-in" use:inview>
			<h3>{pub.title}</h3>
			<div class="pub-authors">{@html pub.authors}</div>
			<div class="pub-venue">{pub.venue}, vol. 138, {pub.year}</div>
		</div>
	{/each}
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 2rem;
	}
	.pub-card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		padding: 2rem;
		position: relative;
		overflow: hidden;
	}
	.pub-card::after {
		content: '';
		position: absolute;
		top: 0; left: 0;
		width: 4px; height: 100%;
		background: linear-gradient(180deg, var(--primary), var(--secondary));
		border-radius: 4px 0 0 4px;
	}
	.pub-card h3 {
		font-family: var(--font-heading);
		font-size: 1.05rem;
		margin-bottom: 0.5rem;
	}
	.pub-authors {
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin-bottom: 0.25rem;
	}
	.pub-venue {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--primary);
	}
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }
</style>
```

- [ ] **Step 3: Create `src/lib/components/Skills.svelte`**

```svelte
<!-- src/lib/components/Skills.svelte -->
<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import BentoGrid from './BentoGrid.svelte';
	import Tag from './Tag.svelte';
	import { inview } from '$lib/actions/inview';
	import { skills } from '$lib/data/skills';
</script>

<section class="section">
	<div class="fade-in" use:inview>
		<SectionLabel text="skills & domains" />
		<h2 class="section-heading">What I work with.</h2>
	</div>
	<BentoGrid>
		{#each skills as category, i}
			<div class="skill-card bento-wide fade-in" use:inview={{ delay: i * 100 }}>
				<h3>{category.title}</h3>
				<div class="tags">
					{#each category.tags as tag}
						<Tag label={tag.label} color={tag.color} />
					{/each}
				</div>
			</div>
		{/each}
	</BentoGrid>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 3rem;
	}
	.skill-card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 1.5rem;
	}
	.skill-card h3 {
		font-family: var(--font-heading);
		font-size: 1.15rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.bento-wide { grid-column: span 2; }
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }

	@media (max-width: 600px) {
		.bento-wide { grid-column: span 1; }
	}
</style>
```

- [ ] **Step 4: Create `src/lib/components/Leadership.svelte`**

```svelte
<!-- src/lib/components/Leadership.svelte -->
<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import BentoGrid from './BentoGrid.svelte';
	import { inview } from '$lib/actions/inview';
	import { teaching, campusLeadership, awards } from '$lib/data/leadership';
</script>

<section class="section">
	<div class="fade-in" use:inview>
		<SectionLabel text="teaching & leadership" />
		<h2 class="section-heading">Beyond the code.</h2>
	</div>
	<div class="leadership-grid">
		<div class="card fade-in" use:inview>
			<h3>{teaching.title}</h3>
			<ul>
				{#each teaching.items as item}<li>{item}</li>{/each}
			</ul>
		</div>
		<div class="card fade-in" use:inview={{ delay: 100 }}>
			<h3>{campusLeadership.title}</h3>
			<ul>
				{#each campusLeadership.items as item}<li>{item}</li>{/each}
			</ul>
		</div>
		<div class="card fade-in" use:inview={{ delay: 200 }}>
			<h3>Awards</h3>
			{#each awards as award}
				<div class="award">
					<strong>{award.title}</strong>
					<p>{award.detail}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 3rem;
	}
	.leadership-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
	.card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 1.5rem;
	}
	.card h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	ul { list-style: none; padding: 0; }
	li {
		font-size: 0.85rem;
		color: var(--text-secondary);
		padding-left: 1rem;
		position: relative;
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}
	li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--primary);
		font-weight: 600;
	}
	.award { margin-bottom: 1rem; }
	.award strong {
		font-size: 0.9rem;
		display: block;
		margin-bottom: 0.25rem;
	}
	.award p {
		font-size: 0.8rem;
		color: var(--text-secondary);
		line-height: 1.4;
	}
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }

	@media (max-width: 768px) {
		.leadership-grid { grid-template-columns: 1fr; }
	}
</style>
```

- [ ] **Step 5: Create `src/lib/components/Education.svelte`**

```svelte
<!-- src/lib/components/Education.svelte -->
<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import { inview } from '$lib/actions/inview';
	import { education } from '$lib/data/education';
</script>

<section class="section">
	<div class="fade-in" use:inview>
		<SectionLabel text="education" />
		<h2 class="section-heading">Where it started.</h2>
	</div>
	<div class="edu-grid">
		{#each education as entry, i}
			<div class="edu-card fade-in" use:inview={{ delay: i * 100 }}>
				<h3>{entry.institution}</h3>
				<p class="degree">{entry.degree}</p>
				<span class="years">{entry.years}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem;
	}
	.section-heading {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		margin-bottom: 3rem;
	}
	.edu-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	.edu-card {
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 1.5rem;
	}
	.edu-card h3 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	.degree {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.years {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--primary);
	}
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }

	@media (max-width: 600px) {
		.edu-grid { grid-template-columns: 1fr; }
	}
</style>
```

- [ ] **Step 6: Create `src/lib/components/Contact.svelte`**

```svelte
<!-- src/lib/components/Contact.svelte -->
<script lang="ts">
	import SectionLabel from './SectionLabel.svelte';
	import { inview } from '$lib/actions/inview';
	import { meta } from '$lib/data/meta';
</script>

<section class="section" id="contact">
	<div class="contact-inner fade-in" use:inview>
		<SectionLabel text="let's connect" />
		<blockquote class="quote">
			"{meta.quote.text}"
			<cite>— {meta.quote.author}</cite>
		</blockquote>
		<div class="contact-links">
			<a href={meta.links.email} class="contact-link">email</a>
			<a href={meta.links.linkedin} target="_blank" rel="noopener" class="contact-link">linkedin</a>
			<a href={meta.links.github} target="_blank" rel="noopener" class="contact-link">github</a>
			<a href={meta.links.instagram} target="_blank" rel="noopener" class="contact-link">instagram</a>
			<a href={meta.resumeUrl} target="_blank" rel="noopener" class="contact-link">resume.pdf</a>
		</div>
		<footer class="footer">
			<p>Built with SvelteKit · Designed with intention</p>
		</footer>
	</div>
</section>

<style>
	.section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 6rem 2rem 3rem;
	}
	.contact-inner {
		text-align: center;
	}
	.quote {
		font-size: 1.1rem;
		color: var(--text-secondary);
		font-style: italic;
		max-width: 600px;
		margin: 0 auto 2rem;
		line-height: 1.7;
	}
	.quote cite {
		display: block;
		margin-top: 0.75rem;
		font-size: 0.85rem;
		color: var(--text-muted);
		font-style: normal;
	}
	.contact-links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 3rem;
	}
	.contact-link {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--secondary);
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 1px solid rgba(6, 182, 212, 0.3);
		border-radius: 6px;
		transition: all 0.3s ease;
		background: rgba(6, 182, 212, 0.05);
	}
	.contact-link:hover {
		border-color: var(--secondary);
		box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
		background: rgba(6, 182, 212, 0.1);
	}
	.footer p {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		color: var(--text-muted);
		letter-spacing: 0.05em;
	}
	.fade-in {
		opacity: 0; transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}
	:global(.fade-in.in-view) { opacity: 1; transform: translateY(0); }
</style>
```

- [ ] **Step 7: Commit**

```bash
git add src/lib/components/Projects.svelte src/lib/components/Publications.svelte src/lib/components/Skills.svelte src/lib/components/Leadership.svelte src/lib/components/Education.svelte src/lib/components/Contact.svelte
git commit -m "feat: add Projects, Publications, Skills, Leadership, Education, Contact sections"
```

---

## Task 12: Compose All Sections on the Page

**Files:**
- Modify: `src/routes/+page.svelte`

- [ ] **Step 1: Update `src/routes/+page.svelte`**

```svelte
<!-- src/routes/+page.svelte -->
<script>
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import GlowLine from '$lib/components/GlowLine.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Publications from '$lib/components/Publications.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Leadership from '$lib/components/Leadership.svelte';
	import Education from '$lib/components/Education.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<Nav />
<Hero />
<GlowLine />
<About />
<GlowLine />
<Experience />
<GlowLine />
<Timeline />
<GlowLine />
<Projects />
<GlowLine />
<Publications />
<GlowLine />
<Skills />
<GlowLine />
<Leadership />
<GlowLine />
<Education />
<GlowLine />
<Contact />
```

- [ ] **Step 2: Run dev server and verify full page**

```bash
npx vite dev --port 5173
```

Expected: Full scrolling page with all sections. Particle background, glassmorphic nav, hero with typing animation, bento grids, timeline, scroll animations, modal detail views on card click.

- [ ] **Step 3: Commit**

```bash
git add src/routes/+page.svelte
git commit -m "feat: compose all sections into single-page portfolio layout"
```

---

## Task 13: GitHub Actions Deployment

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create `.github/workflows/deploy.yml`**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verify build succeeds locally**

```bash
npm run build
```

Expected: Build completes with output in `build/` directory. No errors.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions workflow for automated deployment to GitHub Pages"
```

---

## Task 14: Visual Polish and Final QA

**Files:**
- Potentially modify any component for visual fixes found during testing

- [ ] **Step 1: Run dev server and check every section visually**

```bash
npx vite dev --port 5173
```

Check each item:
- Particles render and respond to cursor
- Nav scroll-spy highlights correctly, hides on scroll-down
- Hero name glows, tagline types, links work
- About stats animate on scroll-in
- Experience bento cards render at correct sizes, modal opens on click
- Timeline nodes animate in with staggered delays
- Projects bento cards render, modals work
- Publication card has left gradient bar
- Skills tag clouds display correctly
- Leadership 3-column grid
- Education cards
- Contact links and quote
- Glow lines animate between sections
- Mobile responsive (resize browser to 375px width)

- [ ] **Step 2: Test build output**

```bash
npm run build && npx vite preview --port 4173
```

Expected: Preview at `http://localhost:4173` matches dev version exactly.

- [ ] **Step 3: Final commit with any polish fixes**

```bash
git add -A
git commit -m "fix: visual polish and responsive adjustments"
```
