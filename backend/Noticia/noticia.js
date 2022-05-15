const {PrismaClient} = require('@prisma/client');
const { prismaQueryHandler } = require('../functions/prismaQueryHandler');
const { uploadToAzure } = require("../functions/uploadToAzure");
const prisma = new PrismaClient();

/*
This function retrieves the news in the database
* */
const getNews = async (req,res) => {
    const queryNews = async () => {
        const news = await prisma.Noticia.findMany({
            orderBy: [
                {
                    fecha: 'desc',
                }
            ]
        });
        res.send(JSON.stringify((news)));
    }
    await prismaQueryHandler(queryNews, prisma);
}

/*
This function is used to insert new organizations to the database, but they need to be approved to be retrieved in the api query
* */
const addNews = async (req,res) => {
    const {titulo, descripcion, url, imagen, fecha} = req.body;
    const queryNews = async () => {
        const imageSource = await uploadToAzure(imagen);
        const news = await  prisma.Noticia.create({
            data: {
                titulo,
                descripcion,
                url,
                imagen: imageSource,
                fecha
            }
        });
        res.send(JSON.stringify((news)));
    };

    await prismaQueryHandler(queryNews, prisma);
}

module.exports = {
    getNews,
    addNews
}