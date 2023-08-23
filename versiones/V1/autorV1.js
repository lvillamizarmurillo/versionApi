export const autor_V1_uno = (req,res)=>{
    console.log(req.user);
    res.status(200).send('ok 1.0.0');
}
export const autor_V1_dos = (req,res)=>{
    console.log(req.user);
    res.status(200).send("ok 1.1.1")
}