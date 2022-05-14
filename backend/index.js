const express = require('express')
const dotenv = require('dotenv');
const {getOrganizations} = require("./Organizacion/organizacion");
const { getNews, addNews } = require("./Noticia/noticia");
const app = express();


dotenv.config();
app.get('/ObtenerOrganizaciones', getOrganizations);
app.get('/Noticias', getNews);
app.post('/Noticias', addNews);
app.post('/AgregarOrganizacion', getOrganizations);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});

