const blackInput = require("../helpers/blankInput");
const emailRegex = require("../helpers/emailRegex");
const passwordRegex = require("../helpers/passwordRegex");
const User=require('../models/userSchema')
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const registrationController= async (req,res)=>{
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
    }else if(passwordRegex(password)){
        res.send({error:"Mimimun"})
    }
    else{

        let existingData=await User.find({email:email})
        
        if(existingData.length>0){
            res.send({error:`${email} aleady`})

        }else{
            let otp=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

            bcrypt.hash(password, 10, function(err, hash) {
            let user=new User({
            username:username,
            email:email,
            password:hash,
            otp:otp

        })
        user.save()
        res.send({
            username:user.username,
            email:user.email,
            role:user.role
         })
       });
           
        }
       
    }


    

}
module.exports=registrationController