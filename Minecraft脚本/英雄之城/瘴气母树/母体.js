var timer = 0;
function tick(event){
    var npc=event.npc;
    var entity=event.npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 16, 1);
    if(entity == null || entity.length == 0){
        timer = 0;
        return;
    }
    if(timer <= 240){
        timer++;
    }
    if(timer < 230){
        if(timer % 22==0){
            for(var i=0;i<entity.length;i++){
                event.npc.getWorld().spawnClone(entity[i].x, entity[i].y+8, entity[i].z, 4, '绿色瘴气');
            }
        }
        if((timer+11) % 22==0){
            for(var i=0;i<entity.length;i++){
                event.npc.getWorld().spawnClone(entity[i].x, entity[i].y+8, entity[i].z, 4, '紫色瘴气');
            }
        }
    }
    if(timer >= 230&&timer < 241){
        if(timer == 230){
            try{
                for(var i=0;i<entity.length;i++){
                    npc.executeCommand('title ' + entity[i].getName() + ' title {"text":" "}');
                    npc.executeCommand('title ' + entity[i].getName() + ' subtitle {"text":"大量瘴气即将掉落！","color":"red"}');
                }
            }catch(e){
            }
        }
        if((timer-230)%4==0){
            for(var i=0;i<entity.length;i++){
                event.npc.getWorld().spawnClone(entity[i].x, entity[i].y+8, entity[i].z, 4, '绿色瘴气');
            }
        }
        if((timer-230)%4==2){
            for(var i=0;i<entity.length;i++){
                event.npc.getWorld().spawnClone(entity[i].x, entity[i].y+8, entity[i].z, 4, '紫色瘴气');
            }
        }
    }
    if(timer == 241){
        timer=0
    }
}
function init(event){
    timer = 0;
}
function die(event){
    timer = 0;
}