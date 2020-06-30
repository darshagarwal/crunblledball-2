class Container {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            density:0.1,
        }
        this.body = Bodies.rectangle(x, y, width,height,options);
      this.image = loadImage("sprites/dustbingreen.png");
        this.width = width;
        this.height = height;
        World.add(world, this.image);
    }
  display(){
   // var pos = this.body.position;
    imageMode(CENTER);
  //  fill("white");
    //image(pos.x,pos.y,this.width,this.height);
    image(this.image,1200,500,250,200);
  }
}