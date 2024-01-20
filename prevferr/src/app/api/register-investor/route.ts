import { prisma } from "../../../../helpers/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      budget,
      profileImage,
      institution,
      industry_type,
    } = (await req.json()) as {
      email: string;
      password: string;
      firstname: string;
      lastname: string;
      budget: number;
      profileImage: string;
      institution: string;
      industry_type: string;
    };
    const hashed_password = await hash(password, 10);

    const investor = await prisma.investor.create({
      data: {
        firstname,
        lastname,
        email: email.toLowerCase(),
        password: hashed_password,
        budget,
        profileImage,
        institution,
        industry_type,
      },
    });


    return NextResponse.json({
      investor: {
        firstname: investor.firstname,
        lastname: investor.lastname,
        profileImage: investor.profileImage,
        email: investor.email,
        budget: investor.budget,
        institution: investor.institution,
        industry_type: investor.industry_type,
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
