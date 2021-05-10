$(function()
{
let newTodoBox=$('#newtodo')
let addtodoBtn=$('#addtodo')
let todoList=$('#todolist')

addtodoBtn.click(function()
{
    let newTodo=newTodoBox.val()
    
    $.post('/todos/',{task:newTodo},function(data)   /// $.post do the request send to the server and result is recevied without refresh or changing in the url
    {
        todoList.empty();
        for(todo of data)
        {
            todoList.append("<li>" + todo.task +"</li>")
        }
    })                      
})
})
