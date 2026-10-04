export type Ensayo = {
  slug: string
  titulo: string
  fecha: string
  resumen: string
  parrafos: string[]
}

/** Publicado. Vacío hasta que haya un texto real. Ver el README. */
export const ensayos: Ensayo[] = []

export function getEnsayos(): Ensayo[] {
  return [...ensayos].sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
}

export function getEnsayo(slug: string): Ensayo | undefined {
  return ensayos.find((ensayo) => ensayo.slug === slug)
}

export function formatearFecha(iso: string): string {
  const fecha = new Date(`${iso}T12:00:00`)
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(fecha)
}
