let spinButton=document.getElementById("#spinButton");
let stopButton=document.getElementById('#stopButton');
let value1=document.getElementById('#value1');
let value2=document.getElementById('#value2');
let value3=document.getElementById('#value3');
let slot=document.getElementsByClassName('.slot');

let values=['😈','🤩','😃','😭','🥶','❌']
function getRandomValue()
{
    return values[Math.floor(Math.random()*7)];
}

let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()

    }, 250)
}

$(document).ready(function(){
    $("#stopButton").click(function(){
          $(".value").css("animation-play-state", "paused");
    });
    $("#spinButton").click(function(){
        $(".value").css("animation-play-state", "running");
    });
});