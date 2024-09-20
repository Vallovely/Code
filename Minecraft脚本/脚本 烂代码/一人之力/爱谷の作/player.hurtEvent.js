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
var apl=world.getAllServerPlayers()
for(i in apl){
apl[i].sendMessage("§b§l[系统]§r叮!穿甲/防御系统注册成功!")
}
var myDate = new Date();
var time="§d§l[§d§l"+myDate.getHours()+"§d§l:§d§l"+myDate.getMinutes()+"§d§l:§d§l"+myDate.getSeconds()+"§d§l]";
listenEvent("net.minecraftforge.event.entity.living.LivingHurtEvent","HIGH",function(event){
try{
	var EntityPlayerMP=Java.type("net.minecraft.entity.player.EntityPlayerMP")
	var Entity=Java.type("net.minecraft.entity.Entity");
	var EntityDamageSource=Java.type("net.minecraft.util.EntityDamageSource")
	var ScriptPlayer=Java.type("noppes.npcs.scripted.ScriptPlayer")
	var ScriptEntity=Java.type("noppes.npcs.scripted.ScriptEntity")
	if(!(event.entityLiving instanceof EntityPlayerMP)){
		return;
	}
	var player=new ScriptPlayer(event.entityLiving);
	var Def = player.getStoredData("PDEF")
	event.ammount=Math.max(0,event.ammount-Number(Def))
	var entity=new ScriptEntity(event.source.func_76346_g());
	var delta=Math.random()*9
	if(player.getHealth()-event.ammount<=0&&entity!=null){
		event.ammount*=0;
		player.setPosition(-892,4,1341)
		player.setHealth(player.getMaxHealth())
		npc.executeCommand("/playsound fireworks.launch "+player.getName())
		npc.executeCommand("/playsound fireworks.launch "+player.getName())
		npc.executeCommand("/playsound fireworks.launch "+player.getName())
		if(entity.getStoredData("NAME")!=null){
		    apl[i].sendMessage(deathMessage(delta,player.getName(),entity.getStoredData("NAME")));
		}
		if(entity.getStoredData("NAME")==null){
			apl[i].sendMessage(deathMessage(delta,player.getName(),"§d§l未知的生命体"));
		}
	}
}catch(err){
	if(err=="java.lang.NullPointerException"){
		apl[i].sendMessage(deathMessage(delta,player.getName(),"§d§l不可抗拒力"));
	}else{
		npc.say("§b§l[系统]:§rBUG报错§c"+err)
	}
}
}
)
/**
*@Author Vallovely
*著作权属于Vallovely 2022/1/16起生效
**/
/*xx被xx带去见了伟大的旧日支配者—克苏鲁
xx的脑子被xx"砰"地变成了地板摆设
xx被xx阴阳怪气而至精神错乱
xx被xx拿去兑换成了小熊饼干
xx在与xx战斗时不幸血洒长城*/
function deathMessage(delta,deather,killer){
	if(0<=delta&&delta<1){
		return "§b§l[系统]§r§l玩家§a§l"+deather+"§r§l不幸败于"+killer;
	}
	if(1<=delta&&delta<2){
		return "§b§l[系统]§r§l玩家§a§l"+deather+"§r§l莫名其妙地被"+killer+"§r§l带回姥姥家";
	}
	if(2<=delta&&delta<3){
		return "§b§l[系统]§r§l玩家§a§l"+deather+"§r§l幸运地被"+killer+"§r§l抹杀";
	}
	if(3<=delta&&delta<4){
		return "§b§l[系统]§r§l玩家§a§l"+deather+"§r§l被"+killer+"§r§l带去见了克鲁苏";
	}
	if(4<=delta&&delta<5){
		return "§b§l[系统]§r§l玩家§a§l"+deather+"§r§l的脑子被"+killer+'§r§l§e§l砰§r§l地变成了地板摆设';
	}
	if(5<=delta&&delta<6){
		return "§b§l[系统]§r§l玩家§a§l"+deather+"§r§l被"+killer+'§r§l阴阳怪气而精神错乱';
	}
	if(6<=delta&&delta<7){
		return "§b§l[系统]§r§l玩家§a§l"+deather+"§r§l被"+killer+'§r§l拿去兑换小熊饼干§e§l真香~';
	}
	if(7<=delta&&delta<8){
		return "§b§l[系统]§r§l玩家§a§l"+deather+"§r§l被"+killer+'§r§l塞进了红包里§c§l新年快乐~';
	}
	if(8<=delta&&delta<=9){
		return "§b§l[系统]§r§l玩家§a§l"+deather+"§r§l被"+killer+'§r§l当成爆竹燃放§c§l新年快乐~';
	}
}
/**
*@Author Vallovely
*著作权属于Vallovely 2022/1/27起生效
**/