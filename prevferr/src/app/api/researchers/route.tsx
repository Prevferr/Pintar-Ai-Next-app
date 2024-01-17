import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
// import prisma from "@/prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { hash } from "bcryptjs";

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

  const researcher = await PrismaClient.researcher.findUnique({
    where: { email: body.email },
  });

  if (researcher) {
    return NextResponse.json(
      { error: "Researchers already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await hash(body.password, 10);
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
