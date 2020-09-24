class Log {
    constructor(x,y,height,angle) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,15,height,options);
      this.width = 15;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        strokeWeight(2);
        stroke("purple");
        rect(0, 0, this.width, this.height);
        pop();
    }
  };