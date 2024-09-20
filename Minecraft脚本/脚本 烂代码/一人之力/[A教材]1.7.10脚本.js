  var theInventoryEnderChest = player.getMCEntity().func_71005_bN();获取玩家末影箱
  var slotsCount = theInventoryEnderChest.func_70302_i_();获取末影箱格子
   var itemstack = theInventoryEnderChest.func_70301_a(slot);

					请使用N++中的JavaScript语言格式查看此文件！

             方法：最上方的语言！J开头！JavaScript

			                              ---------by 不打酱油的酱油君



更新日志:
2019.8.11/20:42完成npc属性设置！！
2019.8.17/18:54完成外形设置,物品以及高级设置的设置npc身份与职业
2019.10.4/2:12完成高级设置中部分内容:台词,阵营,音效.增加新拓展内容<暂未开工>:脚本
2019.11.3/12:00完成高级设置中部分内容:对话框,完成全局设置中部分内容:对话框,将拓展内容:脚本 更新
2019.11.16/15:13完成全局设置中部分内容:npc合成表,npc合成表<拓展>,添加:自定义合成-<进阶:无尽贪婪><进阶:植物魔法><进阶:等价交换>
2019.12.4/0:09增加玩家拓展:更多关于玩家的操作,LivingBase + Living【生物】部分 增加新拓展:更自主buff,完善队伍部分的示例以及添加了更多api
2020.1.7/0:06增加玩家拓展:更自主的信息,LivingBase + Living【生物】部分添加更多api以及示例,添加新内容:白嫖福利中心<句型>
2020.9.16/1:35优化部分方法以及版面,添加部分方法//白嫖福利中心<句型>更新
2021.1.16/17:19紧急修改事件部分,添加 关闭对话事件 以及 对话事件 可用变量
	
