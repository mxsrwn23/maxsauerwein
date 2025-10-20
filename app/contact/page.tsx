import Section from "@/components/Section"
import ContactForm from "./ContactForm"

export const metadata = { title: "Contact | Max" }

export default function ContactPage() {
  return (
    <Section title="Kontakt" subtitle="Kurze Nachricht genügt">
      <ContactForm />
    </Section>
  )
}
