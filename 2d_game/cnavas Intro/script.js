var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

class Box
{
    constructor(size,color)
    {
        this.size=size;
        this.color=color;
        this.x=0;
        this.y=0;
    }
}

class Player extends Box
{
    constuctor()
    {
        Super(50,'blue');
        this.x=0;
        this.y=225;
    }
}

class Enemy extends Box
{
    constructor()
    {
        super(50,'red');
        
    }
}

let player =new player();
let e1=new Enemy();
let e2=new Enemy();
e1.x=120;
e2.x=240;

function drawbox(Box)
{
    ctx.fillStyle=box.color;
    ctx.fillReact(box.x,box.y,box.size,box.size);
}