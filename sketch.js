const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;

function preload()
{
	dustbinImage = loadImage("Sprites/Dustbin.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 100, 35);
	ground = new Ground(width/2, 600, width, 20);
	dustbin = new Dustbin(1200, 580);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  ground.display();
  dustbin.display();
  image(dustbinImage,1100,390,200,200);
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:62,y:-85});
  
	}
}