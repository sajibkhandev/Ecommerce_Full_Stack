const registrationMiddlerwar=(req,res,next)=>{

    if(req.headers.authorization=="rtyhrtvdffgrdge"){
        next()
    }else{
        res.send("Invalid data")
    }



}
module.exports=registrationMiddlerwar