let a=10;
   console.log(a);

   let b=[1,2,3,4,5]
console.log(b);

  console.log("Hello world");
/* variables , arrays, function, loops, classes, objects*/

c=20; // Global variable
var d=30; // var has function scope
let e =50; //let has block scope

let arr = ["apple","mango","guava"]
console.log(arr);

arr.push("Banana");/*it will add an element at the last of array*/
arr.pop();/*it will delete the last element from array at the last position*/
arr.indexOf("banana");/*If mango is present in the array it will return index of that element and if element is not present then it will return error*/
arr.shift();/*It will remove the first element from the array*/
arr.unshift("banana");/*It will add the element at the first position in array*/

 if(arr[0]=="kiwi") /* condition statement in java script*/
 {
     console.log("It is Kiwi");
 }
 else 
 {
     console.log("NO it is ",arr[0]);
 }

for(let i=0;i<5;i++)
{
    console.log(arr[i]);
}

/*
function fun()//defining function fun
{
    let a=5;
    if (a==5)
    {
        let b=10;// b have only block scope
        var f=50;// f have function scope so f is valid throughout the function
        console.log("Inside",b);
    }
    console.log("Outside",b);
    console.log("Function scope value",f);
}
fun();//calling function fun

function square_root(n)
{
    console.log("In first sqrt function");
    console.log(math.sqrt(n));// it is basically printing the answer
    return;
}

// Function Hoisting
var sqrt_n= function()
{
    console.log("In second sqrt function");
    return ;
}

square_root(10);
sqrt_n(10);
*/