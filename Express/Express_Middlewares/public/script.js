let inpCode=document.getElementById('inpCode')
let btnEncode=document.getElementById('btnEncode')
let btnEncrypt=document.getElementById('btnEncrypt')
let btnEvaluate=document.getElementById('btnEvaluate')
let code=document.getElementById('code')

btnEncode.onclick=function()
{
    let data=inpCode.value
    data=btoa(data)
    code.value=data
}

btnEncrypt.onclick=function()
{
    let data=code.value
    data=encryptData(data)
    code.value=data
    
}

function encryptData(rawData)
{
    let res=" ";
    for (var i = 0; i < rawData.length; ++i) {
      let  c = rawData[i];
      if (c == c.toUpperCase()) {
        res += c.toLowerCase();
      } else if (c == c.toLowerCase()) {
        res += c.toUpperCase();
      } else {
        res += c;
      }
    }
    return res;
}
