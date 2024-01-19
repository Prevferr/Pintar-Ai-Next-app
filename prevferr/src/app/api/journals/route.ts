import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../helpers/lib/prisma";

export async function POST(req: Request) {
	try {
		const { abstract, title, description } = (await req.json()) as {
			abstract: string;
			title: string;
			description: string;
		};

		const journal = await prisma.jurnal.create({
			data: {
				abstract,
				title,
				description,
			},
		});

		return NextResponse.json({
			journal: {
				abstract: journal.abstract,
				title: journal.title,
				description: journal.description,
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


// GET ALL JOURNALS
export async function GET(req: NextRequest) {
	const projects = await prisma.jurnal.findMany({
	//   include: {
	// 	order: true,
	//   },
	});
	return NextResponse.json(projects);
  }
