export interface Publication {
	title: string;
	authors: string;
	venue: string;
	volume: number;
	year: number;
	url: string;
}

export const publications: Publication[] = [
	{
		title: 'Primary suspension failure analysis in FIAT type LHB bogies and life estimation',
		authors: 'R. Kumar, <strong>T. Sharma</strong>, A. Shekhar, N. S. Vyas',
		venue: 'Engineering Failure Analysis',
		volume: 138,
		year: 2022,
		url: 'https://doi.org/10.1016/j.engfailanal.2022.106320'
	}
];
