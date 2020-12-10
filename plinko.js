class Plinko{
    constructor(x,y){
      var options = {
         isStatic: true
      }
      this.body = Bodies.circle(x,y,7,options);
      this.radius = this.body.circleRadius;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("pink")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}