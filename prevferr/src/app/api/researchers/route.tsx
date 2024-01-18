import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
// import prisma from "@/prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import * as bcryptjs from "bcryptjs";

// GET ALL USERS
export async function GET(req: NextRequest) {
	const researchers = await prisma.researcher.findMany();
	return NextResponse.json(researchers);
}

// ADD USER
export async function POST(req: NextRequest) {
	const body = await req.json();
	const validation = schema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}

<<<<<<< HEAD
  const researcher = await prisma.researcher.findUnique({
    where: { email: body.email },
  });
=======
	const researcher = await PrismaClient.researcher.findUnique({
		where: { email: body.email },
	});
>>>>>>> a8a36de5830b52cf77f10adaeb48eaf1c9fdbbb2

	if (researcher) {
		return NextResponse.json({ error: "Researchers already exists" }, { status: 400 });
	}

	const hashedPassword = await bcryptjs.hash(body.password, 10);
	const userNew = await prisma.researcher.create({
		data: {
			firstname: body.firstname,
			lastname: body.lastname,
			password: hashedPassword,
			education: body.education,
			scope: body.scope,
			institution: body.institution,
			profileImage: body.profileImage,
			email: body.email,
			background: body.background,
			gender: body.gender,
			role: body.role,
			location: body.location,
		},
	});
	const { password, ...rest } = userNew;

	return NextResponse.json(rest, { status: 201 });
}
