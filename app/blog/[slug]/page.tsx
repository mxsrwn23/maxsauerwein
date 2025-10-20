import Section from "@/components/Section"

export default function PostPage({ params }: { params: { slug: string } }){
  return (
    <Section title="Demo Post" subtitle={params.slug}>
      <article className="prose prose-invert max-w-none">
        <p>Hier steht bald ein richtiger Artikel. Ersetze diese Datei durch ein MDX Setup oder fetch von deinem CMS.</p>
      </article>
    </Section>
  )
}
