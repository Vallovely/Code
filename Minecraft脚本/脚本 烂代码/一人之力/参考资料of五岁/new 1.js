var b=player.getInventory()[0]
var s=player.getInventory()[1]

function isBroken(item){
	return isIncludingStr(item.getDisplayName(),"神骸碎片");
}
/**
function:是否为神骸碎片
item:被判断的item
**/

function isNeeded(item){
	return isIncludingStr(item.getDisplayName(),"神骸粘合剂");
}
/**
funciton:是否为神骸粘合剂
item:被判断的item
**/

function isNeededInNeed(item){
	if(player.getInventory()[1].getStackSize()>=needInNeed(item)){
		return true;
	}
}
/**
funciton:神骸粘合剂是否足够
item:被判断的神骸碎片
**/

function needInNeed(item){
	if(item.getDisplayName()==""){
		return 1;
	}
}
/**
funciton:定义神骸粘合剂所需数量
item:被判断的神骸碎片
**/

function getNumber(string){
 var doneStr = string.replace(/§[0-9]/g,"");
 return Number(doneStr.replace(/[^0-9]/ig,""));
}
/**
funciton:从字符串中获取所有数字
string:被执行的字符串
**/

function isItemNull(item){
	if(item==null){
		return true;
	}
}
/**
funciton:item是否为空 返回布尔值
item:
被判断的item
**/

funciton isIncludingStr(str,exIn){
	if(str.indexOf(exIn)!=-1){
		return true;
	}else{
		return false;
	}
}
/**
funciton：判断一个字符串中是否含一个字符串
str：被判断的字符串
exIn：所期望有的字符串
**/
function getLore(item, line) {
    var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
    Item = item.getMCItemStack();
    var nbt = Item.field_77990_d;
    if (nbt == null) {
        return -1;
    };
    if (nbt.func_74775_l("display") !== null) {
        var loreLength = nbt.func_74775_l("display").func_150295_c("Lore", 8).func_74745_c();
        if (line <= loreLength) {
            var lore = nbt.func_74775_l("display").func_150295_c("Lore", 8).func_150307_f(line)
            return lore
        }
    }
    else {
        return -1;
    }
    return -1;
}
function addItemLore(item, lore) {
    var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound")
    var NBTTagList = Java.type("net.minecraft.nbt.NBTTagList")
    var NBTTagString = Java.type("net.minecraft.nbt.NBTTagString")
    nbt = item.getMCItemStack().field_77990_d;
    if (nbt == null) {
        nbt = new NBTTagCompound();
    }
    if (nbt.func_74775_l("display") == "{}") {
        displayTag = new NBTTagCompound();
        nbt.func_74782_a("display", displayTag);
    }
    if (nbt.func_74775_l("display").func_74781_a("Lore") == null) {
        loreList = new NBTTagList();
        nbt.func_74775_l("display").func_74782_a("Lore", loreList);
    }
    item.getMCItemStack().field_77990_d = nbt;
    loreList = item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore")
    loreList.func_74742_a(new NBTTagString(lore))
    //为物品增加lore
    /*
    *ScriptItemStack item:要增加lore的物品
    *String lore:要增加的lore
    */
}
//使用说明npc
//对话hook
player.sendMessage("§r§l使用方法如下,请仔细阅读:")
player.sendMessage("§r§l1.将§d§l神骸碎片§r§l置于§d§l物品栏1§r§l,§d§l神骸粘合剂§r§l置于§d§l物品栏2")
player.sendMessage("§r§l2.右键§d§l复合仓§r§l放入材料,待§c§l岩浆§r§l消失后再次§d§l右键§r§l产出成品§c§l(请及时靠近拾取)")
player.sendMessage("§r§lPS:§r§l任何品级均为10碎片§a§l>>>§r§l1神骸,消耗粘合剂数量随品级递增")



//怪物修正
var aN=npc.getSurroundingEntities(16,2)
var aP=world.getAllServerPlayers()
for(i in aN){
aN[i].setMeleeSpeed(18)
aN[i].setKnockbackResistance(1.35)
aN[i].getMCEntity().stats.attackRange=6
}
