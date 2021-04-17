window.onload=function()
    {
     let newTask = document.getElementById('newTask')
     let addTask = document.getElementById('addTask')
     let todolist = document.getElementById('todolist')

     addTask.onclick = function()
     {
         let li = document.createElement('li')

         // adiing X button
         
         let xBtn=document.createElement('button')
         xBtn.innerText='❌'
         xBtn.onclick=function(event)
            {
             event.target.parentElement.remove()
            }

            //Adding up button
            let upBtn=document.createElement('button')
            upBtn.innerText='⬆️'
            upBtn.onclick=function(event)
                {
                  event.target.parentElement.parentElement.insertBefore(
                    event.target.parentElement,
                    event.target.parentElement.previousElementSibling
                  )
                }
              //Adding down button
                let downBtn=document.createElement('button')
            downBtn.innerText='⬇️'
            downBtn.onclick=function(event)
                {
                  event.target.parentElement.parentElement.insertBefore(
                   event.target.parentElement.nextElementSibling, event.target.parentElement
                    
                  )
                }
         ///adding the task text
         let taskSpan=document.createElement('span')
         taskSpan.innerText=newTask.value

         li.appendChild(xBtn)
         li.appendChild(upBtn)
         li.appendChild(downBtn)
         li.appendChild(taskSpan)
         todolist.appendChild(li)
     }
    }