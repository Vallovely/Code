//运行
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
  return 0;
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
 return "题字"
}
command.getCommandUsage=function(sender){
 return "/.s";
}
command.getRequiredPermissionLevel=function(){
 return 0;//0是全部人可用4是仅OP可用
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
 if(args.length == 1){
 var 字 = args[0]
 if(字 !== "%" && 字.length == 1){
 var wp = player.getInventory()[1];
 var dk = player.getHeldItem()
 if(wp !== null && dk !== null){
 var wpname = wp.getDisplayName()
 var heldname = dk.getDisplayName()
 if(heldname == "§7§l无字斗铠" && wpname == "§b§l题字许可信"){
 dk.setCustomName("§7§l斗铠§f§l-§r§l『"+字+"』")
 message("&r[&a全服公告&r]魂师&a "+player.getName()+" &r给自己的无字斗铠题了&a"+字+"&r。")
 setItemLore(dk,1,"§d§l斗铠题字:§a§l[生命加成+25%]")
 add("maxHealth",0.25,1,dk)
 if(wp.getStackSize()>1){
 wp.setStackSize(wp.getStackSize()-1)}else{
 player.getMCEntity().field_71071_by.field_70462_a[1] = null
 }}else{
 player.sendMessage("&r&l物品栏第二格放&b&l题字许可信&r&l,手持&7&l无字斗铠&r&l输入/题字 字(这里的字是你想要题的字)")}}else{
 player.sendMessage("&r&l手中或物品栏第二格为空。")}}else{
 player.sendMessage("&r&l格式错误,无法多题字和禁忌符号。")}}else{
 player.sendMessage("&r&l错误的指令")}
 return;
}
registerCommand(command); 
function addItemLore(item,lore){
			var NBTTagCompound=Java.type("net.minecraft.nbt.NBTTagCompound")
	var NBTTagList=Java.type("net.minecraft.nbt.NBTTagList")
	var NBTTagString=Java.type("net.minecraft.nbt.NBTTagString")
nbt=item.getMCItemStack().field_77990_d;
if(nbt==null){
nbt=new NBTTagCompound();
}
if(nbt.func_74775_l("display")=="{}"){
displayTag=new NBTTagCompound();
nbt.func_74782_a("display",displayTag);
}
if(nbt.func_74775_l("display").func_74781_a("Lore")==null){
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
function attr(attrName,attrAmount,attrOperation)
{
var Item=player.getHeldItem()
var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound")
var itemStack = Item.getMCItemStack();
var root = itemStack.field_77990_d;
if (root == null)
{
root = new NBTTagCompound();
}
var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
var attrList=attributeModifiers.func_74745_c();
for(var n=0;n<attrList;n++)
{
var test=attributeModifiers.func_150305_b(n);
if(test.func_74779_i("AttributeName")==attrName&&test.func_74762_e("Operation")==attrOperation)
{
var amount=test.func_74769_h("Amount");
amount=amount+attrAmount;
test.func_74780_a("Amount",amount);
break
}
if(n==attrList-1)
{
add(attrName,attrAmount,attrOperation);
break
}
}
};
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
function getNumber(string){
 var string1 = string.replace(/§[0-9]/g,"")
 return Number(string1.replace(/[^0-9]/ig,""))
}
function add(attribute,amount,operation,upitem)
{
var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
var UUID = Java.type("java.util.UUID");
var itemStack = upitem.getMCItemStack();
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

function invremoveitem(item,slot){
	if(item.field_77994_a<=1){
		var inv=player.getMCEntity().field_71071_by;
		inv.field_70462_a[slot]=null;
	}else{
		item.field_77994_a=(item.field_77994_a)-1
	}
}
function message(information){
var players = world.getAllServerPlayers()
for(a in players){
players[a].sendMessage(information)
}
}