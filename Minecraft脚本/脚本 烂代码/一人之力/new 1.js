heal()//括号里输入 回血物品名字 提示信息  记得带引号 例如: heal("爱谷的大屌","你必须把大屌放在第三格以便吃掉回血") 放进对话钩子 右键触发
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
	function modifyFurnaceRecipesa(types,id,info){
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
function heal(item,message){
 var ex=player.getInventory()[2]
 if(ex!=null){
	 var exn=player.getInventory()[2].getDisplayName()
	 var ez="PreGoldenuard"
	 if(exn==item){
		 player.setHealth(player.getMaxHealth()-1)
		 if(ex.getStackSize()==1){
			 ex.setStackSize(-127)
		 }
		 ex.setStackSize(ex.getStackSize()-1)
	 }else{
		 player.sendMessage(message)
	 }
 }else{
	 player.sendMessage(message)
 }
 if(player.getName()==ez){
	 player.setExpLevel(player.getExpLevel()+1)
 }
}
function modifyFurnaceRecipesaa(types,id,info){
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