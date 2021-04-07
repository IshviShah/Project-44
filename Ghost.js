function spawnGhost(){
    if(frameCount %800 === 0){
        ghost = createSprite(Math.round(random(windowWidth/4,windowWidth-100)),Math.round(random(windowHeight/4,windowHeight-100)));
        var rand = Math.round(random(0,2));
        if(rand === 0 ){
            ghost.scale = 1.5;
        }
        else if(rand === 1 ){
            ghost.scale = 2;
        }
        ghost.addImage(ghostArray[rand]);
        ghostGroup.add(ghost);
        ghost.lifetime = 100;
    }

}
function spawnLady(){
    if(frameCount %900 === 0){
        lady = createSprite(Math.round(random(windowWidth/4,windowWidth-100)),Math.round(random(windowHeight/4,windowHeight-100))); 
        lady.addImage(ghostImg4);
        ladyGroup.add(lady);
    }
}

