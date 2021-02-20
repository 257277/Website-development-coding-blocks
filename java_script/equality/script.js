console.log(1=='1');// It is called Abstract equality comparision
//Loose equality compares two values for equality, after converting both values to a common type. 
//In this equality the right side data is converted into left side data type and then check it is true or not 


console.log(1==='1');//It is called strict equality comparision
//Neither value is implicitly converted to some other value before being compared.


console.log(0=='')// true because of type casting 

console.log('false'==false)//false

console.log(''==false)//typecast both to 0 so it true


///In abstract equality If both type is same than we do not have any need of type cast

console.log([1,2]==[1,2]) // false because in memory reference and value is different