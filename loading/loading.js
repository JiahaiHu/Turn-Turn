(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"loading_atlas_", frames: [[60,293,36,40],[0,123,121,168],[123,273,126,127],[0,293,58,36],[0,0,243,121],[123,123,128,148],[0,331,25,47]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.后腿 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.等待页面 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.等待页面1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.等待页面13 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.等待页面2 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.等待页面3 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.前腿 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sledge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.等待页面2();
	this.instance.parent = this;
	this.instance.setTransform(-123,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-62,243,121);


(lib.fl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.前腿();
	this.instance.parent = this;
	this.instance.setTransform(-12,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-28,25,47);


(lib.deer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.等待页面1();
	this.instance.parent = this;
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-65,126,127);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.等待页面3();
	this.instance.parent = this;
	this.instance.setTransform(-65,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-75,128,148);


(lib.bel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.后腿();
	this.instance.parent = this;
	this.instance.setTransform(-17,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-21,36,40);


(lib.bag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.等待页面();
	this.instance.parent = this;
	this.instance.setTransform(-62,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-86,121,168);


(lib.arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.等待页面13();
	this.instance.parent = this;
	this.instance.setTransform(-28,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-19,58,36);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B06F34").ss(8,1,1).p("AsAB+IYBj7");
	this.shape.setTransform(297.5,137.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(19));

	// 骨架_3
	this.instance = new lib.sledge("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(109,180.1,0.993,0.993,0,0,0,-56.5,0.5);

	this.instance_1 = new lib.arm("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(237.2,104.9,0.993,0.993,0,0,0,6.3,4.9);

	this.instance_2 = new lib.元件1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(190.6,120.9,0.994,0.994,0,0,0,29.2,41.1);

	this.instance_3 = new lib.bag("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(100,154.9,0.993,0.993,0,0,0,20.8,62.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{rotation:0,x:100,y:154.9,regX:20.8}},{t:this.instance_2,p:{regY:41.1,rotation:0,x:190.6,y:120.9}},{t:this.instance_1,p:{regY:4.9,rotation:0,x:237.2,y:104.9,regX:6.3}},{t:this.instance,p:{rotation:0,x:109,y:180.1,regX:-56.5}}]}).to({state:[{t:this.instance_3,p:{rotation:-1.6,x:99.3,y:153.5,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:0.3,x:189.9,y:121.1}},{t:this.instance_1,p:{regY:5,rotation:-1.3,x:237.1,y:104.3,regX:6.3}},{t:this.instance,p:{rotation:0.8,x:107.9,y:179,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-3.2,x:98.5,y:152.1,regX:20.7}},{t:this.instance_2,p:{regY:41.2,rotation:0.5,x:189.1,y:121.3}},{t:this.instance_1,p:{regY:5,rotation:-2.7,x:237.1,y:103.7,regX:6.3}},{t:this.instance,p:{rotation:1.6,x:106.9,y:177.9,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-4.8,x:98,y:150.7,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:0.8,x:188.5,y:121.5}},{t:this.instance_1,p:{regY:5,rotation:-4,x:237,y:103.1,regX:6.3}},{t:this.instance,p:{rotation:2.4,x:106,y:176.7,regX:-56.4}}]},1).to({state:[{t:this.instance_3,p:{rotation:-6.5,x:97.2,y:149.4,regX:20.7}},{t:this.instance_2,p:{regY:41.2,rotation:1.1,x:187.8,y:121.6}},{t:this.instance_1,p:{regY:5,rotation:-5.4,x:236.9,y:102.6,regX:6.3}},{t:this.instance,p:{rotation:3.2,x:104.9,y:175.7,regX:-56.4}}]},1).to({state:[{t:this.instance_3,p:{rotation:-8.1,x:96.7,y:147.9,regX:20.8}},{t:this.instance_2,p:{regY:41.3,rotation:1.3,x:187.1,y:121.9}},{t:this.instance_1,p:{regY:5,rotation:-6.7,x:236.8,y:102,regX:6.2}},{t:this.instance,p:{rotation:4,x:103.8,y:174.5,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-9.7,x:96.1,y:146.6,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:1.6,x:186.4,y:121.9}},{t:this.instance_1,p:{regY:5,rotation:-8.1,x:236.8,y:101.4,regX:6.3}},{t:this.instance,p:{rotation:4.8,x:102.9,y:173.3,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-11.3,x:95.5,y:145.2,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:1.9,x:185.7,y:122.1}},{t:this.instance_1,p:{regY:5,rotation:-9.4,x:236.6,y:100.9,regX:6.2}},{t:this.instance,p:{rotation:5.6,x:101.9,y:172.2,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-12.9,x:95,y:143.8,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:2.1,x:185,y:122.2}},{t:this.instance_1,p:{regY:5,rotation:-10.7,x:236.6,y:100.3,regX:6.3}},{t:this.instance,p:{rotation:6.4,x:101,y:171.1,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-14.5,x:94.4,y:142.4,regX:20.8}},{t:this.instance_2,p:{regY:41.1,rotation:2.4,x:184.4,y:122.2}},{t:this.instance_1,p:{regY:5,rotation:-12.1,x:236.6,y:99.8,regX:6.3}},{t:this.instance,p:{rotation:7.2,x:100.1,y:169.9,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-12.9,x:95,y:143.8,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:2.1,x:185,y:122.2}},{t:this.instance_1,p:{regY:5,rotation:-10.7,x:236.6,y:100.3,regX:6.3}},{t:this.instance,p:{rotation:6.4,x:101,y:171.1,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-11.3,x:95.5,y:145.2,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:1.9,x:185.6,y:122.1}},{t:this.instance_1,p:{regY:5,rotation:-9.4,x:236.6,y:100.8,regX:6.2}},{t:this.instance,p:{rotation:5.6,x:101.9,y:172.2,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-9.7,x:96.1,y:146.6,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:1.6,x:186.3,y:121.9}},{t:this.instance_1,p:{regY:5,rotation:-8.1,x:236.8,y:101.3,regX:6.3}},{t:this.instance,p:{rotation:4.8,x:102.8,y:173.3,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-8.1,x:96.7,y:147.9,regX:20.8}},{t:this.instance_2,p:{regY:41.3,rotation:1.3,x:187.1,y:121.9}},{t:this.instance_1,p:{regY:5,rotation:-6.7,x:236.7,y:102,regX:6.2}},{t:this.instance,p:{rotation:4,x:103.8,y:174.5,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-6.5,x:97.1,y:149.4,regX:20.7}},{t:this.instance_2,p:{regY:41.2,rotation:1.1,x:187.8,y:121.6}},{t:this.instance_1,p:{regY:5,rotation:-5.4,x:236.9,y:102.5,regX:6.3}},{t:this.instance,p:{rotation:3.2,x:104.9,y:175.6,regX:-56.4}}]},1).to({state:[{t:this.instance_3,p:{rotation:-4.8,x:97.9,y:150.7,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:0.8,x:188.5,y:121.4}},{t:this.instance_1,p:{regY:5,rotation:-4,x:237,y:103.1,regX:6.3}},{t:this.instance,p:{rotation:2.4,x:105.9,y:176.7,regX:-56.4}}]},1).to({state:[{t:this.instance_3,p:{rotation:-3.2,x:98.4,y:152.1,regX:20.7}},{t:this.instance_2,p:{regY:41.2,rotation:0.5,x:189.1,y:121.3}},{t:this.instance_1,p:{regY:5,rotation:-2.7,x:237,y:103.7,regX:6.3}},{t:this.instance,p:{rotation:1.6,x:106.8,y:177.8,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:-1.6,x:99.3,y:153.5,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:0.3,x:189.8,y:121.1}},{t:this.instance_1,p:{regY:5,rotation:-1.3,x:237,y:104.2,regX:6.3}},{t:this.instance,p:{rotation:0.8,x:107.9,y:178.9,regX:-56.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:100,y:154.9,regX:20.8}},{t:this.instance_2,p:{regY:41.2,rotation:0,x:190.5,y:120.9}},{t:this.instance_1,p:{regY:5,rotation:0,x:237.1,y:104.9,regX:6.3}},{t:this.instance,p:{rotation:0,x:108.9,y:180,regX:-56.5}}]},1).wait(1));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AuOhFQWVD2GIi+");
	this.shape_1.setTransform(346,103);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AuXg+QFIAREdAhQApAEAoAFQEdAgDTAVQC/ARCZgGQDBgIBwgx");
	this.shape_2.setTransform(345.5,101.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("Augg2QFCgYElAgQApAEApAFQEgAiDVAlQC8AbCdAEQDGAEB0gt");
	this.shape_3.setTransform(345,99.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("AupglQE7hBEuAeQAqAFApAFQEjAjDXA1QC4AnCjANQDKAQB4gq");
	this.shape_4.setTransform(344.5,96.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("AuygUQE1hpE2AdQAqAEArAFQElAlDaBFQC0AyCnAXQDQAbB6gm");
	this.shape_5.setTransform(344,94.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("Au6gCQEviSE9AbQArAEArAFQEnAmDdBVQCxA9CtAiQDTAmB+gi");
	this.shape_6.setTransform(343.5,91.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4,1,1).p("AvDAOQEpi6FFAaQAsAEAsAFQEpAnDfBmQCtBICyArQDYAyCCge");
	this.shape_7.setTransform(343,88.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,1,1).p("AvMAeQEjjiFNAZQAsADAtAGQEsApDhB2QCqBSC3A1QDcA+CGgb");
	this.shape_8.setTransform(342.5,86.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4,1,1).p("AvVAuQEdkLFVAYQAtADAtAFQEvArDkCGQClBdC8A/QDhBKCKgX");
	this.shape_9.setTransform(342,83.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4,1,1).p("AveA+QEXk0FdAXQAtADAvAFIAZAEQEXAoDnCWQChBpDDBIQDmBVCMgT");
	this.shape_10.setTransform(341.5,81.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4,1,1).p("AvVAuQEdkLFVAYQAtADAtAFQCQAUBtAiQCSAuCDBNQCkBdC9A/QDiBKCKgX");
	this.shape_11.setTransform(342,83.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1,1).p("AvMAeQEjjjFNAZQArAEAuAFQCNATBsAfQCSAqCABDQCpBSC3A1QDfA/CGgb");
	this.shape_12.setTransform(342.5,86.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4,1,1).p("AvDANQEoi6FGAbQArADAsAFQCLATBrAbQCQAlCAA6QCsBICxAsQDcAyCDgf");
	this.shape_13.setTransform(343,88.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4,1,1).p("Au6gDQEuiSE9AcQArAEAsAFQCJARBoAYQCQAhB/AxQCvA9CsAiQDYAnCAgj");
	this.shape_14.setTransform(343.5,91.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(4,1,1).p("AuygUQE1hqE1AdQArAEAqAFQCHARBnAVQCPAdB+AnQCyAyCnAYQDUAcB9gn");
	this.shape_15.setTransform(344,94.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(4,1,1).p("AupgmQE7hAEtAeQAqAEApAFQCFAQBmASQCOAYB9AeQC1AnChAPQDSAQB6gr");
	this.shape_16.setTransform(344.5,97);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(4,1,1).p("Augg3QFBgYElAgQApAEApAFQCDAPBjAOQCNATB9AWQC4AcCcAGQDOAEB3gv");
	this.shape_17.setTransform(345,99.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(4,1,1).p("AuXg+QFHAQEcAhQApAFAoAFQCBANBiALQCMAQB7ANQC8AQCXgEQDKgHB0gz");
	this.shape_18.setTransform(345.5,101.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(4,1,1).p("AuOhFQIOBaGAAgQKXA2D4h4");
	this.shape_19.setTransform(346,103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// 骨架_5
	this.instance_4 = new lib.deer("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(406.7,139.3,0.994,0.994,0,0,0,-17.7,54.9);

	this.instance_5 = new lib.bel("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(384.3,137.1,0.993,0.993,0,0,0,20.4,-10.8);

	this.instance_6 = new lib.fl("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(419.6,143.7,0.992,0.992,0,0,0,-3.2,-16.3);

	this.instance_7 = new lib.bel("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(421.4,143.5,0.992,0.992,0,0,0,20.7,-9.3);

	this.instance_8 = new lib.fl("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(383.3,137.2,0.992,0.992,0,0,0,-3,-15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{regY:-15.9,rotation:0,x:383.3,y:137.2,regX:-3}},{t:this.instance_7,p:{rotation:0,x:421.4,y:143.5,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.2,regY:-16.3,rotation:0,x:419.6,y:143.7}},{t:this.instance_5,p:{regX:20.4,rotation:0,x:384.3,y:137.1,regY:-10.8}},{t:this.instance_4,p:{regX:-17.7,regY:54.9,rotation:0,x:406.7,y:139.3}}]}).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:6.1,x:382.3,y:137.3,regX:-3}},{t:this.instance_7,p:{rotation:-2.8,x:421.6,y:143.2,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:4.6,x:418.6,y:143.9}},{t:this.instance_5,p:{regX:20.5,rotation:-1.4,x:383.8,y:135.5,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:0.5,x:406.6,y:139.5}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:12.2,x:381.3,y:137.3,regX:-3}},{t:this.instance_7,p:{rotation:-5.6,x:421.8,y:142.6,regX:20.8,regY:-9.3}},{t:this.instance_6,p:{regX:-3.2,regY:-16.2,rotation:9.2,x:417.3,y:144.1}},{t:this.instance_5,p:{regX:20.5,rotation:-2.8,x:383.1,y:134.2,regY:-10.8}},{t:this.instance_4,p:{regX:-17.7,regY:55,rotation:1.1,x:406.2,y:139.5}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.9,rotation:18.2,x:380.2,y:137.1,regX:-3.1}},{t:this.instance_7,p:{rotation:-8.5,x:421.7,y:142.4,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:13.8,x:416.4,y:144.4}},{t:this.instance_5,p:{regX:20.5,rotation:-4.2,x:382.7,y:133.1,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:1.6,x:406.1,y:139.6}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.9,rotation:24.3,x:379.3,y:137.1,regX:-3}},{t:this.instance_7,p:{rotation:-11.3,x:421.9,y:142,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:18.4,x:415.4,y:144.7}},{t:this.instance_5,p:{regX:20.5,rotation:-5.6,x:382.6,y:132.1,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:2.2,x:405.8,y:139.7}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:30.4,x:378.2,y:137.2,regX:-3}},{t:this.instance_7,p:{rotation:-14.1,x:421.9,y:141.5,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:23,x:414.5,y:145.2}},{t:this.instance_5,p:{regX:20.5,rotation:-7,x:382.7,y:131.2,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:2.7,x:405.7,y:139.7}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:36.5,x:377.1,y:137.1,regX:-3}},{t:this.instance_7,p:{rotation:-16.9,x:422,y:141.1,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:27.6,x:413.5,y:145.9}},{t:this.instance_5,p:{regX:20.6,rotation:-8.4,x:383.1,y:130.6,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:3.3,x:405.4,y:139.8}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:42.6,x:376.1,y:137,regX:-3}},{t:this.instance_7,p:{rotation:-19.7,x:422,y:140.6,regX:20.7,regY:-9.4}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:32.2,x:412.8,y:146.6}},{t:this.instance_5,p:{regX:20.4,rotation:-9.8,x:383.3,y:130.1,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:3.8,x:405.1,y:139.8}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:48.7,x:375.1,y:136.8,regX:-3}},{t:this.instance_7,p:{rotation:-22.6,x:422,y:140.3,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.1,rotation:36.8,x:411.9,y:147.5}},{t:this.instance_5,p:{regX:20.4,rotation:-11.2,x:383.9,y:130,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:4.4,x:404.9,y:139.9}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.9,rotation:54.7,x:374.1,y:136.7,regX:-3}},{t:this.instance_7,p:{rotation:-25.4,x:422,y:139.9,regX:20.7,regY:-9.4}},{t:this.instance_6,p:{regX:-3.1,regY:-16.1,rotation:41.4,x:411.2,y:148.4}},{t:this.instance_5,p:{regX:20.5,rotation:-12.6,x:384.6,y:130,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:4.9,x:404.6,y:139.9}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:48.7,x:375.1,y:136.8,regX:-3}},{t:this.instance_7,p:{rotation:-22.6,x:422,y:140.3,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.1,rotation:36.8,x:411.9,y:147.4}},{t:this.instance_5,p:{regX:20.4,rotation:-11.2,x:383.9,y:130,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:4.4,x:404.9,y:139.8}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:42.6,x:376.1,y:137,regX:-3}},{t:this.instance_7,p:{rotation:-19.7,x:422,y:140.6,regX:20.7,regY:-9.4}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:32.2,x:412.8,y:146.6}},{t:this.instance_5,p:{regX:20.4,rotation:-9.8,x:383.3,y:130.1,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:3.8,x:405.1,y:139.7}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:36.5,x:377.1,y:137.1,regX:-3}},{t:this.instance_7,p:{rotation:-16.9,x:422,y:141,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:27.6,x:413.5,y:145.9}},{t:this.instance_5,p:{regX:20.6,rotation:-8.4,x:383.1,y:130.6,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:3.3,x:405.4,y:139.7}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:30.4,x:378.1,y:137.2,regX:-3}},{t:this.instance_7,p:{rotation:-14.1,x:421.9,y:141.5,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:23,x:414.5,y:145.2}},{t:this.instance_5,p:{regX:20.5,rotation:-7,x:382.7,y:131.2,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:2.7,x:405.6,y:139.6}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.9,rotation:24.3,x:379.2,y:137.1,regX:-3}},{t:this.instance_7,p:{rotation:-11.3,x:421.8,y:141.9,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:18.4,x:415.4,y:144.7}},{t:this.instance_5,p:{regX:20.5,rotation:-5.6,x:382.6,y:132.1,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:2.2,x:405.8,y:139.5}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.9,rotation:18.2,x:380.2,y:137.2,regX:-3.1}},{t:this.instance_7,p:{rotation:-8.5,x:421.7,y:142.4,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:13.8,x:416.4,y:144.4}},{t:this.instance_5,p:{regX:20.5,rotation:-4.2,x:382.7,y:133.1,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:1.6,x:406.1,y:139.4}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:12.2,x:381.2,y:137.3,regX:-3}},{t:this.instance_7,p:{rotation:-5.6,x:421.7,y:142.6,regX:20.8,regY:-9.3}},{t:this.instance_6,p:{regX:-3.2,regY:-16.2,rotation:9.2,x:417.3,y:144.1}},{t:this.instance_5,p:{regX:20.5,rotation:-2.8,x:383.1,y:134.2,regY:-10.8}},{t:this.instance_4,p:{regX:-17.7,regY:55,rotation:1.1,x:406.2,y:139.3}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:6.1,x:382.2,y:137.4,regX:-3}},{t:this.instance_7,p:{rotation:-2.8,x:421.5,y:143.1,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.1,regY:-16.2,rotation:4.6,x:418.6,y:143.9}},{t:this.instance_5,p:{regX:20.5,rotation:-1.4,x:383.7,y:135.5,regY:-10.8}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:0.5,x:406.6,y:139.2}}]},1).to({state:[{t:this.instance_8,p:{regY:-15.8,rotation:0,x:383.3,y:137.4,regX:-3}},{t:this.instance_7,p:{rotation:0,x:421.3,y:143.4,regX:20.7,regY:-9.3}},{t:this.instance_6,p:{regX:-3.2,regY:-16.2,rotation:0,x:419.6,y:143.8}},{t:this.instance_5,p:{regX:20.5,rotation:0,x:384.4,y:137,regY:-10.9}},{t:this.instance_4,p:{regX:-17.6,regY:55,rotation:0,x:406.8,y:139}}]},1).wait(1));

	// 图层 5
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B06F34").ss(8,1,1).p("AqyBvIVljd");
	this.shape_20.setTransform(293.2,129.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(262.3,126.5,467.2,232.7);
// library properties:
lib.properties = {
	width: 489,
	height: 242,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/loading_atlas_.png", id:"loading_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;