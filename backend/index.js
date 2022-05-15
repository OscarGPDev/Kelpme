const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {getOrganizations, addOrganization, toggleOrganization} = require("./Organizacion/organizacion");
const { getNews, addNews } = require("./Noticia/noticia");
const app = express();
const https = require('https')
const fs = require('fs')
const bodyParser = require('body-parser')
const corsOptions = {origin: ''};


dotenv.config();


app.use((err, req, res, next) => {
    res.status(500).send('Something broke!');
});
// app.use(cors(corsOptions))
app.use(cors())
// app.use(bodyParser.json())
app.use(bodyParser.json({ limit: "50mb" }))
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.get('/ObtenerOrganizaciones', getOrganizations);
app.get('/Noticias', getNews);
app.post('/Noticias', addNews);
app.post('/AgregarOrganizacion', addOrganization);
app.put('/Organizaciones/:id', toggleOrganization);
https.createServer({
    cert: fs.readFileSync('my_cert.key'),
    key: fs.readFileSync('my_cert.crt')
},app).listen(process.env.PORT, function(){
    console.log('Servidor https');
});
// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${process.env.PORT}`);
// });

