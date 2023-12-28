import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer/lib/smtp-transport';

interface Ipost {
  name: string;
  contact: string;
  email: string;
  course: string;
  location: string;
  occupation: string;
}
export async function POST(request: any) {
  try {
    const { name, contact, email, course, location, occupation } =
      await request.json();
    if (!name || !contact || !email || !course || !location || !occupation) {
      return NextResponse.json(
        { message: 'Incomplete details' },
        { status: 500 }
      );
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
      },
    });

    const mailOption = {
      from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      subject: `New Regristration for the ${course} course`,
      html: `
          <h3>Hello instructor,</h3>
          <p>my name is ${name},i would like to register for the ${course} course</p>
          <p> I am currently a ${occupation} and i reside at ${location},my phone number is ${contact}</p>
          `,
    };
    await transporter.sendMail(mailOption);
    return NextResponse.json(
      { message: 'congratulations,your registration details have been sent' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send email', error },
      { status: 500 }
    );
  }
}
