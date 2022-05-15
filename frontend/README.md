# Kelpme
---
Esta es la carpeta que contiene el proyecto de frontend.
---

#### Tecnologías usadas

Para este proyecto nos decidimos por utilizar una **SPA** hecha **Vue.js**, a continuación mostramos una guía de como
utilizar este proyecto.

#### Configuración del sitio

Instalación de los paquetes necesarios

 ``` 
 npm install
 ```

Es necesario crear un archivo .env con las variables de entorno siguientes

```
VUE_APP_KELP_ME_API_URL="http://url_al_backend_sin_diagonal_al_final"
```

Ejecución de la SPA en modo prueba

```
npm run serve
```

Creación de build para producción(se requiere un servidor de contenido estático)

```
npm run build
```

