var houseImg;
var startButton;
var start;
var stair1Img;
var back;
var playerImg, player;
var gameState ;
var ghostImg1, ghostImg2, ghostImg3,ghostImg4;
var ghost, ghostGroup;
var ghostArray;
var lady, ladyGroup;

function preload() {
  houseImg = loadImage("Images/house1.jpg");
  startButton = loadImage("Images/start.png");
  stair1Img = loadImage("Images/stair1.png");
  playerImg = loadAnimation("Images/man1.png", "Images/man2.png", "Images/man3.png");
  ghostImg1 = loadImage("Images/ghost1.png");
  ghostImg2 = loadImage("Images/ghost2.png");
  ghostImg3 = loadImage("Images/ghost3.png");
  ghostImg4 = loadImage("Images/lady1.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  start = createSprite(width / 2, height / 4, 50, 50);
  start.addImage(startButton);
  start.scale = 0.5;

  back = createSprite(windowWidth / 2, windowHeight / 2);
  back.addImage(stair1Img);
  back.visible = false;
  back.scale = 2;

  player = createSprite(width / 2, height - 200);
  player.addAnimation("walking", playerImg);
  player.visible = false;
  player.scale = 2;

  ghostGroup = createGroup();

  ghostArray = [ghostImg1,ghostImg2,ghostImg3];

}

function draw() {
  background(houseImg);


  fill("red");
  textSize(70);
  textFont('Georgia');
  textStyle(BOLDITALIC);
  text("GHOST HOUSE", width / 2 - 200, height / 7);

  textSize(30);
  text("RULES :- ", width - 200, height - 400);
  textSize(20);
  text("1. You have to collect three keys \n by touching them and exit the house.\n2. Do not let any creature touch you.\n 3. Use up arrow to move the player", width - 400, height - 350);

  
    if (mousePressedOver(start)) {
      back.visible = true;
      start.visible = false;
      player.visible = true;
      gameState = 0;
    }

    if(gameState===0){
    if (keyIsDown(UP_ARROW)) {
      player.y = player.y - 5;
    }

    spawnGhost();
  }
  
  drawSprites();
}
