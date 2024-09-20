//对话hook
setArmor("§d§l[虚弱常规神]球形神祇",20);
setArmor("§d§l[标准常规神]雨形神祇",30);
setArmor("§d§l[标准常规神]雾形神祇",40);
setArmor("§d§l[全盛常规神]滞空形神祇",80);
setArmor("§d§l[虚弱危险神]刺突形神祇",160);
function setArmor(entityName,entityExpectedArmor){
	var aE=npc.getSurroundingEntities(16,2);
	try{
		for(i in aE){
			if(aE[i].getName()==entityName){
			aE[i].setStoredData("DEF",entityExpectedArmor);
			aE[i].setStoredData("NAME",entityName);
			aE[i].setTitle("§d§l护甲值"+entityExpectedArmor+"§r")
			player.sendMessage("§b§l[系统]§r§l已设置"+entityName+"§r§l的护甲值为§d§l"+entityExpectedArmor);
		    }else{
				player.sendMessage("§b§l[系统]§r§l未发现符合实体");
			}
		}
	}catch(err){
		player.sendMessage("§b§l[系统]§r§lBUG报错"+err);
	}
}
/**
*@Author Vallovely
*著作权属于Vallovely 2022/1/27起生效
**/

/*无用的
var aE=npc.getSurroundingEntities(1,1);
for(i in aE){
	aE[i].setHealth(Math.max(1,aE[i].getHealth()-aE[i].getMaxHealth()*0.01));
	npc.setStoredData("DCT",Number(npc.getStoredData("DCT"))+1);
	if(npc.getStoredData("DCT")==1){
		aE[i].sendMessage("§b§l[系统]§r§l距离"+npc.getName()+"§r§l过近,每秒生命值受损§d§l5/100")
	}
	if(npc.getStoredData("DCT")==15){
		npc.setStoredData("DCT",0)
	}
}
*/
/**
*@Author Vallovely
*著作权属于Vallovely 2022/1/27起生效
**/