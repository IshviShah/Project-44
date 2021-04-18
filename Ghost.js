function spawnGhost(){
    if(frameCount %700 === 0){
        ghost = createSprite(Math.round(random(windowWidth/4,windowWidth-100)),Math.round(random(windowHeight/4,windowHeight-100)));
        var rand = Math.round(random(0,2));
        if(rand === 0 ){
            ghost.scale = 2;
        }
        else if(rand === 1 ){
            ghost.scale = 2.5;
        }
        ghost.addImage(ghostArray[rand]);
        ghostGroup.add(ghost);
        ghost.lifetime = 100;
        ghostSound.play();
    }

}
function spawnLady(){
    if(frameCount % 100 === 0){
        lady = createSprite(Math.round(random(windowWidth/8,windowWidth/3-100)),Math.round(random(windowHeight/3,windowHeight-100))); 
        lady.addImage(ghostImg4);
        ladySound.play();
        lady.scale = 0.7;
        lady.velocityX = 2;
        lady.lifetime = 160;
        ladyGroup.add(lady);
    }
}

