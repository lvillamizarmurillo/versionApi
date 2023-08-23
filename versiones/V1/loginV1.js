export const login_uno = (req,res) =>{
    res.status(req.data.status).send(req.data);
}