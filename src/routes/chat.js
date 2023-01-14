const router=require('express').Router()
const mongoDb=require('../models/mensajes')
router.get('/',(req,res)=>{
    console.log("cosa")
    res.render('chat')
})
router.post('/user',(req,res)=>{
console.log(req.body)
    mongoDb.create({author:req.body})
})
module.exports=router
