
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../helpers/lib/prisma";

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
		
	  include: {
		researcher: true,
		investor: true,
	  },
	});
	return NextResponse.json(projects);
  }
