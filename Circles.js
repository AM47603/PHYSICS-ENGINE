class Circle{
    constructor(x, y,radius) {
        var options = {
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
       
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
}