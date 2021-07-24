var sea;
var ship;
var ship_moving;
var seaImage;

function preload(){
ship_moving= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage= loadImage("sea.png");
}

function setup(){
  createCanvas(800,600);
  ship = createSprite(130,200,30,30); 
  ship.addAnimation("moving", ship_moving);
  ship.scale= 0.5;
  sea= createSprite(200,180,400,20);
  sea.addImage("sea", seaImage);
  
  createEdgeSprites();
}

function draw() {
background("grey");

sea.velocityX= -5;

if(sea.x < 0){ 
  sea.x = sea.width/8;}

console.log(ship.x);
ship.collide(sea);

drawSprites();
}