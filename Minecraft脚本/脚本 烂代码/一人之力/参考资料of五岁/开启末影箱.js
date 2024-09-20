var EntityPlayerMP = Java.type("net.minecraft.entity.player.EntityPlayerMP");
var command = new Command();
command.getCommandName = function () {
	return "myx";
}
command.getCommandUsage = function (sender) {
	return "/myx";
}
command.getRequiredPermissionLevel = function () {
	return 0;
}
command.processCommand = function (sender, args) {
	try {
		var EntityPlayerMP = Java.type("net.minecraft.entity.player.EntityPlayerMP");
		if (!sender instanceof EntityPlayerMP) {
			return;
		}
		var ScriptPlayer = Java.type("noppes.npcs.scripted.ScriptPlayer");
		var player = new ScriptPlayer(sender);
		player.getMCEntity().func_71007_a(player.getMCEntity().func_71005_bN());{
                }
	} catch (e) {
		npc.say(e)
	}
}
registerCommand(command);
function Command(name, usage) {
	this.getCommandName = function () {
		/*String getCommandName()
		 *应返回指令的名字
		 *如:ppes 则返回noppes
		 */
	};
	this.getCommandUsage = function (sender) {
		/*String getCommandUsage(ICommandSender sender)
		 *应返回指令的用法
		 *当玩家输入"/help 你的指令名" 的时候就会出现
		 *sender:指令发送者 可能是玩家 控制台 命令方块 或者其他什么
		 */
	};
	this.processCommand = function (sender, args) {
		/*void processCommand(ICommandSender sender, String[] args)
		 *在玩家使用该指令时会调用本函数
		 *sender:指令发送者 可能是玩家 控制台 命令方块 或者其他什么
		 *args:指令的参数
		 */
	};
	this.addTabCompletionOptions = function (sender, args) {
		return null;
		/*List addTabCompletionOptions(ICommandSender sender, String[] args)
		 *用于tab自动补全
		 *应返回补全后的参数
		 *sender:指令发送者 可能是玩家 控制台 命令方块 或者其他什么
		 *args:指令的参数
		 */
	};
	this.getRequiredPermissionLevel = function () {
		return 0;
		/*int getRequiredPermissionLevel
		 *指令所需的权限 0表示所有人可用 4表示OP可用
		 *应返回权限等级
		 */
	}
	this.canCommandSenderUseCommand = function () {
		return true;
	}
	//上方函数以1.7.10的方法为准
	//1.12.2修改函数时补全参数后通用。
	this.getMCCommand = function () {
		var CommandBase = Java.type("net.minecraft.command.CommandBase");
		var MCCommand = Java.extend(CommandBase, {
				func_71517_b: this.getCommandName,
				func_71518_a: this.getCommandUsage,
				func_71515_b: this.processCommand,
				func_71516_a: this.addTabCompletionOptions,
				func_82362_a: this.getRequiredPermissionLevel,
				func_71519_b: this.canCommandSenderUseCommand,
			});
		return new MCCommand();
	}
}
function registerCommand(command) {
	var MinecraftServer = Java.type("net.minecraft.server.MinecraftServer");
	var server = MinecraftServer.func_71276_C();
	if (!(command instanceof Command)) {
		return;
	}
	server.func_71187_D().func_71560_a(command.getMCCommand())
}
