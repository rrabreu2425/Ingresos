export const validateSchema=(Schema)=>(req, res, next)=>{
    try{
      Schema.parse(req.body)
    }
    catch(err){
     return res.status(400).json({err})
    }
}