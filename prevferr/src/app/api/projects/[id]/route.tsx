import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../helpers/lib/prisma";


type TProps = {
    params: { id: string };
  };
  
  // GET order by id
  export async function GET(req: NextRequest, { params }: TProps) {
    const project = await prisma.project.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        researcher: true,
        investor: true,
        // admin: true,
        // user: true,
      },
    });
  
    if (!project) {
      return NextResponse.json({ error: "Journal not found" }, { status: 404 });
    }
  
    return NextResponse.json(project);
  }