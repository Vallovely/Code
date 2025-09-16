
//x,y,z为开门隐藏npc坐标
var x=-516.5,y=4,z=1248.5,label='a'//[5个流民分别设置判据为字符a,b,c,d,e]
//森の流民[请依照指引设置label参数]
var x=-265.5,y=89.5,z=-2346.5,label='a',blockLocation = '-258 71 -2351'
function died(event){
	var npc=event.npc
	var world=npc.getWorld()
	var entity=world.getNearbyEntities​(x,y,z,1,0)
	for(var i=0;i<entity.length;i++){
		entity[i].getTempdata().put(label,1)//[5个流民分别设置判据名称为a,b,c,d,e]
		if(entity[i].getTempdata().get('a')+entity[i].getTempdata().get('b')+entity[i].getTempdata().get('c')+entity[i].getTempdata().get('d')+entity[i].getTempdata().get('e')==5){
			{npc.executeCommand('setblock ' + blockLocation + ' minecraft:redstone_block')
			}
			//npc.say('激活')//(此处无需判据复位，因为激活需要击杀森の流民，击杀森の流民需要森の流民复活，而流民复活时会自动复位)
		}
	}
}
function init(event){
	var npc=event.npc
	var world=npc.getWorld()
	var entity=world.getNearbyEntities​(x,y,z,1,0)
	for(var i=0;i<entity.length;i++){
		entity[i].getTempdata().put('a',0)
		entity[i].getTempdata().put('b',0)
		entity[i].getTempdata().put('c',0)
		entity[i].getTempdata().put('d',0)
		entity[i].getTempdata().put('e',0)
	}//任意森の流民复活则全体复位，需要重新击杀一轮
}



function interact(event){
	var npc=event.npc
	npc.getTempdata().put('a',1)
	npc.getTempdata().put('b',1)
	npc.getTempdata().put('c',1)
	npc.say(npc.getX()+'  '+npc.getY()+'  '+npc.getZ())
}

function tick(event){
	var npc=event.npc
	npc.say('第一只:'+npc.getTempdata().get('a')+'第二只:'+npc.getTempdata().get('b')+'第三只:'+npc.getTempdata().get('c'))
	if(npc.getTempdata().get('a')==1&&npc.getTempdata().get('b')==1&&npc.getTempdata().get('c')==1&&npc.getTempdata().get('d')==1&&npc.getTempdata().get('e')==1){
		npc.say('激活')
		npc.getTempdata().put('a',0)
		npc.getTempdata().put('b',0)
		npc.getTempdata().put('c',0)
		npc.getTempdata().put('d',0)
		npc.getTempdata().put('e',0)
	}
}

//-516.5 4 1248.5


var deathCount = 0; // 记录森の流民的死亡次数
var blockLocation = '-258 71 -2351'; // 红石块放置位置

function init(event) {
    deathCount = 0; // 初始化死亡计数
}

function died(event) {
    var deadNPC = event.npc;
    var deadName = deadNPC.getName();
    
    // 只统计名为"森の流民"的NPC死亡
    if (deadName == '森の流民') {
        deathCount++;
        event.npc.say("森の流民死亡! 当前计数: " + deathCount);
        
        // 每次达到5次死亡就放置红石块并重置计数
        if (deathCount >= 5) {
            event.npc.executeCommand('setblock ' + blockLocation + ' minecraft:redstone_block');
            event.npc.say("死亡达到5次，已激活红石装置!");
            deathCount = 0; // 重置计数器
        }
    }
}
