# Contexto del proyecto

## Resumen

**Club Emmanuel La Trinidad** es un sitio web informativo y una biblioteca digital para el Club Emmanuel La Trinidad #1. Presenta información institucional, recursos PDF para Aventureros y Conquistadores, una galería de actividades y datos de contacto.

El proyecto es una aplicación frontend estática. No tiene backend, base de datos, autenticación ni panel administrativo. El contenido se mantiene directamente en archivos TypeScript/JSON y en la carpeta `public`.

Estado analizado: 30 de junio de 2026, rama `PivotIntegracionUAT`.

## Tecnologías

- React 19 y TypeScript.
- Vite 8 para desarrollo y compilación.
- React Router para navegación del lado del cliente.
- Tailwind CSS 3 y PostCSS para estilos.
- Framer Motion para animaciones.
- Lucide React para iconos.
- GitHub Actions y GitHub Pages para publicación.

Las versiones reproducibles están fijadas en `package-lock.json`. Aunque varias dependencias usan `latest` en `package.json`, una instalación con `npm ci` respeta el archivo de bloqueo.

## Arquitectura y flujo

La entrada es `src/index.tsx`, que monta `App` en `#root`. `src/App.tsx` configura `BrowserRouter`, un encabezado y pie globales, y las páginas:

| Ruta | Componente | Función |
| --- | --- | --- |
| `/` | `Home` | Portada y presentación de los dos grupos del club. |
| `/recursos` | `Recursos` | Biblioteca con búsqueda y filtros. Acepta `?grupo=Aventureros` o `?grupo=Conquistadores`. |
| `/galeria` | `Galeria` | Galería filtrable con visor tipo lightbox. |
| `/acerca` | `Acerca` | Misión, visión y valores. |
| `/contacto` | `Contacto` | Datos de contacto y formulario visual. |

No existe una capa de servicios ni llamadas a una API propia. Los estados son locales a cada componente.

## Estructura relevante

