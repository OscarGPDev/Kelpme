const {PrismaClient} = require('@prisma/client');
const {prismaQueryHandler} = require('../functions/errorHandler');
const {uploadToAzure} = require("../functions/uploadToAzure");

const prisma = new PrismaClient();
const getOrganizations = async (req, res) => {
    const getOrganizations = async () => {

        const organizations = await prisma.organizacion.findMany({
            where: {
                aprobado: true,
            }
        });
        res.send(JSON.stringify(organizations))
    };


    await prismaQueryHandler(getOrganizations, prisma);
};
const addOrganization = async (req, res) => {
    res.json(req.body);
    const {nombre, descripcion, direccion, imagen} = req.body
    const addOrganization = async () => {
        const url = await uploadToAzure(imagen);
        const organization = await prisma.organizacion.create({
            data: {
                nombre,
                descripcion,
                direccion,
                imagen: url,
            },

        });
        res.send(JSON.stringify(organization))
    };

    await prismaQueryHandler(addOrganization, prisma);
};
module.exports = {
    getOrganizations,
    addOrganization
}