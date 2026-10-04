import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-foreground"
        >
          Leonardo Jofré
        </Link>
        <nav aria-label="Secciones" className="flex items-center gap-1">
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            Textos
          </Link>
          <Link
            href="/acerca"
            className={buttonVariants({ variant: "ghost" })}
          >
            Acerca
          </Link>
        </nav>
      </div>
    </header>
  )
}
