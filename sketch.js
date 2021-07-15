const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var con,con2;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ground=new Ground(200,400,400,20);
  ball=new Ball(200,50,20);
  ball2=new Ball(350,10,20);
  con=Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball.body,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1,
  })
  World.add(world,con);

  con2=Matter.Constraint.create({
    bodyA:ball.body,
    pointA:{x:0,y:0},
    bodyB:ball2.body,
    pointA:{x:0,y:0},
    length:100,
    stiffness:0.1,
  })
  World.add(world,con2);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();
  ball.show();
  ball2.show();
  push()
  strokeWeight(2)
  stroke(255)
  fill (255)
  line(con.pointA.x,con.pointA.y,ball.body.position.x,ball.body.position.y);

  line(ball.body.position.x,ball.body.position.y,ball2.body.position.x,ball2.body.position.y);
  pop();
}

function keyPressed() {
  if(keyCode===RIGHT_ARROW) {
    Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.05,y:0})
  }
}