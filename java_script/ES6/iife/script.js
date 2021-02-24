/// Benefit of IIFE is It create local scope without polluting global scope

(function ()
{
  var a=10;
  var b=a/5;
  console.log(a+b);
})();



////Example of IIFE 
(function (l,p,r,s)
{
    l("3^4 = " + p(3,4));
    l("4^3 = " + p(4,3));
    l("root(2) = " + r(2));
    l("sin(10) = " + s(10));
})(console.log,Math.pow,Math.sqrt,Math.sin);

/// Another example

for(var i=0;i<10;i++)
{
   ( function(j){
    setTimeout(function(){
        console.log(j);
    },100)
})(i)
}

// without Es6
for(var k=0;k<100;k++)
{
   setTimeout(console.log,100,i);
}