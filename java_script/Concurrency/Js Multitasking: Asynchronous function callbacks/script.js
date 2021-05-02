function helloSayer(times,name,doneSaying)
{
    let count=0;
    let loopId=setInterval(()=>
    {
        count++
        console.log("Hello"+name)
       if(count===times) {
         clearInterval(loopId)
         doneSaying()
        }
       
    },100)
}
//if want to remove concurrency then we have to use callback function 

helloSayer(3,' Rahul',()=>{helloSayer(2,' Sharma',()=>{
    helloSayer(3,'Pali',()=>{
})
})
})


module.exports={
    helloSayer
}