# Kelpme
---
Esta es la carpeta del backend
---

#### Tecnologías usadas

Para el backend optamos por una backend en **Express.js** como framework para una **REST API**, para manejar la base de
datos utilizamos **Prisma** mientras que para la base de datos nos decidimos por utilizar **MySQL** contenerizado sobre
docker. A continuación indicamos los pasos para configurar el backend.

#### Creación de la base de datos para el back

Descarga de la imagen de MySQL:

 ``` 
 docker pull mysql/mysql-server:latest
 ```

Creación del contenedor:

```
docker run --name=CONTAINERNAME -p 3306:3306 -d mysql/mysql-server:latest
```

Obtención de la contraseña del contenedor:

```
docker logs CONTAINERNAME
```

Accediendo al contenedor:

```
docker exec -it CONTAINERNAME mysql -uroot -p
```

Actualizar la contraseña del contenedor:

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
```

Actualización de usuario para aceptar conexiones externas:

```
update mysql.user set host='%' where user='root';
```

#### Migración de las entidades en prisma

```
npx prisma migrate dev --name init
```

### Backend

Nuestro backend consiste en una Rest API en express, para su correcto funcionamiento se necesitan configurar las
siguientes variables:

```
DATABASE_URL="mysql://user:password@hosy:port/database"
PORT="3000"
#Para obtener la cadena de conexion revisar el siguiente link -> https://docs.microsoft.com/es-es/azure/storage/blobs/storage-quickstart-blobs-nodejs?tabs=environment-variable-windows#copy-your-credentials-from-the-azure-portal
AZURE_STORAGE_CONNECTION_STRING="CADENA DE CONEXION"
#Nombre del contenedor de azure
CONTAINER_NAME="kelpme"
```

![Captura de pantalla de 2022-05-15 16-50-17](https://user-images.githubusercontent.com/23283637/168495941-ecc4ab46-ea8b-41bd-97b9-a97891bfa4b1.png)


## Capturas de azure


![MicrosoftTeams-image (4)](https://user-images.githubusercontent.com/87330021/168501460-c86cbe4b-888f-4161-b247-9a11d8521e9f.png)


![MicrosoftTeams-image (5)](https://user-images.githubusercontent.com/87330021/168501465-bfac39c7-f11c-4381-b771-f68d55f47cb0.png)

![MicrosoftTeams-image (6)](https://user-images.githubusercontent.com/87330021/168501475-8f08ea9a-8c70-4bcc-b0cf-d54494eef2d7.png)

![MicrosoftTeams-image (7)](https://user-images.githubusercontent.com/87330021/168501480-985ad602-7633-4e88-8079-16e1520983fb.png)

![MicrosoftTeams-image (8)](https://user-images.githubusercontent.com/87330021/168501488-d5a7c531-2d2c-48f7-971f-bd262e7d3304.png)


