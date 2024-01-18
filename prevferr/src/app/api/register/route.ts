import { prisma } from "../../../../helpers/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      firstname,
      lastname,
      password,
      education,
      scope,
      institution,
      profileImage,
      email,
      background,
      gender,
      role,
      location,
    } = (await req.json()) as {
      firstname: string;
      lastname: string;
      password: string;
      education: string;
      scope: string;
      institution: string;
      profileImage: string;
      email: string;
      background: string;
      gender: string;
      role: string;
      location: string;
    };
    const hashed_password = await hash(password, 10);

    const researcher = await prisma.researcher.create({
      data: {
        firstname,
        lastname,
        password: hashed_password,
        education,
        scope,
        institution,
        profileImage,
        email: email.toLowerCase(),
        background,
        gender,
        role,
        location,
      },
    });

    return NextResponse.json({
      researcher: {
        firstname: researcher.firstname,
        lastname: researcher.lastname,
        education: researcher.education,
        scope: researcher.scope,
        institution: researcher.institution,
        profileImage: researcher.profileImage,
        email: researcher.email,
        background: researcher.background,
        gender: researcher.gender,
        role: researcher.role,
        location: researcher.location,
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
