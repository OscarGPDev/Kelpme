const express = require('express')
const dotenv = require('dotenv');
const {getOrganizations} = require("./Organizacion/organizacion");
const app = express()


dotenv.config();
app.get('/ObtenerOrganizaciones', getOrganizations);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});

