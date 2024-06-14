const  {voitureModel}= require("../Models/voitureModel");

class voitureController{

    static async getAllVoiture(req,res){
        try{
            const voitures = await voitureModel.findAll();
            res.json(voitures);
        }catch(error){
            res.status(500).send(error);
        }
    }

    static async getVoitueById(req,res){
        try{
            const voiture = await voitureModel.findByPk(req.params.idvoiture);
            res.json(voiture);
        }catch(err){
            res.status(400).send(err);
        }
    }

    static async createVoiture(req,res){
        try{
            const voiture = await voitureModel.create(req.body);
            res.status(201).json(voiture);
        }catch(err){
            res.status(400).send(err);
        }
    }

    static async updateVoiture(req,res){
        try{
            const idvoiture = req.params.idvoiture;
            const voiture = await voitureModel.update(req.body,{
                where: {idvoiture},
                returning: true,
                plain: true,
            });
            res.json(voiture[1]);
        }catch(err){
            res.status(400).send(err);
        }
    }

    static async deleteVoiture(req,res){
        try{
            const idvoiture = req.params.idvoiture;
            await voitureModel.destroy({where : {idvoiture}});
            res.status(204).send();
        }catch(err){
            res.status(400).send(err);
        }
    }


}

module.exports = voitureController;