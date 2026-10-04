import Link from "next/link"

import { formatearFecha, getEnsayos } from "@/lib/ensayos"

export default function Home() {
  const ensayos = getEnsayos()

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <p className="text-sm tracking-wide text-muted-foreground uppercase">
        Leonardo Jofré
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
        Textos largos
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
        Aquí van los textos que no caben en LinkedIn. Ensayos y notas largas,
        para leerlos enteros.
      </p>

      {ensayos.length === 0 ? (
        <section
          aria-labelledby="sin-textos"
          className="mt-12 rounded-xl border border-dashed border-border bg-card px-5 py-8 sm:px-8"
        >
          <h2
            id="sin-textos"
            className="font-serif text-2xl tracking-tight"
          >
            Todavía no hay textos
          </h2>
          <p className="mt-3 max-w-prose leading-7 text-muted-foreground">
            No hay ningún ensayo publicado. Esta lista está vacía a propósito.
            Cuando haya un texto, va a aparecer aquí, con su fecha y el enlace
            para leerlo entero.
          </p>
        </section>
      ) : (
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {ensayos.map((ensayo) => (
            <li key={ensayo.slug} className="py-7">
              <time
                dateTime={ensayo.fecha}
                className="text-sm text-muted-foreground"
              >
                {formatearFecha(ensayo.fecha)}
              </time>
              <h2 className="mt-2 font-serif text-2xl tracking-tight sm:text-3xl">
                <Link
                  href={`/ensayos/${ensayo.slug}`}
                  className="underline-offset-4 hover:underline"
                >
                  {ensayo.titulo}
                </Link>
              </h2>
              <p className="mt-3 max-w-prose leading-7 text-muted-foreground">
                {ensayo.resumen}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