[npc:
 {基础操作
  executeCommand("")
  让NPC输入指令,指令错误不会报错【npc.executeCommand("tellraw @a hhaha")】
 	
  getHomeX()
  获取NPC家的X坐标【npc.getHomeX()】
 	
  setHomeX()
  设置NPC家的X坐标
 	
  getHomeY()
  获取NPC家的Y坐标
 	
  setHomeY()
  设置NPC家的Y坐标
  
  getHomeZ()
  获取NPC家的Z坐标
  
  setHomeZ()
  设置NPC家的Z坐标
  
  getHome()
  获取NPC家的位置
  
  setHome(x,y,z)
  设置NPC家的位置【即X,Y,Z位置】
  
  getReturnToHome()
  获取NPC是否可以返回出生地
  
  setReturnToHome(是/否)
  设置NPC是否可以返回出生地，是为true，否为false 
  
  getAge()
  获取NPC存在了多久
  
  kill()
  让NPC死亡【npc.kill()】
  
  reset()
  重置NPC【npc.reset(),将npc所有数据变为你用npc魔杖召唤出来那样】
  
  giveItem(玩家,物品)
  给某玩家某物品【注意需要创建物品，下方的<物品>系列有讲到】【npc.giveItem(player,player.getHeldItem());】给予玩家手中的东西给玩家<手中不为空的情况下>
 } 
	
	
 {外形设置
  getName()
  获取NPC名字【npc.getName()】
  
  setName("名字")
  设置NPC名字
  
  getShowName()
  获取NPC在什么情况下显示名字，0为显示，1为隐藏，2为攻击时可见
  
  setShowName(数字)
  设置NPC在什么情况下显示名字【数字上方有列举】
  
  getTitle()
  获取NPC标题
  
  setTitle("")
  设置NPC标题【npc.setTitle("sss")】 
  
  {模型
   {四肢比例【scale】
   setHeadScale(x,y,z)
   设置NPC的头【最大0-2，小数位：两位小数】   
 		
 		setBodyScale(x,y,z)
 		设置NPC的身体【最大0-2，小数位：两位小数】
 		
 		setArmsScale(x,y,z)
 		设置NPC的手【最大0-2，小数位：两位小数】
 		
 		setLegsScale(x,y,z)
 		设置NPC的腿【最大0-2，小数位：两位小数】
 		}
 	}
 	
 	npc.getMCEntity().display.skinType=数字
  设置npc的皮肤类型,0为<默认>类型【即选择路径】,1为<玩家>类型【即填入玩家名字】,2为<url>类型【即填入网站链接】,【去掉 "=皮肤路径 or 玩家名字 or 网站"即为获取,如：npc.getMCEntity().display.skinType】
 	
 	getTexture()
 	获取NPC的<默认>类型皮肤【print(npc.getTexture())】
 	
 	setTexture(路径)
 	设置NPC皮肤,建议靠getTexture()获取路径示例,此为设置npc中的<默认>类型皮肤,若想要设置<玩家>类型皮肤需要使用下面方法【npc.setTexture("customnpcs:textures/entity/humanmale/ArcticSteve.png")】
 	
 	function setNpcTexture(name){
 		var MinecraftServer=Java.type("net.minecraft.server.MinecraftServer");
 		MinecraftServer=MinecraftServer.func_71276_C();
 		var GameProfile=MinecraftServer.func_152358_ax().func_152655_a("xiao_2419");
 		if(GameProfile!=null){
 			npc.getMCEntity().display.playerProfile=GameProfile;
 		}
 		npc.getMCEntity().display.playerProfile=null;
 	}
 	设置npc的<玩家>类型皮肤,若玩家名为不存在的玩家则设置为null【使用如:setNpcTexture("玩家名字")】
 	
 	npc.getMCEntity().display.playerProfile
 	获取<玩家>类型皮肤,若想获取其名字则为npc.getMCEntity().display.playerProfile.getName()
 	
 	npc.getMCEntity().display.url="下载链接"
 	设置npc的<url>类型皮肤,'下载链接'可以通过将皮肤图片上传至<微云,百度云>后"尝试"下载图片来复制其'下载链接'(百度有教程)
 	
 	npc.getMCEntity().display.cloakTexture="路径"
 	设置npc披风【获取npc披风:npc.getMCEntity().display.cloakTexture】
 
 	npc.getMCEntity().display.glowTexture=路径
 	设置npc附加材质
 	
 	getSize()
 	获取NPC尺寸
 	
 	setSize(数值)
 	设置NPC尺寸【最大30，超过则变为30】
 
  getVisibleType()
  获取NPC是否可见，0为可见，1为不可见，2为部分可见
 
 	setVisibleType(数字)
  设置NPC是否可见
  
  getShowBossBar()
  获取NPC的BOSS型血条在什么情况下显示，0为隐藏，1为显示，2为攻击时可见
  
  setShowBossBar(数字)
  设置NPC的BOSS型血条在什么情况下显示
 }	
	
	
 {属性设置
		getMaxHealth()
		获取NPC最大生命值【可用于player,entity】【npc.getMaxHealth()或player.getMaxHealth()或...】
		
		setMaxHealth(数字)
		设置NPC最大生命值【npc.setMaxHealth(100)】
		
		getHealth()
		获取NPC生命值【可用于player,entity】【npc.getHealth()或player.getHealth()或...】
		
		setHealth(数字)
		设置NPC生命值【可用于player,entity】【npc.setHealth(0)或player.setHealth(0)或...】
	
		npc.getMCEntity().stats.aggroRange=数字
		设置npc的主动攻击范围
	
		npc.getMCEntity().stats.immuneToFire=是/否
		npc是否会遭到火焰伤害,是为true,否为false
		
		npc.getMCEntity().stats.potionImmune=是/否
		npc是否会遭到药水效果,是为true,否为false
		
		npc.getMCEntity().stats.canDrown=是/否
		npc是否会溺水,是为true,否为false
		
		npc.getMCEntity().stats.burnInSun=是/否
		npc是否会在太阳下被燃烧,是为true,否为false
		
		npc.getMCEntity().stats.noFallDamage=是/否
		npc是否免疫掉落伤害,是为true,否为false
		
		{重生
			npc.getMCEntity().stats.spawnCycle=数字
			设置npc的重生类型<0为是,1为白天,2为夜晚,3为否>
			
			npc.getMCEntity().stats.respawnTime=数值
			设置npc的复活时间【如：npc.getMCEntity().stats.respawnTime=35,想获取数值直接npc.getMCEntity().stats.respawnTime即可】
			
			npc.getMCEntity().stats.hideKilledBody=是/否
			是否隐藏npc的尸体,是为true,否为false
			
			npc.getMCEntity().stats.respawnTime=是/否
			npc是否会自然消亡,是为true,否为false,即设置npc复活的Naturally Despawn
		}	

		{近战选项
			getMeleeStrength()
			获取NPC近战伤害
			
			setMeleeStrength()
			设置NPC近战伤害
			
			npc.getMCEntity().stats.attackRange=数字
			设置npc的攻击距离【如：npc.getMCEntity().stats.attackRange=55,想获取数值直接npc.getMCEntity().stats.attackRange即可】
			
			getMeleeSpeed()
			获取NPC近战攻击速度
			
			setMeleeSpeed(数字)
			设置NPC近战攻击速度
			
			npc.getMCEntity().stats.knockback=数值
			设置npc的击退距离
			
			npc.getMCEntity().stats.potionType=效果
			设置npc攻击生物所附带的药水效果,填入效果名,如:
			var EnumPotionType=Java.type("noppes.npcs.constants.EnumPotionType");
			npc.getMCEntity().stats.potionType=EnumPotionType.Fire;
			<None  Fire Poison Hunger Weakness Slowness Nausea Blindness Wither>
			<无效果 火  中毒    饥饿    虚弱     缓慢    反胃    失明      凋零 >
			获取则为npc.getMCEntity().stats.potionType
			
			npc.getMCEntity().stats.potionDuration=数字
			药水效果持续的时间
			
			npc.getMCEntity().stats.potionAmp=数字
			药水效果的强度
		}

		{远程选项
			shootItem(生物,物品,精准度)
			向生物发射一次投掷物,生物可以为player,npc或其他,物品需为ScriptItemStack实例,精准度会使投掷方向随机浮动一定值,例子:
			var item=world.createItem("minecraft:stone",0,1);//创建一个物品
			npc.shootItem(player,item,100);//向player发射投掷物
	
			npc.getMCEntity().stats.accuracy=数值
			设置npc远程攻击的精准度【如：npc.getMCEntity().stats.accuracy=100,想获取数值直接npc.getMCEntity().stats.accuracy即可】
  
			npc.getMCEntity().stats.rangedRange=数值
			设置npc远程攻击的距离
			
			npc.getMCEntity().stats.minDelay=数值
			设置npc远程攻击的最快速度
			
			npc.getMCEntity().stats.maxDelay=数值
			设置npc远程攻击的最慢速度
			
			npc.getMCEntity().stats.fireRate=数值
			设置npc远程攻击的连发间隔
			
			npc.getMCEntity().stats.burstCount=数值
			设置npc远程攻击的连发间隔
			
			npc.getMCEntity().stats.fireSound=名字
			设置npc远程攻击时发出的声音
			
			npc.getMCEntity().stats.shotCount=数值
			设置npc远程攻击的单发间隔
			
			getRangedBurst()
			获取NPC远程连发次数
			
			setRangedBurst(数值)
			设置NPC远程连发次数
  
			{弹药类型
				getRangedStrength()
				获取NPC远程攻击伤害
				
				setRangedStrength(数值)
				设置NPC远程攻击伤害
				
				npc.getMCEntity().stats.pImpact=数值
				设置npc弹药冲击距离
				
				npc.getMCEntity().stats.pSize=数值
				设置npc弹药的尺寸
				
				npc.getMCEntity().stats.pPhysics=是/否
				设置npc弹药是否受重力影响,是为true,否为false
				
				npc.getMCEntity().stats.pExplode=是/否
				设置npc弹药是否会爆炸,是为true,否为false
				
				npc.getMCEntity().stats.pEffect=数值
				设置npc弹药的附带药水效果,和近战攻击的一样,不再复写
				
				npc.getMCEntity().stats.pDur=数值
				设置npc弹药的附带药水效果持续时间
				
				npc.getMCEntity().stats.pArea=数值
				设置npc弹药的附带药水效果的强度
				
				npc.getMCEntity().stats.pTrail=类型
				设置npc弹药的跟踪类型,例子如:
				var EnumParticleType=Java.type("noppes.npcs.constants.EnumParticleType");
				npc.getMCEntity().stats.pTrail=EnumParticleType.Smoke
				<None,Smoke,Portal,Redstone,Lightning,LargeSmoke,Magic,Enchant,Crit>
				
				npc.getMCEntity().stats.pGlows=是/否
				设置npc弹药是否会发光,是为true,否为false
   
				npc.getMCEntity().stats.pRender3D=是/否
				设置npc弹药是否为3D,是为true,否为false,否则变为2D
				
				getRangedSpeed()
				获取NPC远程攻击子弹速度
				
				setRangedSpeed(数值)
				设置NPC远程攻击子弹速度
			}	
		}

		{抗性提升
			seExplosionResistance(数值)
			设置NPC是否防爆，0为-100％，1为0，2为100％【可加小数点】【npc.seExplosionResistance(2)】
			
			getExplosionResistance()
			获取NPC防爆值【npc.getExplosionResistance()】
			
			setMeleeResistance(数值)
			设置NPC近战抗性，0为-100％，1为0，2为100％【可加小数点】
			
			getMeleeResistance()
			获取NPC近战抗性【npc.getMeleeResistance()】
			
			setArrowResistance(数值)
			设置NPC弓箭抗性，0为-100％，1为0，2为100％【可加小数点】【npc.setArrowResistance(2)】
			
			getArrowResistance()
			获取NPC弓箭抗性
			
			setKnockbackResistance(数值)
			设置NPC击退抗性，0为-100％，1为0，2为100％【可加小数点】
			
			getKnockbackResistance()
			获取NPC击退抗性
		}
		
		getHealthRegen()
		获取NPC正常生命恢复
		
		setHealthRegen(数值)
		设置NPC正常生命恢复
		
		getCombatRegen()
		获取NPC被攻击时生命恢复
		
		setCombatRegen(数值)
		设置NPC被攻击时生命恢复
			
		npc.getMCEntity().stats.creatureType=类型
		设置npc的生物类型,填入英文名,如:
		var EnumCreatureAttribute=Java.type("net.minecraft.entity.EnumCreatureAttribute");
		npc.getMCEntity().stats.creatureType=EnumCreatureAttribute.ARTHROPOD;
		<UNDEFINED,UNDEAD,ARTHROPOD>
		<  普通     不死  节肢动物>
	}
	
	
 {AI
  setRetaliateType(数值)
  设置NPC发现敌人时的状态,0为反击,1为恐慌,2为撤退,3为无反应【npc.setRetaliateType(2)】
  
  getRetaliateType()
  获取NPC发现敌人时的状态【npc.getRetaliateType()】
 }
	
	
	{物品：
  先设置一个物品:
  world.createItem("物品",耐久,数量);
  如：world.createItem("minecraft:stone",0,1);
  就是创建一个石头物品,此时为ScriptItemStack实例
  {创建含有参数的物品:
   var SItem=world.createItem("minecraft:stone",0,1);
   SItem.setCustomName("test");
   SItem.setStackSize(64);
   player.setHeldItem(SItem);
   
   {拓展:自定义nbt
 	  
   }
  }
  
  getArmor()
  获取装备【在NPC中,0为头盔,1为胸甲,2为裤子,3为靴子】,【在玩家中,0为靴子,1为裤子,2为胸甲,3为头盔】
 
  setArmor(位置,物品)
  设置装备,物品需要为ScriptItem实例,例如:
 	player.setArmor(0,player.getHeldItem());
	 把玩家手中的物品设置为玩家的靴子
  
  getRightItem()
  获取NPC右手物品【即武器位置】【npc.getRightItem()】
  
  setRightItem(物品)
  设置NPC右手物品,物品需要为ScriptItem实例,例如:
	 player.setRightItem(player.getHeldItem());
	 把玩家手中的物品设置为npc右手的物品
  
  getProjectileItem()
  获取NPC射击物品【即箭位置】
  
  setProjectileItem(物品)
  设置NPC射击物品
  
  getLefttItem()
  获取NPC左手物品【即盾牌位置】
  
  setLeftItem(物品)
  设置NPC左手物品
  
  npc.getMCEntity().inventory.minExp=数值
  设置npc掉落经验的最小数值【去掉"=数值"即获取,如：npc.getMCEntity().inventory.minExp】
  
  npc.getMCEntity().inventory.maxExp=数值
  设置npc掉落经验的最大数值【获取同上】 
  
  npc.getMCEntity().inventory.lootMode=数字
  设置npc物品掉落的形式
	 0为普通【掉落物形式】
	 1为自动拾取【即auto pickup,物品会自动进到玩家背包,除非已满】
  
  npc.getMCEntity().inventory.items
  获取npc的掉落物列表
	 可以使用npc.getMCEntity().inventory.items[位置]单独获取.从0开始计数,最大8,如:
	 npc.getMCEntity().inventory.items[0];
	 设置其中的物品:
	 var stone=world.createItem("minecraft:stone",0,1);
	 npc.getMCEntity().inventory.items[位置]=stone.getMCItemStack();
	 设置时需要为ItemStack实例,ScriptItemStack实例 可用getMCItemStack()获取它的 ItemStack实例
  
  npc.getMCEntity().inventory.dropchance
  获取npc的掉落物几率列表,修改和单独获取同上,npc.getMCEntity().inventory.dropchance[位置]=数值,最大100,最小0
	}
	
	
	{高级设置
  {【身份】
   getRole()
   获取主职业【若要使用主职业设置必须输入,如:npc.getRole().hasOwner()】
   {雇佣随从
    setOwner("玩家")
    设置某NPC跟随玩家【npc.getRole().setOwner("玩家")】
    
				getOwner()
				获取某NPC跟随的玩家【npc.getRole().getOwner()】
				
				hasOwner()
				确认某NPC是否有跟随的玩家
				
				getDaysLeft()
				获取NPC距离雇佣期限还有几天
				
				addDaysLeft(天数)
				添加NPC雇佣期限天数
				
				getInfiniteDays()
				获取某NPC跟随的玩家期限是否为永久【npc.getRole().getInfiniteDays()】
				
				setInfiniteDays()
				设置某NPC跟随的玩家期限是否为永久，是为true，否为false
				
				getGuiDisabled()
				获取NPC是否禁用GUI
				
				setGuiDisabled(是/否)
				设置NPC是否禁用GUI
			}
			{商人
				getMarket()
				获取商店名称
				
				setSellOption(位置,物品1,物品2,兑换物)
				设置NPC商店兑换的物品,位置从0到17,物品可用createItem创建,兑换物也一样<若不需要物品2参与兑换,不填即可>
				例如:
				var item1=world.createItem("minecraft:grass",0,5);
				var item2=world.createItem("minecraft:iron",0,5);
				var out=world.createItem("minecraft:stone",0,64);
				npc.getRole().setSellOption(0,item1,item2,out);
					
				removeSellOption(位置)
				删除某个位置的兑换
				
				setMarket(商店名称)
				设置商店名称【即npc商人右下角那个Linked Marketname】
			}
		}

		{【职业】
			getJob()
			获取npc的职业【若要使用职业设置必须输入,如:npc.getJob().getSong()】
			
			{吟诗游人
				getSong()
				获取正在吟唱的歌曲
				
				setSong("路径")
				设置吟唱的歌曲【如：npc.getJob().setSong("armourersworkshop:burn")】
			}
			{雇佣随从
				getFollowingName()
				获取雇佣人的名字
				
				getFollowingNpc()
				获取被雇佣的NPC
				
				isFollowing()
				是否已被雇佣
				
				setFollowingName("名字")
				设置雇佣NPC人的名字
			}
			{治疗者
				heal(实体,血量)
				对某个实体进行治疗,例如:npc.getJob().heal(player.getMCEntity(),100);
				实体需要为EntityLivingBase实例
			}
			{召唤师
				spawnEntity(序号)
				让召唤师立即召唤某个召唤槽的NPC
				
				removeAllSpawned()
				删除所有召唤物
			}
			{模特
				getRotationX(部位)
				获取某部位的X值【0为头，1位身体，2位左手，3位右手，4为左脚，5为右脚】
				
				getRotationY(部位)
				获取某部位的Y值【0为头，1位身体，2位左手，3位右手，4为左脚，5为右脚】
					
				getRotationZ(部位)
				获取某部位的Z值【0为头，1位身体，2位左手，3位右手，4为左脚，5为右脚】
					
				setRotationX(部位,角度)
				设置某部位的X值
				
				setRotationY(部位,角度)
				设置某部位的Y值
				
				setRotationZ(部位,角度)
				设置某部位的Z值
					
				isEnabled(部位)
				是否开启了某部位
				
				setEnabled(部位,是/否)
				设置某部位是否开启【是为true,否为false】
			}	
		}	
		
		say("")
		让NPC说什么【若要让NPC说出获取的数值，去掉<"">】【npc.say("哈哈哈")】
		
		npc.getMCEntity().advanced.setRole(数字)
		设置npc的身份【示例如:npc.getMCEntity().advanced.setRole(1)】身份列表:{
			0     1      2         3      4          5       6
		None,Trader,Follower, Bank,Transporter,Postman,Companion
			无   商人  雇佣随从 储存者   传送师    信使     同伴  
		}
		
		<npc.getRole().getType()获取npc当前身份代表的数字,npc.getJob().getTpye()获取npc当前职业代表的数字>
		
		npc.getMCEntity().advanced.setJob(数字)
		设置npc的职业【示例与上无过大差别】,身份列表:{
			0       1        2        3         4          5          6           7             8           9   
			无   吟游诗人  治疗者   守卫    物品给予者   雇佣随从  召唤师      群体对话     区块加载者     模特
		None,  Bard,    Healer,  Guard,  ItemGiver,  Follower,  Spawner,  Conversation,  ChunkLoader,  Puppet
		}
		
		{台词:
			npc.getMCEntity().advanced.interactLines.lines[0].text="任意字符,除了全空格"
			设置npc交互对话中第一句为 "任意字符,除了全空格" ,获取则无需加 = ,如：npc.getMCEntity().advanced.interactLines.lines[0].text,其他四个事件也是如此:{
				npc.getMCEntity().advanced.worldLines.lines[0].text="中华70周年"       世界重启时,有点类似脚本中的运行
				npc.getMCEntity().advanced.attackLines.lines[0].text="中华70周年"      当npc攻击时
				npc.getMCEntity().advanced.killedLines.lines[0].text="中华70周年"      当npc死亡时
				npc.getMCEntity().advanced.killLines.lines[0].text="中华70周年"        当npc杀死生物时
			}
			
			npc.getMCEntity().advanced.interactLines.lines[0].sound="路径"
			设置npc交互对话中第一句话说出时伴随的音效<PS:路径请勿输入错误,否则没声音>
			
			npc.getMCEntity().advanced.interactLines.lines.size()
			获取当前npc交互对话中有几句可说的话,其他事件台词不再反复举例,与上方示例并无过大区别<PS:唯独有效的对话才能被算入,即有填入除了空格外的所有字符的>
			
			npc.getMCEntity().advanced.interactLines.orderedLines=是/否
			事件台词是否随机说出,是为true,否为false,默认为是
		}
		
		{阵营:
			npc.getMCEntity().advanced.attackOtherFactions=是/否
			设置npc是否攻击敌对阵营,是为true，否为false
			
			npc.getMCEntity().advanced.defendFaction=是/否
			设置npc是否保护阵营中的人,是为true，否为false
		}
		
		{对话框:
			npc.getMCEntity().dialogs.get(数字).dialogId=对话id
			设置对话框中某个对话的对话id<数字填入[高级设置→对话框]中对话排列的顺序号><对话id即为npc中创建对话时填写标题框末尾的小数字>,去掉"=对话id"即为获取,如：npc.getMCEntity().dialogs.get(数字).dialogId
			
			npc.getMCEntity().dialogs.get(数字).title="标题"
			设置对话框中某个对话的标题<修改[高级设置→对话框]中的标题不会影响[全局设置→对话框]中的标题!>,获取方式与上例并无差异
			
			npc.getMCEntity().dialogs.get(数字).command="指令"
			设置对话框中某个对话执行的指令<指令会将该对话在[全局设置→对话框]中的对话一起修改>,获取方式与上例并无差异.示例:npc.getMCEntity().dialogs.get(数字).command="time set day"
		}
		
		{音效:
			npc.getMCEntity().advanced.idleSound="路径"
			设置npc的音效中正常音效<路径请勿输入错误>
			
			npc.getMCEntity().advanced.angrySound="路径"
			设置npc的音效中愤怒音效
			
			npc.getMCEntity().advanced.hurtSound="路径"
			设置npc的音效中饥饿音效
			
			npc.getMCEntity().advanced.deathSound="路径"
			设置npc的音效中死亡音效
			
			npc.getMCEntity().advanced.stepSound="路径"
			设置npc的音效中行走音效
			
			npc.getMCEntity().advanced.disablePitch=是/否
			是否"游戏中显示",未知效果<游戏中 是为false,否为true,不影响编写.>
		}
		
		{夜晚设置:
			//请期待下次更新
		}
		
		{Linked:
			//请期待下次更新
		}
	}
	
	
 {全局设置：
		{储存档案:
			//请期待下次更新
		}
		
		{阵营：
			getId()
			获取阵营ID
			
			getFaction()
			获取NPC阵营【npc.getFaction()】
			
			setFaction(id)
			设置NPC阵营【填入阵营ID】
			
			getColor()
			获取阵营颜色
			
			getDefaultPoints()
			获取NPC阵营的默认值【例子：npc.faction.defaultPoints()】<即该NPC阵营中默认的阵营点数>
			
			isFriendlyToPlayer(玩家)
			该阵营对玩家是否为友好【例子：npc.faction.isFriendlyToPlayer(world.getPlayer("test"))】
			
			isNeutralToPlayer(玩家)
			该阵营对玩家是否为中立【不再举例子，与上例无过大区别】
			
			isAggressiveToPlayer(玩家)
			该阵营对玩家是否为敌对
			
			isAggressiveToNpc(npc)
			暂未得到正确句型
		}
  
  {对话框:
   //我拿着百分百的自信告诉你们,下面这整片绝对没人会慢慢看并研究.若有,下次把任务,储存档案,传送档案,玩家档案,npc合成表,自然生成(WIP)在2周内爆肝出来--by 君油酱的油酱打不
   ///下方这一句为必要,若想单独使用下列某段,请连带下方这一句一起复制
   var DialogController=Java.type("noppes.npcs.controllers.DialogController");
   DialogController.instance.categories                                        获取对话框类别
   DialogController.instance.categories.get(数字)                              获取某个对话框类别
   DialogController.instance.categories.get(数字).dialogs                      获取某个对话框类别中的所有对话
   DialogController.instance.dialogs                                           获取所有对话
   DialogController.instance.dialogs.get(id).category=类别                     某个对话文本所在的对话框类别,获取与上例相同
   DialogController.instance.dialogs.get(id).id=数字                           某个对话id,去掉=以及后方的字符即为获取,如:DialogController.instance.dialogs.get(id).id
   DialogController.instance.dialogs.get(id).title="标题"                      某个对话标题,获取与上例相同
   DialogController.instance.dialogs.get(id).text="文本"                       某个对话文本,获取与上例相同
   DialogController.instance.dialogs.get(id).availability                      获取某个对话中可用的选项
   {//关于DialogController.instance.dialogs.get(id).availability的更多操作
    DialogController.instance.dialogs.get(id).availability.dialogAvailable=类型      设置某个对话中可用的选项中选择对话第一个的可用类型
    DialogController.instance.dialogs.get(id).availability.dialogId=id               设置某个对话中可用的选项中选择对话第一个的对话id
    DialogController.instance.dialogs.get(id).availability.dialog2Available=类型     设置某个对话中可用的选项中选择对话第二个的可用类型
    DialogController.instance.dialogs.get(id).availability.dialog2Id=id              设置某个对话中可用的选项中选择对话第二个的对话id
    DialogController.instance.dialogs.get(id).availability.dialog3Available=类型     设置某个对话中可用的选项中选择对话第三个的可用类型
    DialogController.instance.dialogs.get(id).availability.dialog3Id=id              设置某个对话中可用的选项中选择对话第三个的对话id
    DialogController.instance.dialogs.get(id).availability.dialog4Available=类型     设置某个对话中可用的选项中选择对话第四个的可用类型
    DialogController.instance.dialogs.get(id).availability.dialog4Id=id              设置某个对话中可用的选项中选择对话第四个的对话id
    DialogController.instance.dialogs.get(id).availability.questAvailable=类型       设置某个对话中可用的选项中选择任务第一个的可用类型
    DialogController.instance.dialogs.get(id).availability.questId=id                设置某个对话中可用的选项中选择任务第一个的任务id
    DialogController.instance.dialogs.get(id).availability.quest2Available=类型      设置某个对话中可用的选项中选择任务第二个的可用类型
    DialogController.instance.dialogs.get(id).availability.quest2Id=id               设置某个对话中可用的选项中选择任务第二个的任务id
    DialogController.instance.dialogs.get(id).availability.quest3Available=类型      设置某个对话中可用的选项中选择任务第三个的可用类型
    DialogController.instance.dialogs.get(id).availability.quest3Id=id               设置某个对话中可用的选项中选择任务第三个的任务id
    DialogController.instance.dialogs.get(id).availability.quest4Available=类型      设置某个对话中可用的选项中选择任务第四个的可用类型
    DialogController.instance.dialogs.get(id).availability.quest4Id=id               设置某个对话中可用的选项中选择任务第四个的任务id
    {//关于DialogController.instance.dialogs.get(id).availability的示例
     对话可用类型如:<Always>      <After>       <Before>            任务可用类型如:<Always>      <After>       <Before>     <Active>       <NotActive>
                    总是可用      ...之后       ...之前                            总是可用      ...之后       ...之前      当激活时        当未激活时
     使用对话可用类型示例如:
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumAvailabilityDialog=Java.type("noppes.npcs.constants.EnumAvailabilityDialog");
     DialogController.instance.dialogs.get(0).availability.dialogAvailable=EnumAvailabilityDialog.Always
     这样即可将对话id为 0 的对话中可用选项中 选择对话 第一个改为<总是可用>,修改末尾的<Always>即可.PS:有点绕,什么的什么中什么中...
     
     使用任务可用类型示例如:
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumAvailabilityQuest=Java.type("noppes.npcs.constants.EnumAvailabilityQuest");
     DialogController.instance.dialogs.get(1).availability.questAvailable=EnumAvailabilityQuest.Always
     这样即可将对话id为 1 的对话中可用选项中 选择任务 第一个改为<总是可用>
    }
    DialogController.instance.dialogs.get(id).availability.factionAvailable=类型     设置某个对话中可用的选项中第一个阵营条件的类型
    DialogController.instance.dialogs.get(id).availability.faction2Available=类型    设置某个对话中可用的选项中第二个阵营条件的类型
    DialogController.instance.dialogs.get(id).availability.factionStance=友/敌/中    设置某个对话中可用的选项中第一个阵营条件为友/敌/中
    DialogController.instance.dialogs.get(id).availability.faction2Stance=友/敌/中   设置某个对话中可用的选项中第二个阵营条件为友/敌/中
    DialogController.instance.dialogs.get(id).availability.factionId=阵营id          设置某个对话中可用的选项中第一个阵营,删除填null即可
    DialogController.instance.dialogs.get(id).availability.faction2Id=阵营id         设置某个对话中可用的选项中第二个阵营,删除填null即可
    {//关于DialogController.instance.dialogs.get(id).availability.factionAvailable与factionStance的示例以及类型表示
     阵营条件可用类型如:<Always>    <Is>    <IsNot>            阵营 友/敌/中 表示如:<Friendly>    <Neutral>    <Hostile>
                        总是可用     是       不是                                     友好         中立         敌对
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumAvailabilityFactionType=Java.type("noppes.npcs.constants.EnumAvailabilityFactionType");
     DialogController.instance.dialogs.get(0).availability.factionAvailable=EnumAvailabilityFactionType.Always
     这样即可将对话id为 0 的对话中可用选项中 阵营条件类型 改为<总是可用>
     
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumAvailabilityFaction=Java.type("noppes.npcs.constants.EnumAvailabilityFaction");
     DialogController.instance.dialogs.get(0).availability.factionAvailable=EnumAvailabilityFaction.Friendly
     这样即可将对话id为 0 的对话中可用选项中 阵营友/敌/中 改为 友好
    }
    DialogController.instance.dialogs.get(id).availability.daytime=类型              设置某个对话中可用的选项中时刻的类型<即为在某个时间段才可使用该对话>
    {//关于DialogController.instance.dialogs.get(id).availability.daytime的示例以及类型表示
     时刻可用类型如:<Always>      <Night>      <Day>
                    总是可用       夜晚         白天
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumDayTime=Java.type("noppes.npcs.constants.EnumDayTime");
     DialogController.instance.dialogs.get(0).availability.daytime=EnumDayTime.Night
     这样即可将对话id为 0 的对话中可用选项中 时刻 改为<总是可用>
    }
    DialogController.instance.dialogs.get(id).availability.minPlayerLevel=数字       设置某个对话中可用的选项中等级<即为某玩家在该等级之上才可使用该对话>
   }
   DialogController.instance.dialogs.get(id).factionOptions                    获取某个对话中阵营选择
   {//关于DialogController.instance.dialogs.get(id).factionOptions的更多操作
    DialogController.instance.dialogs.get(id).factionOptions.decreaseFactionPoints=是/否        设置阵营选项中第一个提升或降低点数,false为提升,true为降低
    DialogController.instance.dialogs.get(id).factionOptions.decrease2FactionPoints=是/否       设置阵营选项中第二个提升或降低点数
    DialogController.instance.dialogs.get(id).factionOptions.factionId=阵营id                   设置阵营选项中第一个被选阵营
    DialogController.instance.dialogs.get(id).factionOptions.faction2Id=阵营id                  设置阵营选项中第二个被选阵营
    DialogController.instance.dialogs.get(id).factionOptions.factionPoints=数字                 设置阵营选项中第一个被选阵营点数提升/降低数量
    DialogController.instance.dialogs.get(id).factionOptions.faction2Points=数字                设置阵营选项中第二个被选阵营点数提升/降低数量
			}
   DialogController.instance.dialogs.get(id).options                           获取某个对话中对话框选择
   {//关于DialogController.instance.dialogs.get(id).options的更多操作
    DialogController.instance.dialogs.get(id).options.get(id).optionType=类型   某个对话框选择中选择类型,第二个get(id)为获取第几个对话框选择,共有6个
    {//关于DialogController.instance.dialogs.get(id).options.get(id).optionType的类型以及该部分用法
     选择类型可用类型如:<DialogOption>     <Disabled>     <RoleOption>     <CommandBlock>
                             对话              关闭         职业设置           命令方块
     使用对话可用类型示例如:
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumOptionType=Java.type("noppes.npcs.constants.EnumOptionType");
     DialogController.instance.dialogs.get(1).options.get(1).optionType=EnumOptionType.DialogOption
     这样即可将对话id为 1 的对话框选择中第一个选项 改为<对话>
    }
    DialogController.instance.dialogs.get(id).options.get(id).dialogId=对话id   某个对话框选择中选择对话
    DialogController.instance.dialogs.get(id).options.get(id).title="标题"      某个对话框选择中标题
    DialogController.instance.dialogs.get(id).options.get(id).optionColor=颜色  某个对话框选择中颜色,颜色为十六进制码
    {//关于颜色十六进制
     进入下方网址选择颜色
     https://www.sioe.cn/yingyong/yanse-rgb-16/
    }
    DialogController.instance.dialogs.get(id).options.get(id).command="/指令"   某个对话框选择中指令,若该对话框选择类型不为CommandBlock,则仅写入,无法执行
   }
   DialogController.instance.dialogs.get(id).quest=任务id                        某个对话文本选择的任务,获取与<对话框>最上方示例相同
   DialogController.instance.dialogs.get(id).sound=声音路径                    某个对话文本选择的音效,获取与上例相同
   DialogController.instance.dialogs.get(id).mail=信件                         某个对话文本的信件,获取与上例相同
   DialogController.instance.dialogs.get(id).command=指令                      某个对话文本的指令,获取与上例相同
   DialogController.instance.dialogs.get(id).hideNPC=是/否                     某个对话文本打开时是左下角的隐藏npc,是为true,否为false,获取与上例相同
   DialogController.instance.dialogs.get(id).showWheel=是/否                   某个对话文本打开时是否变为显示对话框控制盘,是为true,否为false,获取与上例相同
   DialogController.instance.dialogs.get(id).disableEsc=是/否                  某个对话文本打开时是否允许按ESC退出对话,是为true,否为false,获取与上例相同
   
   function getCategoriestitle(){
   	var DialogController=Java.type("noppes.npcs.controllers.DialogController");
   	var Categories=DialogController.instance.categories;
   	var array=[];
   	for(var a in Categories){
   		 array[a-1]=(a)+"="+Categories.get(a).title
   	}
   	return array;
   }
   获取所有对话框类别及对应数字
  }		
		
		{任务:
			//请期待下次更新
		}

		{传送档案:
			//请期待下次更新
		}

		{玩家档案:
			//请期待下次更新
		}

  {NPC合成表:
   ///下方这一句为必要,若想单独使用下列某段,请连带下方这一句一起复制
   var RecipeController=Java.type("noppes.npcs.controllers.RecipeController");
   RecipeController.instance.globalRecipes         获取npc合成表中全局设置所有合成,单独获取一个如:RecipeController.instance.globalRecipes.get(合成id),获取所有合成时会提示id,如:132=noppes.npcs.controllers.RecipeController@4756c318中最前方的 132 即为该合成id
   RecipeController.instance.anvilRecipes          获取npc合成表中木工台所有合成,单独获取一个如上方所示
   {//获取合成后可进行的更多操作:
    RecipeController.instance.globalRecipes.get(合成id).id                         获取某个合成id的合成id
    RecipeController.instance.globalRecipes.get(合成id).name                       获取某个合成id的名字
    RecipeController.instance.globalRecipes.get(合成id).ignoreDamage=是/否         设置某个合成id是否无视损坏合成,是为true,否为false,例子:RecipeController.instance.globalRecipes.get(135).ignoreDamage=true,获取示例如:RecipeController.instance.globalRecipes.get(135).ignoreDamage
    RecipeController.instance.globalRecipes.get(合成id).ignoreNBT=是/否            设置某个合成id是否匹配nbt合成,获取如上方例子
    RecipeController.instance.globalRecipes.get(合成id).isGlobal=是/否             设置某个合成id所在的位置,true为全局设置,false为木工台,获取示例如上方例子
    RecipeController.instance.globalRecipes.get(合成id).field_77574_d              获取某个合成id的合成材料,设置材料即:RecipeController.instance.globalRecipes.get(合成id).field_77574_d[格数]=ItemStack 物品,格数有一定小问题,如只占用两列合成,那么合成格数则最大为6,作为数组则为5.如:<"XXY","XXY","XXY",X当前为可用格数,Y则不是.你无法改变 Y 格数的物品!>
    RecipeController.instance.globalRecipes.get(合成id).func_77571_b()          获取某个合成id的合成物品
   }
   RecipeController.instance.nextId                获取npc合成表中创建下一个合成的合成id
   RecipeController.instance.removeRecipe(合成id)  删除npc合成表中某个合成
   {//添加新npc合成表:
    function addRecipe(name,item,isGlobal,recipe){
    	var RecipesDefault=Java.type("noppes.npcs.controllers.RecipesDefault");
    	RecipesDefault.addRecipe("test2",Items.field_151025_P,true,["XXZ","YYZ",Character.valueOf('X'),Items.field_151025_P,Character.valueOf('Y'),Items.field_151055_y])
    }
    /*注意点:
    合成的物品必须为<ItemStack 物品>,材料也是如此
    配方列阵如:"QQQ","WWW","EEE".字符可以随意调整
    取列阵中相同字符,取出相同字符后紧跟着就只能是合成材料,取列阵中相同字符多少个无所谓,但是配方列阵无法超出配方大小.如在工作台:"XXX","YYY","ZZZ",按照工作台格数排列.如在木工台"XXXX","YYYY","ZZZZ","HHHH"
    合成材料,合成材料必须紧跟在取列阵中相同字符后的下一个数组
    */
    示例如:
    var Item=Java.type("net.minecraft.item.Item");
    var Items=Java.type("net.minecraft.init.Items");
    var Character=Java.type("java.lang.Character");
    addRecipe("test2",Items.field_151025_P,true,["XXZ","YYZ",Character.valueOf('X'),Items.field_151025_P,Character.valueOf('Y'),Items.field_151055_y])
                 ↑           ↑                ↑     ↑     ↑            ↑                      ↑                     ↑                      ↑
            合成表名称   合成的物品  合成表所在位置 配方列阵    取列阵中相同字符1         合成材料1        取列阵中相同字符2          合成材料2
    
    /**  请多加尝试,试了多次还是不懂再来找作者:2782876939 **/
   }
   
   { 8【拓展】8:
    更多自定义合成:
    
    获取所有合成配方数量:
    function AllRecipeAmount(){
    	var CraftingManager=Java.type("net.minecraft.item.crafting.CraftingManager");
    	return CraftingManager.func_77594_a().func_77592_b().length
    }
    
    工作台无序合成:
    function addShapelessRecipe(ItemStack,recipe){
    	var CraftingManager=Java.type("net.minecraft.item.crafting.CraftingManager");
    	CraftingManager=CraftingManager.func_77594_a()
    	CraftingManager.func_77596_b(ItemStack,recipe);
    }
    与npc合成表的基本无区别,仅需要合成物品与合成材料,合成材料可添加九个,该无序合成仅用于工作台.示例如:
    var Items=Java.type("net.minecraft.init.Items");
    var ItemStack=Java.type("net.minecraft.item.ItemStack");
    addShapelessRecipe(new ItemStack(Items.field_151025_P),[Items.field_151025_P,Items.field_151025_P]);
                                     ↑                                          ↑
    							  合成物品                                  合成材料
    
    删除合成:
    function removeRecipe(id){
    	Array.prototype.remove = function(val) { 
    		var index = this.indexOf(val); 
    		if (index > -1) { 
    			this.splice(index, 1);
    		}
    	};
    	var CraftingManager=Java.type("net.minecraft.item.crafting.CraftingManager");
    	var field=CraftingManager.class.getDeclaredField("field_77597_b");
    	field.setAccessible(true);
    	var a=field.get(CraftingManager.func_77594_a());
    	try{
    		field.set(CraftingManager.func_77594_a(),a.remove(id));
    	}catch(e){
    		print("不存在该id!")
    	}
    }
    删除某个合成,填入其id即可,无法使用该方法删除npc合成表!新增的合成一般在最末尾,如:原所有合成数量为1554,新增一个npc合成,当前所有合成数量为1555,那么1555-1=新增的合成的id,则其id为1554<需要 -1 是因为储存该合成的数据类型是ArrayList,ArrayList从0开始计数>
    
 			
    熔炉:
    function AllFurnaceAmount(){
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	return FurnaceRecipes.func_77602_a().func_77599_b().size();
    }
    获取所有熔炉配方数量
    
    function Furnaceinfo(type){
    	var findfield=type==true?"field_77605_c":"field_77604_b";
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	var field=FurnaceRecipes.class.getDeclaredField(findfield);
    	field.setAccessible(true);
    	return field.get(FurnaceRecipes.func_77602_a())
    }
    true为获取经验值,false为获取熔炉输出/输入物品.单独获取熔炉合成输出物品Furnaceinfo(false).values().toArray()[1],输入则为:Furnaceinfo(false).keySet().toArray()[1]
    
    function addFurnaceRecipes(item,item1,experience){
    	var Item=Java.type("net.minecraft.item.Item");
    	var Block=Java.type("net.minecraft.block.Block");
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	var ItemStack=Java.type("net.minecraft.item.ItemStack");
    	FurnaceRecipes=FurnaceRecipes.func_77602_a();
    	var1=item instanceof Block?new ItemStack(Item.func_150898_a(item),1,32767):item;
    	FurnaceRecipes.func_151394_a(var1,item1,experience);
    }
    添加一个熔炉配方,item为输出物品,item1为输入物品,experience为获得的经验<测试中并未体验到其效果>,使用示例如:
    var held=player.getHeldItem().getMCItemStack();
    addFurnaceRecipes(held.func_77973_b(),held,5)
    粘贴至第一个<对话>
    
    function removeFurnaceRecipes(id){
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	var field=FurnaceRecipes.class.getDeclaredField("field_77605_c");
    	var field1=FurnaceRecipes.class.getDeclaredField("field_77604_b");
    	field.setAccessible(true);
    	field1.setAccessible(true);
    	var experienceList=field.get(FurnaceRecipes.func_77602_a())
    	var smeltingList=field1.get(FurnaceRecipes.func_77602_a())
    	experienceList.remove(experienceList.keySet().toArray()[id])
    	smeltingList.remove(smeltingList.keySet().toArray()[id])
    	field.set(FurnaceRecipes.func_77602_a(),experienceList);
    	field1.set(FurnaceRecipes.func_77602_a(),smeltingList);
    }
    删除一个熔炉配方,使用例子:removeFurnaceRecipes(5)
    
    function modifyFurnaceRecipes(types,id,info){
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	var ItemStack=Java.type("net.minecraft.item.ItemStack");
    	var HashMap=Java.type("java.util.HashMap");
    	var Float=Java.type("java.lang.Float");
    	var Double=Java.type("java.lang.Double");
    	var field=FurnaceRecipes.class.getDeclaredField("field_77605_c");
    	var field1=FurnaceRecipes.class.getDeclaredField("field_77604_b");
    	field.setAccessible(true);
    	field1.setAccessible(true);
    	var experienceList=field.get(FurnaceRecipes.func_77602_a());
    	var smeltingList=field1.get(FurnaceRecipes.func_77602_a());
    	var var0=new Array(smeltingList.size()),var1=new Array(smeltingList.size()),var2=new Array(smeltingList.size()),hashmap1=new HashMap(),hashmap2=new HashMap();
    	for(var a=0;a<smeltingList.size();a++){
    		var0[a]=experienceList.values().toArray()[a];
    		var1[a]=smeltingList.keySet().toArray()[a];
    		var2[a]=smeltingList.values().toArray()[a];
    	}
    	if(types==0){
    		info=!(isNaN(info))?info:0
    		var0[id]=new Double(info)
    	}else{
    		if(types==1){
    			if(!(info instanceof ItemStack)){
    				print("物品并不为ItemStack 物品");
    				return;
    			}
    			var1[id]=info
    		}else{
    			if(types==2){
    				if(!(info instanceof ItemStack)){
    					print("物品并不为ItemStack 物品");
    					return;
    				}
    				var2[id]=info
    			}else{
    				print("错误类型");
    				return;
    			}
    		}
    	}
    	for(var b=0;b<var1.length;b++){
    		hashmap1.put(var1[b],new Float(var0[b]));
    		hashmap2.put(var1[b],var2[b]);	
    	}
    	field.set(FurnaceRecipes.func_77602_a(),hashmap1);
    	field1.set(FurnaceRecipes.func_77602_a(),hashmap2);
    }
    修改某个熔炉配方,示例如:modifyFurnaceRecipes(2,3,player.getHeldItem().getMCItemStack())
    *types  修改的类型,0为修改经验值,1为修改输入物品,2为修改输出物品
    *id     修改的id<这里指在数组中的排列位置,请使用Furnaceinfo(type)去获取>
    *info   修改内容,若types为0,那么必须为数字,否则自动默认改为0.若types为 1,那么必须为ItemStack 物品,types为 2 也是如此.
    
    
    
    //请期待下个版本!
    <进阶:无尽贪婪>
    
    <进阶:植物魔法>
    
    <进阶:等价交换>
    
    <等待更多进阶...>
   }
		}

		{自然生成设置(WIP):
			//请期待下次更新
		}

		{Linked
			//请期待下次更新
		}
	}
]




