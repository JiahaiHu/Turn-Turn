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

	// 图层 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.2,1,1).p("Aj8ALQEtAnDMhJ");
	this.shape.setTransform(103.6,49.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.2,1,1).p("Aj7ANQCOAEB+ABQCEACBngl");
	this.shape_1.setTransform(103.7,48.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.2,1,1).p("Aj6ANQCKgMCAALQCFALBmgl");
	this.shape_2.setTransform(103.8,48.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.2,1,1).p("Aj5ANQCGgcCBAUQCHAUBlgl");
	this.shape_3.setTransform(103.9,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.2,1,1).p("Aj4ANQCBgrCEAeQCJAcBjgj");
	this.shape_4.setTransform(104,47.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1.2,1,1).p("Aj3ASQB9g7CHAnQCKAlBhgj");
	this.shape_5.setTransform(104.1,46.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.2,1,1).p("Aj2AXQB5hKCIAwQCMAuBggj");
	this.shape_6.setTransform(104.2,45.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.2,1,1).p("Aj1AbQB1haCKA5QCNA4Bfgi");
	this.shape_7.setTransform(104.3,45.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.2,1,1).p("Aj0AfQBxhqCMBDQCPBBBdgi");
	this.shape_8.setTransform(104.4,44.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1.2,1,1).p("AjzAjQBsh6CPBMQCQBLBcgi");
	this.shape_9.setTransform(104.5,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// 图层 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B06F34").ss(2,1,1).p("AkFA0IILhn");
	this.shape_10.setTransform(93.4,61.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(19));

	// 骨架_11
	this.instance = new lib.deer("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(123.9,60.4,0.296,0.296,-10.4,0,0,-19.3,52.4);

	this.instance_1 = new lib.fl("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.2,64.2,0.301,0.301,-16.8,0,0,5.5,-6.9);

	this.instance_2 = new lib.fl("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(122.3,66.1,0.301,0.301,-6.3,0,0,8.1,-3.1);

	this.instance_3 = new lib.bel("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.3,68.2,0.3,0.3,-13.9,0,0,-9.5,4.4);

	this.instance_4 = new lib.bel("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(118.5,60.7,0.321,0.321,-6.8,0,0,21.2,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-6.8,x:118.5,y:60.7,regY:-11.8}},{t:this.instance_3,p:{regX:-9.5,rotation:-13.9,x:118.3,y:68.2,regY:4.4}},{t:this.instance_2,p:{scaleX:0.301,scaleY:0.301,rotation:-6.3,x:122.3,y:66.1,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:-16.8,y:64.2,x:129.2,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.3,regY:52.4,scaleX:0.296,scaleY:0.296,rotation:-10.4,x:123.9,y:60.4}}]}).to({state:[{t:this.instance_4,p:{regX:21.3,rotation:-11.4,x:118.4,y:60.2,regY:-11.8}},{t:this.instance_3,p:{regX:-9.6,rotation:-18.2,x:119.1,y:68.5,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:-3.6,x:121.7,y:66.3,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:-13.8,y:64.7,x:129.2,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.2,regY:52.5,scaleX:0.295,scaleY:0.295,rotation:-11,x:123.8,y:60.1}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-16,x:118.1,y:59.8,regY:-11.8}},{t:this.instance_3,p:{regX:-9.6,rotation:-22.6,x:119.8,y:68.6,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:-0.8,x:121.1,y:66.3,regY:-3.2,regX:8.1}},{t:this.instance_1,p:{rotation:-10.7,y:64.7,x:129,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.2,regY:52.4,scaleX:0.295,scaleY:0.295,rotation:-11.7,x:123.7,y:60}}]},1).to({state:[{t:this.instance_4,p:{regX:21.4,rotation:-20.5,x:118,y:59.3,regY:-11.7}},{t:this.instance_3,p:{regX:-9.5,rotation:-26.9,x:120.5,y:68.7,regY:4.4}},{t:this.instance_2,p:{scaleX:0.301,scaleY:0.301,rotation:1.9,x:120.6,y:66.4,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:-7.7,y:64.8,x:128.8,regX:5.6,regY:-6.8}},{t:this.instance,p:{regX:-19.3,regY:52.3,scaleX:0.295,scaleY:0.295,rotation:-12.4,x:123.6,y:59.8}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-25.1,x:117.8,y:58.8,regY:-11.8}},{t:this.instance_3,p:{regX:-9.5,rotation:-31.2,x:121.2,y:68.7,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:4.6,x:120,y:66.5,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:-4.6,y:64.7,x:128.6,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.3,regY:52.5,scaleX:0.295,scaleY:0.295,rotation:-13.1,x:123.6,y:59.8}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-29.7,x:117.7,y:58.4,regY:-11.7}},{t:this.instance_3,p:{regX:-9.5,rotation:-35.5,x:122,y:68.6,regY:4.3}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:7.3,x:119.4,y:66.4,regY:-3.2,regX:8}},{t:this.instance_1,p:{rotation:-1.5,y:64.7,x:128.3,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.3,regY:52.5,scaleX:0.295,scaleY:0.295,rotation:-13.7,x:123.5,y:59.6}}]},1).to({state:[{t:this.instance_4,p:{regX:21.4,rotation:-34.2,x:117.6,y:57.9,regY:-11.7}},{t:this.instance_3,p:{regX:-9.6,rotation:-39.9,x:122.8,y:68.5,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:10.1,x:119,y:66.4,regY:-3.3,regX:8.1}},{t:this.instance_1,p:{rotation:1.5,y:64.7,x:128.1,regX:5.5,regY:-6.8}},{t:this.instance,p:{regX:-19.2,regY:52.4,scaleX:0.295,scaleY:0.295,rotation:-14.4,x:123.5,y:59.4}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-38.8,x:117.5,y:57.5,regY:-11.6}},{t:this.instance_3,p:{regX:-9.6,rotation:-44.2,x:123.5,y:68.3,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:12.8,x:118.5,y:66.5,regY:-3,regX:8}},{t:this.instance_1,p:{rotation:4.5,y:64.8,x:127.8,regX:5.5,regY:-6.8}},{t:this.instance,p:{regX:-19.4,regY:52.3,scaleX:0.295,scaleY:0.295,rotation:-15.1,x:123.3,y:59.3}}]},1).to({state:[{t:this.instance_4,p:{regX:21.3,rotation:-43.4,x:117.3,y:57,regY:-11.9}},{t:this.instance_3,p:{regX:-9.5,rotation:-48.5,x:124.3,y:68,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:15.5,x:118,y:66.5,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:7.6,y:64.6,x:127.6,regX:5.5,regY:-7}},{t:this.instance,p:{regX:-19.2,regY:52.5,scaleX:0.295,scaleY:0.295,rotation:-15.7,x:123.4,y:59.2}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-47.9,x:117.3,y:56.6,regY:-11.7}},{t:this.instance_3,p:{regX:-9.4,rotation:-52.8,x:125,y:67.7,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:18.3,x:117.6,y:66.6,regY:-3.2,regX:8.1}},{t:this.instance_1,p:{rotation:10.7,y:64.7,x:127.4,regX:5.6,regY:-7}},{t:this.instance,p:{regX:-19.3,regY:52.4,scaleX:0.295,scaleY:0.295,rotation:-16.4,x:123.3,y:59.1}}]},1).to({state:[{t:this.instance_4,p:{regX:21.3,rotation:-43.4,x:117.3,y:57,regY:-11.9}},{t:this.instance_3,p:{regX:-9.5,rotation:-48.5,x:124.3,y:68,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:15.6,x:118,y:66.5,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:7.6,y:64.6,x:127.6,regX:5.5,regY:-7}},{t:this.instance,p:{regX:-19.2,regY:52.5,scaleX:0.295,scaleY:0.295,rotation:-15.7,x:123.4,y:59.2}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-38.8,x:117.4,y:57.5,regY:-11.6}},{t:this.instance_3,p:{regX:-9.6,rotation:-44.2,x:123.5,y:68.3,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:12.8,x:118.4,y:66.5,regY:-3,regX:8}},{t:this.instance_1,p:{rotation:4.5,y:64.8,x:127.8,regX:5.5,regY:-6.8}},{t:this.instance,p:{regX:-19.3,regY:52.3,scaleX:0.295,scaleY:0.295,rotation:-15.1,x:123.4,y:59.2}}]},1).to({state:[{t:this.instance_4,p:{regX:21.4,rotation:-34.2,x:117.5,y:57.9,regY:-11.7}},{t:this.instance_3,p:{regX:-9.6,rotation:-39.9,x:122.7,y:68.5,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:10.1,x:118.9,y:66.4,regY:-3.3,regX:8.1}},{t:this.instance_1,p:{rotation:1.5,y:64.7,x:128.1,regX:5.5,regY:-6.8}},{t:this.instance,p:{regX:-19.2,regY:52.4,scaleX:0.295,scaleY:0.295,rotation:-14.4,x:123.4,y:59.4}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-29.7,x:117.6,y:58.4,regY:-11.7}},{t:this.instance_3,p:{regX:-9.5,rotation:-35.5,x:122,y:68.6,regY:4.3}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:7.4,x:119.4,y:66.4,regY:-3.2,regX:8}},{t:this.instance_1,p:{rotation:-1.5,y:64.7,x:128.3,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.3,regY:52.5,scaleX:0.295,scaleY:0.295,rotation:-13.7,x:123.5,y:59.5}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-25.1,x:117.6,y:58.8,regY:-11.8}},{t:this.instance_3,p:{regX:-9.5,rotation:-31.2,x:121.2,y:68.7,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:4.6,x:120,y:66.4,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:-4.6,y:64.7,x:128.5,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.3,regY:52.5,scaleX:0.295,scaleY:0.295,rotation:-13,x:123.5,y:59.6}}]},1).to({state:[{t:this.instance_4,p:{regX:21.4,rotation:-20.5,x:117.8,y:59.4,regY:-11.7}},{t:this.instance_3,p:{regX:-9.5,rotation:-26.9,x:120.5,y:68.7,regY:4.4}},{t:this.instance_2,p:{scaleX:0.301,scaleY:0.301,rotation:1.9,x:120.5,y:66.4,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:-7.6,y:64.7,x:128.8,regX:5.6,regY:-6.8}},{t:this.instance,p:{regX:-19.3,regY:52.3,scaleX:0.295,scaleY:0.295,rotation:-12.4,x:123.5,y:59.7}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-16,x:117.9,y:59.9,regY:-11.7}},{t:this.instance_3,p:{regX:-9.6,rotation:-22.6,x:119.7,y:68.6,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:-0.8,x:121,y:66.3,regY:-3.2,regX:8.1}},{t:this.instance_1,p:{rotation:-10.7,y:64.6,x:128.9,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.2,regY:52.4,scaleX:0.295,scaleY:0.295,rotation:-11.7,x:123.6,y:59.8}}]},1).to({state:[{t:this.instance_4,p:{regX:21.3,rotation:-11.4,x:118.1,y:60.3,regY:-11.8}},{t:this.instance_3,p:{regX:-9.6,rotation:-18.2,x:119,y:68.5,regY:4.4}},{t:this.instance_2,p:{scaleX:0.3,scaleY:0.3,rotation:-3.6,x:121.6,y:66.2,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:-13.7,y:64.6,x:129.1,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.2,regY:52.5,scaleX:0.295,scaleY:0.295,rotation:-11,x:123.6,y:60}}]},1).to({state:[{t:this.instance_4,p:{regX:21.2,rotation:-6.8,x:118.2,y:60.8,regY:-11.8}},{t:this.instance_3,p:{regX:-9.5,rotation:-13.9,x:118.2,y:68.2,regY:4.4}},{t:this.instance_2,p:{scaleX:0.301,scaleY:0.301,rotation:-6.3,x:122.1,y:66.1,regY:-3.1,regX:8.1}},{t:this.instance_1,p:{rotation:-16.8,y:64.2,x:129,regX:5.5,regY:-6.9}},{t:this.instance,p:{regX:-19.2,regY:52.4,scaleX:0.295,scaleY:0.295,rotation:-10.4,x:123.7,y:60.1}}]},1).wait(1));

	// 骨架_9
	this.instance_5 = new lib.sledge("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(39,65.4,0.322,0.322,26.7,0,0,-15.7,-3.1);

	this.instance_6 = new lib.元件1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(57.7,53.4,0.329,0.329,17,0,0,20.7,36);

	this.instance_7 = new lib.arm("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(74.6,51.5,0.329,0.329,12,0,0,6.5,-0.8);

	this.instance_8 = new lib.bag("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(27.2,47.3,0.329,0.329,0,0,0,1.8,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:0,y:47.3,regY:50,x:27.2}},{t:this.instance_7,p:{rotation:12,x:74.6,y:51.5,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.7,regY:36,rotation:17,x:57.7,y:53.4}},{t:this.instance_5,p:{regX:-15.7,rotation:26.7,x:39,y:65.4,regY:-3.1}}]}).to({state:[{t:this.instance_8,p:{regX:1.9,rotation:-0.3,y:47.2,regY:50,x:27.2}},{t:this.instance_7,p:{rotation:10.4,x:74.7,y:51.3,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.8,regY:35.9,rotation:16.3,x:57.9,y:53.3}},{t:this.instance_5,p:{regX:-15.8,rotation:26.9,x:39,y:65.4,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:-0.5,y:47.2,regY:50,x:27.2}},{t:this.instance_7,p:{rotation:8.9,x:74.9,y:51.2,regX:6.7,regY:-0.8}},{t:this.instance_6,p:{regX:20.6,regY:36.1,rotation:15.6,x:58,y:53.4}},{t:this.instance_5,p:{regX:-15.8,rotation:27.2,x:39.1,y:65.3,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.9,rotation:-0.8,y:47.3,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:7.3,x:75,y:51,regX:6.7,regY:-0.8}},{t:this.instance_6,p:{regX:20.7,regY:36,rotation:14.9,x:58.1,y:53.4}},{t:this.instance_5,p:{regX:-15.7,rotation:27.5,x:39.2,y:65.2,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:-1.1,y:47.3,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:5.7,x:75,y:50.8,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.7,regY:36,rotation:14.1,x:58.2,y:53.4}},{t:this.instance_5,p:{regX:-15.7,rotation:27.7,x:39.3,y:65.2,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.9,rotation:-1.3,y:47.2,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:4.2,x:75.1,y:50.6,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.8,regY:36,rotation:13.4,x:58.4,y:53.4}},{t:this.instance_5,p:{regX:-15.8,rotation:28,x:39.3,y:65.1,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:-1.6,y:47.2,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:2.6,x:75.2,y:50.4,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.8,regY:36,rotation:12.7,x:58.6,y:53.5}},{t:this.instance_5,p:{regX:-15.8,rotation:28.3,x:39.4,y:65,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.9,rotation:-1.9,y:47.3,regY:50.1,x:27.3}},{t:this.instance_7,p:{rotation:1,x:75.3,y:50.3,regX:6.5,regY:-0.7}},{t:this.instance_6,p:{regX:20.7,regY:36,rotation:12,x:58.6,y:53.5}},{t:this.instance_5,p:{regX:-15.6,rotation:28.5,x:39.6,y:65,regY:-3.2}}]},1).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:-2.2,y:47.2,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:-0.5,x:75.4,y:50.1,regX:6.5,regY:-0.7}},{t:this.instance_6,p:{regX:20.8,regY:36,rotation:11.3,x:58.8,y:53.6}},{t:this.instance_5,p:{regX:-15.6,rotation:28.8,x:39.6,y:65,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.9,rotation:-2.4,y:47.2,regY:50,x:27.2}},{t:this.instance_7,p:{rotation:-2.1,x:75.5,y:49.9,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.8,regY:36,rotation:10.6,x:59,y:53.6}},{t:this.instance_5,p:{regX:-15.6,rotation:29.1,x:39.7,y:64.9,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:-2.2,y:47.2,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:-0.5,x:75.4,y:50.1,regX:6.5,regY:-0.7}},{t:this.instance_6,p:{regX:20.8,regY:36,rotation:11.3,x:58.8,y:53.6}},{t:this.instance_5,p:{regX:-15.6,rotation:28.8,x:39.6,y:65,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.9,rotation:-1.9,y:47.3,regY:50.1,x:27.3}},{t:this.instance_7,p:{rotation:1,x:75.3,y:50.3,regX:6.5,regY:-0.7}},{t:this.instance_6,p:{regX:20.7,regY:36,rotation:12,x:58.6,y:53.5}},{t:this.instance_5,p:{regX:-15.6,rotation:28.5,x:39.6,y:64.9,regY:-3.2}}]},1).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:-1.6,y:47.2,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:2.6,x:75.1,y:50.4,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.8,regY:36,rotation:12.7,x:58.6,y:53.5}},{t:this.instance_5,p:{regX:-15.8,rotation:28.3,x:39.4,y:65,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.9,rotation:-1.3,y:47.2,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:4.2,x:75,y:50.6,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.8,regY:36,rotation:13.4,x:58.4,y:53.4}},{t:this.instance_5,p:{regX:-15.8,rotation:28,x:39.3,y:65,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:-1.1,y:47.3,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:5.7,x:75,y:50.7,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.7,regY:36,rotation:14.1,x:58.2,y:53.4}},{t:this.instance_5,p:{regX:-15.7,rotation:27.7,x:39.3,y:65.1,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.9,rotation:-0.8,y:47.3,regY:50.1,x:27.2}},{t:this.instance_7,p:{rotation:7.3,x:74.9,y:50.9,regX:6.7,regY:-0.8}},{t:this.instance_6,p:{regX:20.7,regY:36,rotation:14.9,x:58.1,y:53.3}},{t:this.instance_5,p:{regX:-15.7,rotation:27.5,x:39.1,y:65.1,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:-0.5,y:47.2,regY:50,x:27.2}},{t:this.instance_7,p:{rotation:8.9,x:74.9,y:51.1,regX:6.7,regY:-0.8}},{t:this.instance_6,p:{regX:20.6,regY:36.1,rotation:15.6,x:57.9,y:53.3}},{t:this.instance_5,p:{regX:-15.8,rotation:27.2,x:39.1,y:65.2,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.9,rotation:-0.3,y:47.2,regY:50,x:27.2}},{t:this.instance_7,p:{rotation:10.4,x:74.6,y:51.3,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.8,regY:35.9,rotation:16.3,x:57.8,y:53.3}},{t:this.instance_5,p:{regX:-15.8,rotation:26.9,x:38.9,y:65.3,regY:-3.1}}]},1).to({state:[{t:this.instance_8,p:{regX:1.8,rotation:0,y:47.3,regY:50,x:27.2}},{t:this.instance_7,p:{rotation:12,x:74.5,y:51.5,regX:6.5,regY:-0.8}},{t:this.instance_6,p:{regX:20.7,regY:36.1,rotation:17,x:57.7,y:53.3}},{t:this.instance_5,p:{regX:-15.7,rotation:26.7,x:39,y:65.3,regY:-3.1}}]},1).wait(1));

	// 图层 4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B06F34").ss(2,1,1).p("AkEA1IIJhp");
	this.shape_11.setTransform(93,58.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.2,40,148.4,100.3);
// library properties:
lib.properties = {
	width: 150,
	height: 75,
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