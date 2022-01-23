
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var leftWall
var rightWall

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ballOptions ={
		isSatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Engine.run(engine);
    ball = Bodies.circle(260,100,20,ballOptions)
	World.add(world,ball)

    ground=new Ground(800,670,width,20)
	leftWall =new Ground(1100,600,20,120)
	rightWall =new Ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  leftWall.display()
  rightWall.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
		
	}
}