[*拓展*:
 Script【脚本】:
 
 npc.getMCEntity().script.scripts.get(数字).script=""
 设置npc脚本中某个钩子的内容,去掉=""即为获取<在中钩子有脚本才可获取,否则报错>,如：npc.getMCEntity().script.scripts.get(0).script,数字表示脚本所在钩子,数字代表如下:
 <0>   <1>    <2>    <3>      <4>     <5>      <6>        <7>       <8>     <9>       <10>
 运行  更新  对话   对话框    伤害    杀死     攻击     远程攻击    碰撞    死亡    关闭对话框
 若想跨钩子<被设置的钩子并无脚本或为空>,则需要使用下列方法:
 function Scriptwrite(list,Script){
 	if(npc.getMCEntity().script.scripts.get(list)==null){
 		var ScriptContainer=Java.type("noppes.npcs.controllers.ScriptContainer");
 		var Scripttext=new ScriptContainer();
 		npc.getMCEntity().script.scripts.put(list,Scripttext);
 	}
 	npc.getMCEntity().script.scripts.get(list).script=Script;
 }
 list为钩子代表数字,Script为脚本内容,使用例子如:Scriptwrite(1,"填入你的脚本！")
 
 function getScript(list){
 	if(npc.getMCEntity().script.scripts.get(list)==null){
 		return null;
 	}else{
 		return npc.getMCEntity().script.scripts.get(list).script;
 	}
 }
 或许有人会喜欢这个方法来获取某个钩子的脚本,钩子有字符返回该钩子内容,无则返回null.
 
 npc.getMCEntity().script.enabled=是/否
 是否开启语言,是为true，否为false
 
 npc.getMCEntity().script.engine="语言名"
 设置脚本语言,如:npc.getMCEntity().script.engine="ECMAScript"
]


