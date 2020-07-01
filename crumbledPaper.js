class CrubledPaper{
    constructor(x,y,diameter){
        var options={
            restitution:0.9,
            isStatic:false,
            friction:0.5,
            density:0.1,
        }

        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
       World.add(world, this.body);
       this.image = loadImage("paper.png")
    }

    display(){
        var pos = this.body.position;
        fill("purple");  
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.diameter);
        //circle(pos.x,pos.y,this.diameter);

    }

}

