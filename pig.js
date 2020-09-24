class Pig {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      strokeWeight(2);
      stroke("lightGreen");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };