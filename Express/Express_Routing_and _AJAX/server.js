const express=require('express')
const srv=express();

const todoRoute=require('./routes/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))


srv.get('/hello',(req,res)=>
{
    res.send("Hello")
})

srv.use('/public',express.static(__dirname + "/public"))    ///The express.static do is it make the public folder available as the static website 
srv.use('/todos',todoRoute)

srv.listen(4567,function()
{
    console.log("Starting on http://localhost:4567")
})