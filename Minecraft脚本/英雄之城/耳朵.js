var timer = 0;//计数器
var extend = 1;//技能威力
function init(event){
    timer = 0;
    extend = 1;
}
function damage(event){
    if(event.npc.getHealth() < event.npc.getMaxHealth() * 0.75){
        extend = 2;
    }else if(event.npc.getHealth() < event.npc.getMaxHealth() * 0.5){
        extend = 3;
    }else if(event.npc.getHealth() < event.npc.getMaxHealth() * 0.25){
        extend = 4;
    }
}
function tick(event){
    n=event.npc;
    timer++;
    if(timer >= 20){//每20个tick约10s执行一次
        /*
        大概是不允许
        */
    }
}
function die(event){
    timer = 0;
    extend = 1;
}