import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../helpers/lib/prisma";

export async function POST(req: Request) {
	try {
		const idUserLogin = req.headers.get("x-user-id");
		// console.log(idUserLogin, "<<<<<<< LOGIN INFO");

		const { project_name, description_project, project_image, project_status, starting_date, expected_finish_date, project_budget, tags } = (await req.json()) as {
			project_name: string;
			description_project: string;
			project_image: string;
			project_status: boolean;
			starting_date: Date;
			expected_finish_date: Date;
			project_budget: number;
			tags: string;
			investorId: number;
		};
		console.log("masuk");

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
				investorId: Number(idUserLogin),
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

// GET ALL PROJECTS
export async function GET(req: NextRequest) {
	// console.log("masuk di get /api/projects");
	// console.log(req.headers.get("x-user-id"), "<<<< user id nih di get");
	const projects = await prisma.project.findMany({
		include: {
			researcher: true,
			investor: true,
		},
	});
	return NextResponse.json(projects);
}
