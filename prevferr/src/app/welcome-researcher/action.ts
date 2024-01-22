"use server";
import { prisma } from "../../../helpers/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const welcomePage = async (req: NextRequest) => {
  try {
    // Extracting id from the payload
    const readPayload = req.cookies.get("token");
    console.log(readPayload, "sengggoll bossss");
    
    const id = readPayload?.id;

    if (!id) {
      return NextResponse.json({ error: "User ID not found" }, { status: 400 });
    }

    const response = await prisma.investor.findUnique({
      where: {
        id: Number(id), // Assuming id is a number
      },
      include: {
        Project: true,
      },
    });

    if (!response) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
};
