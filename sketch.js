
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1, rop2, rope3, rope4, rope5;
var world, engine;
var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roofObject = new Roof(width/2,height/2, width/7,20);
	startBobPositionX = width/2;
	startBobPositionY = height/4 + 500;
	bobDiameter= 40;
	bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter/2)
	bobObject2 = new Bob (startBobPositionX-bobDiameter,startBobPositionY,bobDiameter/2)
	bobObject3 = new Bob (startBobPositionX,startBobPositionY,bobDiameter/2)
	bobObject4 = new Bob (startBobPositionX+bobDiameter , startBobPositionY,bobDiameter/2)
	bobObject5 = new Bob (startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter/2)


	rope1=new Rope(bobObject1.body, roofObject.body,-bobDiameter*2,0 );
	rope2 =new Rope(bobObject2.body, roofObject.body,-bobDiameter,0);
	rope3 =new Rope(bobObject3.body, roofObject.body,0,0);
	rope4 =new Rope(bobObject4.body, roofObject.body,bobDiameter,0);
	rope5 =new Rope(bobObject5.body, roofObject.body,bobDiameter*2,0);
0


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);


  roofObject.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  
  drawSprites();
 
}



function keyPressed(){
	if( keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}