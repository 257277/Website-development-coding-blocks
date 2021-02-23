let str = "abcde";            //3 level from null
let num=233;                 // 3 level from null
let bool=true;               // 3 level from null
let arr=[246,436,6,346];     // 3level from null
let obj={a:10,b:'afkjjf'};   ///2 level from null
let fun = function ()        // 3 level from null
{
    console.log("yay!");
}
 ///This function are global function so they exist in window
console.log("typeof String",typeof String);///it is a function that convert the input to the string

console.log("type of Object ",typeof Object);///it genrate object

console.log("type of Boolean",typeof Boolean);//it genrate bool type data type

console.log("type of Number",typeof Number);///It generate number

console.log("type of Array",typeof Array);///It generate array

console.log ("type of Function",typeof fun )///it generate function

////********** protochain ***************/
///proto : they are hidden pointer inside every object and point to the blueprint (prototype) it is created
console.log("************ protochain ***********");
console.log(str.__proto__.__proto__==obj.__proto__)

console.log(num.__proto__.__proto__==obj.__proto__)

console.log(bool.__proto__.__proto__==obj.__proto__)

console.log(arr.__proto__.__proto__==obj.__proto__)

console.log(fun.__proto__.__proto__==obj.__proto__)

// So,Everything is directly inherits from the same thing
// that obj is inherited from
//i.e. in javascript , everything is essentially an object

///****************** prototye **********************/
console.log("********* Prototype ***********");
 ///// prtotype is primitive data type and prototype means blueprint of something 
console.log(obj.__proto__ == Object.prototype);

console.log(str.__proto__ == String.prototype);

console.log(num.__proto__ == Number.prototype);

console.log(bool.__proto__ == Boolean.prototype);

console.log(arr.__proto__ == Array.prototype);

console.log(fun.__proto__ == Function.prototype);

//i.e. Stirng .prototype inherits from Object.prototype