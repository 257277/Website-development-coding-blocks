// String

let str="this is a string";// we can define string with double quotes as well as single quotes
let str1='this is arnav\'s string';//when we use single quotes we have to place escaping (\) otherwise in this string it will not consider after second single quotes
let p ="Arnav";
let str2 = "This is $(p) second string";
let str3 ="This is \
very long \
string";
console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);

// calculating string length
console.log(str.length);

// Searching

let s="This has some data here";
let s2="ab abb abbcd ba";
let key="data";
console.log(s.indexOf(key));// if we find string than it will return index and if the string is not present it will return -1
console.log(s.indexOf("a",5))// In this it will start check the string from 5th index and it will the value from 5th the string is present at ith index
console.log(s2.indexOf("ab"));
console.log(s2.lastIndexOf("ab"));//It will start searching string from last index of given string


//// STRINGS METHODS
// slice method is left to right method
let mainstr="This is a long string";
let smallstr= mainstr.slice(4,8);//It will print from index 2 to index in main string
console.log(smallstr);
//Another method to getting substring
let smallstr1=mainstr.substring(4,8);//It will print from index 4 to 8
console.log(smallstr1);
let smallstr2=mainstr.slice(-6,-4);//it will print from 4th index to 6th index from last
console.log(smallstr2);

///substr method
// this method is also move from left to right
let smallstr3=mainstr.substr(3,4);//this will print from index 3 and having length 4 from 3rd index
console.log(smallstr3);
let smallstr4=mainstr.substr(-5,3);//this will take starting index 5 from the end and take the length 3
console.log(smallstr4);