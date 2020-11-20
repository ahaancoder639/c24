
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;
var bird1;
var pig1;
var log1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);

    ground1 = new Ground(200,350);

    bird1 = new Bird(100,200);

    pig1 = new Pig(300,300);

    log1 = new Log(200,300,80,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground1.display();
   bird1.display();
   pig1.display();
   log1.display();
}
