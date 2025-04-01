"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-serif text-xl font-bold">
          Sacred Structures
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${pathname === "/" ? "underline underline-offset-4" : "text-muted-foreground"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium ${pathname === "/about" ? "underline underline-offset-4" : "text-muted-foreground"}`}
          >
            About
          </Link>
          <Link
            href="/theory"
            className={`text-sm font-medium ${pathname === "/theory" ? "underline underline-offset-4" : "text-muted-foreground"}`}
          >
            Theory
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium ${pathname === "/blog" ? "underline underline-offset-4" : "text-muted-foreground"}`}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}

