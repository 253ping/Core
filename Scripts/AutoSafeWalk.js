///api_version=2
(script = registerScript({
    name: "AutoSafeWalk",
    version: "1.2",
    authors: ["CzechHek"]
})).import("Core.lib");

module = {
    category: "Movement",
    values: maxfalldistance = value.createInteger("MaxFallDistance", 5, 0, 255),
    onMove: function (e) {
        e.setSafeWalk(!isAboveGround());
    }
}

function isAboveGround() {
    for (y = mc.thePlayer.posY; y && y-- >= (mc.thePlayer.posY - maxfalldistance.get());) if (!mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX, y, mc.thePlayer.posZ))) return true
}