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
        user: 'dzulfiqar5819@mail.com',
        pass: 'wzad nthu zpac jrea',
      },
    });

    const mailOptions = {
      from: 'dzulfiqar5819@mail.com',
      to: investor.email,
      subject: 'Selamat, registrasi berhasil!',
      text: 'Terima kasih telah mendaftar di situs kami.',
    };

    let emailResult;

    try {
      emailResult = await transporter.sendMail(mailOptions);
      console.log('Email terkirim: ' + emailResult.response);
    } catch (error) {
      console.error('Gagal mengirim email:', error);
    }

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
      },
      emailResult: emailResult ? emailResult.response : null,
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
