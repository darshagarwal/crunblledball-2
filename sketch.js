var paper;
var container,container2,container3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new CrubledPaper(200,100,20); 

	//Create a Ground
	ground = new Ground(750,600,1600,20); 


	container = new Container(1080,490,40,200);
	container2 = new Container(1200,570,200,40);
	container3 = new Container(1300,490,40,200);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 // circle(100,570,50);
  paper.display();
  ground.display();
  container.display();
  container2.display();
  container3.display();
  drawSprites();

}

function keyPressed(pos, xpos, ypos){
	//  var pos = this.body.position;
	  var boject= this.body;
	  var xpos=xpos;
	  var ypos=ypos;
	  //console.log("darsh before "+ xpos);
	 // console.log("darshbefore" + ypos);
  
  
	  
	  if(keyCode === UP_ARROW){
		  console.log("darsh if arrow pressed "+ pos);
	 
			 Matter.Body.applyForce( paper.body,paper.position,{x:85,y:-85});
		 }
	 }
	 
