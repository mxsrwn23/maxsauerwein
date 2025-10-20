import { ReactNode } from "react"

export default function Section({id, title, subtitle, children}: {id?: string, title: string, subtitle?: string, children: ReactNode}){
  return (
    <section id={id} className="container py-16 md:py-24">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {subtitle ? <p className="text-white/70 mt-2">{subtitle}</p> : null}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  )
}
