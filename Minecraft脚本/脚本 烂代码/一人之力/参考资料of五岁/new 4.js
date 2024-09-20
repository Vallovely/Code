//更新
var pls = world.getAllServerPlayers()
var io = new IONPC()
for(a in pls){
    var player = pls[a]
    var wuhun = player.getHeldItem()
    var n = player.getName()
    var dzzy = io.get("修炼增益")
    var level = getScore(n,"Soul_Level")
    var time1 = new Date().getTime()
    if(dzzy[player.name] == undefined){
        dzzy[player.name] = [0,0]
        io.set("修炼增益",dzzy)
    }
    if(dzzy[player.name][0] <= time1){
        dzzy[player.name][1] = 0
        io.set("修炼增益",dzzy)
    }
    if(wuhun !== null){
        var name = wuhun.getDisplayName()
        if(level == 0){
            if(name == "§d§l九宝琉璃塔"){
                if(getLore(wuhun,0)=="§c§l持有者:"){
                setscore(n,"attackDamage1",7)
                setscore(n,"attackDamage2",0)
                setscore(n,"maxHealth1",15)
                setscore(n,"maxHealth2",5)
                setscore(n,"Blood",0)
                setscore(n,"Blast",0)
                setscore(n,"Heal",3)
                setscore(n,"武魂特征码",2)
                setscore(n,"Soul_Level",1)
                setItemLore(wuhun,0,"§c§l持有者:"+n)
                setItemLore(wuhun,4,"§6§l攻击伤害: +"+getScore(n,"attackDamage1")+"");
                setItemLore(wuhun,5,"§4§l伤害加成: +"+getScore(n,"attackDamage2")+"%");
                setItemLore(wuhun,6,"§a§l最大生命: +"+getScore(n,"maxHealth1")+"");
                setItemLore(wuhun,7,"§2§l生命加成: +"+getScore(n,"maxHealth2")+"%");
                setItemLore(wuhun,8,"§c§l吸血概率: +"+getScore(n,"Blood")+"%");
                setItemLore(wuhun,9,"§d§l暴击概率: +"+getScore(n,"Blast")+"%");
                setItemLore(wuhun,10,"§b§l每秒回血: +"+getScore(n,"Heal")+"");
                player.sendMessage("§r§l你觉醒的武魂居然是"+name+"§r§l。")
            }
        }
            if(name == "§a§l蓝银皇"){
                if(getLore(wuhun,0)=="§c§l持有者:"){
                setscore(n,"attackDamage1",5)
                setscore(n,"attackDamage2",0)
                setscore(n,"maxHealth1",20)
                setscore(n,"maxHealth2",8)
                setscore(n,"Blood",0)
                setscore(n,"Blast",0)
                setscore(n,"Heal",5)
                setscore(n,"武魂特征码",3)
                setscore(n,"Soul_Level",1)
                setItemLore(wuhun,0,"§c§l持有者:"+n)
                setItemLore(wuhun,4,"§6§l攻击伤害: +"+getScore(n,"attackDamage1")+"");
                setItemLore(wuhun,5,"§4§l伤害加成: +"+getScore(n,"attackDamage2")+"%");
                setItemLore(wuhun,6,"§a§l最大生命: +"+getScore(n,"maxHealth1")+"");
                setItemLore(wuhun,7,"§2§l生命加成: +"+getScore(n,"maxHealth2")+"%");
                setItemLore(wuhun,8,"§c§l吸血概率: +"+getScore(n,"Blood")+"%");
                setItemLore(wuhun,9,"§d§l暴击概率: +"+getScore(n,"Blast")+"%");
                setItemLore(wuhun,10,"§b§l每秒回血: +"+getScore(n,"Heal")+"");
                player.sendMessage("§r§l你觉醒的武魂居然是"+name+"§r§l。")
            }
        }
            if(name == "§c§l邪火凤凰"){
                if(getLore(wuhun,0)=="§c§l持有者:"){
                setscore(n,"attackDamage1",10)
                setscore(n,"attackDamage2",2)
                setscore(n,"maxHealth1",10)
                setscore(n,"maxHealth2",4)
                setscore(n,"Blood",6)
                setscore(n,"Blast",0)
                setscore(n,"Heal",0)
                setscore(n,"武魂特征码",4)
                setscore(n,"Soul_Level",1)
                setItemLore(wuhun,0,"§c§l持有者:"+n)
                setItemLore(wuhun,4,"§6§l攻击伤害: +"+getScore(n,"attackDamage1")+"");
                setItemLore(wuhun,5,"§4§l伤害加成: +"+getScore(n,"attackDamage2")+"%");
                setItemLore(wuhun,6,"§a§l最大生命: +"+getScore(n,"maxHealth1")+"");
                setItemLore(wuhun,7,"§2§l生命加成: +"+getScore(n,"maxHealth2")+"%");
                setItemLore(wuhun,8,"§c§l吸血概率: +"+getScore(n,"Blood")+"%");
                setItemLore(wuhun,9,"§d§l暴击概率: +"+getScore(n,"Blast")+"%");
                setItemLore(wuhun,10,"§b§l每秒回血: +"+getScore(n,"Heal")+"");
                player.sendMessage("§r§l你觉醒的武魂居然是"+name+"§r§l。")
            }
        }
            if(name == "§6§l昊天锤"){
                if(getLore(wuhun,0)=="§c§l持有者:"){
                setscore(n,"attackDamage1",15)
                setscore(n,"attackDamage2",7)
                setscore(n,"maxHealth1",6)
                setscore(n,"maxHealth2",2)
                setscore(n,"Blood",0)
                setscore(n,"Blast",2)
                setscore(n,"Heal",0)
                setscore(n,"武魂特征码",1)
                setscore(n,"Soul_Level",1)
                setItemLore(wuhun,0,"§c§l持有者:"+n)
                setItemLore(wuhun,4,"§6§l攻击伤害: +"+getScore(n,"attackDamage1")+"");
                setItemLore(wuhun,5,"§4§l伤害加成: +"+getScore(n,"attackDamage2")+"%");
                setItemLore(wuhun,6,"§a§l最大生命: +"+getScore(n,"maxHealth1")+"");
                setItemLore(wuhun,7,"§2§l生命加成: +"+getScore(n,"maxHealth2")+"%");
                setItemLore(wuhun,8,"§c§l吸血概率: +"+getScore(n,"Blood")+"%");
                setItemLore(wuhun,9,"§d§l暴击概率: +"+getScore(n,"Blast")+"%");
                setItemLore(wuhun,10,"§b§l每秒回血: +"+getScore(n,"Heal")+"");
                player.sendMessage("§r§l你觉醒的武魂居然是"+name+"§r§l。")
            }
        }
            if(name == "§7§l骨龙"){
                if(getLore(wuhun,0)=="§c§l持有者:"){
                setscore(n,"attackDamage1",12)
                setscore(n,"attackDamage2",2)
                setscore(n,"maxHealth1",12)
                setscore(n,"maxHealth2",3)
                setscore(n,"Blood",0)
                setscore(n,"Blast",0)
                setscore(n,"Heal",2)
                setscore(n,"武魂特征码",5)
                setscore(n,"Soul_Level",1)
                setItemLore(wuhun,0,"§c§l持有者:"+n)
                setItemLore(wuhun,4,"§6§l攻击伤害: +"+getScore(n,"attackDamage1")+"");
                setItemLore(wuhun,5,"§4§l伤害加成: +"+getScore(n,"attackDamage2")+"%");
                setItemLore(wuhun,6,"§a§l最大生命: +"+getScore(n,"maxHealth1")+"");
                setItemLore(wuhun,7,"§2§l生命加成: +"+getScore(n,"maxHealth2")+"%");
                setItemLore(wuhun,8,"§c§l吸血概率: +"+getScore(n,"Blood")+"%");
                setItemLore(wuhun,9,"§d§l暴击概率: +"+getScore(n,"Blast")+"%");
                setItemLore(wuhun,10,"§b§l每秒回血: +"+getScore(n,"Heal")+"");
                player.sendMessage("§r§l你觉醒的武魂居然是"+name+"§r§l。")
            }
        }
            if(name == "§b§l蓝电霸王龙"){
                if(getLore(wuhun,0)=="§c§l持有者:"){
                setscore(n,"attackDamage1",14)
                setscore(n,"attackDamage2",3)
                setscore(n,"maxHealth1",8)
                setscore(n,"maxHealth2",0)
                setscore(n,"Blood",0)
                setscore(n,"Blast",6)
                setscore(n,"Heal",0)
                setscore(n,"武魂特征码",6)
                setscore(n,"Soul_Level",1)
                setItemLore(wuhun,0,"§c§l持有者:"+n)
                setItemLore(wuhun,4,"§6§l攻击伤害: +"+getScore(n,"attackDamage1")+"");
                setItemLore(wuhun,5,"§4§l伤害加成: +"+getScore(n,"attackDamage2")+"%");
                setItemLore(wuhun,6,"§a§l最大生命: +"+getScore(n,"maxHealth1")+"");
                setItemLore(wuhun,7,"§2§l生命加成: +"+getScore(n,"maxHealth2")+"%");
                setItemLore(wuhun,8,"§c§l吸血概率: +"+getScore(n,"Blood")+"%");
                setItemLore(wuhun,9,"§d§l暴击概率: +"+getScore(n,"Blast")+"%");
                setItemLore(wuhun,10,"§b§l每秒回血: +"+getScore(n,"Heal")+"");
                player.sendMessage("§r§l你觉醒的武魂居然是"+name+"§r§l。")
            }
        }
            if(name == "§8§l幽冥灵猫"){
                if(getLore(wuhun,0)=="§c§l持有者:"){
                setscore(n,"attackDamage1",14)
                setscore(n,"attackDamage2",2)
                setscore(n,"maxHealth1",8)
                setscore(n,"maxHealth2",0)
                setscore(n,"Blood",0)
                setscore(n,"Blast",0)
                setscore(n,"Heal",0)
                setscore(n,"DamageNoHit",3)
                setscore(n,"武魂特征码",7)
                setscore(n,"Soul_Level",1)
                setItemLore(wuhun,0,"§c§l持有者:"+n)
                setItemLore(wuhun,4,"§6§l攻击伤害: +"+getScore(n,"attackDamage1")+"");
                setItemLore(wuhun,5,"§4§l伤害加成: +"+getScore(n,"attackDamage2")+"%");
                setItemLore(wuhun,6,"§a§l最大生命: +"+getScore(n,"maxHealth1")+"");
                setItemLore(wuhun,7,"§2§l生命加成: +"+getScore(n,"maxHealth2")+"%");
                setItemLore(wuhun,8,"§c§l吸血概率: +"+getScore(n,"Blood")+"%");
                setItemLore(wuhun,9,"§d§l暴击概率: +"+getScore(n,"Blast")+"%");
                setItemLore(wuhun,10,"§b§l每秒回血: +"+getScore(n,"Heal")+"");
                player.sendMessage("§r§l你觉醒的武魂居然是"+name+"§r§l。")
            }
        }
    }else{
        if(getLore(wuhun,0)=="§c§l持有者:"+n){
            var time = player.getTempData("reset")
            var date = new Date()
            var res = date.getTime()
            if(getNumber(getLore(wuhun,4)) != getScore(n,"attackDamage1")){
            replace(getScore(n,"attackDamage1"),getScore(n,"attackDamage2"),getScore(n,"maxHealth1"),getScore(n,"maxHealth2"))
            player.setTempData("reset",res+2000)
                setItemLore(wuhun,4,"§6§l攻击伤害: +"+getScore(n,"attackDamage1")+"");
                setItemLore(wuhun,5,"§4§l伤害加成: +"+getScore(n,"attackDamage2")+"%");
                setItemLore(wuhun,6,"§a§l最大生命: +"+getScore(n,"maxHealth1")+"");
                setItemLore(wuhun,7,"§2§l生命加成: +"+getScore(n,"maxHealth2")+"%");
                setItemLore(wuhun,8,"§c§l吸血概率: +"+getScore(n,"Blood")+"%");
                setItemLore(wuhun,9,"§d§l暴击概率: +"+getScore(n,"Blast")+"%");
                setItemLore(wuhun,10,"§b§l每秒回血: +"+getScore(n,"Heal")+"");
                setItemLore(wuhun,11,"§e§l魂环数量: §f§l"+getScore(n,"hh")+"");
                setItemLore(wuhun,12,"§r§l§m-----------§e§l魂环§r§l§m-----------")
            /*每2s自动更新一次武魂属性*/
        }
    }
}
        if(getLore(wuhun,0) !== "§c§l持有者:"+n && level >= 1){
            if(judgeLore(wuhun,"§c§l持有者") > -1){
            player.addPotionEffect(2,2,2,true)
            player.setHealth(1)
            player.sendMessage("&r&l此武魂并非你所觉醒。")
        }
        }
        if(player.getInventory()[0] == null && level >= 1){
            player.sendMessage("&r&l请将武魂放于第一格。")
                player.addPotionEffect(2,2,2,true)
            player.setHealth(1)
        }
        if(player.getInventory()[0] !== null && getLore(player.getInventory()[0],0)!=="§c§l持有者:"+n && level >= 1){
            player.sendMessage("&r&l请将武魂放于第一格。")
            player.addPotionEffect(2,2,2,true)
            player.setHealth(1)
        }
}
var lv = player.getExpLevel()
if(yuxu(lv,level)){
if(level > 0 && level < 10){
    var att = 4
    var hp = 5
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已到达&r魂士大圆满&f境界,快去吸收&6百年魂环&r吧!")
    }
}
if(level > 10 && level < 20){
    var att = 10
    var hp = 11
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已到达&2魂师大圆满&f境界,快去吸收&6百年魂环&r吧!")
    }
}
if(level > 20 && level < 30){
    var att = 30
    var hp = 35
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已到达&3大魂师大圆满&f境界,快去吸收&5千年魂环&r吧!")
    }
}
if(level > 30 && level < 40){
    var att = 70
    var hp = 80
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已到达&7魂尊大圆满&f境界,快去吸收&7万年魂环&f吧!")
    }
}
if(level > 40 && level < 50){
    var att = 120
    var hp = 140
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已到达&8魂宗大圆满&f境界,快去吸收&7万年魂环&f吧!")
    }
}
if(level > 50 && level < 60){
    var att = 200
    var hp = 230
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已到达&9魂王大圆满&f境界,快去吸收&c十万年魂环&f吧!")
    }
}
if(level > 60 && level < 70){
    var att = 400
    var hp = 440
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已到达&5魂帝大圆满&f境界,快去吸收&a四十万年魂环&f吧!")
    }
}
if(level > 70 && level < 80){
    var att = 1000
    var hp = 1500
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已到达&6魂圣大圆满&f境界,快去吸收&b八十万年魂环&f吧!")
    }
}
if(level > 80 && level < 90){
    var att = 2500
    var hp = 3500
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已到达&b魂斗罗大圆满&f境界,快去吸收&e百万年魂环&f吧!")
    }
}
if(level > 90 && level < 99){
    var att = 4000
    var hp = 4500
    var levelup = level+1
    addscore(n,"attackDamage1",att)
    addscore(n,"maxHealth1",hp)
    addscore(n,"Soul_Level",1)
    player.sendMessage("&f[&e斗罗大陆&f]魂力等级已提升至&a"+levelup+"&f级")
    if(levelup%10 == 0){
        player.sendMessage("&f[&e斗罗大陆&f]您已成功踏入&4极限斗罗&f境界,可以前往&0深渊&f进行踏入&a半&c神&f的准备。")
    }
}
}
var heal = getScore(player.name,"Heal")+getScore(player.name,"Healt")
var ph = player.getHealth()
var phh = player.getMaxHealth()
if(ph < phh && ph !== 0){
    player.setHealth(ph+heal/2)
}
}
function getNumber(string){
 if(string !== undefined){
 var string1 = string.replace(/§[0-9]/g,"")
 return Number(string1.replace(/[^0-9]/ig,""))
}
}
function yuxu(l,l1){
    if((lv-10)/10 >= level){
        return true;
    }else{
        return false;
    }
}
function getLore(item,line)
{
var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
Item=item.getMCItemStack();
var nbt=Item.field_77990_d;
if(nbt==null)
{
return -1
};
if(nbt.func_74775_l("display")!==null)
{
var loreLength=nbt.func_74775_l("display").func_150295_c("Lore",8).func_74745_c();
if(line<=loreLength)
{
var lore=nbt.func_74775_l("display").func_150295_c("Lore",8).func_150307_f(line)
return lore
}
}
else
{
return -1
}
}
function setItemLore(item,line,lore)
{
var NBTTagString=Java.type("net.minecraft.nbt.NBTTagString")
try
{
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
};
function setscore(name,score,amount){
npc.executeCommand("scoreboard players set "+name+" "+score+" "+amount)
}
function addscore(name,score,amount){
if(amount < 0){
    amount *= -1
    npc.executeCommand("scoreboard players remove "+name+" "+score+" "+amount)
}else{
npc.executeCommand("scoreboard players add "+name+" "+score+" "+amount)
}
}
function getScore(name,score){
amounts = world.getScoreboard().getPlayerScore(name,score,"dummy")
return amounts;
}
function replace(a,b,c,d)
{
    reset(player.getHeldItem());
    add("attackDamage",a,0);
    add("attackDamage",b*0.01,1);
    add("maxHealth",c,0);
    add("maxHealth",d*0.01,1);
};
function reset(item)
{
var NBTTagCompound=Java.type("net.minecraft.nbt.NBTTagCompound");
var NBTTagList=Java.type("net.minecraft.nbt.NBTTagList");
item=item.getMCItemStack();
nbt=item.field_77990_d;
    if(nbt==null)
    {
    nbt=new NBTTagCompound();
    }
attrList=nbt.func_150295_c("AttributeModifiers",0)
attr=new NBTTagCompound();
attr.func_74777_a("Amount",0);
attr.func_74778_a("AttributeName","generic.attackDamage");
attr.func_74768_a("Operation",0);
attr.func_74778_a("Name","My Modifier");
attr.func_74772_a("UUIDLeast",6064471111);
attr.func_74772_a("UUIDMost",4644964200)
attrList.func_74742_a(attr);
nbt.func_74782_a("AttributeModifiers",attrList);
item.field_77990_d=nbt;
return nbt;
};
function add(attribute,amount,operation)
{
var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
var UUID = Java.type("java.util.UUID");
var itemStack = player.getHeldItem().getMCItemStack();
var root = itemStack.field_77990_d;
if (root == null) 
{
    root = new NBTTagCompound();
    }
    var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
    var attributeModifier = new NBTTagCompound();
    var uuid = UUID.randomUUID();
    attributeModifier.func_74778_a("AttributeName", "generic."+attribute);
    attributeModifier.func_74778_a("Name","My Modifier");
    attributeModifier.func_74780_a("Amount", amount);
    attributeModifier.func_74768_a("Operation", operation);
    attributeModifier.func_74772_a("UUIDMost", uuid.getMostSignificantBits());
    attributeModifier.func_74772_a("UUIDLeast", uuid.getLeastSignificantBits());
    attributeModifiers.func_74742_a(attributeModifier);
    root.func_74782_a("AttributeModifiers", attributeModifiers);
    itemStack.field_77990_d = root;
}
function judgeLore(item,content)
{
var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
Item=item.getMCItemStack();
var nbt=Item.field_77990_d;
if(nbt==null)
{
return -1
};
if(nbt.func_74775_l("display")!==null)
{
var loreLength=nbt.func_74775_l("display").func_150295_c("Lore",8).func_74745_c();
for(var i=0;i<loreLength;i++)
{
var lore=nbt.func_74775_l("display").func_150295_c("Lore",8).func_150307_f(i)
if(lore.indexOf(content)!=-1)
{
return i
}
if(lore.indexOf(content)==-1&&i==loreLength-1)
{
return -1
}
}
}
else
{
return -1
}
}
//魂环镶嵌
function Command(name,usage){
 this.getCommandName=function(){
  /*String getCommandName()
  *应返回指令的名字
  *如:ppes 则返回noppes
  */
 };
 this.getCommandUsage=function(sender){
  /*String getCommandUsage(ICommandSender sender)
  *应返回指令的用法
  *当玩家输入"/help 你的指令名" 的时候就会出现
  *sender:指令发送者 可能是玩家 控制台 命令方块 或者其他什么
  */
 };
 this.processCommand=function(sender,args){
  /*void processCommand(ICommandSender sender, String[] args)
  *在玩家使用该指令时会调用本函数
  *sender:指令发送者 可能是玩家 控制台 命令方块 或者其他什么
  *args:指令的参数
  */
 };
 this.addTabCompletionOptions=function(sender,args){
  return null;
  /*List addTabCompletionOptions(ICommandSender sender, String[] args)
  *用于tab自动补全
  *应返回补全后的参数
  *sender:指令发送者 可能是玩家 控制台 命令方块 或者其他什么
  *args:指令的参数
  */
 };
 this.getRequiredPermissionLevel=function(){
  return 4;
  /*int getRequiredPermissionLevel
  *指令所需的权限 0表示所有人可用 4表示OP可用
  *应返回权限等级
  */
 }
 this.canCommandSenderUseCommand=function(){
     return true;
}
 //上方函数以1.7.10的方法为准
 //1.12.2修改函数时补全参数后通用。
 this.getMCCommand=function(){
  var CommandBase=Java.type("net.minecraft.command.CommandBase");
  var MCCommand=Java.extend(CommandBase,{
   func_71517_b:this.getCommandName,
   func_71518_a:this.getCommandUsage,
   func_71515_b:this.processCommand,
   func_71516_a:this.addTabCompletionOptions,
   func_82362_a:this.getRequiredPermissionLevel,
   func_71519_b:this.canCommandSenderUseCommand,
   /*下方是对1.12.2的兼容*/
   func_184881_a:this.processCommand,
   func_184883_a:this.addTabCompletionOptions
  });
  return new MCCommand();
 }
}
function registerCommand(command){
 var MinecraftServer=Java.type("net.minecraft.server.MinecraftServer");
 var server=MinecraftServer.func_71276_C();
     if(!(command instanceof Command)){
     return;
    }
    server.func_71187_D().func_71560_a(command.getMCCommand())
}
var EntityPlayerMP=Java.type("net.minecraft.entity.player.EntityPlayerMP");
var command=new Command();
command.getCommandName=function(){
 return "xq";
}
command.getCommandUsage=function(sender){
 return "/xq";
}
command.getRequiredPermissionLevel=function(){
 return 4;//0是全部人可用4是仅OP可用
}
command.canCommandSenderUseCommand=function(sender){
    return true;//是否允许使用true允许false不允许只有OP能用
}
command.addTabCompletionOptions=function(sender,args){
 return ["sss","aaa"]
}
command.processCommand=function(sender,args){
 var ScriptPlayer=Java.type("noppes.npcs.scripted.ScriptPlayer");
    if(!(sender instanceof EntityPlayerMP)){
     return;
    }
 var player=new ScriptPlayer(sender);
 if(args.length > 0 && args[0] == "reload"){
    unListenEvent(listeners.get(listenerName[0]).getEventType(),listeners.get(listenerName[0]).getListener(),listeners.get(listenerName[0]).getBus());
listeners.remove(listenerName[0]);
player.sendMessage("&a&l重载成功")
world.setTempData("com",0)
}else{
 p=player.getMCEntity();
 cd=CustomGuihh(p);
 openCustomGui(p,cd);
}
 return;
}
var com = world.getTempData("com")
if(com !== 1){
registerCommand(command);
world.setTempData("com",1)
}                                                                                                                                                                                               
var HotNPC = Java.type("mchhui.hotnpc.HotNPC");
var Tempdata = Java.type("mchhui.hotnpc.utlis.Tempdata");
var tempdata = HotNPC.tempdata;
var listeners;
var listenerName = ["cd"];
var EntityPlayerMP = Java.type("net.minecraft.entity.player.EntityPlayerMP");
if (!tempdata.has("listeners")) {
    tempdata.set("listeners", new Tempdata())
}
listeners = tempdata.get("listeners");
var StoreddataManager = Java.type("mchhui.hotnpc.utlis.StoreddataManager");
if (!tempdata.has("turtle.io")) {
    tempdata.set("turtle.io", StoreddataManager.getStoreddata("turtle.io"));
}
var io = tempdata.get("turtle.io");
if (!listeners.has(listenerName[0])) {
    listeners.set(listenerName[0], listenEvent("mchhui.moreevent.event.player.PlayerClickContainerEvent", "HIGH",
        function (event) {
            try {
                var ScriptItemStack = Java.type("noppes.npcs.scripted.ScriptItemStack");
                var ScriptPlayer = Java.type("noppes.npcs.scripted.ScriptPlayer");
                var EntityPlayerMP = Java.type("net.minecraft.entity.player.EntityPlayerMP");
                var ContainerChest = Java.type("net.minecraft.inventory.ContainerChest");
                var ItemStack = Java.type("net.minecraft.item.ItemStack")
                if (!(event.entityPlayer instanceof EntityPlayerMP)) {
                    return;
                }
                var container = event.container;
                if (!container instanceof ContainerChest) {
                    return;
                }
                var player = new ScriptPlayer(event.entityPlayer)
                if (container.func_85151_d().func_145825_b().indexOf("魂环嵌套") == -1) {
                    return;
                }
                var sl = event.slot;
                item = container.func_85151_d().func_70301_a(sl);
                if (item != null) {
                    var item = new ScriptItemStack(item);
                }
                cdname = container.func_85151_d().func_145825_b()
                event.setCanceled(true);
                if (item != null) {
                    if (item.getDisplayName() == "§r§l点击此处放入武魂") {
                        container.func_75141_a(20, player.getInventory()[0].getMCItemStack());
                    }
                    if (item.getDisplayName() == "§r§l点击此处放入魂环") {
                        if (player.getHeldItem() != null) {
                            container.func_75141_a(24, player.getHeldItem().getMCItemStack());
                        }
                    }
                    if (item.getDisplayName() == "§e§l镶嵌") {
                        if (container.func_85151_d().func_70301_a(20) != null && container.func_85151_d().func_70301_a(24) != null) {
                            player.getMCEntity().func_71053_j();
                            xishou(player);
                        } else {
                            player.sendMessage("&r请在槽位上放上对应物品")
                        }
                    }
                }
                return;
            } catch (e) {
            }
        }
    ))
    npc.say("§r点击容器监听注册成功")
}
function openCustomGui(player, container) {
    var S2DPacketOpenWindow = Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow");
    var inventory = container.func_85151_d();
    if (player.field_71070_bA != player.field_71069_bz) {
        player.func_71053_j();
    }
    player.func_71117_bO();
    player.field_71135_a.func_147359_a(new S2DPacketOpenWindow(player.field_71139_cq, 0, inventory.func_145825_b(), inventory.func_70302_i_(), inventory.func_145818_k_()));
    player.field_71070_bA = container;
    player.field_71070_bA.field_75152_c = player.field_71139_cq;
    player.field_71070_bA.func_75132_a(player);
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
function getNumber(string) {
    try{
    var string1 = string.replace(/§[0-9]/g, "")
    return Number(string1.replace(/[^0-9]/ig, ""))
}catch(e){npc.say(e)}
}
function judgeLore(item, content) {
    var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
    Item = item.getMCItemStack();
    var nbt = Item.field_77990_d;
    if (nbt == null) {
        return -1
    };
    if (nbt.func_74775_l("display") !== null) {
        var loreLength = nbt.func_74775_l("display").func_150295_c("Lore", 8).func_74745_c();
        for (var i = 0; i < loreLength; i++) {
            var lore = nbt.func_74775_l("display").func_150295_c("Lore", 8).func_150307_f(i)
            if (lore.indexOf(content) != -1) {
                return i
            }
            if (lore.indexOf(content) == -1 && i == loreLength - 1) {
                return -1
            }
        }
    }
    else {
        return -1
    }
}
function CustomGuihh(player, name) {
    var ScriptPlayer = Java.type("noppes.npcs.scripted.ScriptPlayer");
    var playerS = new ScriptPlayer(player);
    var C = Java.type("net.minecraft.inventory.ContainerChest");
    var InventoryBasic = Java.type("net.minecraft.inventory.InventoryBasic");
    var i = new InventoryBasic("§e§l魂环嵌套", true, 6 * 9);
    var blank = world.createItem("minecraft:stained_glass_pane", 0, 1);
    blank.setCustomName("§f§l边框");
    var blank1 = world.createItem("minecraft:stained_glass_pane", 6, 1);
    blank1.setCustomName("§c§l武魂区域");
    var blank2 = world.createItem("minecraft:stained_glass_pane", 1, 1);
    blank2.setCustomName("§6§l魂环区域");
    var blank3 = world.createItem("minecraft:stained_glass_pane", 14, 1);
    blank3.setCustomName("§f§l边框"); 
    var anvil = world.createItem("minecraft:anvil", 0, 1);
    anvil.setCustomName("§e§l镶嵌");
    var star = world.createItem("minecraft:nether_star", 0, 1);
    star.setCustomName("§e§l白金之星");
    var beacon = world.createItem("minecraft:beacon", 0, 1);
    beacon.setCustomName("§7§l基座");
    var eye = world.createItem("minecraft:ender_eye", 0, 1);
    eye.setCustomName("§r§l点击此处放入武魂");
    var eye1 = world.createItem("minecraft:ender_eye", 0, 1);
    eye1.setCustomName("§r§l点击此处放入魂环");
    for (j = 0; j < 54; j++) {
        if (j < 9 || j % 9 == 0 || (j + 1) % 9 == 0) {
            i.func_70299_a(j, blank.getMCItemStack().func_77946_l());
        }
        if ((j > 9 && j < 13) || j == 19 || j == 21 || (j > 27 && j < 31)) {
            i.func_70299_a(j, blank1.getMCItemStack().func_77946_l());
            i.func_70299_a(j + 4, blank2.getMCItemStack().func_77946_l());
        }
        if ((j != 4 && (j-4) % 9 == 0) || (j > 45 && j < 53)) {
            i.func_70299_a(j, blank3.getMCItemStack().func_77946_l());
        }
        if (false) {
            var blank_ = world.createItem("minecraft:stained_glass_pane", 5, 1);
            blank_.setCustomName("§r§l点我嵌套魂环");
            addItemLore(blank_, "§r§l点我嵌套魂环")
            i.func_70299_a(j, blank_.getMCItemStack().func_77946_l());
        }
    }
    i.func_70299_a(22, anvil.getMCItemStack().func_77946_l());
    i.func_70299_a(37, star.getMCItemStack().func_77946_l());
    i.func_70299_a(39, star.getMCItemStack().func_77946_l());
    i.func_70299_a(41, star.getMCItemStack().func_77946_l());
    i.func_70299_a(43, star.getMCItemStack().func_77946_l());
    i.func_70299_a(45, beacon.getMCItemStack().func_77946_l());
    i.func_70299_a(48, beacon.getMCItemStack().func_77946_l());
    i.func_70299_a(50, beacon.getMCItemStack().func_77946_l());
    i.func_70299_a(53, beacon.getMCItemStack().func_77946_l());
    i.func_70299_a(38, eye.getMCItemStack().func_77946_l());
    i.func_70299_a(42, eye1.getMCItemStack().func_77946_l());
    var ip = player.field_71071_by;
    var c = new C(ip, i);
    return c;
}
function hunhuan(player,item, hunhuanItem) {
    var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
    if (player.getHeldItem() != null) {
        if (getLore(hunhuanItem, 0) == "§e§l[魂环]") {
            var type, amount;
            if (getLore(hunhuanItem, 1).slice(getLore(hunhuanItem, 1).indexOf("+") + 1) != null || getLore(hunhuanItem, 1).slice(getLore(hunhuanItem, 1).indexOf("+") + 1) != "0") {
                type = "generic.attackDamage";
                amount = Number(getLore(hunhuanItem, 1).slice(getLore(hunhuanItem, 1).indexOf("+") + 1));
                npc.executeCommand("scoreboard players add " + player.getName() + " attackDamage1 " + amount + "");
            }
            if (getLore(hunhuanItem, 2).slice(getLore(hunhuanItem, 2).indexOf("+") + 1) != null || getLore(hunhuanItem, 2).slice(getLore(hunhuanItem, 2).indexOf("+") + 1) != "0") {
                type = "generic.attackDamage";
                amount = Number(getLore(hunhuanItem, 2).slice(getLore(hunhuanItem, 2).indexOf("+") + 1, getLore(hunhuanItem, 2).indexOf("%")));
                addscore(player.name,"attackDamage2",amount)
            }
            if (getLore(hunhuanItem, 3).slice(getLore(hunhuanItem, 3).indexOf("+") + 1) != null || getLore(hunhuanItem, 3).slice(getLore(hunhuanItem, 3).indexOf("+") + 1) != "0") {
                type = "generic.maxHealth";
                amount = Number(getLore(hunhuanItem, 3).slice(getLore(hunhuanItem, 3).indexOf("+") + 1));
                npc.executeCommand("scoreboard players add " + player.getName() + " maxHealth1 " + amount + "");
            }
            if (getLore(hunhuanItem, 4).slice(getLore(hunhuanItem, 4).indexOf("+") + 1) != null || getLore(hunhuanItem, 4).slice(getLore(hunhuanItem, 4).indexOf("+") + 1) != "0") {
                type = "generic.maxHealth";
                amount = Number(getLore(hunhuanItem, 4).slice(getLore(hunhuanItem, 4).indexOf("+") + 1, getLore(hunhuanItem, 4).indexOf("%")));
                addscore(player.name,"maxHealth2",amount)
            }
            if (getLore(hunhuanItem, 5).slice(getLore(hunhuanItem, 5).indexOf("+") + 1) != null || getLore(hunhuanItem, 5).slice(getLore(hunhuanItem, 5).indexOf("+") + 1) != "0") {
                type = "generic.attackDamage";
                amount = Number(getLore(hunhuanItem, 5).slice(getLore(hunhuanItem, 5).indexOf("+") + 1, getLore(hunhuanItem, 5).indexOf("%")));
                npc.executeCommand("scoreboard players add " + player.getName() + " Blood " + amount + "");
            }
            if (getLore(hunhuanItem, 6).slice(getLore(hunhuanItem, 6).indexOf("+") + 1) != null || getLore(hunhuanItem, 6).slice(getLore(hunhuanItem, 6).indexOf("+") + 1) != "0") {
                type = "generic.attackDamage";
                amount = Number(getLore(hunhuanItem, 6).slice(getLore(hunhuanItem, 6).indexOf("+") + 1, getLore(hunhuanItem, 6).indexOf("%")));
                npc.executeCommand("scoreboard players add " + player.getName() + " Blast " + amount + "");
            }
            if (getLore(hunhuanItem, 7).slice(getLore(hunhuanItem, 7).indexOf("+") + 1) != null || getLore(hunhuanItem, 7).slice(getLore(hunhuanItem, 7).indexOf("+") + 1) != "0") {
                type = "generic.attackDamage";
                amount = Number(getLore(hunhuanItem, 7).slice(getLore(hunhuanItem, 7).indexOf("+") + 1));
                npc.executeCommand("scoreboard players add " + player.getName() + " Heal " + amount + "");
            }
            if (getLore(hunhuanItem, 8).slice(getLore(hunhuanItem, 8).indexOf("+") + 1) != null || getLore(hunhuanItem, 8).slice(getLore(hunhuanItem, 8).indexOf("+") + 1) != "0") {
                type = "generic.attackDamage";
                amount = Number(getLore(hunhuanItem, 8).slice(getLore(hunhuanItem, 8).indexOf("+") + 1, getLore(hunhuanItem, 8).indexOf("%")))
                npc.executeCommand("scoreboard players add " + player.getName() + " BloodBelv " + amount + "");
            }
            if (getLore(hunhuanItem, 9).slice(getLore(hunhuanItem, 9).indexOf("+") + 1) != null || getLore(hunhuanItem, 9).slice(getLore(hunhuanItem, 9).indexOf("+") + 1) != "0") {
                type = "generic.attackDamage";
                amount = Number(getLore(hunhuanItem, 9).slice(getLore(hunhuanItem, 9).indexOf("+") + 1, getLore(hunhuanItem, 9).indexOf("%")));
                npc.executeCommand("scoreboard players add " + player.getName() + " BlastBelv " + amount + "");
            }
            if (getLore(hunhuanItem, 10).slice(getLore(hunhuanItem, 10).indexOf("+") + 1) != null || getLore(hunhuanItem, 10).slice(getLore(hunhuanItem, 10).indexOf("+") + 1) != "0") {
                type = "generic.attackDamage";
                amount = Number(getLore(hunhuanItem, 10).slice(getLore(hunhuanItem, 10).indexOf("+") + 1, getLore(hunhuanItem, 10).indexOf("%")))
                npc.executeCommand("scoreboard players add " + player.getName() + " DamageNoHit " + amount + "");
            }
            player.setHeldItem(null);
            addItemLore(item, hunhuanItem.getDisplayName())
            player.sendMessage("§f[§e斗罗大陆§f]你已成功吸收此魂环。");
            //replace(Score(player, "attackDamage1"), Score(player, "attackDamage2"), Score(player, "maxHealth1"), Score(player, "maxHealth2"));
            npc.executeCommand("scoreboard players add " + player.getName() + " Soul_Level 1");
            npc.executeCommand("scoreboard players add " + player.getName() + " hh 1");
            npc.executeCommand("xp 10l " + player.getName() + "");
            player.sendMessage("§f[§e斗罗大陆§f]你吸收的魂环反馈给了你一级魂力。")
        }
    }
};
//分割
function Score(Substance, objective) {
    var Points = world.getScoreboard().getPlayerScore("" + Substance.getName() + "", "" + objective + "", "" + objective + "");
    return Points;
};
function setItemLore(item, line, lore) {
    var NBTTagString = Java.type("net.minecraft.nbt.NBTTagString")
    try {
        loreList = item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore")
        loreList.func_150304_a(line, new NBTTagString(lore))
    } catch (err) {
        print("在操作lore发生异常,可能是因为没有lore 请将报错提供给作者:" + err)
    }
};
function addItemLore(item, lore) {
    var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
    var NBTTagList = Java.type("net.minecraft.nbt.NBTTagList");
    var NBTTagString = Java.type("net.minecraft.nbt.NBTTagString");
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
}
function judegLore(item, content) {
    var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
    Item = item.getMCItemStack();
    var nbt = Item.field_77990_d;
    if (nbt == null) {
        return -1
    };
    if (nbt.func_74775_l("display") !== null) {
        var loreLength = nbt.func_74775_l("display").func_150295_c("Lore", 8).func_74745_c();
        for (var i = 0; i < loreLength; i++) {
            var lore = nbt.func_74775_l("display").func_150295_c("Lore", 8).func_150307_f(i)
            if (lore.indexOf(content) != -1) {
                return i
            }
            if (lore.indexOf(content) == -1 && i == loreLength - 1) {
                return -1
            }
        }
    }
    else {
        return -1
    }
}
function judge(judegItem) {
    var Item = judegItem;
    var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound")
    var itemStack = Item.getMCItemStack();
    var root = itemStack.field_77990_d;
    if (root == null) {
        root = new NBTTagCompound();
    }
    var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
    var attrList = attributeModifiers.func_74745_c();
    var itemHealth = 0, itemDamage = 0
    for (var n = 0; n < attrList; n++) {
        var test = attributeModifiers.func_150305_b(n);
        if (test.func_74779_i("AttributeName") == "generic.maxHealth" && test.func_74762_e("Operation") == 0) {
            itemHealth = itemHealth + test.func_74769_h("Amount")
        };
        if (test.func_74779_i("AttributeName") == "generic.attackDamage" && test.func_74762_e("Operation") == 0) {
            itemDamage = itemDamage + test.func_74769_h("Amount")
        }
    }
    if (itemDamage > itemHealth) {
        var type = 0;
        return type
    };
    if (itemDamage < itemHealth) {
        var type = 1;
        return type
    };
    if (itemDamage == itemHealth && itemHealth == 0) {
        var type = 2;
        return type
    }
};
function xishou(player) {
    if (getScore(player.name,"Soul_Level")%10 == 0){
            if (player.getHeldItem() != null && player.getInventory()[0] != null) {
            var item1 = player.getHeldItem();
            var item2 = player.getInventory()[0];
            if (getLore(item1, 0) == "§e§l[魂环]") {
                if (judge(item2) != 2 && getLore(item2, 0) == "§c§l持有者:" + player.getName() + "") {
                    if (Number(getLore(item1, 11).slice(getLore(item1, 11).indexOf(":") + 1)) <= Score(player, "Soul_Level")) {
                        hunhuan(player,item2, item1)
                    }
                    else {
                        player.sendMessage("&f&l无法跨界吸收此魂环。")
                    }
                }
                else {
                    player.sendMessage("&f&l此物不是武魂。")
                }
            }
            else {
                player.sendMessage("&f&l请手持魂环。")
            }
        }
        else {
            player.sendMessage("&f&l请手持魂环吸收。")
        }
    }
    else {
        player.sendMessage("&f&l目前还未能吸收魂环。")
    }
};
function Listener(eventType, listener, bus) {
    var MinecraftForge = Java.type("net.minecraftforge.common.MinecraftForge");
    this.eventType = eventType;
    this.listener = listener;
    this.bus = (bus == null) ? MinecraftForge.EVENT_BUS : bus;
    this.getEventType = function () {
        return this.eventType;
    }
    this.getListener = function () {
        return this.listener;
    }
    this.getBus = function () {
        return this.bus;
    }
}
/**
*EventListener listenEvent(String eventType,String priority,function listener)
*-eventType:你要监听的事件的类路径 如net.minecraftforge.event.ServerChatEvent
*-priority:你的事件优先级 从低到高LOWEST LOW NORMAL HIGH HIGHEST
*-listener:事件方法
*Return:
*-EventListener:事件监听者
*监听事件并返回监听对象
*/
function listenEvent(eventType, priority, listener, bus) {
    var Event = Java.type(eventType);
    try {
        var IEventListener = Java.type("net.minecraftforge.fml.common.eventhandler.IEventListener");
        var EventPriority = Java.type("net.minecraftforge.fml.common.eventhandler.EventPriority");
    } catch (err) {
        var IEventListener = Java.type("cpw.mods.fml.common.eventhandler.IEventListener");
        var EventPriority = Java.type("cpw.mods.fml.common.eventhandler.EventPriority");
    }
    var MinecraftForge = Java.type("net.minecraftforge.common.MinecraftForge");
    var event = new Event();
    if (priority == "LOW") {
        priority = EventPriority.LOW;
    }
    if (priority == "HIGH") {
        priority = EventPriority.HIGH;
    }
    if (priority == "NORMAL") {
        priority = EventPriority.NORMAL;
    }
    if (priority == "LOWEST") {
        priority = EventPriority.LOWEST;
    }
    if (priority == "HIGHEST") {
        priority = EventPriority.HIGHEST;
    }
    var EventListener = Java.extend(IEventListener, {
        invoke: listener
    });
    listener = new EventListener();
    var bus = (bus == null) ? MinecraftForge.EVENT_BUS : bus;
    var busID = bus.class.getDeclaredField("busID");
    busID.setAccessible(true);
    busID = busID.getInt(bus);
    event.getListenerList().register(busID, priority, listener);
    return new Listener(eventType, listener, bus);
}
/**
*void unListenEvent(IEventListener listener)
*-listener:事件方法
*取消监听事件
*/
var io = new IONPC()
function unListenEvent(eventType, listener, bus) {
    var Event = Java.type(eventType);
    var MinecraftForge = Java.type("net.minecraftforge.common.MinecraftForge");
    var event = new Event();
    var bus = (bus == null) ? MinecraftForge.EVENT_BUS : bus;
    var busID = bus.class.getDeclaredField("busID");
    busID.setAccessible(true);
    busID = busID.getInt(bus);
    event.getListenerList().unregister(busID, listener);
}
if(world.getTempData("xxbj")!=4){
world.setTempData("xxbj",4)
listenEvent("net.minecraftforge.event.entity.living.LivingHurtEvent","HIGH",function(event){
 var EntityList=Java.type("net.minecraft.entity.EntityList");
 var EntityDamageSource=Java.type("net.minecraft.util.EntityDamageSource");
 var EntityPlayerMP=Java.type("net.minecraft.entity.player.EntityPlayerMP");
 var ScriptPlayer=Java.type("noppes.npcs.scripted.ScriptPlayer");
 var ScriptEntity=Java.type("noppes.npcs.scripted.ScriptEntity");
 if(!(event.source instanceof EntityDamageSource)){
  return;
 }
 if(!(event.source.func_76346_g() instanceof EntityPlayerMP)){
  return;
 }
 var time = new Date().getTime()
 var player = new ScriptPlayer(event.source.func_76346_g());
 var bjl = world.getScoreboard().getPlayerScore(player.getName(),"Blast","dummy")
 var bl1 = getScore(player.name,"BlastBelv")
 var random = Math.random()*100
 if(random<=bjl){
  event.ammount *= 1.5+bl1/100
  player.sendMessage("§6§l你触发了一次暴击，对目标造成了§a "+(1.5+bl1/100)+" §6§l倍伤害。")
 }
 var amount = event.ammount;
 var xxl = world.getScoreboard().getPlayerScore(player.getName(),"Blood","dummy")
 var random = Math.random()*100
 var tzm = world.getScoreboard().getPlayerScore(player.getName(),"武魂特征码","dummy")
 if(tzm == 2){
    var skill = io.get("技能效果")
    if(skill[player.name] != undefined){
    if(skill[player.name][7] >= time){
        xxl += 20
    }
    }
 }
 if(random<=xxl){
  var bl = getScore(player.name,"BloodBelv")
  player.setHealth(player.getHealth()+amount*(0.01+bl/100))
  player.sendMessage("§c§l你触发了一次吸血，吸取了§a "+amount*(0.01+bl/100)+" §c§l点血量。")
 }
 var health = event.entity.func_110143_aJ();
 var health = health-amount
 if(health<0){
  var health = 0;
 }
 if(world.getScoreboard().getPlayerScore(player.getName(),"outputd","dummy")!==0){
  player.sendMessage("&f&l你造成了 "+amount+" 点伤害，目标剩余血量: §a"+health);
 }
})
npc.say("&f实体伤害监听注册成功！")
}
/**
*void listenEvent(String eventType,String priority,function listener)
*-eventType:你要监听的事件的类路径 如net.minecraftforge.event.ServerChatEvent
*-priority:你的事件优先级 从低到高LOW LOWEST NORMAL HIGHEST HIGH
*-listener:事件方法
*监听事件
*/
function IONPC(){
  //初始化部分
  var File = Java.type("java.io.File");
  var FileOutputStream = Java.type("java.io.FileOutputStream");
  var BufferedReader = Java.type("java.io.BufferedReader");
  var InputStreamReader = Java.type("java.io.InputStreamReader");
  var FileInputStream = Java.type("java.io.FileInputStream");
  var StringBuilder=Java.type("java.lang.StringBuilder");
  var RootDirectory = new File("");
  var folder = new File(RootDirectory.getCanonicalPath()+"\\CNPCData");
  if(!folder.exists()){
    folder.mkdir();
  }
  //获取部分
  //file:文件名
  this.get = function(file){
    var files = new File(RootDirectory.getCanonicalPath()+"\\CNPCData\\"+file+".sw");
    var text = null;
    if(files.exists()){
      var fileInputStream = new FileInputStream(files);
      var inputStreamReader = new InputStreamReader(fileInputStream);
      var bufferedReader = new BufferedReader(inputStreamReader);
      var sb = new StringBuilder();
      while((text = bufferedReader.readLine()) != null){
              sb.append(text);
            }
    }
    try{
      return eval("("+sb.toString()+")");
    }catch(e){
      return {};
    }
  }
  //设置部分
  //file:文件名
  //object:对象
  this.set = function(file,object){
    if(!(object instanceof Object)){
      print("请输入对象");
      return;
    }
    var files = new File(RootDirectory.getCanonicalPath()+"\\CNPCData\\"+file+".sw");
    if(files.exists()){
      files.createNewFile();
    }
    var fileOutputStream = new FileOutputStream(files);
    fileOutputStream.write(JSON.stringify(object).getBytes());
    fileOutputStream.flush();
    fileOutputStream.close();
  }
  //删除部分
  //file:文件名
  this.remove = function(file){
    var files = new File(RootDirectory.getCanonicalPath()+"\\CNPCData\\"+file+".sw");
    if(files.exists()){
      files.delete();
    }
  }
}