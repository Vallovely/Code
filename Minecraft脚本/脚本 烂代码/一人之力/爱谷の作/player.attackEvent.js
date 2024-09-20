function Listener(eventType,listener,bus){
 var MinecraftForge=Java.type("net.minecraftforge.common.MinecraftForge");
 this.eventType=eventType;
 this.listener=listener;
 this.bus=(bus==null)?MinecraftForge.EVENT_BUS:bus;
 this.getEventType=function(){
  return this.eventType;
 }
 this.getListener=function(){
  return this.listener;
 }
 this.getBus=function(){
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
*bus: event.entityPlayer在这个事件就是玩家
**/
function listenEvent(eventType,priority,listener,bus){
 var Event=Java.type(eventType);
    try{
     var IEventListener=Java.type("net.minecraftforge.fml.common.eventhandler.IEventListener");
     var EventPriority=Java.type("net.minecraftforge.fml.common.eventhandler.EventPriority");
    }catch(err){
     var IEventListener=Java.type("cpw.mods.fml.common.eventhandler.IEventListener");
     var EventPriority=Java.type("cpw.mods.fml.common.eventhandler.EventPriority");
    }
 var MinecraftForge=Java.type("net.minecraftforge.common.MinecraftForge");
 var event=new Event();
    if(priority=="LOW"){
     priority=EventPriority.LOW;
    }
    if(priority=="HIGH"){
     priority=EventPriority.HIGH;
    }
    if(priority=="NORMAL"){
     priority=EventPriority.NORMAL;
    }
    if(priority=="LOWEST"){dddd
     priority=EventPriority.LOWEST;
    }
    if(priority=="HIGHEST"){
     priority=EventPriority.HIGHEST;
    }
 var EventListener=Java.extend(IEventListener,{
  invoke:listener
 });
 listener=new EventListener();
 var bus=(bus==null)?MinecraftForge.EVENT_BUS:bus;
 var busID=bus.class.getDeclaredField("busID");
 busID.setAccessible(true);
 busID=busID.getInt(bus);
 event.getListenerList().register(busID,priority,listener);
 return new Listener(eventType,listener,bus);
}
/**
*void unListenEvent(IEventListener listener)
*-listener:事件方法
*取消监听事件
**/
function unListenEvent(eventType,listener,bus){
 var Event=Java.type(eventType);
 var MinecraftForge=Java.type("net.minecraftforge.common.MinecraftForge");
 var event=new Event();
 var bus=(bus==null)?MinecraftForge.EVENT_BUS:bus;
 var busID=bus.class.getDeclaredField("busID");
 busID.setAccessible(true);
 busID=busID.getInt(bus);
 event.getListenerList().unregister(busID,listener);
}
/**
*@Author Hueihuea
*著作权属于Hueihuea 2019/6/16起生效
**/

listenEvent("net.minecraftforge.event.entity.living.LivingHurtEvent","HIGH",function(event){
try{
	var EntityPlayerMP=Java.type("net.minecraft.entity.player.EntityPlayerMP")
	var Entity=Java.type("net.minecraft.entity.Entity");
	var EntityDamageSource=Java.type("net.minecraft.util.EntityDamageSource")
	var ScriptPlayer=Java.type("noppes.npcs.scripted.ScriptPlayer")
	var ScriptEntity=Java.type("noppes.npcs.scripted.ScriptEntity")
	if(!(event.source instanceof EntityDamageSource)){
		return;
	}
	if(!(event.source.func_76346_g() instanceof EntityPlayerMP)){
		return;
	}
     var target=new ScriptPlayer(event.source.func_76346_g())
     var entity=new ScriptEntity(event.entityLiving)
	 var base=event.ammount 	 
     /**以下自由代码区域**/
	 var myDate = new Date();
	 var time="§d§l[§d§l"+myDate.getHours()+"§d§l:§d§l"+myDate.getMinutes()+"§d§l:§d§l"+myDate.getSeconds()+"§d§l]"
	 var Def = entity.getStoredData("DEF")
	 var Dpp = target.getStoredData("DPP")
     var gT = target.getStoredData("player.getAttackTarget")
	 if(Def!==null&&Dpp!==null){
		 var delta=Math.min(1,(1.5*Def)/(Def+Dpp))
		 var deltaS=String(delta*100).substring(0,4)
		 if(delta==1){
			 target.sendMessage("§b§l[系统]§r§l你的§c§l意志§r§l不足,无法击破"+entity.getStoredData("NAME")+"§r§l的防御")
			 target.setStoredData("player.getAttackTarget1",entity.getStoredData("NAME"))
		 }
		 if(gT!=entity.getStoredData("NAME")&&delta!=1){
			 target.sendMessage("§b§l[系统]§r§l目标"+entity.getStoredData("NAME")+"§r§l对你的伤害减免比为§c§l"+deltaS+"/100")
			 target.setStoredData("player.getAttackTarget",entity.getStoredData("NAME"))
		 }
		 event.ammount=Math.floor(event.ammount*(1-delta))
	 }
	 /**以上自由代码区域**/	 
	 }catch(err){
	 npc.say("§b§l[系统]:§rBUG报错§c"+err)
	 }
	 /**报错部分**/	 
});
var apl=world.getAllServerPlayers()
for(i in apl){
apl[i].sendMessage("§b§l[系统]§r叮!穿甲/防御系统注册成功!")
}
/**
*@Author Vallovely
*著作权属于Vallovely 2022/1/27起生效
**/
	



