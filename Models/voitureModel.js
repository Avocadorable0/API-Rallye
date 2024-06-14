const { Sequelize,DataTypes } = require("sequelize");
const { seq } = require("../Config/database");

class Voiture{
    constructor(idvoiture, marquevoiture, puissancevoiture, systemevoiture,numerovoiture){
        this.idvoiture = idvoiture;
        this.marquevoiture = marquevoiture;
        this.puissancevoiture = puissancevoiture;
        this.systemevoiture = systemevoiture;
        this.numerovoiture = numerovoiture;
    }

    getVoiture(){
        return `${this.idvoiture}
                ${this.marquevoiture}
                ${this.puissancevoiture}
                ${this.systemevoiture}
                ${this.numerovoiture}`;
    }
}
    const voitureModel = seq.define('voiture',{
        idvoiture : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        marquevoiture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        puissancevoiture: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        systemevoiture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numerovoiture: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        tableName: 'voiture',
        timestamps: false,
    });
    
module.exports = {Voiture, voitureModel};