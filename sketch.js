
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ball,ground;
var box,box1,box2;
function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground=new Ground(300,690,1000,20);
	ball=new BallObject(105,620,52,PI/2);
	box=new Box(600,680,150,10);
	box1=new Box(520,630,10,100);
	box2=new Box(680,630,10,100);
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
   ground.display();
   ball.display();
   box.display();
   box1.display();
   box2.display();
   keyPressed();
   

  drawSprites();
 
}

function keyPressed() {
	if (keyDown("UP_ARROW")){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
	}
}


