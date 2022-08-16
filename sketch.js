
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(20,20,20);
	World.add(world,ball);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ground = new Ground(600,690,1200,10);
	World.add(world,ground);

	left = new Ground(800,630,10,100);
	World.add(world,left);

	right = new Ground(1000,630,10,100);
	World.add(world,right);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  fill("white")
  ellipse(ball.position.x,ball.position.y,20);

  ground.display();
  left.display();
  right.display();

  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:+0.01,y:+0.01});
  }
}



