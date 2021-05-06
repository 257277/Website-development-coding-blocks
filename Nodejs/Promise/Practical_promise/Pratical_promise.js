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

download('http://cb.lk/logo.png')                                  /// or we can do this like:
.then(function(fileName)                                             //   .then(resize)        
{                                                                    //   .then(function(resizedFile)
    resize(fileName).then(function(resizedFile)                      //    {console.log("resized file is at :" + resizedFile)})
    {
        console.log("resized file is at : " + resizedFile)
    })

})
.catch(function(err)    ////it can return any promise reject function
{
    console.log(err)
})
