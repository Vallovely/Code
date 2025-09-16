/**
 * @author Hueihuea
 * @version 2020.01.24.00.27
 */

/** 
 * 枚举优先级
 * @enum {*} BukkitEventPriority.LOWEST  最低;
 * @enum {*} BukkitEventPriority.LOW     较低;
 * @enum {*} BukkitEventPriority.NORMAL  正常;
 * @enum {*} BukkitEventPriority.HIGH    较高;
 * @enum {*} BukkitEventPriority.HIGHEST 很高;
 * @enum {*} BukkitEventPriority.MONITOR 最高;
 * @description 注意 在MONITOR优先级下 您不应该对事件进行任何操作 它仅仅是为监听而存在。
 */
 //修改自 灰佬的1.7.10监听bukkit
function init (e){
function BukkitEventPriority() {
  BukkitEventPriority.LOWEST;
  BukkitEventPriority.LOW;
  BukkitEventPriority.NORMAL;
  BukkitEventPriority.HIGH;
  BukkitEventPriority.HIGHEST;
  BukkitEventPriority.MONITOR;
}
{
  var EventPriority = Java.type("org.bukkit.event.EventPriority");
  BukkitEventPriority.LOWEST = EventPriority.LOWEST;
  BukkitEventPriority.LOW = EventPriority.LOW;
  BukkitEventPriority.NORMAL = EventPriority.NORMAL;
  BukkitEventPriority.HIGH = EventPriority.HIGH;
  BukkitEventPriority.HIGHEST = EventPriority.HIGHEST;
  BukkitEventPriority.MONITOR = EventPriority.MONITOR;
}
/**
 * 用于构建一个监听器对象
 * @param {String} event 要监听的事件
 * @param {"org.bukkit.event.EventPriority"} priority 优先级
 * @param {Function} executeFunction 执行函数
 * @param {Boolean} ignoreCancelled 可空，是否跳过已撤销的事件
 * @param {"org.bukkit.event.Listener"} listener 可空，监听器对象
 * @param {"org.bukkit.plugin.Plugin"} plugin 可空，插件对象
 * @see BukkitEventPriority
 */
function BukkitEventListener(event, priority, executeFunction, ignoreCancelled, listener, plugin) {
  var server = Java.type("org.bukkit.Bukkit").getServer();
  var Class = Java.type("java.lang.Class");
  var eventType = Class.forName(event);
  if (!Class.forName("org.bukkit.event.Event").isAssignableFrom(eventType)) {
    throw new Error("The event isn't a bukkit event.");
  }
  var RegisteredListener = Java.type("org.bukkit.plugin.RegisteredListener");
  ignoreCancelled = (ignoreCancelled == null) ? false : ignoreCancelled;
  listener = Java.extend(Java.type("org.bukkit.event.Listener"), {});
  listener = new listener();
  plugin = Java.extend(Java.type("org.bukkit.plugin.Plugin"), {
    getDescription: function () {
      var PluginDescriptionFile = Java.type("org.bukkit.plugin.PluginDescriptionFile");
      return new PluginDescriptionFile("FakePlugin", "1.0", "null")
    },
    isEnabled: function () {
      return true;
    }
  });
  plugin = new plugin();
  var executor = Java.extend(Java.type("org.bukkit.plugin.EventExecutor"), {
    execute: function (paramListener, paramEvent) {
      try {
        var Class = Java.type("java.lang.Class");
        if (!eventType.isAssignableFrom(paramEvent.getClass())) {
          return;
        }
        var CustomTimingsHandler = Java.type("org.spigotmc.CustomTimingsHandler");
        var timings = new CustomTimingsHandler("World:DIM" + e.npc.world.getMCWorld().field_73011_w.field_149088_a
          + ",Pos:" + e.npc.x + "," + e.npc.y + "," + e.npc.z
          + ",NPCEntityUUID:" + e.npc.getMCEntity().func_110124_au()
          + ",Engine:" + engine
          + ",Context:" + context);
        var isAsync = paramEvent.isAsynchronous();
        if (!isAsync) {
          timings.startTiming();
        }
        executeFunction.call(null, paramEvent);
        if (!isAsync) {
          timings.stopTiming();
        }
      } catch (err) {
        var InvocationTargetException = Java.type("java.lang.reflect.InvocationTargetException");
        var EventException = Java.type("org.bukkit.event.EventException");
        if (err instanceof InvocationTargetException) {
          throw new EventException(err.getCause());
        }
        throw new EventException(err);
      }
    }
  });
  executor = new executor();
  var registeredListener = new RegisteredListener(listener, executor, priority, plugin, ignoreCancelled);
  /**
   * 用于注册这个监听器
   */
  this.register = function () {
    this.getEventListeners().register(registeredListener);
  }
  /**
   * 用于撤销这个监听器 
   */
  this.unregister = function () {
    this.getEventListeners().unregister(registeredListener);
  }
  this.getEventListeners = function () {
    var manager = server.getPluginManager();
    var getEventListeners = manager.getClass().getDeclaredMethod("getEventListeners", Class.forName("java.lang.Class"));
    getEventListeners.setAccessible(true);
    return getEventListeners.invoke(manager, eventType);
  }
}
//下为监听移动的例子
new BukkitEventListener(
    "org.bukkit.event.player.PlayerMoveEvent",
    EventPriority.NORMAL,
    function (event) {
      event.getPlayer().sendMessage("你移动了");
    }
  ).register();
}