//绿色瘴气
var i = 0;
function tick(event) {
    if (i <= 20) {
        event.npc.setHealth(event.npc.getHealth()-event.npc.getMaxHealth()/20)
        i++;
    }
    if (i > 20) {
        i = 0;
        event.npc.despawn();
    }
}
function init(e){
    e.npc.setHealth(e.npc.getMaxHealth());
    e.npc.setMotionY(-1.1);
    i=0;
}
function collide(e){
    var npc=e.npc;
    var entity=npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 2, 1);
    if(e.entity.getType()==1){
        for(var i=0;i<entity.length;i++){
            entity[i].damage(5);
            entity[i].addPotionEffect(19,5,0,true);//中毒
            entity[i].getTempdata().put('greenPosion',10)
        }
        npc.despawn()
    }
}
//紫色瘴气
var i = 0;
function tick(event) {
    if (i <= 20) {
        event.npc.setHealth(event.npc.getHealth()-event.npc.getMaxHealth()/20)
        i++;
    }
    if (i > 20) {
        i = 0;
        event.npc.despawn();
    }
}
function init(e){
    e.npc.setHealth(e.npc.getMaxHealth());
    e.npc.setMotionY(-1.1);
    i=0
}
function collide(e){
    var npc=e.npc;
    var entity=npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 2, 1);
    if(e.entity.getType==1){
        for(var i=0;i<entity.length;i++){
            entity[i].addPotionEffect(15,5,0,true)
            entity[i].damage(10);
            entity[i].getTempdata().put('purplePosion',10)
        }
        npc.despawn()
    }
}
//母体
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
    if(timer ==241){
        timer=0
    }
    if(timer % 24==0){
        var entity=event.npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 16, 1);
        for(var i=0;i<entity.length;i++){
            event.npc.getWorld().spawnClone(entity[i].x, entity[i].y+8, entity[i].z, 4, '绿色瘴气');
        }
    }
    if((timer+12) % 24==0){
        var entity=event.npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 16, 1);
        for(var i=0;i<entity.length;i++){
            event.npc.getWorld().spawnClone(entity[i].x, entity[i].y+8, entity[i].z, 4, '紫色瘴气');
        }
    }
}
function init(event){
    timer = 0;
}
function die(event){
    timer = 0;
}