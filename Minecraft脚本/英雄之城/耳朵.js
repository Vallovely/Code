var timer = 0;//计数器
var extend = 1;//技能威力
function init(event){
    timer = 0;
    extend = 1;
}
function damage(event){
    if(event.npc.getHealth() < event.npc.getMaxHealth() * 0.66){
        extend = 2;
    }else if(event.npc.getHealth() < event.npc.getMaxHealth() * 0.33){
        extend = 3;
    }
}
function tick(event){
    npc=event.npc;
    if(timer <= 49){
        timer++;
    }
    if(timer == 20){
        //提醒释放技能
    }
    if(timer == 26){//每20个tick约10s执行一次
        //提示技能已释放
        var players = npc.getWorld().getNearbyPlayers(npc.getX(), npc.getY(), npc.getZ(), 10, 0),
            nx=npc.getX(),
            ny=npc.getY(),
            nz=npc.getZ();
        //对附近玩家造成伤害
        for(var i=0;i<players.length;i++){
            npc.setPosition(nx, ny+1, nz);
        }
    }
    if(timer == 50){
        timer = 0;
    }
}
function die(event){
    timer = 0;
    extend = 1;
}