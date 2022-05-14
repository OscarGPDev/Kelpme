# Kelpme

Es el repositorio de nuestro proyecto para Hack the Ocean. ¡¡Conocelo!!.
---
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

[Url de referencia](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgres)
