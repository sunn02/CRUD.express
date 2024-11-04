const express = require("express");
const router = express.Router();
const methodOverride = require('method-override');
const Controller = require("../controllers/controller");

router.use(methodOverride("_method")); 

router.get("/", Controller.getAllTopics);
router.post("/", Controller.createTopic);
router.patch('/:id/update', Controller.updateTopic);
router.delete("/:id", Controller.deleteTopic);
router.post('/vote/:id', Controller.voteTopic);

module.exports = router;