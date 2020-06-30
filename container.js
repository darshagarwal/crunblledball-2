class Container {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.body = Bodies.rectangle(1080,490, width,height,options);
        this.image = loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
  display(){
    var pos = this.body.position;
    imageMode(CENTER);
    fill("white");
     image(this.image,1080,490,this.width,this.height);
  }
}