-----------------------------------------------------------------------------------------
NPC部分是个整合！为了不出现重复！npc部分有的以下均不会再次出现，除非为必要！
-----------------------------------------------------------------------------------------
NPC部分是个整合！为了不出现重复！npc部分有的以下均不会再次出现，除非为必要！
-----------------------------------------------------------------------------------------
NPC部分是个整合！为了不出现重复！npc部分有的以下均不会再次出现，除非为必要！
-----------------------------------------------------------------------------------------



[item物品
getName()
获取物品的原始名【同名方法很多,不同情况获取不同】
如：player.getName()获取玩家名字,npc.getName()获取npc名字

getStackSize()
获取物品数量【player.getHeldItem().getStackSize()】

hasCustomName()
物品是否有修改过名称【比如用铁砧,匠魂工具组装台改物品名字】

setCustomName("名字")
设置物品修改名称【player.getHeldItem().setCustomName("名字")】

getDisplayName()
获取物品名称

getItemName()
获取物品名称【指的是原始名字与getName()一样】

setStackSize(数量)
设置物品数量

getItemDamage()
获取物品损坏值【并不是物品最大耐久！】

setItemDamage(耐久)
设置物品损坏值

getTag("nbt名称")
获取物品附加值【即NBT】

setTag("nbt名称","nbt")
设置物品附加值【类似setStoredData,setTempData,只不过是设置在物品NBT中】

hasTag("nbt附加值")
物品是否有该附加值
]





