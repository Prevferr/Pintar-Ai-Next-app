import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const Jurnal = {
    // Data untuk portofolio Jurnal
    // ...
    abstract: "Abstract of the journal",
    title: "Petanian Skala Mikro di Indonesia",
    description: "Pertanian Skala Mikro di Indonesia",
  };

  const Comment = {
    // Data untuk Comment
    // ...
    comment: "Bagus sekali",
  };

  const Project = {
    // Data untuk Project
    // ...
    project_name: "Pertanian Desa",
    description_project: "Pertanian yang dilakukan di desa",
    project_image: "https://pertanian.uma.ac.id/wp-content/uploads/2023/06/Desain-tanpa-judul-34.png",
    project_status: false, // or false
    starting_date: new Date(), // Replace with actual starting date
    expected_finish_date: new Date(), // Replace with actual expected finish date
    project_budget: 1000000, // Replace with actual project budget
    tags: "Project Tags",
  };

  // Seeding satu researcher
  const dzul = await prisma.researcher.upsert({
    where: { email: "dzul@mail.com" },
    update: {},
    create: {
      fistname: "Dzul",
      lastname: "Sucipto",
      education: "S3",
      scope: "Pertanian",
      research: "Pertanian",
      institution: "Hacktiv8",
      profileImage:
        "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/10/roadtonarutopv_screenshot.png?resize=696%2C392&ssl=1",
      email: "dzul@mail.com",
      password: "dzul123",
      background: "Pertanian",
      gender: "Male",
      role: "Dosen",
      portofolio: { create: Jurnal },
      location: "Jakarta",
      createdAt: new Date(),
      updatedAt: new Date(),
      Comment: { create: Comment },
      Project: { create: Project },
    },
  });
  const vincent = await prisma.researcher.upsert({
    where: { email: "vincent@mail.com" },
    update: {},
    create: {
      fistname: "Vincent",
      lastname: "Widodo",
      education: "S2",
      scope: "Perkapalan",
      research: "Perkapalan",
      institution: "Institut Wibu Indonesia",
      profileImage:
        "https://static.wikia.nocookie.net/naruto/images/7/70/Boruto_Boruto_Movie.png/revision/latest/thumbnail/width/360/height/360?cb=20150526164416&path-prefix=id",
      email: "vincent@mail.com",
      password: "vincent123",
      background: "Perkapalan",
      gender: "Male",
      role: "Dosen",
      portofolio: { create: Jurnal },
      location: "Madura",
      createdAt: new Date(),
      updatedAt: new Date(),
      Comment: { create: Comment },
      Project: { create: Project },
    },
  });
  console.log({ dzul, vincent });
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
