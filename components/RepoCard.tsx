import Link from "next/link"
import type { Repo } from "@/lib/github"

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="card p-6">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {repo.language ? <span className="badge">{repo.language}</span> : null}
        {repo.topics?.slice(0, 3).map(t => <span className="badge" key={t}>{t}</span>)}
      </div>
      <h3 className="text-xl font-semibold">
        <Link href={repo.html_url} className="hover:text-accent-400" target="_blank" rel="noreferrer">
          {repo.name}
        </Link>
      </h3>
      {repo.description ? <p className="text-white/70 mt-2">{repo.description}</p> : null}
      <div className="mt-4 text-sm text-white/70 flex gap-4">
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
        <span>Update {new Date(repo.pushed_at).toLocaleDateString("de-DE")}</span>
      </div>
    </article>
  )
}
