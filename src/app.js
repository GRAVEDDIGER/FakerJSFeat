const  express=require("express");
const morgan = require("morgan");
const path=require('path')
const handlebars= require('express-handlebars')
const colors= require("colors");
const router = require("./routes/product.js");
const app=express()
app.use(express.static(path.join(__dirname, 'public')))
app.use('/products',router)
app.engine('handlebars',handlebars.engine())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','handlebars')
const PORT = process.env.PORT || 8080
app.use(morgan("tiny"))
app.use((req,res)=>{
    res.status(404).send("Route not implemented") 
})
app.listen(PORT,()=>{
console.log(`Listening on ${PORT}`.bgBlue.white)
})
