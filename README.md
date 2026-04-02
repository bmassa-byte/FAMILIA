# WEB Legal Familia - Landing Page

Esta es la landing page optimizada para conversiones de **Legal Familia**, un estudio jurídico especializado en derecho de familia en Montevideo, Uruguay.

## Tecnologías Utilizadas

- **React 19** + **Vite**
- **Tailwind CSS** (v4)
- **Framer Motion** (Animaciones)
- **Lucide React** (Iconos)

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [NPM](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## Desarrollo Local

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue en Producción (Vercel + GitHub)

### 1. Preparar el repositorio en GitHub

1. Crea un nuevo repositorio en tu cuenta de GitHub.
2. Sigue las instrucciones para subir tu código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

### 2. Conectar con Vercel

1. Ve a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New"** > **"Project"**.
3. Importa el repositorio que acabas de crear.
4. En la configuración del proyecto, asegúrate de que el **Framework Preset** sea **Vite**.
5. **Importante:** Agrega las Variables de Entorno (Environment Variables) necesarias (ver sección abajo).
6. Haz clic en **"Deploy"**.

## Configuración del Formulario (Google Apps Script)

El formulario de contacto está preparado para enviar los datos a una hoja de cálculo de Google mediante un script.

1. Crea una nueva **Hoja de Cálculo de Google**.
2. Ve a **Extensiones** > **Apps Script**.
3. Pega el siguiente código en el editor:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.nombre,
    data.telefono,
    data.email,
    data.mensaje
  ]);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
```

4. Haz clic en **Implementar** > **Nueva implementación**.
5. Selecciona el tipo **Aplicación web**.
6. Configura:
   - **Descripción:** Formulario de Contacto Legal Familia
   - **Ejecutar como:** Tú
   - **Quién tiene acceso:** Cualquier persona (esto es necesario para que el fetch desde la web funcione).
7. Copia la **URL de la aplicación web**.

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (o agrégalas en el panel de Vercel) con las siguientes variables:

- `VITE_GOOGLE_SCRIPT_URL`: La URL que obtuviste en el paso anterior de Google Apps Script.

Ejemplo:
```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
```

## Estructura del Proyecto

- `src/App.tsx`: Componente principal que contiene toda la lógica y diseño.
- `src/index.css`: Estilos globales y configuración de Tailwind.
- `vercel.json`: Configuración para el manejo de rutas en Vercel.
