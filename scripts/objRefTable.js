const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir
	];
};
self.C3_JsPropNameTable = [
	{ТайловыйФон: 0},
	{"8Направлений": 0},
	{корабль: 0}
];

self.InstanceType = {
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	корабль: class extends self.ISpriteInstance {}
}