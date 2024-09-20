//运行hook 计分板注册
if(npc.getTitle()!="§f§l已激活"){
	npc.executeCommand("/scoreboard objectives add mhp dummy")//maxHealth 最大生命
	npc.executeCommand("/scoreboard objectives add dmg dummy")//damage 攻击伤害
	npc.executeCommand("/scoreboard objectives add wlp dummy")//willPower 意志强度
	npc.executeCommand("/scoreboard objectives add def dummy")//defence 受击护甲
	npc.executeCommand("/scoreboard objectives add drl dummy")//drainLife-Ratio 吸血倍率(‰)
	npc.executeCommand("/scoreboard objectives add crt dummy")//critical-Rate 暴击概率(‰)
	npc.setTitle("§f§l已激活")
}
//更新hook 属性更新 前置functions: getAttr , sum , getLore
var apl=world.getAllServerPlayers()
for(i in apl){
	var mhp=0,dmg=0,wlp=0,def=0,drl=0,crt=0
	if(apl[i].getHeldItem()!=null&&apl[i].isSneaking()==true&&apl[i].getHeldItem().getDisplayName().indexOf("[主]")!=-1){	
		if(apl[i].getInventory()[1]!=null&&apl[i].getInventory()[1].getDisplayName().indexOf("[副]")!=-1){
			for(var j=0;j<3;j++){
			    if(apl[i].getArmor[j]!=null){
					if(getAttr(apl[i].getArmor[j],"等级限制 +")<=未完成判据1){
						mhp+=sum(getAttr(apl[i].getArmor[j],"最大生命 +"))
			        	dmg+=sum(getAttr(apl[i].getArmor[j],"攻击伤害 +"))
			        	wlp+=sum(getAttr(apl[i].getArmor[j],"意志强度 +"))
			        	def+=sum(getAttr(apl[i].getArmor[j],"受击护甲 +"))
			        	drl+=sum(getAttr(apl[i].getArmor[j],"吸血倍率(‰) +"))
			    	    crt+=sum(getAttr(apl[i].getArmor[j],"暴击概率(‰) +"))		
					}else{
						apl[i].sendMessage("§f§l你未达到穿戴"+apl[i].getArmor[j].getDisplayName()+"§f§l的等级")
					}						
			    }
	    	}
			//护甲属性获取
			//主武器属性获取
			//副手属性获取
			npc.executeCommand("/scoreboard players set "+apl[i].getName()+" mhp "+mhp)
		    npc.executeCommand("/scoreboard players set "+apl[i].getName()+" dmh "+dmh)
	    	npc.executeCommand("/scoreboard players set "+apl[i].getName()+" wlp "+wlp)
	    	npc.executeCommand("/scoreboard players set "+apl[i].getName()+" def "+def)
	    	npc.executeCommand("/scoreboard players set "+apl[i].getName()+" drl "+drl)
	    	npc.executeCommand("/scoreboard players set "+apl[i].getName()+" crt "+crt)
		}else{
			apl[i].sendMessage("§f§l请将副武器置于物品栏第二格")
		}//副手位置判定		
	}//行为判定：属性更新
}

function getAttr(item,attr){
	if(item!=null){
	var arr = new Array
	for(var i=0;getLore(item,i)!=undefined;i=i+1){
		if(getLore(item,i).indexOf(attr)!=-1){
			var delta=getLore(item,i).indexOf(attr);
			var Attr=getLore(item,i).slice(delta+attr.length);
			arr.push(Attr);
		};
	};
	return arr;
	}
	//获取属性值
    /*
    *ScriptItemStack item:被操作的物品
    *str atr:属性名
    */
}

function sum(array){
	var sum=0;
	for(var i=0;i<array.length;i++){
		if(Number(array[i])!=NaN){
			sum+=array[i];
		}else{
			continue;
		}
	}
	return Number(sum);
};
//数组求和


function updateAttr(item,type,value,operation)
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
function setLore(item,line,lore)
{
	try
	{
		var NBTTagString=Java.type("net.minecraft.nbt.NBTTagString")
		loreList=item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore")
		loreList.func_150304_a(line,new NBTTagString(lore))
	}
	catch(err)
	{
		print("在操作lore发生异常,可能是因为没有lore 请将报错提供给作者:"+err)
	}
	//修改物品lore某一行
	/*
	*ScriptItemStack item:要修改lore的物品
	*int line:要修改lore的行数
	*String lore:替换原来lore的lore
	*/
}
function addLore(item,lore)
{
	var NBTTagCompound=Java.type("net.minecraft.nbt.NBTTagCompound")
	var NBTTagList=Java.type("net.minecraft.nbt.NBTTagList")
	var NBTTagString=Java.type("net.minecraft.nbt.NBTTagString")
	nbt=item.getMCItemStack().field_77990_d;
	if(nbt==null)
	{
		nbt=new NBTTagCompound();
	}
	if(nbt.func_74775_l("display")=="{}")
	{
		displayTag=new NBTTagCompound();
		nbt.func_74782_a("display",displayTag);
	}
	if(nbt.func_74775_l("display").func_74781_a("Lore")==null)
	{
		loreList=new NBTTagList();
		nbt.func_74775_l("display").func_74782_a("Lore",loreList);
	}
	item.getMCItemStack().field_77990_d=nbt;
	loreList=item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore")
	loreList.func_74742_a(new NBTTagString(lore))
	//为物品增加lore
	/*
	*ScriptItemStack item:要增加lore的物品
	*String lore:要增加的lore
	*/
}
//添加lore
function getLore(item,line){
  var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
  Item=item.getMCItemStack();
  var nbt=Item.field_77990_d;
  if(nbt==null){
  return -1
  };
  if(nbt.func_74775_l("display")!==null){
  var loreLength=nbt.func_74775_l("display").func_150295_c("Lore",8).func_74745_c();
  if(line<=loreLength){
  var lore=nbt.func_74775_l("display").func_150295_c("Lore",8).func_150307_f(line)
  return lore
  }}else{
  return -1
  }}
//获取某一行的lore内容