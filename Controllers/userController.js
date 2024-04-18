const users = require("../Models/userModel");


exports.register = async (req,res)=>{
    console.log("inside register request");
    const {name,address,mobile,email,gender,dob,cource} = req.body
    console.log(name,address,mobile,email,gender,dob,cource);
    try{ 
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User Alredy Exists!!!")
        }
        else{
            const newUser = new users({
                name,address,mobile,email,gender,dob,cource
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }   
}

exports.getAllUsers = async (req,res) =>{
    try{
        const allUsers = await users.find()
        res.status(200).json(allUsers)
    }
    catch(err){
        res.status(401).json(err)
    }
}