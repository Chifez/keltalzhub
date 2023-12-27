import { request } from 'http';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// export async function POST(request) {
//   // Do whatever you want
//   return NextResponse.json({ message: 'Hello World' }, { status: 200 });
// }
interface Ipost {
  name: string;
  contact: string;
  email: string;
  course: string;
  location: string;
  occupation: string;
}
export async function POST(request: { json: () => Ipost }) {
  const { name, contact, email, course, location, occupation } = request.json();
  if (!name || !contact || !email || !course || !location || !occupation) {
    return NextResponse.json(
      { message: 'Incomplete details' },
      { status: 500 }
    );
  } else {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PW,
        },
      });

      const mailOption = {
        from: email,
        to: process.env.NODEMAILER_EMAIL,
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
        { message: 'Failed to send email' },
        { status: 500 }
      );
    }
  }
}
