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
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // schließe das Menü beim Routenwechsel
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition",
        scrolled && "backdrop-blur bg-base-900/70 border-b border-base-700"
      )}
    >
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-accent-400">
          {"<MaxDev />"}
        </Link>

        {/* Desktop */}
        <ul className="hidden sm:flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  "hover:text-accent-400",
                  pathname === l.href && "text-accent-400"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger */}
        <button
          className="sm:hidden rounded-xl2 border border-base-700 px-3 py-1 text-sm"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>

      {/* Mobile Menü */}
      <div
        id="mobile-nav"
        className={clsx(
          "sm:hidden overflow-hidden border-t border-base-700 bg-base-900/95 backdrop-blur transition-[max-height]",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <ul className="container py-3 flex flex-col gap-2 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  "block w-full rounded-xl2 px-3 py-2 hover:bg-base-800",
                  pathname === l.href && "text-accent-400"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
