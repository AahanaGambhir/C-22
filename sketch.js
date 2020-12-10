const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, myWorld, ground;

function setup() {
  createCanvas(400, 400);
 
  engine = Engine.create();
  myWorld = engine.world;

var ground_options = {
  isStatic:true
}

var ball_option = {
  restitution:1
}
  ball = Bodies.circle(200, 100, 20, ball_option);
  World.add(myWorld, ball);
  ground = Bodies.rectangle(200, 380, 400, 15, ground_options);
  World.add(myWorld, ground);
}

function draw() {
  background(0);  

Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x, ground.position.y, 400, 15);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20)

}