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
