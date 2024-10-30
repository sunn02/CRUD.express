// routes/votoRoutes.js
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

// router.get("/topics", Controller.listartopic);
router.post("/topics", Controller.createTopic);
router.delete("/topics/:id", Controller.deleteTopic);
router.post('/vote/:id', Controller.voteTopic)

module.exports = router;