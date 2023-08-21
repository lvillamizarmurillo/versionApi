import {Router} from "express";
import {connection} from "../../db/atlas.js"
const appAutor1 = Router();

appAutor1.get("/",async (req,res)=>{
    let db = await connection();
    let autor = db.collection("autor");
    let result = await autor.find({}).toArray();
    res.send(result);
})
export default appAutor1;