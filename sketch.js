var paper;
var container,container2,container3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper = new CrubledPaper(200,450,70);

	//Create a Ground
	ground = new Ground(width/2,670,width,20);


	container = new Container(1200,650);
	//container2 = new Container(1200,570,200,40);
	//container3 = new Container(1300,490,40,200);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
 // circle(100,570,50);
  paper.display();
  container.display();
  //container2.display();
 // container3.display();
  ground.display();
  //drawSprites();

}

function keyPressed(pos, xpos, ypos){
	//  var pos = this.body.position;
	  var boject= this.body;
	  var xpos=xpos;
	  var ypos=ypos;
	 // console.log("darsh before "+ xpos);
	  //console.log("darshbefore" + ypos);
  
  
	  
	  if(keyCode === UP_ARROW){
		 // console.log("darsh if arrow pressed "+ pos);
	 
			 Matter.Body.applyForce( package.body,package.position,{x:85,y:-85});
		 }
	 }
	 
