import { SignJWT, jwtVerify } from "jose";
import connection from "../db/atlas.js";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config("../");

const conexionDB = connection();
const createToken = async(req,res,next)=>{
    if(Object.keys(req.body).length === 0) return res.status(400).send({status: 400, message: "Datos no enviados"});
    const result = await conexionDB.collection("autor").findOne(req.body);
    console.log(result);
    if(!result) return res.status(401).send({status: 400, message: "Autor no encontrado"});
    const encoder = new TextEncoder();
    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT'})
        .setIssuer()
        .setExpirationTime('3h')
        .sign(encoder.encode(process.env.JWT));
    req.data = {status:200, message: jwtConstructor};
    next();
}
const validarToken = async(req,token)=>{
    try {
        encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT)  
        );
        let res = await conexionDB.collection("autor").findOne(
            {
                _id: new ObjectId(jwtData.payload.id),
                [`permisos.${req.baseUrl}`]: `${req.headers["accept-version"]}`
            }
        );
        let {id,permisos, ...autor} = res;
        return autor;
    } catch (error) {
        return false;
    }
}
export {
    createToken,
    validarToken
}