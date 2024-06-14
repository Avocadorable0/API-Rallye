const express = require("express");
const voitureController = require("../Controllers/voitureController");

const router = express.Router();

router.get('/voitures',voitureController.getAllVoiture);
router.get('/voitureById/:idvoiture',voitureController.getVoitueById);
router.post('/addVoiture',voitureController.createVoiture);
router.put('/updateVoiture/:idvoiture',voitureController.updateVoiture);
router.delete('/deleteVoiture/:idvoiture',voitureController.deleteVoiture);

module.exports = router;


