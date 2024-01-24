import { prisma } from "../../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// export type ProjectType = {
// 	id: number;
// 	project_name: string;
// 	description_project: string;
// 	project_image: string;
// 	project_status: boolean;
// 	starting_date: Date;
// 	expected_finish_date: Date;
// 	project_budget: number;
// 	keywords: string;
// 	createdAt: string;
// 	updatedAt: string;
// 	researcherId: number;
// 	investorId: number;
// };

// GET order by id
export async function GET(req: NextRequest) {
	const project = await prisma.project.findFirst({
		where: {
			id,
		},
	});
}
