import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acerca",
  description:
    "El sitio de Leonardo Jofré para los textos largos que no caben en LinkedIn.",
}

export default function Acerca() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Acerca</h1>
      <div className="mt-6 max-w-prose space-y-5 text-lg leading-8">
        <p>
          Este sitio es de Leonardo Jofré. Es el lugar de los textos largos:
          los que no entran en una publicación de LinkedIn.
        </p>
        <p className="text-muted-foreground">
          Por ahora no hay ensayos publicados. Cuando haya uno, se lee desde
          la portada.
        </p>
      </div>
    </div>
  )
}
