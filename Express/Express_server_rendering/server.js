const express=require('express')
const todoRoute=require('./routes/todos')
const srv=express()

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.set('views',__dirname + "/views")
srv.set('view engine','hbs')  /// we are telling to use hbs as a view engine

srv.use('/todos',todoRoute)

 srv.listen(3456)