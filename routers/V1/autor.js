import {Router} from "express";
import {connect} from "../../db/atlas.js"
const appAutor1 = Router();

appAutor1.get("/",async (req,res)=>{
    let db = await connect();
    let autor = db.collection("autor");
    let result = await autor.find({}).toArray();
    res.send(result);
})
export default appAutor1;