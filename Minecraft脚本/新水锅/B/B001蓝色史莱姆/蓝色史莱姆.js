var iceShootCount = 0;
var onGround

function init(event) {
    iceShootCount = 0;
    if (isBig(event.npc)) {
        applyBigData(event.npc);
    } else {
        applySmallData(event.npc);
    }
}

function isBig(npc) {
    return npc.getDisplay().getSize() == 10;
}

function applySmallData(npc) {
    npc.getDisplay().setSize(5);
    npc.getStats().getMelee().setStrength(1);
}

function applyBigData(npc) {
    npc.getDisplay().setSize(10);
    npc.getStats().getMelee().setStrength(3);
}

function meleeAttack(event) {
    if (event.npc.getMCEntity().field_70122_E) {
        event.npc.jump();
        event.npc.world.playSoundAt(event.npc.pos, "minecraft:entity.slime.jump", 1, 1);
    }
}

function tick(event) {
    if (event.npc.isNavigating() && event.npc.getMCEntity().field_70122_E) {
        event.npc.jump();
        event.npc.world.playSoundAt(event.npc.pos, "minecraft:entity.slime.jump", 1, 1);
    }
    iceShootCount++;
    if (iceShootCount >= 5) {
        iceShootCount = 0;
        if (!isBig(event.npc) && event.npc.isAttacking()) {
            var project = event.npc.shootItem(event.npc.getAttackTarget(), event.npc.world.createItem("minecraft:ice", 0, 1), 95);
            project.enableEvents();
        }
    }
    if (!isBig(event.npc) && event.npc.inWater()) {
        applyBigData(event.npc);
    }
}

function projectileImpact(event) {
    if (event.type == 0) {
        var victim = event.API.getIEntity(event.target);
        event.projectile.world.setBlock(victim.getBlockX(), victim.getBlockY(), victim.getBlockZ(), "minecraft:ice", 0);
        event.projectile.world.setBlock(victim.getBlockX(), victim.getBlockY() + 1, victim.getBlockZ(), "minecraft:ice", 0);
    }
}

function damaged(event) {
    if (isBig(event.npc) && Math.random() < 0.3) {
        event.npc.world.playSoundAt(event.npc.pos, "minecraft:entity.slime.jump", 1, 1);
        for (var i = 0; i < 2; i++) {
            var kid = event.API.getClones().spawn(event.npc.x, event.npc.y, event.npc.z, 1, "蓝色史莱姆", event.npc.world);
            kid.setMotionX(Math.random() - 0.5);
            kid.setMotionY(0.5);
            kid.setMotionZ(Math.random() - 0.5);
        }
        event.npc.setHealth(0);
    }
}