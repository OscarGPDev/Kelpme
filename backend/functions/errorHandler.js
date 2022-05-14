const prismaQueryHandler = async (promise, prismaInstance) => await promise().finally(async () => {
    await prismaInstance.$disconnect()
});
module.exports = {
    prismaQueryHandler
}