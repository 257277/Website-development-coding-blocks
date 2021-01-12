let arr=[1,2,3]; ///This is homogenous array
console.log(arr);// It is used to print the value of array
console.log(arr.length);//It is used to print the length of array
console.log(arr[1]);//it is used to print the the index 1 element 

let arr2=[1,'hello',false,[2,3]];//It is called hetrogenous array
console.log(typeof arr2[0]); //I will print the type of element present on index 2

for(let i=0; i<arr2.length;i++) /// Itrating through an array
{
    console.log(arr2[i]);
}

for(let val of arr2)/// another way of applying for loop And it is called for/for loop
{
    console.log(val);
}
for (let index in arr2)// another way of applying for loop And it is called for/in loo
{
    console.log(arr[index]);
}