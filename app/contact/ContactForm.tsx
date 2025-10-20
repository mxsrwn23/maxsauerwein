"use client"
import { useState } from "react"

export default function ContactForm() {
  const [state, setState] = useState<"idle"|"loading"|"done"|"error">("idle")

  async function submit(form: FormData) {
    setState("loading")
    try {
      const res = await fetch("/api/contact", { method: "POST", body: form })
      if (!res.ok) throw new Error("Request failed")
      setState("done")
    } catch {
      setState("error")
    }
  }

  return (
    <form action={submit} className="card p-6 grid gap-4 max-w-xl">
      <input required name="name" placeholder="Dein Name" className="bg-base-700 rounded-xl2 px-3 py-2 outline-none" />
      <input required type="email" name="email" placeholder="E-Mail" className="bg-base-700 rounded-xl2 px-3 py-2 outline-none" />
      <textarea required name="message" placeholder="Nachricht" rows={5} className="bg-base-700 rounded-xl2 px-3 py-2 outline-none" />
      <button disabled={state==="loading"} className="rounded-xl2 px-4 py-2 bg-accent-500 text-black font-medium">
        {state==="loading" ? "Sende..." : "Abschicken"}
      </button>
      {state==="done" && <p className="text-accent-400">Danke. Ich melde mich.</p>}
      {state==="error" && <p className="text-red-400">Fehler. Versuche es später erneut.</p>}
    </form>
  )
}
