import express from "express";
import dotenv from "dotenv";
import routesVersioning from "express-routes-versioning";
let opt = '1.0.0';


dotenv.config()
let prueba = routesVersioning();
let app = express();

app.use(express.json());
app.use(function(req,res,next){
    req.version = req.headers['accept-version'];
    opt = "1.0.0"
    console.log(opt);
    next();
})
console.log(opt);
let moduloAutor = await import(`./routers/${opt}/autor.js`);
app.use('/autor', prueba({
    "1.0.0": moduloAutor.appAutor,
    "1.0.1": moduloAutor.appAutor
}))

const config = JSON.parse(process.env.MY_SERVER)
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})