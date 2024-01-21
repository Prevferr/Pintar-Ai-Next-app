import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../helpers/lib/prisma";

type TProps = {
  params: { project_name: string };
};

// GET order by id
export async function GET(req: NextRequest, { params }: TProps) {
  const project = await prisma.project.findFirst({
    where: { project_name: params.project_name},
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
