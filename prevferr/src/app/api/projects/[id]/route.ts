import { prisma } from "../../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export type ProjectType = {
	id: number;
	project_name: string;
	description_project: string;
	project_image: string;
	project_status: boolean;
	starting_date: string;
	expected_finish_date: string;
};

// GET order by id
export async function GET(req: NextRequest, { params }: ProjectType) {
	// const slugmodified = params.project_name.replace(/%20/g, "-")

	try {
		console.log(params, "<<<<< WKOAKWOKAW");

		// const project = await prisma.project.findFirst({
		// 	where: { project_name: params.slug },
		// });
		// if (!project) {
		// 	return NextResponse.json({ error: "Project not found" }, { status: 404 });
		// }
		// return NextResponse.json(project);
	} catch (error) {
		console.error("Prisma error:", error);
		return NextResponse.json({ error: "An error occurred" }, { status: 500 });
	}
}
