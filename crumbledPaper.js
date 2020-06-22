class CrubledPaper{
    constructor(x,y,diameter){
        var options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2,
        }

        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
       World.add(world, this.body);
       this.image = loadImage("sprites/paper.png")
    }

    display(){
        var pos = this.body.position;
        fill("purple");  
        this.image(pos.x,pos.y,this.diameter);
       

    }

}