[LivingBase + Living【生物】:
addPotionEffect(药水id,时间,倍数,是/否)
给某生物一种效果，开启为true，禁用为false【如：npc.addPotionEffect(7,10,0,true)】
{拓展:更自主buff
player.getMCEntity().func_82170_o(药水id)
删除玩家的药水效果,玩家可以换成其他生物,如:npc.getMCEntity().func_82170_o(药水id),world.getPlayer("test").getMCEntity().func_82170_o(药水id)<只要有继承EntityLivingBase 生物 即可>

player.getMCEntity().func_82165_m(药水id)
玩家是否有某个药水id的效果,换成其他生物同上所示

player.getMCEntity().func_70651_bq()
获取玩家身上的所有药水效果,换成其他生物同上所示

function getActivePotionEffect(entity,id){
	var EntityLivingBase=Java.type("net.minecraft.entity.EntityLivingBase");
	var Potion=Java.type("net.minecraft.potion.Potion");
	if(entity.getMCEntity() instanceof EntityLivingBase && id=>0 && id<=Potion.field_76425_a.length && Potion.field_76425_a[id]!=null){
		return player.getMCEntity().func_70660_b(Potion.field_76425_a[id]);
	}
}
获取玩家身上的某个效果【使用例子:getActivePotionEffect(player,1)】
}

clearPotionEffects()
删除生物身上所有药水效果【player.clearPotionEffects()】

getPotionEffect(药水id)
获取生物身上的药水效果,若该生物没有药水id中的效果,则输出-1 【npc.getPotionEffect(1)】

canSeeEntity("实体")
确认某实体是否可以看见实体

getMinecraftEntity()
获取EntityLivingBase实例

swingHand()
让实体挥动他的手臂,对玩家无效

getHeldItem()
获取手中的物品【指的是右手，NPC中拿武器的手】

setHeldItem(物品)
设置手中物品【需要创建或者获取物品】【player.setHeldItem(npc.getHeldItem()),把NPC手中的物品设置在玩家手上】

isAttacking()
生物是否在攻击其他生物,对玩家无效【npc.isAttacking()】

setAttackTarget(实体)
设置该生物攻击的生物,对玩家无效【npc.setAttackTarget(world.getPlayer("test"))】

getAttackTarget()
获取该生物正在攻击的生物,返回ScriptLivingBase,对玩家无效【npc.getAttackTarget()】

navigateTo(x,y,z,速度)
让生物前往x,y,z坐标点,对玩家无效【npc.navigateTo(npc.x+5,npc.y,npc.z,1)】

isNavigating()
生物是否正在前往某个坐标,与上照应【npc.isNavigating()】
]



