function interact(e){
var shoot = Launch(e, "minecraft:egg", true, true, false, 0, e.player.x, e.player.y+e.player.getMCEntity().func_70047_e(), e.player.z, 1, e.player.rotation, e.player.getMCEntity().field_70125_A)
shoot.enableEvents();
}
function projectileImpact(e){
var pos = e.projectile.getPos();
e.API.getIWorld(0).explode(pos.x,pos.y,pos.z,5,false,true);

	}
function Launch(e, item, isGravity, is3D, isRotate, damage, Posx, Posy, Posz, spell, yaw, pitch) {
    var EntityProjectile = Java.type("noppes.npcs.entity.EntityProjectile");
    var ProjectileWrapper = Java.type("noppes.npcs.api.wrapper.ProjectileWrapper");
    var Integer = Java.type("java.lang.Integer");
    var coordinate = dotForYP(1, yaw, pitch);
    var f = coordinate[0];
    var f1 = coordinate[1];
    var f2 = coordinate[2];
    item = e.API.getIWorld(0).createItem(item, 0, 1);
    item.getNbt().setString("model", "skilleffects1");
    var projectile = new EntityProjectile(e.API.getIWorld(0).getMCWorld(), e.player.getMCEntity(), item.getMCItemStack(), false);
    projectile.setHasGravity(isGravity);
    projectile.setIs3D(is3D);
    projectile.setRotating(isRotate);
    var dataManager = projectile.getClass().getSuperclass().getSuperclass().getDeclaredField("field_70180_af");
    dataManager.setAccessible(true);
    dataManager = dataManager.get(projectile);
    var Size = projectile.getClass().getDeclaredField("Size");
    Size.setAccessible(true);
    Size = Size.get(projectile);
    projectile.field_70159_w = f * spell;
    projectile.field_70181_x = f1 * spell;
    projectile.field_70179_y = f2 * spell;
    projectile.damage = damage;
    projectile = new ProjectileWrapper(projectile);
    projectile.setPosition(Posx, Posy, Posz);
    e.API.getIWorld(0).spawnEntity(projectile)
	return projectile;
}

function dotForYP(r, yawAngle, pitchAngle) {
  var JavaMath = Java.type("java.lang.Math");
  var coordinate = [0, 0, r]
  function rotateAroundAxisX(v, angle) {
    var angle = JavaMath.toRadians(angle);
    var cos = JavaMath.cos(angle);
    var sin = JavaMath.sin(angle);
    var y = v[1] * cos - v[2] * sin;
    var z = v[1] * sin + v[2] * cos;
    return [y, z];
  }//让向量绕X轴转angle度
  function rotateAroundAxisY(v, angle) {
    var angle = -angle;
    var angle = JavaMath.toRadians(angle);
    var cos = JavaMath.cos(angle);
    var sin = JavaMath.sin(angle);
    var x = v[0] * cos + v[2] * sin;
    var z = v[0] * -sin + v[2] * cos;
    return [x, z];
  }//让向量绕Y轴转angle度
  var temp = rotateAroundAxisX(coordinate, pitchAngle)
  coordinate[1] = temp[0];
  coordinate[2] = temp[1];
  var temp = rotateAroundAxisY(coordinate, yawAngle)
  coordinate[0] = temp[0];
  coordinate[2] = temp[1];
  return coordinate;
  //参考开源代码:https://github.com/Slikey/EffectLib/blob/master/src/main/java/de/slikey/effectlib/util/VectorUtils.java
	/*
	*根据yaw、pitch求球上一点
	*double r:半径
	*double yawAngle:yaw角度
	*double pitchAngle:pitch角度
	*double rollAngle:roll角度
	*/
}