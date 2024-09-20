/*要求 
npc生命值低于15%时受击有15概率随机对玩家造成5%/10/15%npc以损生命值的伤害并附加击退2效果
上述伤害在3格范围内产生40%-60%的溅射伤害
*/
//伤害hook
var a=Math.random()
if(isHealthLow(npc)==true&&a<=0.15){
	var delta=Math.random()*3;
	    base=npc.getMaxHealth()-npc.getHealth();
   	for(var	delta2=Math.random();delta2<0.4||delta2>0.6;){
		delta2=Math.random();
	}
	if(delta<1){
		damage(event.getSource(),base*0.05);
		damageOutRange(event.getSource(),3,base*0.05*delta2);
	}
	else if(delta<2){
		damage(event.getSource(),base*0.10);
		damageOutRange(event.getSource(),3,base*0.10*delta2);
	}
    else if(delta<3){
		damage(event.getSource(),base*0.15);
		damageOutRange(event.getSource(),3,base*0.15*delta2);
	}
}
function isHealthLow(entity){
	if(entity.getHealth()<=entity.getMaxHealth()*0.15){
		return true;
	}else{
		return false;
	}
}
function damage(entity,ammonut){
	entity.setHealth(Math.max(1,entity.getHealth()-ammonut));
}
function damageOutRange(entity,range,ammonut){
	var aE=entity.getSurroundingEntities(range,1);
	for(i in aE){
		if(aE[i]!=npc){
			damage(aE[i],ammonut);
		}
	}
}