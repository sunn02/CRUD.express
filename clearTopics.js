// clearTopics.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function clearTopics() {
    try {
        await prisma.topic.deleteMany(); // Esto eliminará todos los registros en la tabla Topic
        console.log('Todos los temas han sido eliminados.');
    } catch (error) {
        console.error('Error al eliminar los temas:', error);
    } finally {
        await prisma.$disconnect();
    }
}

clearTopics();
