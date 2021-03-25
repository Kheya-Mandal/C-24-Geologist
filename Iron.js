class Iron{
    constructor(x, y) {
        var options = {

          'density':50,
          'friction': 5,
          'restitution':0.8,
        };
        this.body = Bodies.rectangle(x, y, 80, 20, options);
        this.width = 80;
        this.height = 20;
        World.add(world, this.body);
      };
      display(){
        var pos =this.body.position;
        //var angle = this.body.angle;
        push();// NEW SETTINGS
        translate(pos.x, pos.y);
        //rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();// PREVIOUS SETTINGS
      }
}