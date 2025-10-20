import Section from "@/components/Section"

export const metadata = { title: "About | Max" }

export default function AboutPage(){
  return (
    <Section title="About me" subtitle="Kurz und ehrlich">
      <div className="prose prose-invert max-w-none">
        <p>
          Informatikstudent. Baue Webanwendungen mit Fokus auf DX und Performance. 
          Lerne kontinuierlich und dokumentiere sauber. Offen für Werkstudentenstellen und Freelance.
        </p>
        <p>
          Stärken. Systematisches Arbeiten, Ownership, klare Kommunikation. 
          Schwächen. Perfektionismus, manchmal zu tief im Detail. Arbeite aktiv daran.
        </p>
      </div>
    </Section>
  )
}
