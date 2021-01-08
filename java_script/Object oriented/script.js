// first way to make a object in javascript

var bird= /*It is how we give the property to any element*/
{
    x:100,
    y:20,
    color:"blue",
    eggs:[1,2,3,4,5],

    fly:function()
    {
        console.log("bird is flying at",this.x,this.y);//this refer to the corrent object or we can say we can use value of x and y with the help of this
    }
};
//to change the x cordinate of bird
bird.x=200;

//how to itrate over bird.egg
for(let i=0;i<bird.eggs.length;i++)//for loop
{
    console.log (bird.eggs[i]);
}

bird.eggs.forEach(function(val,idx)//it is called for each loop 
// the meaning of this loop is for every element of bird.eggs functiontake two value index and val and finally print the index and value
{
    console.log(idx,val);
})