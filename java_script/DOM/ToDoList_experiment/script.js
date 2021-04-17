window.onload=function()
{
    let num=document.getElementById('num');
    let list=document.getElementById('list');
    let print=document.getElementById('print');

    print.onclick=function()
    {
        let start=new Date().getTime()
        
        let N=parseInt(num.value)
        let listHTML=""
        for(let i=1;i<=N;i++)
        {
            listHTML +='<li>'+i+'</li>'
        }
        list.innerHTML=listHTML      ///We Write innerHTML outside the loop because it is very costly function and we have to call it for very less time
       /// But some time we do not remove the innerHTMl from the loop so we done like this
       /*  in the loop
          let item = document.createElement('li');
          item.innerText=i;
          list.appendchild(item);
       */
       
       
       
       
        console.log(new Date().getTime()-start);
    }
}