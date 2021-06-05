const Bodies=Matter.Bodies;
const World =Matter.World;
const Engine=Matter.Engine;


var engine, world;
var bg,ground,gimg;
var snow=[];
var ice=[];
var runner,runnerImg;
var maxSnow=100;

function preload(){
bg=loadImage("snow1.jpg");
runnerImg=loadAnimation("sc1.png","sc4.png","sc6.png","sc11.png")
gimg=loadImage("ground.jpg");
}

function setup() {
  var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground=createSprite(650,655);
    ground.addImage(gimg);
    ground.scale=3.2;
    ground.velocityX=-10;
  
  
    runner=createSprite(100,350);
    runner.addAnimation("runner",runnerImg)
    runner.scale=0.67;
    runner.velocityX=2;
    runner.setCollider("rectangle",15, -20,100,180) 
  
}


function draw() {
  background(bg);  
  Engine.update(engine);

  if(frameCount%5==0){
    snow.push(new Snow(random(0,800),-20,30));
  }
for(var i=0;i<snow.length;i++){
  snow [i].display();
}

runner.collide(ground);

  if(ground.x < 530){
    ground.x=600;
  }

  if(runner.x > 1200){
    runner.x=150;
  } 
  


ground.display();
runner.display();
 drawSprites();
}
