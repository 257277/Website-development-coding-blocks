const route=require('express').Router()

let todos=[
    {
        task:"This is the first task"
    },
    {
        task:"This is the another task"
    }
]

route.get('/',function(req,res)
{
  res.render('todos.hbs',{todos})
})

route.post('/',function(req,res)
{
  todos.push(
    {
        task:req.body.newtodo
    }
  )
  res.redirect('todos')
})

module.exports=route