import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function EnsayoNoEncontrado() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
        No hay un texto con ese nombre
      </h1>
      <p className="mt-5 max-w-prose text-lg leading-8 text-muted-foreground">
        Puede que todavía no esté publicado, o que la dirección esté mal.
      </p>
      <p className="mt-8">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Volver a los textos
        </Link>
      </p>
    </div>
  )
}
