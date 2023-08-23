import {Router} from "express";
import routesVersioning from "express-routes-versioning";
import passportHelper from "../config/passportHelpert.js";
import {autor_V1_uno, autor_V1_dos} from "../versiones/V1/autorV1.js";
import {autor_V2_uno} from "../versiones/V2/autorV2.js";
import { autor_V3_uno } from "../versiones/V3/autor.js";

const appAutor = Router();
const version = routesVersioning();

appAutor.use(passportHelper.authenticate('bearer',{session: false}));

appAutor.get("/",version({
    "1.0.0": autor_V1_uno,
    "1.1.1": autor_V1_dos,
    "2.0.0": autor_V2_uno
}))
appAutor.get("/:id",version({
    "3.0.0": autor_V3_uno
}))
export {
    appAutor
}