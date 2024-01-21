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
	email: string;
	research: string;
	phone_number: string;
	background: string;
	gender: string;
	jabatan_akademik: string;
	location: string;
	investasi: string;
	createdAt: string;
	updatedAt: string;
};

export type JournalWithResearcher = {
	id: number;
	abstract: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	researcherId: number;
	portofolio: ResearcherJournal[];
};

export type Journals = {
	abstract: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	researcherId: number;
};

export type Project = {
	id: number;
	project_name: string;
	description_project: string;
	project_image: string;
	project_status: boolean;
	starting_date:string;
	expected_finish_date: string;
	project_budget: number;
	tags: string;
	createdAt: string;
	updatedAt: string;
	researcherId: number;
	researcher: ResearcherJournal
};
