import Link from "next/link"
import type { Project } from "@/lib/data"

export default function ProjectCard({p}: {p: Project}){
  return (
    <article className="card p-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {p.stack.map(s => <span key={s} className="badge">{s}</span>)}
      </div>
      <h3 className="text-xl font-semibold">{p.title}</h3>
      <p className="text-white/70 mt-2">{p.description}</p>
      <div className="mt-4 flex gap-4 text-sm">
        {p.href ? <Link href={p.href} className="hover:text-accent-400">Live</Link> : null}
        {p.repo ? <Link href={p.repo} className="hover:text-accent-400">Repo</Link> : null}
      </div>
    </article>
  )
}
