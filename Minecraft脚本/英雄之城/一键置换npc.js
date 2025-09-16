var range=100,sheet=4,lastName='',newName=''
/*
range:要替换npc的范围
sheet:要替换的npc所在复制魔杖的页数
lastName:旧的npc名字
newName:新的npc名字
*/
function interact(event){
	var nearNpc=event.npc.getWorld().getNearbyEntities(event.npc.x, event.npc.y, event.npc.z, range, 0)
	for(var i=0;i<nearNpc.length;i++){
		if(nearNpc[i].getName()==lastName){
			nearNpc[i].getTempdata().put('clear',1)
			nearNpc[i].despawn()
			event.npc.getWorld().spawnClone(nearNpc[i].x, nearNpc[i].y, nearNpc[i].z, sheet, newName);
		}
	}
}
