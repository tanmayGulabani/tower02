const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
function setup() {

  engine = Engine.create();
  world = engine.world;
  

  createCanvas(800,400);
  
  

   ground = new Ground();
    //level one 
    block1=new Box(390,155,30,40);

    //level two
    block2=new Box(330,235,30,40);
    block3=new Box(360,155,30,40);
    block4=new Box(390,155,30,40);
    block5=new Box(420,155,30,40);
    block6=new Box(450,155,30,40);

    //level three
    block7= new Box(360,195,30,40);
    block8= new Box(390,195,30,40);
    block9= new Box(420,195,30,40);


    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(polygon.body,{x:100,y:200})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine); 
  
  stroke(15);
  fill("gray")
  block1.display();

  stroke(15);
  fill("red")
  block3.display();
  block4.display();
  block2.display();
  block5.display();
  block6.display();

  stroke(15);
  fill("yellow")
  block9.display();
  block8.display();
  block7.display();






  slingShot.display();


  drawSprites();
} 
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
