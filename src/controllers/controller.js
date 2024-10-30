const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


exports.createTopic = async(req, res) => {
    const { topic } = req.body;
    const newTopic = await prisma.topic.create({
        data: { topic },
    });
    res.redirect('/topics')
};

// exports.updateTopic = async(req, res) => {
    
// }

exports.deleteTopic = async(req, res) => {
    const { id } = req.params;
    await prisma.topic.delete({ where: { id: Number(id)}});
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