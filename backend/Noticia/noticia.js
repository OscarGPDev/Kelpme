const {PrismaClient} = require('@prisma/client');
const { prismaQueryHandler } = require('../functions/errorHandler');
const { uploadToAzure } = require("../functions/uploadToAzure");
const prisma = new PrismaClient();

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