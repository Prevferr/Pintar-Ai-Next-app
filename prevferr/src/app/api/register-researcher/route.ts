import { prisma } from "../../../../helpers/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { z } from "zod";

// Define the Zod schema for validation
const researcherSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  password: z.string().min(5),
  education: z.string().min(1),
  profileImage: z.string(),
  email: z.string().email(),
  background: z.string().min(1),
  gender: z.string().min(1),
  location: z.string().min(1),
  phone_number: z.string().min(1),
  jabatan_akademik: z.string().min(1),
  investasi: z.string().default("0"),
});

export async function POST(req: Request) {
  try {
    const requestData = await req.json();

    // Validate data with Zod schema
    const result = researcherSchema.safeParse(requestData);

    if (!result.success) {
      return new NextResponse(JSON.stringify({
        status: "error",
        message: "Validation failed",
        errors: result.error.issues,
      }), { status: 400 });
    }

    // Destructure validated data
    const {
      firstname,
      lastname,
      password,
      education,
      profileImage,
      email,
      background,
      gender,
      location,
      phone_number,
      jabatan_akademik,
      investasi,
    } = result.data;

    const hashed_password = await hash(password, 10);

    const researcher = await prisma.researcher.create({
      data: {
        firstname,
        lastname,
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

    // Set up email sending with nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pintarscholar@gmail.com',
        pass: 'ptfk nwfa znfd oajn',
      },
    });

    const mailOptions = {
      from: {
        name: "Pintar Scholar",
        address: 'pintarscholar@gmail.com',
      },
      to: researcher.email,
      subject: 'Selamat, registrasi berhasil!',
      text: 'Terima kasih telah mendaftar di situs kami.',
    };

    await transporter.sendMail(mailOptions);

    // Send response
    return NextResponse.json({
      researcher: {
        firstname: researcher.firstname,
        lastname: researcher.lastname,
        education: researcher.education,
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
