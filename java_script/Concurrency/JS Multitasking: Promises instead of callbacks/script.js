function helloSayer(times,name)
{
    return new Promise((resolve,reject)=>
    {
        let count=0;
        let loopId=setInterval(()=>
        {
            count++
            console.log("Hello"+name)
           if(count===times) {
             clearInterval(loopId)
          resolve()
            }
           
        },100)
    })
}

///In place of callback function we can use promise to remove concurrency 

helloSayer(3," Rahul")
.then(()=>
{
    helloSayer(2,' Sharma')
    .then (()=>
    {
        helloSayer(3," Pali")
    })
})


module.exports={
    helloSayer
}