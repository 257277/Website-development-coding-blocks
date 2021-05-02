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
 

async function task()
{
    await Promise.all(
 [ 
  await helloSayer(5,'Rahul'),
  await helloSayer(3,'Sharma'),
  await helloSayer(2,'Vishal')
 ])

console.log('-----First batch over------')

 await Promise.all([
  helloSayer(6,'pali'),
  helloSayer(4,'Meetha'),
  helloSayer(2,'Pawan')
 ])
}

task()

module.exports={
    helloSayer
}