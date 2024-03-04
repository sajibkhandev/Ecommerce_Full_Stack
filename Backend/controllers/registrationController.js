const blackInput = require("../helpers/blankInput");
const emailRegex = require("../helpers/emailRegex");

const registrationController=(req,res)=>{
   let {username,email,password}=req.body

    
    if(blackInput(username)){
        res.send({error:"Name is required"})
    }else if(blackInput(email)){
        res.send({error:"Email is required"})
    }else if(emailRegex(email)){
        res.send({error:"Valid email Required"})
    }
    else if(blackInput(password)){
        res.send({error:"Password is required"})
    }else{
        res.send(req.body)
    }


    

}
module.exports=registrationController