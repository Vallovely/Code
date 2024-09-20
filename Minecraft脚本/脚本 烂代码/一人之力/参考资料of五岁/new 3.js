item=player.getHeldItem();
if(item!=null){
	itnm=item.getDisplayName();
	itsz=item.getStackSize();
	if(itnm=="§b§l强化核心石"){
		upitem=player.getInventory()[1];
		if(upitem!=null){
			uinm=upitem.getDisplayName();
			if(uinm.indexOf("斗铠")>-1){
				haveplayer=upitem.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore").func_150307_f(0);
				haveplayer=haveplayer.replace("§c§l斗铠所属者:","")
				if(haveplayer==""){
					setItemLore(upitem,0,"§c§l斗铠所属者:§a§l"+player.getName())
				}
				if(haveplayer=="§a§l"+player.getName()){
					lore=item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore").func_150307_f(0);
					lv=getNumber(lore)
					lvl=getNumber(upitem.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore").func_150307_f(5))
					da=getNumber(upitem.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore").func_150307_f(3))
					he=getNumber(upitem.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore").func_150307_f(4))
					if(lv==15&&lvl<5){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,25);
						up(upitem,2,60);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+25))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+60))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
					}
					if(lv==610&&lvl<10&&lvl>=5){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,30);
						up(upitem,2,70);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+30))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+70))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
						
					}
					if(lv==1115&&lvl<15&&lvl>=10){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,35);
						up(upitem,2,80);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+35))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+80))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
						
					}
					if(lv==1620&&lvl<20&&lvl>=15){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,40);
						up(upitem,2,90);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+40))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+90))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
					
					}
					if(lv==2125&&lvl<25&&lvl>=20){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,50);
						up(upitem,2,120);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+50))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+120))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
						
					}
					if(lv==2630&&lvl<30&&lvl>=25){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,60);
						up(upitem,2,140);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+60))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+140))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
						
					}
					if(lv==3135&&lvl<35&&lvl>=30){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,70);
						up(upitem,2,160);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+70))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+160))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
						
					}
					if(lv==3640&&lvl<40&&lvl>=35){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,80);
						up(upitem,2,200);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+80))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+200))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
					
					}
					if(lv==4145&&lvl<45&&lvl>=40){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,90);
						up(upitem,2,220);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+90))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+220))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
						
					}
					if(lv==4650&&lvl<50&&lvl>=45){
						if(itsz!=1){
							item.setStackSize(itsz-1);
						}else{
							player.setHeldItem(null);
						}
						up(upitem,1,100);
						up(upitem,2,250);
						setItemLore(upitem,3,"§6§l攻击伤害: +"+(da+100))
						setItemLore(upitem,4,"§a§l最大生命: +"+(he+250))
						setItemLore(upitem,5,"§b§l强化等级: §f§l"+(lvl+1))
						player.sendMessage("&a[提示]&f强化成功")
						
					}
				}
			}
		}
	}
}
function setItemLore(item,line,lore){
try{
NBTTagString=Java.type("net.minecraft.nbt.NBTTagString")
loreList=item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore")
loreList.func_150304_a(line,new NBTTagString(lore))
}catch(err){print("在操作lore发生异常,可能是因为没有lore 请将报错提供给作者:"+err)	}
//修改物品lore某一行
/*
*ScriptItemStack item:要修改lore的物品
*int line:要修改lore的行数
*String lore:替换原来lore的lore
*/
}//item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore").func_74745_c();
function getNumber(string){
 var string1 = string.replace(/§[0-9]/g,"")
 return Number(string1.replace(/[^0-9]/ig,""))
}
function getAttributeModifiers(item){
var SharedMonsterAttributes=Java.type("net.minecraft.entity.SharedMonsterAttributes");
var nbt;
var nbtlist;
var attributeModifiers=[];
this.AttributeModifier=function(attributeModifier,attributeName){
     this.attributeModifier=attributeModifier;
     this.attributeName=attributeName;
     this.getID=function(){
      return this.attributeModifier.func_111167_a();
     }
     this.getName=function(){
      return this.attributeModifier.func_111166_b();
     }
     this.getAttributeName=function(){
     return this.attributeName;
     }
     this.getAmount=function(){
      return this.attributeModifier.func_111164_d();
     }
     this.getOperation=function(){
      return this.attributeModifier.func_111169_c();
     }
     this.toString=function(){
      return this.attributeName+":"+this.attributeModifier;
     }
    /*
    *UUID getID():获取属性UUID
    *String getName():获取名字
    *String getAttributeName():获取属性名字
    *double getAmount():获取属性的值
    *int getOperation():获取属性的Operation
    */
    }
nbt=item.getMCItemStack().field_77990_d;
    if(nbt==null){
     return;
    }
nbtlist=nbt.func_150295_c("AttributeModifiers",10);
    for(var i=0;i<nbtlist.func_74745_c();i++){
     attributeModifiers[i]=new this.AttributeModifier(SharedMonsterAttributes.func_111259_a(nbtlist.func_150305_b(i)),
     nbtlist.func_150305_b(i).func_74779_i("AttributeName"));
    }
return attributeModifiers;
/*
*为物品添加属性
*ScriptItemStack item:要获取属性(全部)的物品
*返回
*getAttributeModifiers.AttributeModifier[] attributeModifiers:属性数组
*/
}
function getAmount(item,name){
var shuxing=getAttributeModifiers(item)
for(x in shuxing){
if(shuxing[x].getAttributeName()==name){
var amount = shuxing[x].getAmount()
return amount
}
}
return 0
}
function up(Item,type,value){
if (type == "1"){
type ="generic.attackDamage"
}
if (type == "2"){
type ="generic.maxHealth"
}
if (type == "3"){
type ="generic.movementSpeed"
}
if (type == "4"){
type ="generic.knockbackResistance"
}
var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound")
    var itemStack = Item.getMCItemStack();
    var root = itemStack.field_77990_d;
    if (root == null) {
          root = new NBTTagCompound();
    }
    var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
	var tagCompound=attributeModifiers.func_74745_c();
	for(x=0;x<tagCompound;x++){
	s=attributeModifiers.func_150305_b(x);
	if(s.func_74779_i("AttributeName")==type&&s.func_74779_i("Operation")==0){
	var newvalue=s.func_74769_h("Amount")+Number(value);
	s.func_74780_a("Amount",newvalue)
	}
	}
}