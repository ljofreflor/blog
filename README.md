# Textos largos

Blog personal de Leonardo Jofré. Aquí van los ensayos y las notas que no caben en LinkedIn.

## Cómo correrlo

Hace falta Node.js 22.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000/blog](http://localhost:3000/blog).

El sitio público está en [https://ljofreflor.github.io/blog/](https://ljofreflor.github.io/blog/). Cada push a `main` publica la exportación estática con GitHub Pages. Las rutas quedan bajo `/blog`.

## Qué hay

- `/` lista los textos. Si no hay ninguno, lo dice: no hay un ensayo de relleno.
- `/ensayos/[slug]` es la página de un texto.
- `/acerca` explica, en corto, para qué es el sitio.

## Cómo agregar un texto

Los ensayos están en `src/lib/ensayos.ts`, en el arreglo `ensayos`. Mientras ese arreglo esté vacío, la portada no muestra publicaciones.

Cada texto necesita:

- `slug`: la parte final de la URL, por ejemplo `un-titulo`
- `titulo`
- `fecha`: `AAAA-MM-DD`
- `resumen`: una o dos frases para la lista
- `parrafos`: el cuerpo, un string por párrafo

La ruta queda en `/ensayos/un-titulo`.
