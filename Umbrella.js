class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,50,options);
      this.radius = 50;
      this.height = height;
      this.image = loadImage("images/Walking Frame/walking_1.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      //fill("brown");
      image(this.image,pos.x, pos.y, this.radius*3, this.radius*3);
      pop();
    }
  };
