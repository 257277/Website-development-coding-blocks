const express=require('express')

const app = express()

app.use('/',express.static(__dirname+'/public'))

function decryptQueryParams(req,res,next)
{
    for (let q in req.query)
    {
     let r=req.query[q];
     let result=" ";
    for (var i = 0; i < r.length; ++i) {
      let  c = r[i];
      if (c == c.toUpperCase()) {
        result += c.toLowerCase();
      } else if (c == c.toLowerCase()) {
        result += c.toUpperCase();
      } else {
        result += c;
      }
    }
    req.query=result;
    }
    next()
}


function decodeQueryBase64(req,res,next)
{
    for (let q in req.query)
    {
       let data=req.query[q]
       data=new Buffer (data,'base64').toString('ascii')
       req.query[q]=data
    }
    next()
}

app.get('/eval',decryptQueryParams,decodeQueryBase64,(req,res)=>
{
   
  ////TODO:eval the code actually

    res.send("Eval result = "+ req.query)
    
}
)

app.listen(4545,()=>
{
    console.log("server started on http://localhost:4545")
})