import { z } from 'zod';
import { prisma } from "../../../../helpers/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

// Define the schema
const researcherSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  education: z.string(),
  profileImage: z.string().url().optional(), // Example: optional and must be a valid URL
  email: z.string().email(),
  password: z.string().min(5), // Example: enforce minimum length for password
  research: z.string(),
  scope: z.string(),
  institution: z.string(),
  background: z.string(),
  gender: z.string(),
  role: z.string(),
  location: z.string(),
});

export async function POST(req: Request) {
  try {
    // Parse and validate the request body
    const parsedData = researcherSchema.parse(await req.json());

    const hashed_password = await hash(parsedData.password, 10);

    const researcher = await prisma.researcher.create({
      data: {
        ...parsedData,
        password: hashed_password,
        email: parsedData.email.toLowerCase(),
      },
    });

    return NextResponse.json({
      researcher: {
        ...researcher,
        password: undefined, // Do not return the password hash
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error instanceof z.ZodError ? error.errors : error.message,
      }),
      { status: 500 }
    );
  }
}
