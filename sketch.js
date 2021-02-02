
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bin1,bin2,bin3;
var ground,paper;
function preload()
{
	
}

function setup() {
	
	var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    paper = new Paper(100, 450, 10);
    ground = new Ground (width / 2, 550, width, 20)
    
    bin1 = new Dustbin(902,505,10,120);
    bin2 = new Dustbin(962,565,130,10);
    bin3 = new Dustbin(1024,505,10,120);

}


function draw() {
 
  background("white");
  Engine.update(engine);

  bin1.display();
  bin2.display();
  bin3.display();

  ground.display();
  paper.display();

  fill("black")
  textSize(30);
  text("Use UP ARROW KEY to throw the paper into the trash can ",200,100)
  fill("black")
  textSize(20);
 text("Press SPACE to start again",450,150);
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 95,
      y: -95
    });
  }
	
	  if(keyCode === 32){
		Matter.Body.setPosition(paper.body,{x:100,y:450})
	}
}


