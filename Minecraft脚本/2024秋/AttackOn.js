var apl=world.getAllServerPlayers()
for(i in apl){
	if(apl[i].getInventory()[0]!=null){
		if(apl[i].getInventory()[0].getName()==""+apl[i].getName()+""){
		}else{
			return;
		}
	}else{
		return;
	}
}