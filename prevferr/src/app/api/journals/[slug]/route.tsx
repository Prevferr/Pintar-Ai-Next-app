import { prisma } from "../../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type TProps = {
	params: { title: string };
};

// GET journal by title
export async function GET(req: NextRequest, { params }: TProps) {
	const project = await prisma.jurnal.findFirst({
		where: { title: params.title },
		include: {
			portofolio: true,
		},
	});

	if (!project) {
		return NextResponse.json({ error: "Journal not found" }, { status: 404 });
	}

	return NextResponse.json(project);
}
// const slugmodified = slug.replace(/%20/g, " ")
