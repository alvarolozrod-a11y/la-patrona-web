# La Patrona · Web estática

Proyecto estático preparado para:
- Hostinger
- GitHub Pages
- Netlify / Vercel
- Cualquier hosting con HTML/CSS/JS

## Estructura

- `index.html` → estructura de la web.
- `styles.css` → diseño responsive.
- `script.js` → carta, precios, filtros y pequeñas interacciones.
- `assets/` → carpeta reservada para fotografías y recursos locales.

## IMPORTANTE — Uber Eats

Se han marcado expresamente en `index.html` y `script.js` los bloques:

`UBER EATS — CTA / REDIRECCIÓN`

Si el comercio no quiere utilizar Uber Eats, puedes eliminar los enlaces/botones marcados con ese comentario sin tocar el resto de la web.

La URL utilizada actualmente es la ficha pública de La Patrona en Uber Eats.

## IMPORTANTE — Carta y precios

Todos los productos y precios se encuentran agrupados en `script.js`, bajo:

`CARTA Y PRECIOS`

Para cambiar un precio, por ejemplo:

`{name:"Bandeja Paisa", price:26, ...}`

solo hay que cambiar `26`.

## Fotografías

No he incluido fotografías descargadas directamente de Uber Eats. La ficha pública permite consultar que existen imágenes asociadas a varios platos, pero no he podido obtenerlas de forma fiable como archivos locales redistribuibles desde el acceso disponible.

Para no utilizar fotos de otro restaurante ni presentar imágenes genéricas como si fueran propias de La Patrona, la demo utiliza composiciones visuales CSS como sustitución temporal.

La estructura está preparada para añadir las fotografías reales posteriormente. Recomendación: pedir al restaurante sus fotografías originales o exportarlas desde sus propios recursos con autorización.

## Datos utilizados

La carta se ha construido tomando como referencia la ficha pública de Uber Eats de:

LA PATRONA  
Avenida Alcalde José Aranda 53, Local 7  
28924 Alcorcón, Madrid

Los precios corresponden a la versión online consultada el 08/10/2026 y pueden variar entre Uber Eats, local y otras plataformas.

Teléfono publicado en la ficha de Uber Eats: +34 633 602 527.

## Publicación en GitHub Pages

1. Crear repositorio.
2. Subir todos los archivos manteniendo la estructura.
3. En Settings → Pages seleccionar la rama principal y `/root`.
4. Guardar.

## Publicación en Hostinger

Subir `index.html`, `styles.css`, `script.js` y la carpeta `assets` al directorio público (`public_html` normalmente).

No requiere Node.js, base de datos ni compilación.