[Lores:

function addLore(item,lore){
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
}
//为物品增加lore
/*
*ScriptItemStack item:要增加lore的物品
*String lore:要增加的lore
*/

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

function setLore(item,line,lore)
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
};
//修改物品lore某一行
/*
*ScriptItemStack item:要修改lore的物品
*int line:要修改lore的行数
*String lore:替换原来lore的lore
*/
]

[属性给予:
if(player.getHeldItem()!==null){
var name=""+player.getHeldItem().getDisplayName()+""
var x=name.length
var str1=name.substring(6,7)
var str2=name.substring(0,6)
var str3=name.substring(7,x)
uplevel(player.getHeldItem(),str1)
}else{npc.say("§a§l两手空空来干啥？我不会强化你的拳头")}

function uplevel(item,num)
{
       if(num == 0)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=1
       item.setCustomName(str2+level+str3)
       player.sendMessage("§a§l你经过不懈努力,将"+str2+str1+str3+"§a§l升级为"+str2+level+str3+"§a§l!")
       return;
       }

       if(num == 1)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=2
       item.setCustomName(str2+level+str3)
       player.sendMessage("§a§l你经过不懈努力,将"+str2+str1+str3+"§a§l升级为"+str2+level+str3+"§a§l!")
       return;
       }

       if(num == 2)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=3
       item.setCustomName(str2+level+str3)
       player.sendMessage("§a§l你经过不懈努力,将"+str2+str1+str3+"§a§l升级为"+str2+level+str3+"§a§l!")
       return;
       }

       if(num == 3)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=4
       item.setCustomName(str2+level+str3)
       player.sendMessage("§a§l你经过不懈努力,将"+str2+str1+str3+"§a§l升级为"+str2+level+str3+"§a§l!")
       return;
       }

       if(num == 4)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=5
       item.setCustomName(str2+level+str3)
       player.sendMessage("§a§l你经过不懈努力,将"+str2+str1+str3+"§a§l升级为"+str2+level+str3+"§a§l!")
       return;
       }

       if(num == 5)
       {
       player.sendMessage("§a§l你的物品已处于满级状态，无法升级!")
       return;
       }

 
}

function updateAttr(item, type, value, operation)
{
	if (value == 0) { return; }
	if (type == 1) { type = "generic.attackDamage"; }
	else if (type == 2) { type = "generic.maxHealth"; }
	else if (type == 3) { type = "generic.movementSpeed"; }
	else if (type == 4) { type = "generic.knockbackResistance"; }
	var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
	var itemStack = item.getMCItemStack();
	var root = itemStack.field_77990_d;
	if (root == null) { root = new NBTTagCompound(); }
	var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
	var tagCompound = attributeModifiers.func_74745_c();
	for (var i = 0; i <= tagCompound; i++)
	{
		s = attributeModifiers.func_150305_b(i);
		if (i == tagCompound)
		{
			add(item, type, value, operation);
			break;
		}
		if (s.func_74779_i("AttributeName") == type && s.func_74762_e("Operation") == operation)
		{
			var newvalue = s.func_74769_h("Amount") + Number(value);
			s.func_74780_a("Amount", newvalue);
			break;
		}
	}
	return;
}

function add(item, attribute, amount, operation)
{
	var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
	var UUID = Java.type("java.util.UUID");
	var itemStack = item.getMCItemStack();
	var root = itemStack.field_77990_d;
	if (root == null)
	{
		root = new NBTTagCompound();
	}
	var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
	var attributeModifier = new NBTTagCompound();
	var uuid = UUID.randomUUID();
	attributeModifier.func_74778_a("AttributeName", attribute);
	attributeModifier.func_74778_a("Name", "My Modifier");
	attributeModifier.func_74780_a("Amount", amount);
	attributeModifier.func_74768_a("Operation", operation);
	attributeModifier.func_74772_a("UUIDMost", uuid.getMostSignificantBits());
	attributeModifier.func_74772_a("UUIDLeast", uuid.getLeastSignificantBits());
	attributeModifiers.func_74742_a(attributeModifier);
	root.func_74782_a("AttributeModifiers", attributeModifiers);
	itemStack.field_77990_d = root;
	return;
}

]

