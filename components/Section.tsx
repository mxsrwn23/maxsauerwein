export default function Section({id, title, subtitle, children}: {id?: string, title: string, subtitle?: string, children: React.ReactNode}){
  return (
    <section id={id} className="container py-12 md:py-20">
      <div className="mb-5 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">{title}</h2>
        {subtitle ? <p className="text-white/70 mt-2">{subtitle}</p> : null}
      </div>
      <div className="grid gap-5 md:gap-6">{children}</div>
    </section>
  )
}
