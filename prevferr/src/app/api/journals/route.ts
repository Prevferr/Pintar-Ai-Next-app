import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../helpers/lib/prisma";

export async function POST(req: Request) {
	try {
		const { abstract, title } = (await req.json()) as {
			abstract: string;
			title: string;
		};

		const journal = await prisma.jurnal.create({
			data: {
				abstract,
				title,
			},
		});

		return NextResponse.json({
			journal: {
				abstract: journal.abstract,
				title: journal.title,
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

export async function GET(req: NextRequest) {
	const researchers = await prisma.researcher.findMany();
	return NextResponse.json(researchers);
}
