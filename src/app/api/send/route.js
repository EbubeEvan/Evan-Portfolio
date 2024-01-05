import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { subject, message } = await req.json();
  console.log(subject, message);
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ["ebubemmayie@gmail.com"],
      subject: subject,
      react: (
        <>
          <p>{message}</p>
        </>
      ),
    });
    console.log(data)
    console.log(NextResponse.json(data));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
