# Kelpme  -    HACK THE OCEAN
---
Esta es la carpeta que contiene el proyecto de frontend.
---

## Deploy en https://proud-bay-0cea1ee10.1.azurestaticapps.net/

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

## Diagramas de flujo de las vistas
```mermaid
graph TD;
  p2[Appvue];
  p3[HomeView];
  p4[ImpactoView];
  p5[OrganizacionesView];
  p6[UsosView];
  p7[FormularioView];

  p2-->p3;
  p2-->p4;
  p2-->p5;
  p2-->p6;
  p5-->p7;

```

## Diagrama de los componentes
```mermaid
 classDiagram      
      class HomeView{
        +InfoComponent
        +InicialComponent
        +NoticiaComponent
        +VideoHome
        +SidebarComponent
        +SidebarLink
      }
      class ImpactoView{
        +AfectacionImpacto
        +NoticiaImpacto
        +VideoImpacto
        +SidebarComponent
        +SidebarLink
      }
      class OrganizacionesView{
        +OrganizationComponent
        +SidebarComponent
        +SidebarLink
      }
      class UsosView{
          +UsoUsos
          +SidebarComponent
          +SidebarLink
      }
     
```

## Dependencias usadas en el proyecto frontend

- Vue.js -- Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members


- Bootstrap -- Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

- Font Awesome -- Font Awesome is a font and icon toolkit based on CSS and Less. As of 2020, Font Awesome was used by 38% of sites that use third-party font scripts, placing Font Awesome in second place after Google Fonts.


##Capturas de las vistas del proyecto

- Vista home


![MicrosoftTeams-image](https://user-images.githubusercontent.com/87330021/168501026-e3fa5209-4075-468c-8a9d-bd70d6f8df38.png)

- Vista impacto


![MicrosoftTeams-image (1)](https://user-images.githubusercontent.com/87330021/168501057-1c29c6ae-a992-4314-8efc-b68b590bd0f1.png)

- Vista Usos


![MicrosoftTeams-image (2)](https://user-images.githubusercontent.com/87330021/168501086-49fa0826-de4d-4795-927e-c14fa12a0222.png)

- Vista para registrar una organización


![MicrosoftTeams-image (9)](https://user-images.githubusercontent.com/87330021/168501660-ddd03774-a8ea-462c-85bd-88bea0a8bbf3.png)


