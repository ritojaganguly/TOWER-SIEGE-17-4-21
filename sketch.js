const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ball, player;
var stand1, stand2;
var slingshot;


function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(900,400);
    player = new Polygon();
    stand1 = new Platfomr(380, 300, 270,10);
    stand2 = new Platform();

    //level one
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks17 = new Block(640,175,30,40);
  blocks18 = new Block(670,175,30,40);
  blocks19 = new Block(700,175,30,40);
  blocks20 = new Block(730,175,30,40);
  blocks21 = new Block(760,175,30,40);
  //level two
  blocks22 = new Block(670,135,30,40);
  blocks23 = new Block(700,135,30,40);
  blocks24 = new Block(730,135,30,40);
  //top
  blocks25 = new Block(700,95,30,40);


}

function draw(){
    background("brown");
    Engine.update(engine);

    textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();
  fill("pink")
  block25.display();
  

  slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(player.body); }
