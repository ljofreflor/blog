import type { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { EnsayoAusente } from "@/components/ensayo-ausente"
import { formatearFecha, getEnsayo, getEnsayos } from "@/lib/ensayos"

type EnsayoPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getEnsayos().map((ensayo) => ({ slug: ensayo.slug }))
}

export async function generateMetadata({
  params,
}: EnsayoPageProps): Promise<Metadata> {
  const { slug } = await params
  const ensayo = getEnsayo(slug)

  if (!ensayo) {
    return { title: "Texto no encontrado" }
  }

  return {
    title: ensayo.titulo,
    description: ensayo.resumen,
  }
}

export default async function EnsayoPage({ params }: EnsayoPageProps) {
  const { slug } = await params
  const ensayo = getEnsayo(slug)

  if (!ensayo) {
    return <EnsayoAusente />
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <time
        dateTime={ensayo.fecha}
        className="text-sm text-muted-foreground"
      >
        {formatearFecha(ensayo.fecha)}
      </time>
      <h1 className="mt-3 max-w-prose font-serif text-4xl tracking-tight text-balance sm:text-5xl">
        {ensayo.titulo}
      </h1>
      <p className="mt-5 max-w-prose text-lg leading-8 text-muted-foreground">
        {ensayo.resumen}
      </p>
      <div className="mt-10 max-w-prose space-y-6 font-serif text-xl leading-9">
        {ensayo.parrafos.map((parrafo, indice) => (
          <p key={indice}>{parrafo}</p>
        ))}
      </div>
      <p className="mt-12">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Volver a los textos
        </Link>
      </p>
    </article>
  )
}
