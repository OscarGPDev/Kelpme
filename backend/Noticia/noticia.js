const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

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
    await queryNews()
        .catch((e) => {
            res.status(500).send(e)
            console.log(e);
        })
        .finally(async () => {
            await prisma.$disconnect();
        })
}

const addNews = async (req,res) => {
    const queryNews = async () => {
        const news = await  prisma.Noticia.create({
            data: {
                titulo: "Llegó el sargazo",
                descripcion: "Está en toda la costa recientemente",
                url: "",
                imagen: "",
            }
        });
        res.send(JSON.stringify((news)));
    };

    await queryNews()
        .catch((e) => {
           res.status(500).send({msg: "Fallo en la BD", detail: e.message})
        })
        .finally(async ()=> {
            await prisma.$disconnect();
        });
}

module.exports = {
    getNews,
    addNews
}