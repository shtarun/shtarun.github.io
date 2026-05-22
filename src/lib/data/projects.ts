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
		id: 'setmind',
		title: 'SetMind — AI-Powered Strength Training App',
		date: '2024 — present',
		summary: 'Full-stack fitness app with AI coaching (Claude/GPT), offline-first sync, and cloud infrastructure. Built end-to-end from Flutter frontend to AWS backend.',
		details: [
			'Offline-first Flutter app with Riverpod state management, Drift/SQLite (16-table schema), and bidirectional cloud sync with last-write-wins conflict resolution',
			'AI workout generation & post-session insights via Claude and OpenAI, with credit-based freemium model and offline rule-based fallback',
			'AWS backend: API Gateway + Lambda (Node.js) + DynamoDB + Cognito auth — all provisioned with OpenTofu IaC',
			'220+ exercise library, E1RM tracking, PR detection, volume analytics with fl_chart visualizations',
			'RevenueCat subscription integration, Apple/Google Sign-In, secure token management without Amplify'
		],
		tags: [
			{ label: 'Flutter', color: 'cyan' },
			{ label: 'Claude AI', color: 'purple' },
			{ label: 'AWS Lambda', color: 'cyan' },
			{ label: 'DynamoDB', color: 'cyan' },
			{ label: 'OpenTofu', color: 'purple' },
			{ label: 'Riverpod', color: 'cyan' }
		],
		badge: 'Full-Stack App',
		gridSize: 'wide'
	},
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
