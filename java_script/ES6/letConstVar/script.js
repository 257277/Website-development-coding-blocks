var a=10;
a=11;
a++
console.log(a);

///ES6 introduce two more data type let or const

let b=20;
b++;
console.log(b);

/*const c=30;
c++;     // here we grt error because in const we cannot apply arithmetic operator 
console.log(c);*/


const obj=
{
    k1:'asd',
    k2:10,
    k3:false
};

obj.k4=123;
console.log(obj.k4);

delete obj.k1;
console.log(obj.k1);

const arr=[1,2,3];
arr.push(5);
console.log(arr);

var myVar=10;
function alpha(){
    var myVar=11;
    if(true)
    {
        var myVar=21;
        console.log(myVar);
    }
    console.log(myVar);
}
alpha();

let MyVar=10;
function Alpha(){
    let MyVar=11;
    if(true)
    {
        let MyVar=21;
        console.log(MyVar);
    }
    console.log(MyVar);
}
Alpha();