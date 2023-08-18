import express from "express";
import dotenv from "dotenv";
import routesVersioning from "express-routes-versioning";
dotenv.config()
let prueba = routesVersioning();
let app = express();

app.use(express.json());
app.use(function(req,res,next){
    req.version = req.headers['accept-version'];
    next();
})
app.get('/test', prueba({
    "1.0.0": ver1,
    "1.0.1": ver2
}))

function ver1(req,res){
    res.status(200).send({status: 200, message: "Estas usando la version 1.0.0"})
}
function ver2(req,res){
    res.status(200).send({status: 200, message: "Estas usando la version 1.0.1"})
}

const config = JSON.parse(process.env.MY_SERVER)
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})