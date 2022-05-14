const express = require('express')
const dotenv = require('dotenv');
const app = express()


dotenv.config();
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

