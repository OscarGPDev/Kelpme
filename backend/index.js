const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {getOrganizations, addOrganization} = require("./Organizacion/organizacion");
const { getNews, addNews } = require("./Noticia/noticia");
const app = express();
const bodyParser = require('body-parser')



dotenv.config();
app.use((err, req, res, next) => {
    res.status(500).send('Something broke!');
});
app.use(cors())
// app.use(bodyParser.json())
app.use(bodyParser.json({ limit: "50mb" }))
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.get('/ObtenerOrganizaciones', getOrganizations);
app.get('/Noticias', getNews);
app.post('/Noticias', addNews);
app.post('/AgregarOrganizacion', addOrganization);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});