```text
.
|-- .github/workflows/deploy.yml  # Compilación y despliegue en GitHub Pages
|-- public/
|   |-- images/                   # Imágenes publicadas sin transformación
|   |-- pdfs/                     # Libros y tarjetas descargables
|   |-- galeria/                  # Fotografías locales actualmente no enlazadas
|   `-- CNAME                     # Dominio personalizado
|-- src/
|   |-- components/               # Navbar, Footer y ResourceCard
|   |-- data/                     # Catálogos JSON de recursos y galería
|   |-- pages/                    # Páginas asociadas a las rutas
|   |-- App.tsx                   # Layout y enrutamiento
|   |-- index.css                 # Tailwind y estilos globales
|   `-- index.tsx                 # Punto de entrada
|-- assets/                       # Recursos fuente/duplicados; Vite no los publica por sí solo
|-- package.json
|-- tailwind.config.js
|-- tsconfig.json
`-- vite.config.ts
```

`dist/` es el resultado generado por `npm run build` y está ignorado por Git. No debe editarse manualmente.

## Gestión del contenido

### Biblioteca de recursos

`src/data/recursos.json` contiene 22 entradas. Cada recurso sigue este contrato:

```ts
interface Resource {
  id: string;
  titulo: string;
  grupo: 'Conquistadores' | 'Aventureros';
  tipo: 'Libro' | 'Tarjeta';
  descripcion: string;
  pdfUrl: string;
}
```

Los archivos físicos están en `public/pdfs`. Para agregar un recurso:

1. Copiar el PDF a la subcarpeta correspondiente de `public/pdfs`.
2. Agregar su registro a `src/data/recursos.json`.
3. Usar una URL absoluta desde la raíz, por ejemplo `/pdfs/aventureros/libros/archivo.pdf`.
4. Respetar exactamente mayúsculas, minúsculas, acentos y nombre del archivo; GitHub Pages distingue mayúsculas de minúsculas.

`ResourceCard` permite abrir el PDF en otra pestaña o descargarlo mediante `fetch` y un `Blob` temporal.

### Galería

`src/data/galeria.json` contiene 12 registros con `id`, `titulo`, `categoria`, `fecha` e `imagen`. Actualmente todas las imágenes del catálogo apuntan a Unsplash; por tanto, la galería depende de conexión a internet y de la disponibilidad de esas URLs.

Las seis fotografías de `public/galeria` no están referenciadas por el catálogo actual.

### Contenido institucional

Los textos de Inicio, Acerca y Contacto están escritos directamente en sus componentes. El teléfono, WhatsApp y correo visibles son valores provisionales. El formulario de contacto no envía información: cancela el envío y muestra una confirmación local durante cinco segundos.

## Estilos y convenciones

- La paleta `club` y la fuente Plus Jakarta Sans están definidas en `tailwind.config.js`.
- La fuente se descarga desde Google Fonts en `src/index.css`.
- Se usan clases utilitarias de Tailwind; no hay CSS Modules ni una biblioteca de componentes externa.
- Las animaciones se implementan con `motion` y `AnimatePresence`.
- Los recursos que deban publicarse por URL deben ubicarse en `public`. La carpeta raíz `assets` no se sirve y actualmente no se importa desde `src`.
- TypeScript está configurado en modo estricto y prohíbe variables o parámetros sin usar.

## Ejecución local

Requisito recomendado: Node.js 20, que es la versión usada en integración continua.

```powershell
npm.cmd ci
npm.cmd run dev
```

El servidor de desarrollo escucha en todas las interfaces por la opción `--host 0.0.0.0`; Vite mostrará las URLs disponibles.

Compilación y vista previa:

```powershell
npm.cmd run build
npm.cmd run preview
```

Validación estricta de TypeScript:

```powershell
.\node_modules\.bin\tsc.cmd --noEmit
```

Se usa `npm.cmd` en estos ejemplos para evitar el bloqueo de `npm.ps1` cuando PowerShell tiene restringida la ejecución de scripts.

## Despliegue

`.github/workflows/deploy.yml` se activa al hacer `push` a `main`:

1. Instala Node.js 20.
2. Ejecuta `npm ci`.
3. Ejecuta `npm run build`.
4. Publica `dist` en GitHub Pages.

El dominio personalizado configurado en `public/CNAME` es `jfsourcecode.site`. Vite usa `base: '/'`, adecuado para servir desde la raíz de ese dominio.

La rama analizada, `PivotIntegracionUAT`, no se despliega automáticamente; los cambios deben llegar a `main` para activar el flujo.

## Validación realizada

- `npm.cmd run build`: correcto. Se generó el sitio de producción en `dist`.
- Catálogo de recursos: 22 registros y 24 PDF físicos.
- Pruebas automatizadas: no existen ni hay un script `test`.
- Lint: existe `.eslintrc.cjs`, pero `package.json` no incluye script ni todas las dependencias necesarias para ejecutarlo.
- `tsc --noEmit`: falla actualmente por imports no utilizados en varios componentes. Vite no ejecuta este chequeo durante `npm run build`, por eso la compilación de producción termina correctamente.

## Hallazgos y pendientes conocidos

Prioridad recomendada:

1. **Corregir una URL de PDF sensible a mayúsculas:** el catálogo usa `2Compañerov2.pdf`, pero el archivo se llama `2CompañeroV2.pdf`. Puede funcionar en Windows y fallar en GitHub Pages.
2. **Configurar las rutas SPA en producción:** `BrowserRouter` requiere que el servidor redirija rutas como `/recursos` a `index.html`. GitHub Pages puede devolver 404 al abrir o recargar una ruta interna si no se agrega una estrategia de fallback o se cambia a `HashRouter`.
3. **Conectar el formulario a un servicio real** y reemplazar teléfono, WhatsApp y correo provisionales antes de anunciarlo como funcional.
4. **Restablecer el chequeo de calidad:** eliminar imports sin usar, agregar un script de typecheck y completar la configuración de ESLint.
5. **Corregir metadatos:** `index.html` declara `lang="en"`, conserva el título en inglés y referencia `/vite.svg`, archivo que no existe.
6. **Revisar contenido no publicado:** los PDF `04CORDERITOS.pdf` y `05AVES_MADRUGADORAS.pdf` no están en el catálogo. Varias imágenes de `public/images`, `public/galeria` y `assets` tampoco están enlazadas.
7. **Reducir dependencia externa:** la galería y la fuente web necesitan servicios externos; conviene usar archivos locales si se requiere funcionamiento sin conexión o mayor control.

Estos puntos solo documentan el estado encontrado; no se modificó el comportamiento de la aplicación.
