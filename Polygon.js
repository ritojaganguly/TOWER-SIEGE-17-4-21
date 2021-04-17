class Polygon {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450, 390, 900, 20, options);
      this.image = loadImage("polygon.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("black");
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      
    }
  };
