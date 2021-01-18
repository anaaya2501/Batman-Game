const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var um;
var drops = [];
function preload(){
    i1 = loadImage("images/thunderbolt/1.png");
    i2 = loadImage("images/thunderbolt/2.png");
    i3 = loadImage("images/thunderbolt/3.png");
    i4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    um = new Umbrella(200,500);
    if(frameCount%150===0){
        for(var i =0; i<100; i= i+1){
            drops.push(new Drops(random(0,400),random(0,400) ))
        }
    }
}

function draw(){
    Engine.update(engine);
    background(0);   
    um.display();
    for(var i =0; i<drops.length; i= i+1){
        drops[i].updateDrops();
        drops[i].display();

    }
    var x = Math.round(random(1,4));
    if(frameCount%60===0){
        switch(x){
            case 1 : image(i1,random(10,370),random(10,30));break;
            case 2 : image(i2,random(10,370),random(10,30));break;
            case 3 : image(i3,random(10,370),random(10,30));break;
            case 4 : image(i4,random(10,370),random(10,30));break;
        default:break;
    }
    }
}   

