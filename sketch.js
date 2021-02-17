var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, wall1, base2, wall3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1= createSprite(250, 610, 20, 100 )
	wall1.shapeColor = color (245, 27,0)
	wall3= createSprite(450, 610, 20, 100 )
	wall3.shapeColor = color (245, 27,0)
	base2= createSprite(350, 650, 200, 20)
	base2.shapeColor = color (245, 27,0)





	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 wallbase = Bodies.rectangle(350, 630, 200, 20, {isStatic:true})
	 World.add(world, wallbase)

	 wallleft = Bodies.rectangle(450, 610, 20, 100, {isStatic:true})
	 World.add(world, wallleft)

	 wallright = Bodies.rectangle(250, 610, 20, 100, {isStatic:true})
	 World.add(world, wallright)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  wall1.x=wall1.position.x
  wall1.y=wall1.position.y

  wall3.x=wall3.position.x
  wall3.y=wall3.position.y

  base2.x=base2.position.x
  base2.y=base2.position.y
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false)

Matter.Body.setStatic(wall1, true )
Matter.Body.setStatic(base2, true )
Matter.Body.setStatic(wall3, true )
  }
}



