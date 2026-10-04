import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
        Esta página no existe
      </h1>
      <p className="mt-5 max-w-prose text-lg leading-8 text-muted-foreground">
        La dirección no corresponde a ningún texto ni a una sección del sitio.
      </p>
      <p className="mt-8">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Volver al inicio
        </Link>
      </p>
    </div>
  )
}
