"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import clsx from "clsx"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
]

export default function Nav(){
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={clsx("fixed top-0 inset-x-0 z-50 transition", scrolled ? "backdrop-blur bg-base-900/70 border-b border-base-700" : "")}>
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-accent-400">{"<MaxDev />"}</Link>
        <ul className="flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={clsx("hover:text-accent-400", pathname === l.href && "text-accent-400")}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
