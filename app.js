import express from "express";
import dotenv from "dotenv";
import appAutor1 from "./routers/V1/autor.js";
import appAutor2 from "./routers/V2/autor.js";
import routesVersioning from "express-routes-versioning";
dotenv.config()
let prueba = routesVersioning();
let app = express();

app.use(express.json());
app.use(function(req,res,next){
    req.version = req.headers['accept-version'];
    next();
})
app.use('/autor', prueba({
    "1.0.0": appAutor1,
    "1.0.1": appAutor2
}))

const config = JSON.parse(process.env.MY_SERVER)
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})