class Container {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            density:0.1,
        }
        this.body = Bodies.rectangle(x, y, width,height,options);
        this.image = loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;
        World.add(world, this.image);
    }
  display(){
   
    imageMode(CENTER);
    image(this.image,1200,500,250,200);
  }
}