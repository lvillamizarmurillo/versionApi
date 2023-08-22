import {Router} from "express";
import {connection} from "../../db/atlas.js"
const appAutor = Router();

appAutor.get("/",async (req,res)=>{
    let db = await connection();
    let autor = db.collection("autor");
    let result = await autor.find({}).toArray();
    res.send(result);
})
export {appAutor};