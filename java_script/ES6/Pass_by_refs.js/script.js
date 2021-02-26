// In javaScript the value is passed by value not pass by reference

var quidditchWinner=["Harry potter","Ron","Harmoine"];
function changeWinner(winner)
{
    winner[0]="Draco";
    winner[1]="Crabbbe";
    winner[2]="Pansy";
}
console.log("The winner were " + quidditchWinner);

changeWinner(quidditchWinner);

console.log("Now the winner are "+ quidditchWinner);