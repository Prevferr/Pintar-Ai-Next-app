import { prisma } from "../../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


type TProps = {
  params: { slug: string };
};

// GET order by id
export async function GET(req: NextRequest, { params }: TProps) {
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

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
