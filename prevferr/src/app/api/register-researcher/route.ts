import { prisma } from "../../../../helpers/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      firstname,
      lastname,
      password,
      research,
      education,
      profileImage,
      email,
      background,
      gender,
      location,
      phone_number,
      jabatan_akademik,
      investasi,
    } = (await req.json()) as {
      firstname: string;
      lastname: string;
      password: string;
      research: string;
      education: string;
      scope: string;
      institution: string;
      profileImage: string;
      email: string;
      background: string;
      gender: string;
      role: string;
      location: string;
      phone_number: string
      jabatan_akademik: string;
      investasi: string;
    };
    const hashed_password = await hash(password, 10);

    const researcher = await prisma.researcher.create({
      data: {
        firstname,
        lastname,
        research,
        password: hashed_password,
        education,
        profileImage,
        phone_number,
        jabatan_akademik,
        investasi,
        email: email.toLowerCase(),
        background,
        gender,
        location,
      },
    });


    return NextResponse.json({
      researcher: {
        firstname: researcher.firstname,
        lastname: researcher.lastname,
        education: researcher.education,
        research: researcher.research,
        profileImage: researcher.profileImage,
        email: researcher.email,
        background: researcher.background,
        gender: researcher.gender,
        investasi: researcher.investasi,
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
