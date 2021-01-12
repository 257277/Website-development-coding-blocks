let notes=['do','re','mi','fa','so','la','ti','do'];
// slice
/// slice function do not changes the original array
console.log(notes.slice(4));/// it is print the data from index 4 to last index
console.log(notes.slice(4,6));///it is printing element from 4th index to (6-1)th index

///splice
let ommit=notes.splice(4);///It the original array and the length from 0th index to 4th index
console.log(ommit);///The splice value from the 4th index to last index is goes to ommit variable
console.log(notes);//it eill print the original array but spilce do the changes in the original array
/*
the splice function
let ommit=notes.splice(4,2)
In this the 2 shows how many length it will take
*/

///REPLACING ITEM WITH SPLICE
notes.splice(0,3,'sa','re','ga');
console.log(notes);

///concat
// concate do not changes the original array
console.log(notes.concat('sa'));//It is basically join notes and "sa" value.. The 'sa' value was join after the notes 
///We can goin multiple values to the original array

