const User=require('../models/userSchema')
const otpController=async(req,res)=>{

    let {email,otp}=req.body
    let existinguser= await User.findOne({email:email})
    if(existinguser.otp==otp){
        await User.findOneAndUpdate({email:email},{otp:""})
        res.send({succee:"Veryfied"})

    }else{
        res.send({error:"otp not match"})
    }


    
}
module.exports=otpController