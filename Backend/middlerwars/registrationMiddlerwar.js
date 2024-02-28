const registrationMiddlerwar=(req,res,next)=>{
    
    if(req.headers.authorization==process.env.SECIRE_API){
        next()
    }else{
        res.send("Invalid data")
    }



}
module.exports=registrationMiddlerwar