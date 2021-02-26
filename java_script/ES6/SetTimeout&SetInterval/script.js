function SayHello()
{
    console.log("Hello !");
}
console.log("And the wait starts ...");
setTimeout(SayHello,1000);//// it work after 1sec time over and only once
setTimeout(SayHello,1000);




var intervalId;
var runCount=0;
function SayBye()
{
    runCount++;
    if(runCount<5){
    console.log("Bye!");
    }
}
intervalId = setInterval(SayBye,1000);//// It works after every 1sec and agin and agian
//clearInterval(intervalId);  /// When we call that function nothing is printed because we run that function clearInterval start and nothing happen

