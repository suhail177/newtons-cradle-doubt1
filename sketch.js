
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
 var canvas	= createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1 = new Bob(100,100,50);

	Engine.run(engine);
  
}


function draw() {
 background('grey');
  Engine.update(engine);
  drawSprites();
  
  
 
}



