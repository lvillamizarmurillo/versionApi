import { ObjectId } from 'mongodb';
import {Router} from "express";
import {connection} from "../../db/atlas.js"
const appAutor2 = Router();

appAutor2.get("/",async(req,res)=>{
    let db = await connection();
    let autor = db.collection("autor");
    const {id_autor} = req.body
    if(!id_autor){
        res.status(404).send({status: 404, message: "Debe colocar un id_autor:"})
    }else{
        let consulta = await autor.findOne({ _id: new ObjectId(id_autor) })
        res.status(200).json(consulta)
    } 
})
export default appAutor2;