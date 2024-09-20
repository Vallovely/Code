function Command(name,usage){
 this.getCommandName=function(){
  /*String getCommandNamee()
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
   func_184883_a:this.addTabCompletionOptions,
   func_184882_a:this.canCommandSenderUseCommand
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
*-bus:你可以指定EventBus
*Return:
*-Listener:监听器
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
*void unListenEvent(String eventType,IEventListener listener,EventBus bus)
*-eventType:事件的类路径 如net.minecraftforge.event.ServerChatEvent
*-listener:事件方法
*-bus:你可以指定EventBus
*取消监听事件
*/
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
/**
*@Author Hueihuea
*著作权属于Hueihuea 2019/6/16起生效
*/
var HotNPC = Java.type("mchhui.hotnpc.HotNPC");
var Tempdata = Java.type("mchhui.hotnpc.utlis.Tempdata");
var tempdata = HotNPC.tempdata;
var listeners;
var listenerName = ["ChatStyle-ChatListener"];
var StoreddataManager = Java.type("mchhui.hotnpc.utlis.StoreddataManager");
if(!tempdata.has("star.chat.title")){
 tempdata.set("star.chat.title",StoreddataManager.getStoreddata("star.chat.title"))
}
if(!tempdata.has("star.chat.shutup")){
 tempdata.set("star.chat.shutup",StoreddataManager.getStoreddata("star.chat.shutup"))
}
var shutupData = tempdata.get("star.chat.shutup");
var titleData = tempdata.get("star.chat.title")
if (!tempdata.has("listeners")) {
  tempdata.set("listeners", new Tempdata());
}
listeners = tempdata.get("listeners");
if (!listeners.has(listenerName[0])) {
  listeners.set(listenerName[0], listenEvent("net.minecraftforge.event.ServerChatEvent", "HIGH",
    function (event) {
     try{
      var MinecraftServer = Java.type("net.minecraft.server.MinecraftServer");
      var EntityPlayerMP = Java.type("net.minecraft.entity.player.EntityPlayerMP");
      var player = getScriptEntity(event.player);
      var player1=getPlayer(event.username);
      if(player1==null){
       return;
      }
      event.setCanceled(true);
      if(shutupData.has("#全体禁言#")){
       var shutup = shutupData.get("#全体禁言#")
       if(shutup==1&&!isOp(event.username)){
        player.sendMessage("§c管理员开启了全员禁言！你不是管理员，无法发言！")
        return;
       }
      }
      if(shutupData.has(event.username)){
       var time = Date.now();
       var shutupTime = shutupData.get(event.username)
       if(time<shutupTime){
        player.sendMessage("§c你已经被禁言！离禁言结束还剩 "+Math.round(((shutupTime-time)/1000))+" 秒！")
        return;
       }
      }
      var name = player.getDisplayName();
      var dj = world.getScoreboard().getPlayerScore(player.getName(),"Soul_Level","dummy")
      if(titleData.has(event.username+"prefix")){
       var chatPrefix = titleData.get(event.username+"prefix")
      }else{
       var chatPrefix = ""
      }
      if(titleData.has(event.username+"suffix")){
       var chatSuffix = titleData.get(event.username+"suffix")
      }else{
       var chatSuffix = ""
      }
      if(dj<0){
       var dj =0
      }
      var lvl="§e[lv."+dj+"]§r";
      if(!isOp(player.getName())){
       var col = "§a§l"
       var nmc = "§2§l"
      }else{
       var col = "§e§l"
       var nmc = "§4§l"
      }
      var vip = world.getScoreboard().getPlayerScore(player.getName(),"vip","dummy")
      if(vip<=0){
       var vipp = ""
      }
      if(vip==1){
       var vipp = "§a§l[VIP1]"
       var col = "§a"
      }
      if(vip==2){
       var vipp = "§b§l[VIP2]"
       var col = "§b"
      }
      if(vip==3){
       var vipp = "§d§l[VIP3]"
       var col = "§d"
      }
      if(vip>=4){
       var vipp = "§6§l[VIP4]"
       var col = "§6"
      }
      var team = MinecraftServer.func_71276_C().func_71218_a(0).func_96441_U().func_96509_i(player.getName());
      if(team!=null){
       var name=team.func_96668_e()+chatPrefix+team.func_96663_f()+vipp+nmc+name+chatSuffix;
      }else{
       var name=chatPrefix+vipp+nmc+name+chatSuffix;
      }
      var 公会="";
      if(dj > 0){
        wh = player.getInventory()[0].getDisplayName()
      }else{
        wh = "§7未觉醒"
      }
      whh = "§e[武魂:"+wh+"§e]"
      io=new IONPC();
      gh=io.get("所属公会")
      gh=gh[player.getName()];
      bl=io.get("伴侣")
      bl=bl[player.getName()]
      xb=io.get("性别")
      xb=xb[player.getName()]
      if(xb == undefined){
        xb = "未确定"
      }
      if(bl == undefined){
        bl = "无"
      }
      伴侣 = "§d§l[伴侣:§a§l"+bl+"]"
      性别 = "§f§l[性别:§a§l"+xb+"]"
      if(!(gh==undefined||gh=="无")){
        公会=gh.replace(/&/g,"§");
      }
      var mt = io.get("谜题")
      if(mt["server"] != undefined){
      if(event.message == mt["server"][1]){
        messages("&f[&a公告&f]恭喜"+player.name+"成功答对了来自"+mt["server"][2]+"的谜题,获得了"+npc.getHeldItem().getDisplayName()+"&f*"+npc.getHeldItem().getStackSize())
        npc.giveItem(player,npc.getHeldItem())
        npc.setHeldItem(null)
        mt["server"] = undefined
        io.set("谜题",mt)
      }
      } 
      var said = player.getTempData("said")
      var message = col+event.message
      message = "§b§l[LV."+dj+"]§a "+whh+name+公会+性别+伴侣+"§7 >>> "+message
      var banned = ["加群","领取","购买","外挂","压测","弱智"]
      for(x in banned){
        if(event.message.indexOf(banned[x]) > -1){
          message = message.replace(banned[x],"*")
        }
      }
      var chat = player.getTempData("liaotian")
      var date = new Date()
      var time = date.getTime()
      if(event.message.length < 40){
      if(event.message != player.getTempData("said")){
      if(chat <= time||isOp(player.getName())){
      sendChatMessage(player,col,message);
      player.setTempData("said",event.message)
      player.setTempData("liaotian",date.getTime()+3000)}else{
      player.sendMessage("&r&l请适当降低你的聊天速度。")}
  }else{
    player.sendMessage("&r&l请勿重复发言。")
}
}else{
  player.sendMessage("&r&l当前发言字数过多。")
}
     }catch(e){npc.say(e+e.lineNumber)}
    }));
 npc.say("§d[聊天]聊天监听注册成功！")
}
//unListenEvent(listeners.get(listenerName[0]).getEventType(),listeners.get(listenerName[0]).getListener(),listeners.get(listenerName[0]).getBus());
//listeners.remove(listenerName[0]);
function setQuestion(q,a,p,t,i){
  var io = new IONPC()
  var mt = io.get("谜题")
  if(mt["server"] == undefined){
    mt["server"] = [q,a,p.name]
    npc.setHeldItem(i)
    io.set("谜题",mt)
    messages("&f[&a全服公告&f]&a "+p.name+" &f出了一道谜题:&b "+q+" &f提示为: &b"+t)
  }
}
function messages(information){
var players = world.getAllServerPlayers()
for(a in players){
players[a].sendMessage(information)
}
}
function sendChatMessage(player,col,message) {
 message = message.replaceAll("\\\\","").replaceAll("'","\\\'").replaceAll('"',"''")
 var str1 = message.split("show");
 var lt = str1.length;
 var str2 = "";
 for(var x = 0;x<lt;x++){
  if(x == lt-1){
   str1[x] = "{text:\""+col+str1[x]+"\"}";
   str2 = str2 + str1[x];
   break;
  }
  str1[x] = "{text:\""+col+str1[x]+"\"},";
  str2 = str2+str1[x];
  if(player.getHeldItem()!=null){
   var tag=String(player.getHeldItem().getMCItemStack().field_77990_d);
   var Item = Java.type("net.minecraft.item.Item");
   var id = Item.func_150891_b(player.getHeldItem().getMCItemStack().func_77973_b())
   tag=tag.replaceAll('"','');
   var name=player.getHeldItem().getDisplayName()
   str2 = str2+'{text:"§f['+name+'§f]","hoverEvent":{"action":"show_item","value":"{id:'+id+',tag:'+tag+'}"}},';
  }
 }
 npc.executeCommand('tellraw @a ['+str2+']')
}
function getScriptEntity(entity) {
  var ScriptController = Java.type("noppes.npcs.controllers.ScriptController");
  if (entity == null) {
    return null;
  }
  return ScriptController.Instance.getScriptForEntity(entity);
}
function isOp(playerName) {
  var MinecraftServer = Java.type("net.minecraft.server.MinecraftServer");
  var ops = MinecraftServer.func_71276_C().func_71203_ab().func_152606_n();
  for (var x in ops) {
    if (ops[x] == playerName) {
      return true;
    }
  }
  return false;
}
function getPlayer(playerName){
 var MinecraftServer=Java.type("net.minecraft.server.MinecraftServer");
 var ScriptController=Java.type("noppes.npcs.controllers.ScriptController");
 var playerList=MinecraftServer.func_71276_C().func_71203_ab().field_72404_b;
 var player;
    for (var i=0;i<playerList.size();i++) {
      player=ScriptController.Instance.getScriptForEntity(playerList.get(i));
        if(player.getName()==playerName){
         return player;
        }
    }
}
var CommandChat = new Command();
CommandChat.getCommandName=function(){
 return "lt"
}
CommandChat.getCommandUsage=function(sender){
 return "/lt help 查看具体说明"
}
CommandChat.getRequiredPermissionLevel=function(){
 return 0;
}
CommandChat.addTabCompletionOptions=function(sender,args){
 var params = [];
 if(args.length == 1){
  params = [
   "help",
   "player",
   "banchat",
  ]
 }
 if(args.length == 2){
  if(args[0]=="player"){
   params = [
    "setprefix",
    "setsuffix",
    "clearP",
    "clearS"
   ]
  }
  if(args[0]=="banchat"){
   params = [
    "#all#"
   ]
   var allPlayers = world.getAllServerPlayers()
   for(var x=0 in allPlayers){
    params.push(allPlayers[x].getName())
   }
  }
 }
 if(args.length == 3){
  if(args[0]=="player"){
   if(args[1]=="setprefix"||args[1]=="setsuffix"||args[1]=="clearP"||args[1]=="clearS"){
    var allPlayers = world.getAllServerPlayers()
    for(var x=0 in allPlayers){
     params.push(allPlayers[x].getName())
    }
   }
  }
 }
 return getListOfStringsMatchingLastWord(args[args.length - 1], [params], true);
}
CommandChat.processCommand = function(sender,args){
 var EntityPlayerMP = Java.type("net.minecraft.entity.player.EntityPlayerMP");
 if(!sender instanceof EntityPlayerMP){
  return;
 }
 var player = getScriptEntity(sender);
 if(!isOp(player.getName())){
  player.sendMessage("§d[聊天]§c权限不足！")
  return;
 }
 if(args.length==2){
  if(args[0]=="banchat"&&args[1]=="#all#"){
   if(shutupData.has("#全体禁言#")&&shutupData.get("#全体禁言#")==1){
    shutupData.set("#全体禁言#",0)
    player.sendMessage("§d[聊天]§f已关闭全员禁言")
    var allPlayers = world.getAllServerPlayers()
    for(var x=0 in allPlayers){
     allPlayers[x].sendMessage("§d[聊天]§f管理员关闭了全员禁言")
    }
    return;
   }else{
    shutupData.set("#全体禁言#",1)
    player.sendMessage("§d[聊天]§f已开启全员禁言")
    var allPlayers = world.getAllServerPlayers()
    for(var x=0 in allPlayers){
     allPlayers[x].sendMessage("§d[聊天]§f管理员开启了全员禁言")
    }
    return;
   }
  }
 }
 if(args.length==3){
  if(args[0]=="banchat"){
   var now = Date.now()
   if(Number(args[2])+""=="NaN"&&args[2]!="clear"){
    player.sendMessage("§d[聊天]§c参数错误！")
    return;
   }
   if(args[2]=="clear"){
    shutupData.set(args[1],now)
    player.sendMessage("§d[聊天]已解除对 "+args[1]+" 的禁言")
    var player1 = getPlayer(args[1])
    if(player1!=null){
     player1.sendMessage("§d[聊天]§f你已经被解除禁言！")
    }
    return;
   }
   var time = Math.floor(Number(args[2]))*1000
   shutupData.set(args[1],now+time)
   player.sendMessage("§d[聊天]已将 "+args[1]+" 禁言 "+(time/1000)+" 秒")
   var player1 = getPlayer(args[1])
   if(player1!=null){
    player1.sendMessage("§d[聊天]§f你被禁言 "+(time/1000)+" 秒！")
   }
   return;
  }
  if(args[0]=="player"&&args[1]=="clearP"){
   titleData.set(args[2]+"prefix","")
   player.sendMessage("§d[聊天]已清除 "+args[2]+" 的前缀")
   return;
  }
  if(args[0]=="player"&&args[1]=="clearS"){
   titleData.set(args[2]+"suffix","")
   player.sendMessage("§d[聊天]已清除 "+args[2]+" 的后缀")
   return;
  }
 }
 if(args.length==4){
  if(args[0] == "guess"){
    var io = new IONPC()
    var mt = io.get("谜题")
    if(mt["server"] == undefined){
    setQuestion(args[1],args[2],player,args[3],player.getHeldItem())
    player.setHeldItem(null)
    return;
  }else{
    player.sendMessage("&r&l服务器现在已经有一道谜题了！请等待别人回答正确！")
    return;
  }
  }
  if(args[0]=="player"){
   if(args[1]=="setprefix"){
    var title1 = args[3].replaceAll("&","§")
    titleData.set(args[2]+"prefix",title1)
    npc.executeCommand("tellraw "+player.getName()+" \"§d[聊天]§f已将 "+args[2]+" 的前缀设置为 "+title1+"\"")
    return;
   }
   if(args[1]=="setsuffix"){
    var title1 = args[3].replaceAll("&","§")
    titleData.set(args[2]+"suffix",title1)
    npc.executeCommand("tellraw "+player.getName()+" \"§d[聊天]§f已将 "+args[2]+" 的后缀设置为 "+title1+"\"")
    return;
   }
  }
 }
 help(player);
 return;
}
function help(player){
 var messages = [
  "§f§m----[§b§m----------§e =§9I§ebetter chat§e§9I§E= §b§m----------§f§m]----",
  "§f/lt player setprefix {玩家名} {前缀} 将 {玩家名} 的前缀设置为 {前缀}",
  "§f/lt player setsuffix {玩家名} {后缀} 将 {玩家名} 的后缀设置为 {后缀}",
  "§f/lt player clearP {玩家名} 清除 {玩家名} 的前缀",
  "§f/lt player clearS {玩家名} 清除 {玩家名} 的后缀",
  "§f/lt banchat {玩家名} {时间} 将 {玩家名} 禁言 {时间} 秒",
  "§f/lt banchat {玩家名} clear 解除 {玩家名} 的禁言",
  "§f/lt banchat #all# 开启/关闭全员禁言",
  "§a/lt guess <question> <answer> <ts>设置一道谜题",
  "§f§m----[§b§m---------------------------§b§m----------§f§m]----",
 ]
 for(var y in messages){
  player.sendMessage(messages[y])
 }
}
function getListOfStringsMatchingLastWord(startsText, textArrays, ignoreCase) {
  var ArrayList = Java.type("java.util.ArrayList");
  var arr = new ArrayList();
  var textArray = textArrays.shift();
  if (textArray == null) {
    return arr;
  }
  if (ignoreCase) {
    startsText = startsText.toLowerCase();
  }
  for (var x in textArray) {
    var text = textArray[x];
    if (text == null) {
      continue;
    }
    if (ignoreCase) {
      text = text.toLowerCase();
    }
    if (text.startsWith(startsText)) {
      arr.add(textArray[x]);
    }
  }
  arr.addAll(getListOfStringsMatchingLastWord(startsText, textArrays))
  return arr;
}
var temp = world.getTempData("commandskill1")
if(temp != true){
registerCommand(CommandChat);
npc.say("&e注册成功")
world.setTempData("commandskill1",true)
} 
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