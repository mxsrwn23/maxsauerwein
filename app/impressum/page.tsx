import Section from "@/components/Section"

export const metadata = { title: "Impressum | Max" }

export default function ImpressumPage() {
  return (
    <Section title="Impressum">
      <div className="prose prose-invert max-w-none text-white/80">
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          Max Sauerwein <br />
          Emil-von-Behring-Straße 8 <br />
          54329 Konz
        </p>

        <h3>Kontakt</h3>
        <p>
          E-Mail: <a href="mailto:max@sauer-wein.de">max@sauer-wein.de</a>
        </p>

        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet.
        </p>
      </div>
    </Section>
  )
}
