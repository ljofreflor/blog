"use client"

import Link from "next/link"
import { useSyncExternalStore } from "react"

import { EnsayoAusente } from "@/components/ensayo-ausente"
import { buttonVariants } from "@/components/ui/button"

function suscribir() {
  return () => {}
}

function esRutaDeEnsayo() {
  return /\/ensayos\/[^/]+\/?$/.test(window.location.pathname)
}

export default function NotFound() {
  const esEnsayo = useSyncExternalStore(suscribir, esRutaDeEnsayo, () => false)

  if (esEnsayo) {
    return <EnsayoAusente />
  }

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
