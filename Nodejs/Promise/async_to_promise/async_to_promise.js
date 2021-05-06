function someAsyncTask(callback)
{
    console.log("Begining of task")
    setInterval(function()
    {
        console.log("Ending of task")
        callback();
    },3000)
}


 let someTaskPromise=function()
 {return new Promise(function(resolve,reject)
    {
     someAsyncTask(resolve)
    })}

    someTaskPromise().then(function()
    {
        console.log("After the task complete")
    })