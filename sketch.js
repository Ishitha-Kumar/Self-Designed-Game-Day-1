var chef;
var chefimage;
function preload()
{
  chefimage=loadImage("Sprites/Chef2.png");
}





function setup() {
  createCanvas(displayWidth-75,displayHeight-125);
  chef=createSprite(400, 200, 50, 50);
  chef.addImage("chefimage",chefimage);
  chef.scale=0.7;
  chef.shapeColor="red";

}

function draw() {
  background("white");
  if(keyDown("UP_ARROW"))
  {
    chef.velocityY= -3;
    chef.velocityX= 0;
  }  
  if(keyDown("DOWN_ARROW"))
  {
    chef.velocityY= 3;
    chef.velocityX= 0;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    chef.velocityY= 0;
    chef.velocityX= 3;
  }
  if(keyDown("LEFT_ARROW"))
  {
    chef.velocityY= 0;
    chef.velocityX= -3;
  }
  drawSprites();
}