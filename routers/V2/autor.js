import {Router} from "express";
import {connect} from "../../db/atlas.js"
const appAutor2 = Router();

appAutor2.get("/",async(req,res)=>{
    let db = await connect();
    let autor = db.collection("autor");
    const {id} = req.body
    if(!req.body){
        res.status(404).send({status: 404, message: "Debe colocar un id:"})
    }
    let consulta = await autor.findOne({ _id: new ObjectId(id) })
        res.status(200).json(consulta)
})
export default appAutor2;