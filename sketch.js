
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,boy1,tree1,stone1,elastic1,boy,tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;




function preload()
{
  boy = loadImage("boy.png");
  tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(500,700,1000,100);
//	boy1 = new boy(200,490,200,300);
//	tree1 = new tree(750,420,400,490);
	stone1 = new stone(140,420,50);
	elastic1 = new elastic(stone1.body,{x:130,y:480})

	mango1 = new mango(700,300,50);
	mango2 = new mango(750,340,50);
	mango3 = new mango(850,350,50);
	mango4 = new mango(650,380,50);
	mango5 = new mango(620,340,50);
	mango6 = new mango(820,260,50);
	mango7 = new mango(900,400,50);
	mango8 = new mango(950,350,50);
	mango9 = new mango(900,320,50);
	mango10 = new mango(750,240,50);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,90,400,200,300);
  image(tree,560,180,400,490);

  ground1.display();
//boy1.display();
 // tree1.display();
  stone1.display();
  elastic1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
  detectCollision(stone1, mango9);
  detectCollision(stone1, mango10);
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
	Matter.Body.setStatic(stone1.body, false);
  }
  
  function mouseReleased(){
	
	elastic1.fly();
  }

  function keyPressed() {
    if (keyCode === 32) {
      elastic1.attach(stone1.body);
    }
    }

  function detectCollision(lstone,lmango){
	var mangoBodyPosition=lmango.body.position;
	var stoneBodyPosition=lstone.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	   if(distance<lmango.diameter+lstone.diameter){
		 Matter.Body.setStatic(lmango.body,false);
	   }
	}



