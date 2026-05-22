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
		summary: 'Building an applied Digital Twin solutions venture with LLM-powered tooling. Shipping AI-native products end-to-end — from Flutter apps with Claude/GPT integration to AWS serverless backends.',
		details: [
			'Building an applied Digital Twin solutions venture — product vision, early GTM, partnerships, and pilot scoping with industrial clients',
			'Shipping AI-native products end-to-end: Flutter mobile apps with Claude & OpenAI integration, AWS serverless backends (Lambda, DynamoDB, Cognito), OpenTofu IaC',
			'Leveraging agentic AI tooling (Claude Code, Cursor, vLLM, LiteLLM) across the full development lifecycle'
		],
		tags: [
			{ label: 'Digital Twins', color: 'purple' },
			{ label: 'Claude API', color: 'purple' },
			{ label: 'Flutter', color: 'cyan' },
			{ label: 'ML Surrogates', color: 'cyan' },
			{ label: 'AWS', color: 'cyan' }
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
