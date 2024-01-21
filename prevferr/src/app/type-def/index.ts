// export type Journals = {
// 	id: string;
// 	name: string;
// 	description: string;
// 	reward: string;
// 	interval: string;
// 	startDate: string;
// };

export type ResearcherJournal = {
	firstname: string;
	lastname: string;
	education: string;
	profileImage: string;
	background: string;
	jabatan_akademik: string;
};

export type JournalWithResearcher = {
	abstract: string;
	title: string;
	createdAt: string;
	updatedAt: string;
    researcherId: number;
    reserarcher : ResearcherJournal
};


export type Journals = {
	abstract: string;
	title: string;
	createdAt: string;
	updatedAt: string;
    researcherId: number;
};