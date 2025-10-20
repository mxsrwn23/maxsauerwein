import Link from "next/link"

export default function Hero(){
  return (
    <div className="container pt-28 pb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">Developer Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
            Hey, ich bin <span className="text-accent-400">Max</span>. Full‑Stack Developer
          </h1>
          <p className="text-white/70 mt-4">
            Fokus auf performante Frontends und robuste Backends. Sauberer Code. Reproduzierbare Deployments.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="#projects" className="rounded-xl2 px-4 py-2 bg-accent-500 text-black font-medium">Projekte</Link>
            <Link href="/Max_CV.pdf" className="rounded-xl2 px-4 py-2 border border-base-700 hover:border-accent-500">CV</Link>
          </div>
        </div>
        <div className="card p-6">
          <pre className="text-xs md:text-sm overflow-auto">
{`const max = {
  role: "Full-Stack Dev",
  stack: ["HTML", "CSS", "JS", "JAVA", "Python", "C++"],
  location: "near Trier",
  fun: ["Motorradfahren", "3D-Druck", "Selfhosting"]
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
