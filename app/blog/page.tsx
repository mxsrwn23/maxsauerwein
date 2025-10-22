import Section from "@/components/Section"
import Link from "next/link"

const posts = [
  /*{ slug: "was-braucht-ein-webentwickler", title: "Was braucht es um Webentwickler zu werden", date: "10.12.2023", reading: "4 min", excerpt: "Überblick über Pfade und Skills." },
  { slug: "next-14-server-actions", title: "Server Actions in Next 14 sauber einsetzen", date: "02.03.2024", reading: "6 min", excerpt: "Pragmatische Best Practices." }
  */{ slug: "", title: "", date: "", reading: "", excerpt: "" }
  ]

export const metadata = { title: "Blog | Max" }

export default function BlogIndex(){
  return (
    <Section title="Blog" subtitle="Kurz und auf den Punkt">
      <div className="grid gap-6">
        {posts.map(p => (
          <article className="card p-6" key={p.slug}>
            <div className="text-sm text-white/60">{p.date} · {p.reading}</div>
            <h3 className="text-xl font-semibold mt-1">
              <Link href={`/blog/${p.slug}`} className="hover:text-accent-400">{p.title}</Link>
            </h3>
            <p className="text-white/70 mt-2">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
