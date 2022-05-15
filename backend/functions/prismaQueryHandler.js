//This function helps to handle the disconnection from the database.
const prismaQueryHandler = async (promise, prismaInstance) => await promise().finally(async () => {
    await prismaInstance.$disconnect()
});
module.exports = {
    prismaQueryHandler
}