import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../helpers/lib/prisma";
import { number, z } from "zod";

<<<<<<< HEAD
export async function POST(req: Request) {
	try {
		const { project_name, description_project, project_image, project_status, starting_date, expected_finish_date, project_budget, tags } = (await req.json()) as {
			project_name: string;
			description_project: string;
			project_image: string;
			project_status: boolean;
			starting_date: Date;
			expected_finish_date: Date;
			project_budget: number;
			tags: string;
		};

		// const projectInput = z.object({
		// 	project_name: z.string(),
		// 	description_project: z.string(),
		// 	project_image: z.string(),
		// 	project_status: z.boolean(),
		// 	starting_date: z.date(),
		// 	expected_finish_date: z.date(),
		// 	project_budget: z.number(),
		// 	tags: z.string(),
		// });

		// console.log({ starting_date, expected_finish_date });

		const project = await prisma.project.create({
			data: {
				project_name,
				description_project,
				project_image,
				project_status,
				starting_date: new Date(starting_date),
				expected_finish_date: new Date(expected_finish_date),
				project_budget: Number(project_budget),
				tags,
			},
		});
		// console.log(project, "<<< project");

		return NextResponse.json({
			project: {
				project_name: project.project_name,
				description_project: project.description_project,
				project_image: project.project_image,
				project_status: project.project_status,
				starting_date: project.starting_date,
				expected_finish_date: project.expected_finish_date,
				project_budget: project.project_budget,
				tags: project.tags,
			},
		});
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: error.message,
			}),
			{ status: 500 }
		);
	}
}
=======
// export async function POST(req: Request) {
// 	try {
// 		const { project_name, description_project, project_image, project_budget, tags } = (await req.json()) as {
// 			project_name: string;
// 			description_project: string;
// 			project_image: string;
// 			project_budget: number;
// 			tags: string;
// 		};

// 		const project = await prisma.project.create({
// 			data: {
// 				project_name,
// 				description_project,
// 				project_image,
// 				project_budget,
// 				tags,
// 			},
// 		});

// 		return NextResponse.json({
// 			project: {
// 				project_name: project.project_name,
// 				description_project: project.description_project,
// 				project_image: project.project_image,
// 				project_budget: project.project_budget,
// 				tags: project.tags,
// 			},
// 		});
// 	} catch (error: any) {
// 		return new NextResponse(
// 			JSON.stringify({
// 				status: "error",
// 				message: error.message,
// 			}),
// 			{ status: 500 }
// 		);
// 	}
// }


// GET ALL PROJECTS
export async function GET(req: NextRequest) {
	const projects = await prisma.project.findMany({
	//   include: {
	// 	order: true,
	//   },
	});
	return NextResponse.json(projects);
  }
>>>>>>> 84dec7ee0c088cfeb989994361650d7238f4b1be
