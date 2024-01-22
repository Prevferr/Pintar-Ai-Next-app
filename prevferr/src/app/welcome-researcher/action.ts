"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../helpers/lib/prisma";

type TProps = {
  params: { id: string };
};

// GET portofolio by user id
export async function GET(req: NextRequest, { params }: TProps) {
  try {
    // Get user id from headers
    const userId = req.headers.get("x-user-id");

    // Check if user id exists
    if (!userId) {
      return NextResponse.json({ error: "User ID not found" }, { status: 400 });
    }

    // Find user with associated portofolio
    const userWithPortofolio = await prisma.researcher.findUnique({
      where: { id: parseInt(userId) },
      include: {
        portofolio: true,
      },
    });

    // Check if user exists
    if (!userWithPortofolio) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(userWithPortofolio);
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
