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


