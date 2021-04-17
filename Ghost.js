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
var keyImg, key1=0, keyGroup;
var keyCount = 0;
var roomArray;
var ghostSound, ladySound, openingSound;



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
  room4Img = loadImage("Images/room4.jpeg");
  keyImg = loadImage("Images/key.png");
  stair2Img = loadImage("Images/stair2.jpeg");

  ghostSound = loadSound("ghost.mp3");
  ladySound = loadSound("lady.mp3");
  openingSound = loadSound("opening.mp3");


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
  keyGroup = createGroup();

  ghostArray = [ghostImg1,ghostImg2,ghostImg3];
  roomArray = [room1Img,room2Img,room3Img,stair2Img,room4Img];
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
  text("1. You have to collect three keys \n by touching them and exit the house.\n2. Do not let the lady ghost touch you.\n 3. Use ↑ and ↓ to move the player.", width - 400, height - 350);

  
    if (mousePressedOver(start)) {
      back.visible = true;
      start.visible = false;
      player.visible = true;
      gameState = 0;
      openingSound.play();
    }

    if(gameState===0){
      spawnKey();

      if (keyIsDown(UP_ARROW)) {
        player.y = player.y - 2;
      }
      if (keyIsDown(DOWN_ARROW)) {
        player.y = player.y + 2;
      }
      //console.log(key1);
      if(frameCount>200){
        if(keyGroup.isTouching(player)){
          keyCount++;
          //console.log(keyCount);
          //key1.lifetime = 10;
          keyGroup.destroyEach();
        }
      }
      if(ladyGroup.isTouching(player)){
        gameState === 2;
        textFont('Georgia');
        text("GAME OVER",width / 2 - 200, height /2);
        /*player.destroy();
        keyGroup.destroyEach();
        ghostGroup.destroyEach();
        //ladyGroup.destroyEach();
        back.addImage(houseImg);*/
      }
      
      //if(player.y < windowHeight/4)

      //change room
      var rand = Math.round(random(0,4));
      //var rand = 2;
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
            if(keyGroup.size()>0){
              for(var i=0; i<keyGroup.length; i++){
                keyGroup.get(i).x =550;
                console.log(keyGroup.get(i).x);
              }
            }
            //key1.x = 550;
            break;
          }
          
          case 3:{
            back.scale = 1.13;
            player.y  = height- 100;
            player.x = width/2 + 50;
            player.scale = 1.2;
            if(keyGroup.size()>0){
              keyGroup.get(0).y =105;
             }
            //console.log(height/4);
            break;
          }

          case 4:{
            back.scale = 2.5;
            player.y  = height- 100;
            player.x = width/2 + 350;
            player.scale = 0.7;
            if(keyGroup.size()>0){
              keyGroup.get(0).x =1020;
             }
            //console.log(key1);
            
            break;
          }
        }
        
        back.addImage(roomArray[rand]);

       
      }
      

      spawnGhost();
      spawnLady();
      
    }
    
  drawSprites();

  if(gameState === 0){
    textSize(30);
    fill("orange")
    text("Keys Collected :  "+keyCount,width/4-300, height/5-100);

    
  }
  if(keyCount === 3){
    gameState = 1;
    textSize(95);
    textFont('Georgia');
    text("YOU WIN!",width / 2 - 200, height /2);
    player.destroy();
    keyGroup.destroyEach();
    ghostGroup.destroyEach();
    ladyGroup.destroyEach();
    back.addImage(houseImg);
  }
  
}

function spawnKey(){
  if(frameCount % 300 === 0){
    key1 = createSprite(width/2, height/4);
    //console.log("bj"+key1.x);
    key1.addImage(keyImg);
    key1.scale = 0.2;
    key1.lifetime = 80;
    //return key1;
    keyGroup.add(key1)
  }
}
