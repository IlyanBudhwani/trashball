
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin1;
var dustbin2;
var dustbin3;
var paper1;
paper1.velocityX=2;
var right;
var left;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin1 = new Dustbin(850,380);
paper1 = new Paper(100,100);
ground = new Ground(600,height,1200,20);
right = new Rightside(950,338);
left = new Leftside(750,338);	
Engine.run(engine);
  
}


function draw() {
  background("green");
  dustbin1.display();
  paper1.display();
  ground.display();
  left.display();
  right.display();
  keyPressed();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:-85});
	}
}


