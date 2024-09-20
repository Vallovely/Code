var aP=world.getAllServerPlayers()
for(i in aP){
	for(var X=1;X<=100;X++){
		upLevel(aP[i],X,X,10,4,1,1,5);
	}
	for(var X=101;X<=300;X++){
		upLevel(aP[i],X,X,30,8,2,2,8);
	}
}
function upLevel(entity,minecraftExperienceLevel,definedLevel,upAttack,upHealth,upDefence,upDefencePenetration,upPoints){
	if(entity.getExpLevel()>=minecraftExperienceLevel&&Number(entity.getStoredData("DLVL"))==definedLevel-1){
		if(entity.getArmor(3)!=null){
			if(entity.getArmor(3).getDisplayName()=="还没想好"){
			    updateAttr(entity.getArmor(3),1,upHealth,0);//生命给予
				updateAttr(entity.getArmor(3),2,upAttack,0);//攻击给予    
			    entity.setStoredData("DPP",Number(entity.getStoredData("DPP"))+upDefencePenetration);//护甲给予
				entity.setStoredData("PDEF",Number(entity.getStoredData("PDEF"))+upDefence);//穿甲给予	    		    
				entity.setStoredData("DLVL",Number(entity.getStoredData("DLVL"))+1);//计分等级设置
		     	entity.sendMessage("§d§m§l-----]§r§m§l------------------§b§l[系统信息]§r§m§l------------------§d§m§l[-----")
				entity.sendMessage("§7§l[§e§l♔§7§l]§e§l等级提升§r§l[§e§l"+(Number(entity.getStoredData("DLVL"))-1)+"§r§l]§7§l>>>>>>>>>>§r§l[§e§l"+Number(entity.getStoredData("DLVL"))+"§r§l]");
				entity.sendMessage("§7§l[§a§lღ§7§l]§a§l基础生命§r§l[§a§l"+Number(healthCalculator(definedLevel-1))+"§r§l]§7§l>>>>>>>>>>§r§l[§a§l"+Number(healthCalculator(definedLevel))+"§r§l]");
				entity.sendMessage("§7§l[§c§l†§7§l]§c§l基础攻击§r§l[§c§l"+Number(attackCalculator(definedLevel-1))+"§r§l]§7§l>>>>>>>>>>§r§l[§c§l"+Number(attackCalculator(definedLevel))+"§r§l]");
				entity.sendMessage("§7§l[§b§l♒§7§l]§b§l基础护甲§r§l[§b§l"+Number(defenceCalculator(definedLevel-1))+"§r§l]§7§l>>>>>>>>>>§r§l[§b§l"+Number(defenceCalculator(definedLevel))+"§r§l]");
				entity.sendMessage("§7§l[§d§l☈§7§l]§d§l基础穿甲§r§l[§d§l"+Number(defencePenetrationCalculator(definedLevel-1))+"§r§l]§7§l>>>>>>>>>>§r§l[§d§l"+Number(defencePenetrationCalculator(definedLevel))+"§r§l]");
				entity.sendMessage("§7§l[§6§l*§7§l]§6§l属性点数§r§l[§6§l"+Number(entity.getStoredData("POINTS"))+"§r§l]§7§l>>>>>>>>>>§r§l[§6§l"+(Number(entity.getStoredData("POINTS"))+pointsCalculator(definedLevel))+"§r§l]");
				entity.setStoredData("POINTS",Number(entity.getStoredData("POINTS"))+upPoints);//点数增加
				entity.setHealth(entity.getMaxHealth());//回满血
		    }else{
			    entity.sendMessage("§b§l[系统]§r§l你已满足升级条件，请将§d§l还没想好§r§l穿戴于盔甲栏中");
		    }//必要条件3
		}else{
			entity.sendMessage("§b§l[系统]§r§l你已满足升级条件，请将§d§l还没想好§r§l穿戴于盔甲栏中");
		}//必要条件2
	}//必要条件1
}
function updateAttr(item, type, value, operation)
{
	if (value == 0) { return; }
	if (type == 1) { type = "generic.attackDamage"; }
	else if (type == 2) { type = "generic.maxHealth"; }
	else if (type == 3) { type = "generic.movementSpeed"; }
	else if (type == 4) { type = "generic.knockbackResistance"; }
	var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
	var itemStack = item.getMCItemStack();
	var root = itemStack.field_77990_d;
	if (root == null) { root = new NBTTagCompound(); }
	var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
	var tagCompound = attributeModifiers.func_74745_c();
	for (var i = 0; i <= tagCompound; i++)
	{
		s = attributeModifiers.func_150305_b(i);
		if (i == tagCompound)
		{
			add(item, type, value, operation);
			break;
		}
		if (s.func_74779_i("AttributeName") == type && s.func_74762_e("Operation") == operation)
		{
			var newvalue = s.func_74769_h("Amount") + Number(value);
			s.func_74780_a("Amount", newvalue);
			break;
		}
	}
	return;
}
function add(item, attribute, amount, operation)
{
	var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
	var UUID = Java.type("java.util.UUID");
	var itemStack = item.getMCItemStack();
	var root = itemStack.field_77990_d;
	if (root == null)
	{
		root = new NBTTagCompound();
	}
	var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
	var attributeModifier = new NBTTagCompound();
	var uuid = UUID.randomUUID();
	attributeModifier.func_74778_a("AttributeName", attribute);
	attributeModifier.func_74778_a("Name", "My Modifier");
	attributeModifier.func_74780_a("Amount", amount);
	attributeModifier.func_74768_a("Operation", operation);
	attributeModifier.func_74772_a("UUIDMost", uuid.getMostSignificantBits());
	attributeModifier.func_74772_a("UUIDLeast", uuid.getLeastSignificantBits());
	attributeModifiers.func_74742_a(attributeModifier);
	root.func_74782_a("AttributeModifiers", attributeModifiers);
	itemStack.field_77990_d = root;
	return;
}
//在玩家中,0为靴子,1为裤子,2为胸甲,3为头盔

function healthCalculator(definedLevel){
	if(Number(definedLevel)<=100){
		return definedLevel*10;
	}//1-100级 +10[1000]
	else if(Number(definedLevel)<=300){
		return (definedLevel-100)*30+1000;
	}//101-300级 +30[1000/7000]
}
//生命计算器
function attackCalculator(definedLevel){
	if(Number(definedLevel)<=100){
		return definedLevel*4;
	}//1-100级 +4[400]
	else if(Number(definedLevel)<=300){
		return (definedLevel-100)*8+400;
	}//101-300级 +8[1600/2000]
}
//攻击计算器
function defenceCalculator(definedLevel){
	if(Number(definedLevel)<=100){
		return definedLevel*1;
	}//1-100级 +1[100]
	else if(Number(definedLevel)<=300){
		return (definedLevel-100)*2+100;
	}//101-300级 +2[400/500]
}
//护甲计算器
function defencePenetrationCalculator(definedLevel){
	if(Number(definedLevel)<=100){
		return definedLevel*1;
	}//1-100级 +1[100]
	else if(Number(definedLevel)<=300){
		return (definedLevel-100)*2+100;
	}//101-300级 +2[400/500]
}
//穿甲计算器
function pointsCalculator(definedLevel){
	if(Number(definedLevel)<=100){
		return 5;
	}
	else if(Number(definedLevel)<=300){
		return 8;
	}
}
/**
*@Author Vallovely
*著作权属于Vallovely 2022/1/27起生效
**/