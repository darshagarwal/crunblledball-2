var paper,rope;
var container,container2,container3,wall;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new CrubledPaper(200,400,70);

	//Create a Ground
	ground = new Ground(750,600,1600,20); 

	wall = new Wall(1550,490,10,30000)
	container = new Container1(1085,490,5,175);
	container2 = new Container(1200,570,200,3000);
	container3 = new Container1(1315,490,5,175);
	rope = new Chain(paper.body,{x:150,y:200})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
 container3.display();
  paper.display();
  ground.display();
  container.display();
  container2.display();
  wall.display();
  rope.display();
  drawSprites();

}

	 function mouseDragged(){
		Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
		chain.fly();
	}