[player:
getDisplayName()
获取玩家名字【细节:在正常情况下,也是获取玩家名字,不过是获取玩家发送指令的名字,发送指令时的名字可以修改?!若没有发送指令名,则默认为Rcon[未经测试]】

getName()
获取玩家名字【玩家名字】

setPosition(x,y,z)
设置玩家位置【可用于NPC】

hasFinishedQuest(任务id)
玩家是否完成了该任务【例如：npc.say(world.getPlayer("名字").hasFinishedQuest(任务id))】

hasActiveQuest(任务id)
玩家是否正在进行该任务

hasReadDialog(对话id)
玩家是否已经完成该对话

startQuest(任务id)
让玩家开始该任务

finishQuest(任务id)
让玩家完成该任务

stopQuest(任务id)
让玩家停止该任务

removeQuest(任务id)
把玩家任务删除【包括完成的】

addFactionPoints("阵营",点数)
给玩家增加阵营点数【可将点数设为负数】

getFactionPoints("阵营")
获取玩家该阵营点数

sendMessage("信息")
向玩家发送信息【和tellraw一样】
{拓展:更自主的信息
/*使用教程:
click中:
0为地址【点击后打开网页】
1为打开的文件路径【点击后打开该文件路径】
2为执行的指令【点击后会使玩家输入指令】
3为玩家信息【player.getMCEntity().func_145747_a(player.getMCEntity().func_145748_c_()),不如输入这个,更方便,将玩家以对话框方式展示,点击即可快捷msg玩家】
4为推荐玩家执行的指令【点击后会在玩家输入窗口粘贴内容】
hover中:
0为显示的文本【鼠标移动至该字段时显示一段文本】
1为显示成就,详情看net.minecraft.stats.AchievementList【用于显示成就,可通过自行修改其nbt来实现发送一段被修改数据的成就,如:标题:热门话题,内容:hooooo】
3为显示物品nbt,若输入内容不为NBTTagCompound实例则无效【player.getMCEntity().func_145747_a(player.getHeldItem().getMCItemStack().func_151000_E()),不如输入这个,更方便,将玩家手中物品以对话框方式展示出去】

更多示例如下:

var chat=new sendChat("信息").chat();//创建一个信息,内容为"信息"
player.getMCEntity().func_145747_a(chat);//向玩家发送信息

var chat=new sendChat("信息").click(0,"https://www.baidu.com/").chat();//创建一个信息,内容为"信息",点击后访问网页"https://www.baidu.com/"
player.getMCEntity().func_145747_a(chat);//向玩家发送信息

var chat=new sendChat("信息").hover(0,"test!\ntwotest!\nthreetest!hahha").chat();//创建一个信息,内容为"信息",鼠标移动至其信息后显示"test!\ntwotest!\nthreetest!hahha",\n用于分段
player.getMCEntity().func_145747_a(chat);//向玩家发送信息

var chat=new sendChat("信息").hover(0,"test!\ntwotest!\nthreetest!hahha").click(0,"https://www.baidu.com/").chat();
player.getMCEntity().func_145747_a(chat);

var chat=new sendChat("信息").hover(0,"test!\ntwotest!\nthreetest!hahha").chat();
var chat1=new sendChat("信息").hover(0,"test!\ntwotest!\nthreetest!hahha").appendSibling(chat).chat()
player.getMCEntity().func_145747_a(chat1);

var chat=new sendChat("信息").click(1,"C:");//创建一个信息,内容为"信息",点击后打开C盘,对客户端进行
player.getMCEntity().func_145747_a(chat);//向玩家发送信息

更多操作等你发掘!
*/
function sendChat(text){
	var ChatComponentTranslation=Java.type("net.minecraft.util.ChatComponentTranslation");
	var HoverEvent=Java.type("net.minecraft.event.HoverEvent");
	var HoverAction=Java.type("net.minecraft.event.HoverEvent.Action");
	var ClickEvent=Java.type("net.minecraft.event.ClickEvent");
	var ClickAction=Java.type("net.minecraft.event.ClickEvent.Action");
	var NBTTagCompound=Java.type("net.minecraft.nbt.NBTTagCompound");
	var IChatComponent=Java.type("net.minecraft.util.IChatComponent");
	var String=Java.type("java.lang.String");
	this.text=text;
	this.Chat=this.text instanceof IChatComponent?this.text:new ChatComponentTranslation(this.text,{});
	this.ChatStyle=this.Chat.func_150256_b();
	this.click=function(action,string){
		switch(action){
			case 0:
			action=ClickAction.OPEN_URL;
			break;
			case 1:
			action=ClickAction.OPEN_FILE;
			break;
			case 2:
			action=ClickAction.RUN_COMMAND;
			break;
			case 3:
			action=ClickAction.TWITCH_USER_INFO;
			break;
			case 4:
			action=ClickAction.SUGGEST_COMMAND;
			break;
		}
		this.ChatStyle.func_150241_a(new ClickEvent(action,string));
		return new sendChat(this.Chat);
	}
	this.hover=function(action,value){
		switch(action){
			case 0:
			action=HoverAction.SHOW_TEXT;
			if((value instanceof String)){
				value=new ChatComponentTranslation(value.toString(),{});
			}
			break;
			case 1:
			action=HoverAction.SHOW_ACHIEVEMENT;
			//成就,详情查看net.minecraft.stats.AchievementList
			break;
			case 2:
			action=HoverAction.SHOW_ITEM;
			if(!(value instanceof NBTTagCompound)){
				value=new ChatComponentTranslation(new NBTTagCompound(),{});
			}
			break;
		}
		this.ChatStyle.func_150209_a(new HoverEvent(action,value));
		return new sendChat(this.Chat);
	}
	this.appendSibling=function(chat2){
		chat2=chat2 instanceof IChatComponent?chat2:new ChatComponentTranslation(chat2.toString(),{});
		return new sendChat(this.Chat.func_150257_a(chat2));
	}
	this.chat=function(){
		return this.Chat;
	}
}
}

getMode()
获取玩家模式，0为生存，1为创造，2为冒险

setMode(模式)
设置玩家模式【如：player.setMode(1)】

inventoryItemCount(物品)
获取玩家的物品有多少【如：player.inventoryItemCount(player.getHeldItem())】

getInventory()[格数]
获取玩家背包,最大获取35个格数【如：player.getInventory()[0].getName()，获取玩家背包中第一个格子物品的名字<即最左下角的那格>】

removeItem("物品",耐久,数量)
删除玩家的物品【耐久可省略不填,不过物品需要为ScriptItemStack实例,如:player.getHeldItem()可以获取到这种实例】<例子：player.removeItem("minecraft:stone",0,1)>

giveItem("物品",耐久,数量)
给玩家某个物品【耐久可省略不填,不过物品需要为ScriptItemStack实例】

setSpawnpoint(x,y,z)
设置玩家复活点

resetSpawnpoint()
重置玩家复活点

removeAllItems(物品)
把玩家背包的某个物品删除

hasAchievement("成就")
玩家是否完成了该成就【成就较多，官方推荐网站：http://minecraft.gamepedia.com/Achievements】

hasBukkitPermission("权限")
玩家是否拥有该权限【lj网易没有CK这类兼mod+插件服务端,网易服主没必要看这个 :-> 】{已收集权限名：
以下全部未经测试,未知效果 ;-;
NPC_DELETE
NPC_CREATE
NPC_GUI
NPC_FREEZE
NPC_RESET
NPC_AI
NPC_ADVANCED
NPC_DISPLAY
NPC_INVENTORY
NPC_STATS
NPC_CLONE
GLOBAL_LINKED
GLOBAL_PLAYERDATA
GLOBAL_BANK
GLOBAL_DIALOG
GLOBAL_QUEST
GLOBAL_FACTION
GLOBAL_TRANSPORT
GLOBAL_RECIPE
GLOBAL_NATURALSPAWN
SPAWNER_MOB
SPAWNER_CREATE
TOOL_MOUNTER
TOOL_PATHER
TOOL_SCRIPTER
EDIT_VILLAGER
EDIT_BLOCKS
SOULSTONE_ALL
}

getExpLevel()
获取玩家等级

setExpLevel(等级)
设置玩家等级

isEnchanted()
物品是否有附魔

hasEnchant(id)
物品是否有该附魔id


{*拓展:更多关于玩家的操作

/*修改玩家属性,复活将会还原属性,传送至其他世界修改的属性血量显示将会消失,但是最大生命值不会改变,只需穿戴有增加最大生命值的装备或物品即可恢复
*player 填入ScriptPlayer实例,如:world.getPlayer("test")
*type   0为攻击力,1为移动速度,2为抗击退性,3为最大生命值,移动速度因minecraft相互冲突,修改玩家移速后会自动还原至正常速度.
*amount 修改的数值,填null则为获取该属性的数值
*如果要用该方法制作无需物品附加属性,建议用计分板<deathCount>配合,玩家死亡加分,分数大于等于1,给予属性,设置分数为0  :)
*/
function EntityAttributes(player,type,amount){
	var SharedMonsterAttributes=Java.type("net.minecraft.entity.SharedMonsterAttributes");
	var Attributes;
	if(type==0){
		Attributes=SharedMonsterAttributes.field_111264_e
	}
	if(type==1){
		Attributes=SharedMonsterAttributes.field_111263_d
	}
	if(type==2){
		Attributes=SharedMonsterAttributes.field_111266_c
	}
	if(type==3){
		Attributes=SharedMonsterAttributes.field_111267_a
	}
	if(amount==null){
		return player.getMCEntity().func_110140_aT().func_111151_a(Attributes).func_111125_b();
	}else{
		player.getMCEntity().func_110140_aT().func_111151_a(Attributes).func_111128_a(amount);
		return;
	}
}

player.getMCEntity().func_71024_bL().func_75114_a(数值)//设置玩家饥饿值
player.getMCEntity().func_71024_bL().func_75116_a()//获取玩家饥饿值
player.getMCEntity().func_96124_cp()//获取玩家所在队伍
}
]





[事件:
 isCancelled()
 是否开启事件

 setCancelled(是/否)
 设置事件是否开启【取消为true，正常情况下为false】【event.setCancelled(true),放在伤害钩子中,npc就不会受到伤害了】

{伤害事件：
 getSource()
 获取伤害源<即攻击者>【如：event.getSource().getName()】

 getType()
 获取受到的伤害类型【event.getType()】
 伤害类型：{
 lava,岩浆伤害
 inFire,火焰伤害【打火石右键地下的火】
 onFire,着火伤害【被岩浆烧或者其他造成的火】
 fall,摔落伤害
 player,玩家伤害
 mob,生物伤害
 dronwn,溺水伤害
 outOfWorld,掉出虚空伤害
 explosion,爆炸伤害
 anvil,铁砧掉落伤害
 arrow,弓箭伤害
 thrown,鱼竿【弹射物】伤害【包括NPC中的枪,魔杖,飞镖等等】
 magic,魔法【中毒】伤害
 indirectMagic,间接【瞬间伤害】魔法
 cactus,仙人掌伤害}

 getDamage()
 获取伤害值【event.getDamage(),获取npc受到的伤害数值】
}

{对话事件：
 isClosing()
 是否关闭对话
	
	可用变量://可在noppes.npcs.NoppesUtilServer 198行找到
	event:返回事件实例
	player:打开对话的玩家
	dialog:打开的对话id
	使用如下:
	npc.say(dialog);//粘贴至 第二个对话
	npc.say(player);//粘贴至 第二个对话
	}
	
{关闭对话事件://个人认为应该叫 对话框选项 事件
 可勇变量://可在noppes.npcs.NoppesUtilPlayer 240行找到
	player:打开的对话的玩家
	dialog:当前对话id
	option:被点击的 选项,由上到下从1开始
	使用如下:
	npc.say(option);//粘贴至 关闭对话事件
	npc.say(dialog);//粘贴至 关闭对话事件
}

{攻击事件:
 isRange()
 返回是否在攻击范围

 getTarget()
 获取被攻击者

 getDamage()
 获取攻击造成的伤害【event.getDamage()】

 setDamage(数值)
 设置造成的伤害【event.setDamage(5),这样npc每次攻击就只有5点伤害了】
}

{远程攻击事件：
 getTarget()
 获取攻击对象

 setTarget(攻击对象)
 设置NPC攻击对象,需要返回ScriptLivingBase实例【event.setTarget(world.getPlayer("你的名字")),粘贴至远程攻击[target]中,既是npc攻击范围内有敌对阵营也不会攻击,而是攻击名为"你的名字"的玩家】
}

{死亡事件:
 getSource()
 获取杀死npc的生物【event.getSource()】

 getType()
 获取杀死npc的伤害类型名字【event.getType()】
}
]





[实体:
       getX()  getY()   getZ()
获取     x       y        z    位置

       setX()  setY()   setZ()
设置     x       y        z    位置

         getBlockX()    getBlockY()    getBlockZ()
获取方块     x              y              z         位置

getSurroundingEntities(范围,生物)
获取周围实体【生物不填,那么将获取范围内所有生物,若填除列表内的其他数字,则为获取所有生物】<1为玩家,2为NPC,3为怪物,4为动物,5为活着的所有生物>
{拓展:我们的范围是世界
	
}

getSurroundingEntities(范围,生物).length
获取周围实体数量

isAlive()
确认实体是否活着【npc.isAlive()】

getTempData("临时数据名称")
获取临时数据【若没设置,无法获取,获取值为null】

setTempData("临时数据名称",临时数据)
设置一个临时数据                              【正常情况下：万物皆可使用<world,player,entity,npc等等…>】PS:item有一个tag了
【如：npc.setTempData("k","ss")
      npc.say(npc.getTempData("k"))】
	  
hasTempData("临时数据名称")
确认临时数据是否存在

removeTempData("临时数据名称")
删除临时数据

clearTempData()
删除所有临时数据

getStoredData("储存数据名称")
获取储存数据

setStoredData("储存数据名称",储存数据)
设置储存数据【和设置临时数据一样的用法】

hasStoredData("储存数据名称")
确认储存数据是否存在

removeStoredData("储存数据名称")
删除储存数据

clearStoredData()
删除所有储存数据

despawn()
删除这个实体<也可以直接npc.despawn()>

inWater()
这个实体是否在水中

inLava()
这个实体是否在岩浆中

inFire()
这个实体是否在火中【就是用打火石右键地下的火】

isBurning()
这个实体是否正在着火

setBurning(时间)
设置这个实体着火的时间【20ticks≈1秒,如：npc.setBurning(100)】

extinguish()
移除这个实体着火状态

getTypeName()
获取这个实体在“noppes”中的类型名字

dropItem("物品")
以掉落的形式丢弃一个物品【如:player.dropItem(player.getHeldItem())】

getRider()
获取被骑的实体

setRider(实体)
设置实体骑在某个实体上【如:npc.setRider(player)玩家可以骑在NPC上】

getMount()
获取骑着某实体的<实体>

setMount(实体)
设置骑着某实体的<实体>【如：npc.setMount(player)NPC可以骑在玩家上】

setRotation(数字)
设置旋转度数【0-360】

getRotation()
获取旋转度数

knockback(强度,角度)
击退生物【如：player.knockback(5,-180)】

isSneaking()
这个实体是否正在潜行

isSprinting()
这个实体是否正在疾跑]





