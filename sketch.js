var fixedRect, movingRect;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  
  movingRect.y = World.mouseY
  movingRect.x = World.mouseX

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2  ){
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";
  }
  else
  {

    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";

  }

  
  drawSprites();
}





