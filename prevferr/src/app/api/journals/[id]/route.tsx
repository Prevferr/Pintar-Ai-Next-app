import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../helpers/lib/prisma";


type TProps = {
    params: { id: string };
  };
  
  // GET order by id
  export async function GET(req: NextRequest, { params }: TProps) {
    const journal = await prisma.jurnal.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        researcher: true,

      },
    });
  
    if (!journal) {
      return NextResponse.json({ error: "Journal not found" }, { status: 404 });
    }
  
    return NextResponse.json(journal);
  }