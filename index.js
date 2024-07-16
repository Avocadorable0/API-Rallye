const express = require("express");
const cors = require('cors');
const {connect} = require("./Config/database");
const voitureRoute = require("./Routes/voitureRoute");

const app = express();
app.use(cors());
const port = 3000;



connect();

app.use(express.json());
app.use('/api',voitureRoute);

const {seq} = require("./Config/database");
seq.sync().then(() =>{
    app.listen(port, ()=>{
        console.log(`Application demarré sur lee port: ${port}`);
    })
}).catch((error)=>{
    console.log('Erreur lors du demarage: ',error);
});