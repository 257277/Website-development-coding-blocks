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
 
/// It is called IIFE (immediate invoke function execution)
/*(async ()=>    
{

})
*/

/// We can convert it in partial parallel and partial sequence
/// we can not use await function at global scope 
async function task()
{
   await  helloSayer(3,' Rahul')
   await helloSayer(2,' Sharma')
   await helloSayer(3,' Anuj')
}

task()

module.exports={
    helloSayer
}