import Link from "next/link"

export default function Footer(){
  return (
    <footer className="container py-10 text-sm text-white/60">
      <div className="border-t border-base-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} Max. Alle Rechte vorbehalten.</p>
        <div className="flex gap-4">
          <Link href="/impressum" className="hover:text-accent-400">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-accent-400">Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}
