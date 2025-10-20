import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const form = await req.formData()
  const payload = Object.fromEntries(form.entries())

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Kontakt" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Neue Nachricht von ${payload.name}`,
      text: `Von: ${payload.name} <${payload.email}>\n\n${payload.message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("Mail Fehler:", e)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
