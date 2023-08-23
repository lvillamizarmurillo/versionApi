import {Router} from "express";
import {createToken} from "../config/JWT.js";
import routesVersioning from "express-routes-versioning";
import { login_uno } from "../versiones/V1/loginV1.js";

const appLogin = Router();
const version = routesVersioning();

appLogin.use(createToken);
appLogin.post("/", version({
    "1.0.0": login_uno
}));
export{
    appLogin
}
