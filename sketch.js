
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var iron;
var rubber;
var ground;
var stone ;
var hammer;
var a,b,c,d,e;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
iron = new Box(200,200,100,20);
ground = new Ground(600,height,1200,20);
rubber = new Rubber(300,200);
stone = new Stone(300,300,200,200);
hammer = new Hammer(10,10); 
a = new Box(500,500,10,10);
b = new Box(500,500,10,10);
c = new Box(500,500,10,10);
d = new Box(500,500,10,10);
e = new Box(500,500,10,10);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  iron.display();
  ground.display();
  rubber.display();
  stone.display();
  hammer.display();
  a.display();
  b.display();
  c.display();
  d.display();
  e.display();
  drawSprites();
 
}



