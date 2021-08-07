var shipimg,ship;
var seaimg;
var sea;

function preload(){
 shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaimg = loadImage("sea.png");
 
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,20,100,100);
  sea.addImage(seaimg);
  sea.veloctyx = -2;

  ship = createSprite(150,100,50,50);
  ship.addAnimation("shipImage",shipimg);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  sea.velocityX = -2;
  if(sea.x <0){
    sea.x = sea.width/8;
  }
 drawSprites();
}