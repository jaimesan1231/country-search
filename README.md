# Country Search

## Descripción

Este proyecto es una página web que funciona como un buscador de países. Fue creado como parte de una prueba técnica para una entrevista de trabajo para el puesto de Frontend Developer.

## Funcionalidades

- Búsqueda de países: El buscador permite buscar países por su nombre, mostrando los resultados de la búsqueda en tiempo real.
- Detalle de países: Al hacer clic en un país de la lista de resultados, se muestra información detallada del país, como su bandera, capital, idiomas y monedas utilizadas.
- Lista de países por continente: Una vez seleccionado un continente, se despliega una lista de países que pertenecen a esa región. Cada país en la lista muestra su nombre y su bandera, proporcionando una rápida visión general de los países disponibles.

## Tecnologias

- React
- Apollo Client
- GrapghQL

## Imagenes del proyecto

![Pagina de inicio](/src/assets/home.jpg)
![Detalle de pais](/src/assets/detail.jpg)

## Instalación y Ejecución

Clonar este repositorio. Necesitaras node.js y git instalado globalmente y seguir los siguientes pasos

1. Clonar este repositorio utilizando el siguiente comando en tu terminal:

```
git clone https://github.com/jaimesan1231/country-search.git
```

2. Obtener una API Key de Pixabay:
   Antes de ejecutar el proyecto, necesitarás obtener una API key de Pixabay para acceder a las imágenes de los países. Sigue estos pasos para obtenerla:

Regístrate en el sitio web de Pixabay y crea una cuenta de usuario (si aún no tienes una).
Accede a tu cuenta en Pixabay y dirígete al área de desarrolladores o a la sección de API.
Genera una API key personalizada siguiendo las instrucciones proporcionadas por Pixabay.
Copia la API key y guárdala en un lugar seguro. No compartas tu API key públicamente para proteger la seguridad de tu cuenta.

3. Configuración de la API Key:
   Dentro del proyecto, encuentra el archivo .env.example en el directorio raíz y cámbiale el nombre a .env. Luego, abre el archivo .env con un editor de texto y agrega tu API key de Pixabay:

```
VITE_API_KEY=Tu_API_Key_Aquí
```

1. Instalar las dependencias con `npm install`
2. Correr el proyecto con `npm run dev`
3. Abrir http://localhost:5173 en el navegador para visualizar el proyecto

## Demo

Puedes ver una demo del proyecto [aqui](https://country-search-gamma.vercel.app/)
