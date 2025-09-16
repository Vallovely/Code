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
*-bus:你可以指定EventBus
*Return:
*-Listener:监听器
*监听事件并返回监听对象
*/
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
    if(priority=="LOWEST"){
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
*void unListenEvent(String eventType,IEventListener listener,EventBus bus)
*-eventType:事件的类路径 如net.minecraftforge.event.ServerChatEvent
*-listener:事件方法
*-bus:你可以指定EventBus
*取消监听事件
*/
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
*/