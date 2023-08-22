import { SignJWT, jwtVerify } from "jose";
import connection from "../db/atlas.js";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config("../");

const conexionDB = connection();
const createToken = async(req,res,next)=>{
    
}