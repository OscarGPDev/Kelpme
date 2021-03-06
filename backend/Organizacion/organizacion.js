const {PrismaClient} = require('@prisma/client');
const {prismaQueryHandler} = require('../functions/prismaQueryHandler');
const {uploadToAzure} = require("../functions/uploadToAzure");

const prisma = new PrismaClient();
/*
This function retrieves the approved Organizations
* */
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

/*
This function is used to insert new organizations to the database, but they need to be approved to be retrieved in the api query
* */
const addOrganization = async (req, res) => {
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

const toggleOrganization = async (req, res) => {
    const { id } = req.params;
    const { aprobado } = res.body;
    const organizationQuery = async () => {
        const organization = await prisma.organizacion.update({
            where: {
                id
            },
            data: {
                aprobado
            }
        });
        res.send(JSON.stringify(organization))
    }

    await prismaQueryHandler(organizationQuery, prisma);

}
module.exports = {
    getOrganizations,
    addOrganization,
    toggleOrganization
}