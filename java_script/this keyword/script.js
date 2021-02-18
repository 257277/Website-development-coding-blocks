/*The JavaScript this keyword refers to the object it belongs to.It is bound on run time*/
/* It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object. */


/*The key in an object we most of time take string but if we use number than we can acess the key like obj['number']*/
function checkThis()
{
console.log(this);
}

let obj=
{
a:10,
b:'abcd',
c:true,
d:function (){
  console.log(this);///when we call function d than "this" we point to obj function
},
e:{
  l:34,
  m:'bsd',
  f:function (){
    console.log(this);
  }
}
}
