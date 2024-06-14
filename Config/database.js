const { Sequelize } =require("sequelize");

const seq = new Sequelize('Copilote','Pilote','123',{
    host:'localhost',
    dialect: 'postgres',
});

const connect = async () => {
    try{
        await seq.authenticate();
        console.log('Connecter a la base de donnee: '+seq.getDatabaseName());
    }catch(error){
        console.error("Enable to connect to database: ",error)
    }
};

module.exports= {seq , connect};
