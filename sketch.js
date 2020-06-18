var fixedRect, movingRect;
var square1, square2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  square1 = createSprite(600, 500, 30, 30);
  square1.shapeColor = "blue";
  square2 = createSprite(1100, 500, 30, 30);


  square1.velocityX = +5;
  square2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  bounceOff(square1, square2)


  drawSprites();
}

