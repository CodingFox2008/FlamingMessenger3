var phoenixI,phoenix;
var wall01, wall02, wall03, wall04;
var copI;
var deliverToPersonI;

function preload(){
 phoenixI = loadImage("phoenix.png");
 copI = loadImage("copImage.png");
 deliverToPersonI = loadImage("deliverToPerson.png");
}

function setup() {
 
  createCanvas(1200,700)
  
 phoenix = createSprite(200,200);
 phoenix.addImage(phoenixI)
 phoenix.scale=0.2;

 wall01 = createSprite(300,350,30,500);
 wall01.shapeColor="white";

 wall02 = createSprite(150,100,500,30);
 wall02.shapeColor="white";

 wall03 = createSprite(375,300,500,30);
 wall03.shapeColor="white";

 wall04 = createSprite(375,450,500,30);
 wall04.shapeColor="white";

 wall05 = createSprite(375,590,500,30);
 wall05.shapeColor="white";

 wall06 = createSprite(500,350,30,500);
 wall06.shapeColor="white";

 wall07 = createSprite(800,350,30,500);
 wall07.shapeColor="white";

 wall08 = createSprite(610,200,30,200);
 wall08.shapeColor="white";

 wall09 = createSprite(650,370,200,30);
 wall09.shapeColor="white";

 wall10 = createSprite(900,590,300,30);
 wall10.shapeColor="white";

 wall11 = createSprite(900,400,30,300);
 wall11.shapeColor="white";
 
 wall12 = createSprite(1000,400,200,30);
 wall12.shapeColor="white";
 
 wall13 = createSprite(1100,200,300,30);
 wall13.shapeColor="white";

 copImage = createSprite(700,500,40,40);
 copImage.addImage(copI);
 copImage.scale=0.2;

 copImage2 = createSprite(400,370,40,40);
 copImage2.addImage(copI);
 copImage2.scale=0.19;

 deliverToPersonImage = createSprite(50,40,40,40);
 deliverToPersonImage.addImage(deliverToPersonI);
 deliverToPersonImage.scale=0.2;

}

function draw() {
 
  background("pink")

  drawSprites();

  if(keyDown("Down")){
    phoenix.y = phoenix.y+30;
  }

  if(keyDown("Up")){
    phoenix.y = phoenix.y-30;
  }

  if(keyDown("Right")){
    phoenix.x = phoenix.x+30;
  }

  if(keyDown("Left")){
    phoenix.x = phoenix.x-30;
  }

}

