import Section from "@/components/Section"

export const metadata = { title: "Datenschutz | Max Sauerwein" }

export default function DatenschutzPage() {
  return (
    <Section title="Datenschutzerklärung">
      <div className="prose prose-invert max-w-none text-white/80">
        <h3>1. Verantwortlicher</h3>
        <p>
          Max Sauerwein <br />
          Emil-von-Behring-Straße 8 <br />
          54329 Konz <br />
          E-Mail: <a href="mailto:max@sauer-wein.de">max@sauer-wein.de</a>
        </p>

        <h3>2. Hosting bei Strato</h3>
        <p>
          Diese Website wird bei STRATO AG, Otto-Ostrowski-Straße 7, 10249
          Berlin gehostet. Beim Aufruf der Website erhebt Strato automatisch
          sogenannte Logfiles (z. B. IP-Adresse, Zeitstempel, angeforderte Seite,
          Browsertyp). Die Speicherung erfolgt für bis zu 7 Tage und dient der
          Sicherstellung des technischen Betriebs und der IT-Sicherheit.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Ein entsprechender Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO)
          wurde mit Strato abgeschlossen.
        </p>

        <h3>3. Kontaktformular</h3>
        <p>
          Wenn Sie das Kontaktformular nutzen, werden die dort eingegebenen
          Daten (Name, E-Mail-Adresse, Nachricht) an mich übermittelt und zur
          Bearbeitung Ihrer Anfrage gespeichert. Die Daten werden ausschließlich
          für die Kommunikation mit Ihnen genutzt und nicht an Dritte
          weitergegeben.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder
          vorvertragliche Maßnahmen).
        </p>

        <h3>4. GitHub API</h3>
        <p>
          Um meine Projekte anzuzeigen, nutzt diese Website die GitHub API
          (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA).
          Beim Laden der Projektliste wird eine Anfrage an GitHub gestellt.
          Dabei können technische Daten (z. B. IP-Adresse, Browsertyp, Zeitpunkt
          des Aufrufs) an Server von GitHub übertragen werden.
        </p>
        <p>
          GitHub kann diese Daten in den USA verarbeiten. GitHub ist nach dem
          EU-US Data Privacy Framework zertifiziert. Weitere Infos:{" "}
          <a
            href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Privacy Statement
          </a>
          .
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          der ansprechenden Darstellung meiner Projekte).
        </p>

        <h3>5. Rechte der betroffenen Personen</h3>
        <p>Sie haben nach der DSGVO folgende Rechte:</p>
        <ul>
          <li>Auskunft über die gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</li>
          <li>
            Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)
          </li>
        </ul>

        <h3>6. Speicherdauer</h3>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für den
          jeweiligen Zweck erforderlich ist. Daten aus Kontaktanfragen werden
          gelöscht, sobald die Kommunikation abgeschlossen ist, sofern keine
          gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </div>
    </Section>
  )
}
