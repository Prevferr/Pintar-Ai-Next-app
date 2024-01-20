const { PrismaClient } = require('@prisma/client');
// import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// import { hashText } from "../../helpers/utils/hash";
// import * as bcryptjs from "bcryptjs";
const {hash} = require("bcryptjs")

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

  const Project = {
		// Data untuk portofolio Jurnal
		// ...
		project_name: "Meningkatkan Efisiensi Mesin",
		description_project: "Bagaiman caranya meningkatkan efisiensi mesin",
		project_image : "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-63697343/no-brand_no-brand_full01.jpg",
    project_status : false,
    starting_date: new Date(),
    expected_finish_date: new Date(),
    project_budget  : 10000000,
    tags: "Machine",
    createdAt: new Date(),
    updatedAt: new Date(),
	};


	const Jurnal = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Abstract of the journal",
		title: "Petanian Skala Mikro di Indonesia",
	};

	const Comment = {
		// Data untuk Comment
		// ...
		comment: "Bagus sekali",
    createdAt: new Date(),
		updatedAt: new Date(),
	};

	const Payment = {
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

  // Seeding satu researcher
  const dzul = await prisma.researcher.upsert({
    where: { email: "dzul@mail.com" },
    update: {},
    create: {
      firstname: "Dzuuul",
      lastname: "Sucipto",
      education: "S3",
      profileImage:
        "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/10/roadtonarutopv_screenshot.png?resize=696%2C392&ssl=1",
      email: "dzul@mail.com",
      password: pass1,
      research: "Pertanian",
      phone_number: "08569921322",
      background: "Pertanian",
      gender: "Male",
      jabatan_akademik: "Dosen",
      portofolio: { create: Jurnal },
      location: "Jakarta",
      investasi: "Masoh blom tau",
      createdAt: new Date(),
      updatedAt: new Date(),
      Project: { create: Project },
    },
  });
  const vincent = await prisma.researcher.upsert({
    where: { email: "vincent@mail.com" },
    update: {},
    create: {
      firstname: "Vincent",
      lastname: "Widodo",
      education: "S2",
      profileImage:
        "https://static.wikia.nocookie.net/naruto/images/7/70/Boruto_Boruto_Movie.png/revision/latest/thumbnail/width/360/height/360?cb=20150526164416&path-prefix=id",
      email: "vincent@mail.com",
      password: pass2,
      research: "Perkapalan",
      phone_number: "089686932111",
      background: "Perkapalan",
      gender: "Male",
      jabatan_akademik: "Dosen",
      portofolio: { create: Jurnal },
      location: "Madura",
      investasi: "Masoh blom tau",
      createdAt: new Date(),
      updatedAt: new Date(),
      Project: { create: Project },
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
      budget: 3000000,
      profileImage:
        "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_3_V2.png/revision/latest?cb=20170627161720&path-prefix=id",
      institution: "Pribadi",
      industry_type: "Agrikultur",
      createdAt: new Date(),
      updatedAt: new Date(),
      Project: { create: Project },
      payment: { create: Payment },
    },
  });
  console.log({ dzul, vincent, alvin });
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
