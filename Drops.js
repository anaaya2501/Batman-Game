class Drops {
    constructor(x,y){
 var options= {
     restitution: 1,
     friction:0.3,
     denstity:0.8
 }
     this.body= Bodies.circle(x,y,5,options);
     this.radius= 5;
     World.add(world,this.body);
 
    }
    
    display(){
     fill("blue");
     ellipseMode(RADIUS);
     ellipse(this.body.position.x,this.body.position.y, this.radius,this.radius);
 
    }

    updateDrops(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y:random(0,400)})
        }
    }
 }