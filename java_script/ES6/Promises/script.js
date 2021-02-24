function fakeDownloadPromise(correct)
{
    return new Promise( function (resolve , reject)
    {
       setTimeout(function()
       {
         let downloadedData="Some data from the net";
         console.info("Downloading has completed")
         if(correct)
         {
            resolve(downloadedData)
         }
         else {
             reject(new Error("Could not download file"))
         }
       },1000)
    })
}

let downloaded =fakeDownloadPromise(true);
downloaded.catch(function(err)
{
    console.log(err)
})

setTimeout(function()
{
downloaded.then(function(data)  /// then function 
{
    console.info("The data was downloaded is this --->")
    console.info(data)
})
},3000)