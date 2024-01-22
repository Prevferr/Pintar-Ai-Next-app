import { prisma } from "../../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type TProps = {
<<<<<<< HEAD
  params: { slug: string };
=======
	params: { project_name: string };
>>>>>>> 45da836fa46b69b25863f4d26502f565a58ad77f
};

// GET order by id
export async function GET(req: NextRequest, { params }: TProps) {
<<<<<<< HEAD
  // const slugmodified = params.project_name.replace(/%20/g, "-")
  const project = await prisma.project.findFirst({
    
    where: { project_name: params.slug },
    include: {
      researcher: true,
      investor: true,
      // admin: true,
      // user: true,
    },
  });
=======
	// const slugmodified = params.project_name.replace(/%20/g, "-")
	const project = await prisma.project.findFirst({
		where: { project_name: params.project_name },
		include: {
			researcher: true,
			investor: true,
			// admin: true,
			// user: true,
		},
	});
>>>>>>> 45da836fa46b69b25863f4d26502f565a58ad77f

	if (!project) {
		return NextResponse.json({ error: "Project not found" }, { status: 404 });
	}

	return NextResponse.json(project);
}
