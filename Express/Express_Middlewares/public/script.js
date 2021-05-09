let inpCode=document.getElementById('inpCode')
let btnEncode=document.getElementById('btnEncode')
let btnEncrypt=document.getElementById('btnEncrypt')
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

    return 'XXXXXXXX'
}