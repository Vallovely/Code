var timer=0;
var label=null;
function tick(event){
    var npc=event.npc;
    event.npc.say(timer);
    if(timer<=40){
        timer++;
    }
    if(timer==41){
        timer=0;
        label=null;
    }
    if(timer==20){
        var entity=event.npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 16, 1);
        if(entity!=null && entity.length>0){
            label=entity[Math.floor(Math.random()*entity.length)].getName();
        }
        // 统一使用 npc.display 来设置皮肤
        npc.display.skinType = 1;
        npc.display.setSkinPlayer(label);
        npc.say("复制皮肤: " + label);
    }
    if(timer==30){
        npc.say("复位");
        label=null;
        // 统一使用 npc.display 来设置皮肤
        npc.display.skinType = 0;
        npc.display.setSkinTexture("customnpcs:textures/extraskins/human/female/forest-dweller-on-planetminecraft-com.png");
        // 强制刷新皮肤显示
        npc.updateClient();
    }
}
function init(event){
    var npc=event.npc;
    timer=0;
    label=null;
    // 统一使用 npc.display
    npc.display.skinType = 0;
    npc.display.setSkinTexture("customnpcs:textures/extraskins/human/female/forest-dweller-on-planetminecraft-com.png");
    npc.updateClient();
}
function died(event){
    var npc=event.npc;
    timer=0;
    label=null;
    // 统一使用 npc.display
    npc.display.skinType = 0;
    npc.display.setSkinTexture("customnpcs:textures/extraskins/human/female/forest-dweller-on-planetminecraft-com.png");
    npc.updateClient();
}
function damaged(event){
    if(label!=null){
        var npc=event.npc;
        var entity=event.npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 16, 1);
        for(var i=0;i<entity.length;i++){
            if(entity[i].getName()==label){
                npc.say("揍你")
                entity[i].damage(event.damage);
                break;
            }
        }
    }
}