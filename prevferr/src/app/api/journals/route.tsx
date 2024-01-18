import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
console.log(prisma, "<<< prismanya");

export async function GET(req: NextRequest) {
	const journals = await prisma.journal.findMany();
	console.log(journals, "<<< journal");

	return NextResponse.json(journals);
}

export async function POST(req: NextRequest) {
	console.log(req, "<<<< request");
}
