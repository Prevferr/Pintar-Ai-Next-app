import { prisma } from "../../../../helpers/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

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

    // Kirim email konfirmasi
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
      to: investor.email,
      subject: 'Selamat, registrasi berhasil!',
      text: 'Terima kasih telah mendaftar di situs kami.',
    };


     await transporter.sendMail(mailOptions);

    // Sekarang, emailResult adalah hasil pengiriman email yang selesai
    // dan akan dimasukkan dalam respons JSON
    return NextResponse.json({
      investor: {
        firstname: investor.firstname,
        lastname: investor.lastname,
        profileImage: investor.profileImage,
        email: investor.email,
        budget: investor.budget,
        institution: investor.institution,
        industry_type: investor.industry_type,
      }
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
