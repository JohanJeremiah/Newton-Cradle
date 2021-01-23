
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobDiameter 
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(180,400,50)
	bobObject2 = new bob(180,400,50)
	bobObject3 = new bob(180,400,50)
	bobObject4 = new bob(180,400,50)
	bobObject5 = new bob(180,400,50)
	
	


	roofObject = new Roof(400,70,700,30)
	
	 
	rope1=new rope(bobObject1.body,roofObject.body,30,15)
	rope2=new rope(bobObject2.body,roofObject.body,30,15)
    rope3=new rope(bobObject3.body,roofObject.body,30,15)
	rope4=new rope(bobObject4.body,roofObject.body,30,15)
	rope5=new rope(bobObject5.body,roofObject.body,30,15)
	
	

	Engine.run(engine);

  
}



function draw() {
  rectMode(CENTER);
  background("cyan");
  
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display() 
  bobObject5.display()

  roofObject.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
}



