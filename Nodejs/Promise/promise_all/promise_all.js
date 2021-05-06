function download (url)
{
    return new Promise(function(resolve,reject)
    {
    
        if(!url.startsWith("http"))
        {
            reject(new Error("url does not start with http"))
        } else{
            setTimeout(function()
            {   
               
                let fileName=url.split("/").pop()
                console.log("Start downloading " +fileName)
                resolve(fileName)
            },3000)
        }
    })
}

function resize(fileName)
{
    return new Promise(function(resolve,reject)
    {
        if(!fileName.endsWith(".png"))
        {
            reject(new Error("File is not end with .png"))
        }
        else 
        {
            setTimeout(function()
            {
                let resizedFile=fileName.split(".")+"-resized.png"
                resolve(resizedFile)
            },3000)
        }
    })
}
function upload(resizedFileName)
{
    return new Promise(function(resolve,reject)
    {
        console.log("Start upload :"+resizedFileName)
        setTimeout(function()
        {
            let uploadUrl="http://imgur.com?"+resizedFileName
            resolve(uploadUrl)
        },3000)
    })
}

Promise.all(
[
download('http://cb.lk/logo.png'),
download('http://cb.lk/banner.png'),
download('http://cb.lk/promo.png')
]).then(function (downloadValues)
{
    return Promise.all(downloadValues.map(resize))
})
.then(function(resizeValues)
{
    return Promise.all(resizeValues.map(upload))
})
.then(function(uploadValues)
{
    console.log(uploadValues)
})
.catch(function(err)
{
    console.error(err);
})
