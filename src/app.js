const  express=require("express");
const morgan = require("morgan");
const socket=require('socket.io')
const path=require('path')
const handlebars= require('express-handlebars')
const colors= require("colors");
const products = require("./routes/product.js");
const chat=require('./routes/chat')
const app=express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/products',products)
app.use('/chat',chat)
app.engine('handlebars',handlebars.engine())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','handlebars')
const PORT = process.env.PORT || 8080
app.use(morgan("tiny"))
app.use((req,res)=>{
    res.status(404).send("Route not implemented")
})
const server=app.listen(PORT,()=>{
console.log(`Listening on ${PORT}`.bgBlue.white)
})

const socketSrv=socket(server)
socketSrv.on("connection",(socket)=>{
    console.log(colors.bgCyan.white.bold("WebSockets Connected"))
    socket.on("clientMessage",(message)=>{
    console.log(colors.bgGreen.bold(message))
})
})