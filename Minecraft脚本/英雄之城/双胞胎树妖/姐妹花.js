//曼珠
var shutHealth = 1200;
var tell = 0;
function damaged(event){
    var npc=event.npc
    var entity=npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 8, 2);//0玩家和npc 1玩家 2npc 不是垂直高度
    var npcshut = false;
    var healthshut = true;
    var finalshut = false;
    for(var i=0;i<entity.length;i++){
        if(entity[i].getName()=='[首领]沙华树妖'){
            npcshut = true;
            if(entity[i].getHealth()>shutHealth){
                healthshut = true;
            }else{
                healthshut = false;
            }
        }
    }
    if(npc.getHealth()>shutHealth){
        if(npcshut==false){
            finalshut = true
        }
    }
    if(npc.getHealth()<=shutHealth){
        if(npcshut==true){
            if(healthshut==false){
                finalshut = true;
            }
        }
    }
    if(finalshut!=true){
        event.damage=0;
    }
}
function tick(event){
    if(tell==0&&event.npc.getHealth()<=shutHealth){
        var npc=event.npc;
        var entity=npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 16, 1);
        try{
            for(var i=0;i<entity.length;i++){
                npc.executeCommand('title ' + entity[i].getName() + ' title {"text":" "}');
                npc.executeCommand('title ' + entity[i].getName() + ' subtitle {"text":"沙华对曼珠的共鸣增强了！","color":"red"}');
            }
        }catch(e){
        }
        tell=1;
    }
    if(tell==1&&event.npc.getHealth()>shutHealth){
        tell=0;
    }
}
function init(event){
    tell=0;
}



//沙华
var shutHealth = 1200;
var tell = 0;
function damaged(event){
    var npc=event.npc
    var entity=npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 8, 2);//0玩家和npc 1玩家 2npc 不是垂直高度
    var npcshut = false;
    var healthshut = true;
    var finalshut = false;
    for(var i=0;i<entity.length;i++){
        if(entity[i].getName()=='[首领]曼珠树妖'){
            npcshut = true;
            if(entity[i].getHealth()>shutHealth){
                healthshut = true;
            }else{
                healthshut = false;
            }
        }
    }
    if(npc.getHealth()>shutHealth){
        if(npcshut==true){
            finalshut = true
        }
    }
    if(npc.getHealth()<=shutHealth){
        if(npcshut==true){
            if(healthshut==false){
                finalshut = true;
            }
        }
    }
    if(finalshut!=true){
        event.damage=0;
    }
}
function tick(event){
    if(tell==0&&event.npc.getHealth()<=shutHealth){
        var npc=event.npc;
        var entity=npc.getWorld().getNearbyEntities(npc.getX(), npc.getY(), npc.getZ(), 16, 1);
        try{
            for(var i=0;i<entity.length;i++){
                npc.executeCommand('title ' + entity[i].getName() + ' title {"text":" "}');
                npc.executeCommand('title ' + entity[i].getName() + ' subtitle {"text":"曼珠对沙华的共鸣增强了！","color":"red"}');
            }
        }catch(e){
        }
        tell=1;
    }
    if(tell==1&&event.npc.getHealth()>shutHealth){
        tell=0;
    }
}
function init(event){
    tell=0;
}
