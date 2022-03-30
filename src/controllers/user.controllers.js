const express = require("express");

const User = require("../models/user.models");

const router = express.Router();

const {single, multiple}=require("../middleware/uploads");

const uploads = require("../middleware/uploads");



router.post("/", single("profilepic"), async(req, res)=>{
    
    try{
        // console.log(req.body);
        const users = await User.create(req.data);

        return res.status(200).send(users);
    }catch(err){
        return res.status(500).send({messgae: err.messgae});
    }
});


router.post("/multiple", multiple("profilepic"), async(req, res)=>{
    
    try{

        const filePath = req.files.map((file)=>{
            return file.path;
        })
        // console.log(req.body);
        const users = await User.create(req.data);

        return res.status(200).send(users);
    }catch(err){
        return res.status(500).send({messgae: err.messgae});
    }
});




router.get("", async(req, res)=>{
    try{
        const users = await User.find();
        return res.status(200).send(users);
    }catch(err){
        return res.status(500).send({messgae: err.messgae});
    }
})

module.exports = router;
