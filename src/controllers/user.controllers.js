const express = require("express");

const User = require("../models/user.models");

const router = express.Router();

router.post("", async(req, res)=>{
    
    try{
        console.log(req.body);
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
