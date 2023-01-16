const router=require('express').Router()
const mongoDb=require('../models/mensajes')
router.get('/',(req,res)=>{
    res.render('chat')
})
module.exports=router
