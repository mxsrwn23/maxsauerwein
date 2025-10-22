import { NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().email().max(120),
  message: z.string().trim().min(5).max(5000),
})

function sanitize(s: string) {
  return s
    .replace(/<[^>]*>/g, "")             // Tags entfernen
    .replace(/[\u0000-\u001F\u007F]/g, " ") // Steuerzeichen
    .replace(/\r\n?/g, "\n")             // CRLF normalisieren
    .trim()
}

export async function POST(req: Request) {
  const form = await req.formData()
  const raw = Object.fromEntries(form.entries())

  // Validierung & Sanitizing
  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Ungültige Eingabe" }, { status: 400 })
  }

  const { name, email, message } = parsed.data
  const safeName = sanitize(name)
  const safeEmail = sanitize(email).toLowerCase()
  const safeMessage = sanitize(message)

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
      from: `"Portfolio Kontakt" <${process.env.SMTP_USER}>`, // fester Absender
      to: process.env.MAIL_TO,
      replyTo: safeEmail, // hier User-Mail als ReplyTo
      subject: `Neue Nachricht von ${safeName.slice(0, 60)}`, // limit, um Injection zu verhindern
      text: `Von: ${safeName} <${safeEmail}>\n\n${safeMessage}`,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("Mail Fehler:", e)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
