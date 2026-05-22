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
			{ label: 'Dart', color: 'purple' },
			{ label: 'TypeScript', color: 'purple' },
			{ label: 'FastAPI', color: 'cyan' },
			{ label: 'Flutter', color: 'cyan' },
			{ label: 'SvelteKit', color: 'cyan' },
			{ label: 'Linux Kernel', color: 'purple' },
			{ label: 'GitLab CI', color: 'cyan' },
			{ label: 'OpenTofu', color: 'purple' },
			{ label: 'Podman', color: 'cyan' },
			{ label: 'BuildStream', color: 'cyan' },
			{ label: 'CMake', color: 'purple' },
			{ label: 'Riverpod', color: 'cyan' },
			{ label: 'Drift/SQLite', color: 'cyan' }
		]
	},
	{
		title: 'AI Tools & LLMs',
		tags: [
			{ label: 'Claude API', color: 'purple' },
			{ label: 'Claude Code', color: 'purple' },
			{ label: 'OpenAI API', color: 'purple' },
			{ label: 'Codex', color: 'purple' },
			{ label: 'vLLM', color: 'cyan' },
			{ label: 'LiteLLM', color: 'cyan' },
			{ label: 'LangChain', color: 'cyan' },
			{ label: 'Ollama', color: 'cyan' },
			{ label: 'Hugging Face', color: 'cyan' },
			{ label: 'Cursor', color: 'purple' },
			{ label: 'Prompt Engineering', color: 'purple' }
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
			{ label: 'Predictive Maintenance', color: 'purple' },
			{ label: 'RAG', color: 'cyan' },
			{ label: 'Agentic AI', color: 'purple' }
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
			{ label: 'DynamoDB', color: 'cyan' },
			{ label: 'Cognito', color: 'cyan' },
			{ label: 'API Gateway', color: 'cyan' },
			{ label: 'Redshift', color: 'cyan' },
			{ label: 'Tableau', color: 'cyan' },
			{ label: 'RTI DDS', color: 'purple' },
			{ label: 'RevenueCat', color: 'purple' }
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
