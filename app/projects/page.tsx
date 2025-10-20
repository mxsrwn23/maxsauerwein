import Section from "@/components/Section"
import RepoCard from "@/components/RepoCard"
import { fetchRepos } from "@/lib/github"

export const metadata = { title: "Projects | Max" }

export default async function ProjectsPage() {
  const repos = await fetchRepos({ includeForks: false, perPage: 24 })

  return (
    <Section title="Projects" subtitle="Automatisch aus GitHub geladen">
      {repos.length === 0 ? (
        <div className="card p-6">Keine Repositories gefunden. Prüfe GITHUB_USERNAME oder Token.</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {repos.map(r => <RepoCard key={r.id} repo={r} />)}
        </div>
      )}
    </Section>
  )
}
