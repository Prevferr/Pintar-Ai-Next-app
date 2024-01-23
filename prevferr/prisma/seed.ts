const { PrismaClient } = require("@prisma/client");
// import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// import { hashText } from "../../helpers/utils/hash";
// import * as bcryptjs from "bcryptjs";
const { hash } = require("bcryptjs");

// npx prisma migrate reset --force

async function main() {
	const pass1 = await hash("dzul123", 10);
	const pass2 = await hash("vincent123", 10);
	const pass3 = await hash("alvin123", 10);

	// const Jurnal = {
	//   // Data untuk portofolio Jurnal
	//   // ...
	//   abstract: "Abstract of the journal",
	//   title: "Petanian Skala Mikro di Indonesia",
	//   description: "Pertanian Skala Mikro di Indonesia",
	// };

	const Jurnal0 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Abstract of the journal",
		title: "Petanian Skala Mikro di Indonesia",
		researcherId: 1,
	};

	const Jurnal1 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Pengaruh iklim terhadap produktivitas pertanian",
		title: "Iklim: Faktor Utama Produktivitas Pertanian",
		researcherId: 1,
	};

	const Jurnal2 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Peranan teknologi dalam meningkatkan produktivitas pertanian",
		title: "Teknologi: Kunci Produktivitas Pertanian",
		researcherId: 1,
	};

	const Jurnal3 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Pengaruh pakan terhadap produktivitas ternak",
		title: "Pakan: Kunci Produktivitas Ternak",
		researcherId: 1,
	};

	const Jurnal4 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Emisi gas buang kapal dan tumpahan minyak menjadi tantangan lingkungan yang dihadapi industri perkapalan.",
		title: "Melayari Laut Biru: Mencari Solusi Keberlanjutan Perkapalan",
		researcherId: 2,
	};

	const Jurnal5 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Peningkatan penggunaan robot dan sistem otomatis meningkatkan efisiensi dan kecepatan pembongkaran muatan di pelabuhan.",
		title: "Pelabuhan Masa Depan: Sentuhan Teknologi, Sentuhan Kemanusiaan",
		researcherId: 2,
	};

	const Jurnal6 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Teknologi digital dapat digunakan untuk meningkatkan efisiensi dan efektivitas pembelajaran, seperti pembelajaran jarak jauh, virtual reality, dan augmented reality.",
		title: "Teknologi Digital: Solusi untuk Pembelajaran Masa Depan",
		researcherId: 1,
	};

	const Project0 = {
		// Data untuk portofolio Jurnal
		// ...
		project_name: "Meningkatkan Efisiensi Mesin",
		description_project: "Bagaiman caranya meningkatkan efisiensi mesin",
		project_image: "https://i.pinimg.com/564x/3d/b5/45/3db545fbc89144d41b8749e22af12d01.jpg",
		project_status: false,
		starting_date: new Date(),
		expected_finish_date: new Date(),
		project_budget: 10000000,
		tags: "Machine",
		// investorId: 1,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const Project1 = {
		// Data untuk portofolio Jurnal
		// ...
		project_name: "Pengembangan Aplikasi Pemantauan Tanaman",
		description_project: "Pengembangan aplikasi pemantauan tanaman yang dapat membantu petani untuk memantau kondisi tanaman secara real-time",
		project_image: "https://i.pinimg.com/564x/12/26/1a/12261af7aad2da6c91bae56db7031c66.jpg",
		project_status: false,
		starting_date: new Date(),
		expected_finish_date: new Date(),
		project_budget: 1000000,
		tags: "Agriculture, Information Technology",
		// investorId: 2,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const Project2 = {
		// Data untuk portofolio Jurnal
		// ...
		project_name: "Pengembangan Sistem Informasi Manajemen Pertanian",
		description_project: "Pengembangan sistem informasi manajemen pertanian yang dapat membantu petani untuk mengelola usaha tani mereka secara lebih efisien",
		project_image: "https://i.pinimg.com/564x/36/95/cc/3695ccaaa3120883eab3988dda8dd50c.jpg",
		project_status: false,
		starting_date: new Date(),
		expected_finish_date: new Date(),
		project_budget: 10000000,
		tags: "Agriculture, Information Technology",
		// investorId: 2,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const Project3 = {
		// Data untuk portofolio Jurnal
		// ...
		project_name: "Pengembangan Varietas Padi Tahan Kekeringan",
		description_project: "Pengembangan varietas padi tahan kekeringan yang dapat meningkatkan produktivitas padi di daerah kering",
		project_image: "https://i.pinimg.com/564x/c7/94/8a/c7948a813f05e64302d0ccb8a1a25c7b.jpg",
		project_status: false,
		starting_date: new Date(),
		expected_finish_date: new Date(),
		project_budget: 10000000,
		tags: "Agriculture, Biotechnology",
		// investorId: 2,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const Payment1 = {
		// Data untuk Comment
		// ...
		price: 500000,
		createdAt: new Date(),
		updatedAt: new Date(),
		// Investor: "alvin",
		// investorId: 1,
		status: false,
		invoice: "Ini adalah invoice",
	};

	const Payment2 = {
		// Data untuk Comment
		// ...
		price: 500000,
		createdAt: new Date(),
		updatedAt: new Date(),
		// Investor: "alvin",
		// investorId: 2,
		status: false,
		invoice: "Ini adalah invoice",
	};

	// Seeding satu researcher
	const dzul = await prisma.researcher.upsert({
		where: { email: "dzul@mail.com" },
		update: {},
		create: {
			firstname: "Dzuuul",
			lastname: "Sucipto",
			isPremium: false,
			education: "S3",
			profileImage: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/10/roadtonarutopv_screenshot.png?resize=696%2C392&ssl=1",
			email: "dzul@mail.com",
			password: pass1,
			background: "Agriculture",
			gender: "Male",
			jabatan_akademik: "Dosen",
			portofolio: { create: [Jurnal0, Jurnal1, Jurnal2, Jurnal3] },
			location: "Jakarta",
			createdAt: new Date(),
			updatedAt: new Date(),// Project: { create: [Project1, Project2, Project3] }, sebelumnya
		},
	});
	const vincent = await prisma.researcher.upsert({
		where: { email: "vincent@mail.com" },
		update: {},
		create: {
			firstname: "Vincent",
			lastname: "Widodo",
			isPremium: true,
			education: "S2",
			profileImage: "https://static.wikia.nocookie.net/naruto/images/7/70/Boruto_Boruto_Movie.png/revision/latest/thumbnail/width/360/height/360?cb=20150526164416&path-prefix=id",
			email: "vincent@mail.com",
			password: pass2,
			background: "Perkapalan",
			gender: "Male",
			jabatan_akademik: "Dosen",
			portofolio: { create: [Jurnal4, Jurnal5] },
			location: "Madura",
			createdAt: new Date(),
			updatedAt: new Date(),// Project: { create: [Project0] }, sebelumnya
		},
	});

	// Untuk Investor
	const alvin = await prisma.investor.upsert({
		where: { email: "alvin@mail.com" },
		update: {},
		create: {
			email: "alvin@mail.com",
			password: pass3,
			firstname: "Alvin",
			lastname: "Gunawan",
			profileImage: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_3_V2.png/revision/latest?cb=20170627161720&path-prefix=id",
			institution: "Pribadi",
			industry_type: "Manufaktur",
			createdAt: new Date(),
			updatedAt: new Date(),
			Project: { create: [Project0] }, //Project: { create: Project0 },
			payment: { create: Payment1 },
		},
	});

	const adlin = await prisma.investor.upsert({
		where: { email: "adlin@mail.com" },
		update: {},
		create: {
			email: "adlin@mail.com",
			password: pass3,
			firstname: "adlin",
			lastname: "uye",
			profileImage: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_3_V2.png/revision/latest?cb=20170627161720&path-prefix=id",
			institution: "Pribadi",
			industry_type: "Agrikultur",
			createdAt: new Date(),
			updatedAt: new Date(),
			Project: { create: [Project1, Project2, Project3] }, // Project: { create: [Project1, Project2, Project3] }, sebelumnya
			payment: { create: Payment2 },
		},
	});

}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
