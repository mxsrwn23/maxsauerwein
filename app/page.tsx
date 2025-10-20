import Hero from "@/components/Hero"
import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"
import SkillBar from "@/components/SkillBar"
import { projects, skills, experience } from "@/lib/data"
import { fetchRepos } from "@/lib/github"
import RepoCard from "@/components/RepoCard"

export default async function Home() {
  const repos = await fetchRepos({ perPage: 6 })

  return (
    <>
      <Hero />
      <Section id="projects" title="Projects" subtitle="Top Repos von GitHub">
        <div className="grid md:grid-cols-2 gap-6">
          {repos.map(r => <RepoCard key={r.id} repo={r} />)}
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Aktuelle Einschätzung">
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map(s => <SkillBar key={s.name} name={s.name} level={s.level} />)}
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Relevante Stationen">
        <div className="grid gap-4">
          {experience.map(job => (
            <div className="card p-6" key={job.company + job.role}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{job.role} · {job.company}</h3>
                <span className="text-sm text-white/60">{job.start} bis {job.end}</span>
              </div>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-white/80">
                {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
