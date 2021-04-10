var houseImg;
var startButton;
var start;
var stair1Img, stair2Img;
var back;
var playerImg, player;
var gameState ;
var ghostImg1, ghostImg2, ghostImg3,ghostImg4;
var ghost, ghostGroup;
var ghostArray;
var lady, ladyGroup;
var room1Img, room2Img, room3Img, room4Img;
var keyImg, key=0;
var keyCount = 0;
var roomArray;

function preload() {
  houseImg = loadImage("Images/house1.jpg");
  startButton = loadImage("Images/start.png");
  stair1Img = loadImage("Images/stair1.png");
  playerImg = loadAnimation("Images/newman1.png", "Images/newman2.png");
  ghostImg1 = loadImage("Images/ghost1.png");
  ghostImg2 = loadImage("Images/ghost2.png");
  ghostImg3 = loadImage("Images/ghost3.png");
  ghostImg4 = loadImage("Images/lady1.png");
  room1Img = loadImage("Images/room1.jpeg");
  room2Img = loadImage("Images/room2.jpeg");
  room3Img = loadImage("Images/room3.jpeg");
  //room4Img = loadImage("Images/hall.jpeg");
  keyImg = loadImage("Images/key.png");
  stair2Img = loadImage("Images/stair2.jpeg");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  start = createSprite(width / 2, height / 4, 50, 50);
  start.addImage(startButton);
  start.scale = 0.5;

  back = createSprite(windowWidth / 2, windowHeight / 2, width,height);
  back.addImage(stair1Img);
  back.visible = false;
  back.scale = 2;

  player = createSprite(width / 2, height - 200);
  player.addAnimation("walking", playerImg);
  player.visible = false;
  player.scale = 0.5;

  ghostGroup = createGroup();
  ladyGroup = createGroup();
  //keyGroup = createGroup();

  ghostArray = [ghostImg1,ghostImg2,ghostImg3];
  roomArray = [room1Img,room2Img,room3Img,stair2Img];
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
  text("1. You have to collect three keys \n by touching them and exit the house.\n2. Do not let any creature touch you.\n 3. Use ↑ and ↓ to move the player.", width - 400, height - 350);

  
    if (mousePressedOver(start)) {
      back.visible = true;
      start.visible = false;
      player.visible = true;
      gameState = 0;
    }

    if(gameState===0){
      spawnKey();

      if (keyIsDown(UP_ARROW)) {
        player.y = player.y - 3;
      }
      if (keyIsDown(DOWN_ARROW)) {
        player.y = player.y + 3;
      }

      /*if(key.isTouching(player)){
        keyCount++;
      }*/

      //change room
      //var rand = Math.round(random(0,3));
      var rand = 2;
      if(player.y < windowHeight/4){
        switch(rand){
          case 0:{
            back.scale = 3;
            player.y  = height;
            player.x = width/2 +50;
            player.scale = 1;
            break;
          }
          case 1:{
            back.scale = 3;
            player.y  = height- 100;
            player.x = width/2 +30;
            break;
          }
          case 2:{
            back.scale = 2.39;
            player.y  = height- 100;
            player.x = width/2 - 150;
            player.scale = 1;
            //keyGroup.pointToEach(width/4 - 400,height/4);
            break;
          }
          
          case 3:{
            back.scale = 1.13;
            player.y  = height- 100;
            player.x = width/2 + 50;
            player.scale = 1.2;
            break;
          }
        }
        
        back.addImage(roomArray[2]);

        console.log(rand);
      }
      

      spawnGhost();
      spawnLady();
    }
    
  drawSprites();
}

function spawnKey(){
  if(frameCount % 100 === 0){
    key = createSprite(width/2, height/4);
    key.addImage(keyImg);
    key.scale = 0.2;
    key.lifetime = 40;
    //keyGroup.add(key);
  }
}