[world：
getMCWorld()
获取当前世界实例

getTime()
获取当前世界时间【如：npc.say(world.getTime())】

getTotalTime()
获取世界统一时间

getBlock(x,y,z)
获取x,y,z位置的方块【如：world.getBlock(x,y,z).getName()】<获取x,y,z的nbt方块名>

getSignText(x,y,z)
获取x,y,z位置的木牌内容【如：npc.say(world.getSignText(npc.x,npc.y,npc.z))】<获取NPC位置的木牌内容>

setBlock(x,y,z,物品)
设置x,y,z位置的方块【如：world.setBlock(npc.x,npc.y-1,npc.z,world.createItem("minecraft:packed_ice",1,1))】<在NPC脚下设置一个石头>

removeBlock(x,y,z)
删除x,y,z位置的方块

getPlayer("名字")
获取玩家【world.getPlayer("你的名字")】,只获取该世界的，并不会获取全世界！

setTime(时间)
设置当前时间【和/time set 时间  一毛一样】

isDay()
是否为白天

isRaining()
是否下雨

setRaining()
设置天气，0为晴天，1为下雨【检测多次，数字为0晴天，为其他数下雨】

thunderStrike(x,y,z)
在x,y,z召唤闪电【world.thunderStrike(x,y,z)】

spawnParticle("粒子效果",x,y,z,dx,dy,dz,速度,数量)
在x,y,z处召唤粒子效果【dx是最大x位置,其他也一样。】<粒子效果：{>
note    音符
lava    岩浆跳跃【散射】
cloud   烟雾【散射】
crit    攻击生物后的十字星【散射】
reddust 彩色烟雾
largeexplode   小型爆炸效果
hugeexplosion  大型爆炸效果【散射】
flame   火花【散射】
heart   爱心
slime   史莱姆弹跳
snowballpoof    砸雪球
largesmoke      黑烟【散射】
townaura        黑烟【小型】
explode  烟雾【散射】
portal   传送门粒子【由上往下】
smoke    灰黑雾【散射】
splash   水花【散射】
enchantmenttable 从书架飘向附魔台的文字【由外向指定地点聚集】
instantSpell    白色X形颗粒【散射】
mobSpell 彩色药水效果【由下往上】
spell    白色药水效果【散射】
magicCrit 浅蓝色暴击粒子【散射】
footstep 脚印
dripLava 天花板掉落的水
dripWater       天花板掉落的岩浆
snowshovel 白色粒子【散射】
wake     蓝色粒子【散射】
mobSpellAmbient  淡彩色药水效果【由下往上】
angryVillager   村民生气
happyVillager   村民开心【星状绿色粒子】
witchMagic 紫色X状【散射】}

explode(x,y,z,范围,是否带火焰,是否破坏方块)
在x,y,z处制造一个爆炸【若无需火焰和破坏方块，填false。若需要，填入true】

getAllServerPlayers()
获取所有世界所有玩家【world.getAllServerPlayers(),获取数据类型为数组,所以在有玩家的情况下可以world.getAllServerPlayers()[0]获取对应玩家,顺序按照登录顺序排列.】

spawnClone(x,y,z,标签,名字)
复制一个NPC<例子：world.spawnClone(npc.x,npc.y,npc.z,1,"我被复制啦")>【请先把列表1中名字为<我被复制啦>复制进世界复制选项】[操作：拿着复制魔杖右键NPC，然后点击最下方的Client side，Client side会变为Server side，tab根据标签数位调整，然后点击保存就好了！]

getBiomeName(x,z)
获取x,z处的地形类型}



npc.setName("§f§l右键进入§4§l§n天守阁下层")
npc.setTitle("§f§l要求吸收§4§l§n第六魂环")

[队伍：
getScoreboard()
获取队伍/计分榜【若要使用下列方法必须输入.如：world.getScoreboard()】

{计分榜:
getObjectives("名字")
获取计分榜【名字可不填，则为获取所有计分榜】

getObjective("名字")
获取单独获取某个计分榜【world.getScoreboard().getObjective("test")】

hasObjective("计分榜名字")
确认是否有这个计分榜

removeObjective("计分榜名字")
删除计分榜【world.getScoreboard().removeObjective("test")】

addObjective(名称,目标)
添加一个计分榜【world.getScoreboard().addObjective("test","dummy")】【由于目标多，自行上网站查看：http://minecraft.gamepedia.com/Scoreboard#Objectives】

setPlayerScore("玩家","计分榜名字",分数,指定类型)
设置玩家在某计分榜中的分数【若未设置指定类型，那么计分榜名字即为指定类型】

getPlayerScore("玩家","计分榜名字",指定类型)
获取玩家在某计分榜中的分数【若未设置指定类型，那么计分榜名字即为指定类型】

hasPlayerObjective("玩家","计分榜名字",指定类型)
确认玩家是否在某个计分榜中【若未设置指定类型，那么计分榜名字即为指定类型】

deletePlayerScore("玩家","计分榜名字",指定类型)
删除玩家在某计分榜中的所有分数【若未设置指定类型，那么计分榜名字即为指定类型】

getCriteria()
获取计分板条件名【world.getScoreboard().getObjective("test").getCriteria()】

isReadyOnly()
确认条件是否可以更改【world.getScoreboard().getObjective("test").isReadyOnly()】
}


{队伍：
getTeams()
获取全部队伍【world.getScoreboard().getTeams()】

getTeam("队伍名称")
获取全部队伍【world.getScoreboard().getTeam("test")】

hasTeam("队伍名称")
确认是否有这个队伍【npc.say(world.getScoreboard().hasTeam("a")),确认队伍"a"是否存在】

addTeam("队伍名称")
添加一个队伍【world.getScoreboard().addTeam("a"),添加一个名字为"a"的队伍,如果队伍"a"存在则报错】

getTeam("队伍名称")
获取队伍【world.getScoreboard().getTeam("a")，获取名为"a"的队伍】

removeTeam("队伍名称")
删除某个队伍【world.getScoreboard().removeTeam(world.getScoreboard().getTeam("test")),删除第一个队伍】

getName()
获取队伍名字【同名方法很多,不同情况获取不同】

getDisplayName()
获取显示名字【同名方法很多,不同情况获取不同】

setDisplayName(名字)
设置显示名字【仅限1-32个字数】

addPlayer("名字")
向某个队伍添加一个玩家【world.getScoreboard().getTeam("test").addPlayer("name"),向第一个队伍添加名为"name"的玩家】

removePlayer("名字")
移除某个队伍的玩家【world.getScoreboard().getTeam("test").removePlayer("name"),在第一个队伍中移除名为"name"的玩家】

getPlayers()
获取某个队伍所有玩家

clearPlayers()
移除某个队伍所有玩家【world.getScoreboard().getTeam("test").clearPlayers(),将第一个队伍中所有玩家移除】

getFriendlyFire()
获取是否允许队伍PVP

setFriendlyFire(是/否)
设置是否允许队伍PVP,是为true,否为false【world.getScoreboard().getTeam("test").setFriendlyFire(true)】

setColor("颜色")
设置队伍颜色,颜色名字:<BLACK,DARK_BLUE,DARK_GREEN,DARK_AQUA,DARK_RED,DARK_PURPLE,GOLD,GRAY,DARK_GRAY,BLUE,GREEN,AQUA,RED,LIGHT_PURPLE,YELLOW,WHITE,OBFUSCATED,BOLD,STRIKETHROUGH,UNDERLINE,ITALIC,RESET>
【world.getScoreboard().getTeam("test").setColor("DARK_BLUE")】

getColor()
获取队伍颜色

setSeeInvisibleTeamPlayers(是/否)
设置队友拥有隐身buff时是否可以看见,是为true,否为false【world.getScoreboard().getTeam("test").setSeeInvisibleTeamPlayers(true)】

getSeeInvisibleTeamPlayers()
获取队友之间拥有隐身buff时是否可以看见
}]





[白嫖福利中心<句型>:
///本区域只提供模板以及使用教程!注释会写得很清楚,若不懂,作者没有义务教 :-( ----by 君油酱的油酱打不
///若将下列模板原封不动进行售卖<在该区域中,哪怕加一句var test="test";都能把你当成二次创作>,视为侵权,允许二次创作售卖!二次创作售卖或其他商业用途请标明模板出处!
///本区域模板禁止与其他制作者或同类型脚本进行比较<用就用,bbnm?>更新随缘,创作随意!
///激活方式是二次创作者的事,雨我无瓜 :-)     ----by 君油酱的油酱打不
{镶嵌模板[Item]<未完成>:
	//请期待下个版本
	function Set(Item,Stone){
		
	}
	function CreateStone(Item,ench,Unbreakable,Attribute){
		var Enchantment=Java.type("net.minecraft.enchantment.Enchantment");
		var pb,pc=[];
		var lore=[
		"§4§l========§5§l<属性>§4§l========",
		]
		if(Item!=null){
			if(ench instanceof Array){
				lore.push("§5附魔:");
				for(var pa in Enchantment.field_77331_b.length){
					if(Enchantment.field_77331_b[pp]!=null){
						pb++;
					}
				}
				for(var a in ench){
					if(ench[a].id!=null && ench[a].id<=pb && ench[a].id>=0){
						lore.push(Enchantment.field_77331_b[ench[a].id].func_77316_c(ench[a].lvl));
					}
				}
			}
			if(Unbreakable){
				lore.push("§8无法破坏:是");
			}
			if(Attribute instanceof Array){
				for(var b in Attribute){
					pc[b]=Attribute[b].operation==1 || Attribute[b].operation==2?"%":null;
					if(Attribute[b].生命值!=null){
						lore.push("§c生命值:"+Attribute[b].生命值+pc[b]);
					}
					if(Attribute[b].抗性提升!=null){
						lore.push("§9抗性提升:"+Attribute[b].抗性提升+pc[b]);
					}
					if(Attribute[b].速度!=null){
						lore.push("§7速度:"+Attribute[b].速度+pc[b]);
					}
					if(Attribute[b].攻击力!=null){
						lore.push("§4攻击力:"+Attribute[b].攻击力+pc[b]);
					}
				}
			}
		}
		npc.say("物品错误");
		return;
	}
	/*
	Item >> 物品,填入ScriptItemStack实例
	ench >> 附魔,填入Array数组,如:[{"id":0,"lvl":5},{"id":9,"lvl":1}]
	Unbreakable >> 不毁,填入Boolean,如:true为无法破坏
	Attribute >> 属性,填入Array数组,如:[{"生命值":9,"operation":0},{"攻击力":7,"operation":2}]
	*/
	function CreateItem(){
		
	}
}

{CD模板[Item&Entity]:
	//请期待下个版本
}
]


研究项目：
ee2：
句型:
