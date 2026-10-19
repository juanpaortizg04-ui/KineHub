# KineHub · Landing de servicio de entrenamiento guiado

Landing page oscura (Dark Luxury) para un servicio de entrenamiento con 5 ejercicios de cuerpo completo, presentados en flip cards.

## Estructura
```
index.html · styles.css · script.js · README.md
images/  logo.png · hero_visual.png · service_1.png a service_5.png
```

## Paleta (acento Cian)
| Variable | Valor |
|---|---|
| --p4 | #22D3EE (hover) |
| --p5 | #06B6D4 (principal) |
| --p6 | #0891B2 (botones activos) |
| Fondos | #000000 / #09090B / #18181B |
| Texto | #FFFFFF / #E4E4E7 / #A1A1AA / #71717A |

Tipografías: Plus Jakarta Sans (títulos) e Inter (cuerpo), vía Google Fonts.

## Imágenes
- logo.png (512x512, fondo transparente): navbar y favicon
- hero_visual.png (1200x1200, transparente): visual del hero con efecto flotante
- service_1.png a service_5.png (800x600): Sentadilla, Flexiones, Plancha, Zancadas, Superman

Son ilustraciones vectoriales generadas por código, sin texto interno. Para reemplazarlas por fotos o renders propios, mantén los mismos nombres y proporciones.

## Personalización
1. Nombre y textos: edita `index.html` (busca "KineHub").
2. Color: cambia `--p4`, `--p5`, `--p6` y `--rgb` (valores R,G,B del color base) al inicio de `styles.css`.
3. Ejercicios: edita el arreglo `ex` en `script.js` (título, grupo muscular, descripción y etiquetas). Cada tarjeta usa `images/service_N.png` según su posición.
4. Contacto: el botón final usa `mailto:contacto@kinehub.cl`; cámbialo por tu correo, WhatsApp o enlace de reservas.

## Uso
Abre `index.html` en el navegador o sube la carpeta completa a cualquier hosting estático.

## Aviso
El contenido es informativo y no reemplaza la evaluación de un profesional de la salud.

## Créditos
Diseño y código generados con Claude. Fuentes: Google Fonts (licencia OFL).
