const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


exports.getAllTopics = async(req, res) => {
    try {
        const topics = await prisma.topic.findMany(); 
        res.render('index', { topics }); 
    } catch (error) {
        console.error('Error al obtener los temas:', error);
        res.status(500).send('Error al obtener los temas');
    }
}

exports.createTopic = async(req, res) => {
    const { topic } = req.body;
    await prisma.topic.create({
        data: { 
            title: topic },
    });
    res.redirect('/topics')
};

exports.updateTopic = async(req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const { topic } = req.body;

    try {
        await prisma.topic.update({
        where: { id: parseInt(id)},
        data: { title: topic },
    });
    res.redirect('/topics');
} catch (error){
    console.error(error)
    res.status(500).send('Error al actualizar el tema');
}
};

exports.deleteTopic = async(req, res) => {
    const { id } = req.params;
    await prisma.topic.delete({
        where: { 
            id: Number(id)
        }});
    res.redirect('/topics')
};

exports.voteTopic = async(req, res) => {
    const { id } = req.params;
    await prisma.topic.update({
        where: { id: Number(id)},
        data: { vote: {increment: 1}},
    });
    res.redirect('/topic');
};