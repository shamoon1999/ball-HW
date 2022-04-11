
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ground;
var leftside;
var rightside;
var ball;
var up_key;

function preload() {

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}
	ball = Bodies.circle(200, 200, 25, ball_options)
	World.add(world, ball);

	//Create the Bodies Here.
	ground = new Ground(100, 390, 1400, 20);
	rightside = new Ground(650, 340, 20, 120);
	leftside = new Ground(550, 340, 20, 120);

	Engine.run(engine);
    ellipseMode(RADIUS);
	rectMode(CENTER);
}


function draw() {

	background(180);
	ground.show();
	rightside.show();
	leftside.show();
	Engine.update(engine);
    
	ellipse(ball.position.x,ball.position.y,25);
	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW){

    force()

	}

    



}

function force (){
Matter.Body.applyForce(ball,{x:0,y:0},{x:18.6,y:56.74})


}