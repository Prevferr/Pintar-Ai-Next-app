import { prisma } from "../../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type ProjectType = {
	id: string;
};

// GET order by id
export async function GET(req: NextRequest, { id }: ProjectType) {
	// const slugmodified = params.project_name.replace(/%20/g, "-")
	try {
		console.log(id, "<<<<< ID");

		// const project = await prisma.project.findFirst({
		// 	where: { project_name: params.slug },
		// 	include: {
		// 		researcher: true,
		// 		investor: true,
		// 	},
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
