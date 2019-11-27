var fixed,move


function setup() {
  createCanvas(400,400);
  fixed=createSprite(200, 200, 50, 50);
  move = createSprite(100,100,20,20);
  
}

function draw() {
  background(255,255,255);  
  move.X=World.mouseX;
  move.Y=World.mouseY;




  drawSprites();
}