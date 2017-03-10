(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"back_atlas_", frames: [[865,194,103,192],[478,0,385,369],[865,0,105,192],[478,371,175,248],[0,0,476,670]]}
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



(lib.左腿 = function() {
	this.spriteSheet = ss["back_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.背面 = function() {
	this.spriteSheet = ss["back_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.背面1 = function() {
	this.spriteSheet = ss["back_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.背面2 = function() {
	this.spriteSheet = ss["back_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.背面4 = function() {
	this.spriteSheet = ss["back_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.背面();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385,369);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.背面2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,248);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.左腿();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,192);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.背面1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,192);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.背面4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,476,670);


// stage content:
(lib.后面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 骨架_1
	this.instance = new lib.元件5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20,53.2,0.119,0.119,0,0,0,152.2,189.1);

	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.8,54.5,0.119,0.119,0,0,0,230.3,450.9);

	this.instance_2 = new lib.元件4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(60.2,60.5,0.119,0.119,0,0,0,55.8,59.1);

	this.instance_3 = new lib.元件2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(48.7,78,0.119,0.119,0,0,0,52.5,16.8);

	this.instance_4 = new lib.元件3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(33.4,76.1,0.119,0.119,0,0,0,55.4,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:33.4,y:76.1}},{t:this.instance_3,p:{y:78}},{t:this.instance_2,p:{regX:55.8,regY:59.1,rotation:0,x:60.2,y:60.5}},{t:this.instance_1,p:{x:40.8,y:54.5}},{t:this.instance,p:{regX:152.2,regY:189.1,rotation:0,x:20,y:53.2}}]}).to({state:[{t:this.instance_4,p:{x:33.3,y:76.2}},{t:this.instance_3,p:{y:77.8}},{t:this.instance_2,p:{regX:55.6,regY:59,rotation:0.6,x:59.8,y:60}},{t:this.instance_1,p:{x:40.7,y:54.4}},{t:this.instance,p:{regX:152.3,regY:189.3,rotation:2,x:19.9,y:52.5}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76.3}},{t:this.instance_3,p:{y:77.6}},{t:this.instance_2,p:{regX:55.9,regY:59.2,rotation:1.3,x:59.6,y:59.7}},{t:this.instance_1,p:{x:40.7,y:54.3}},{t:this.instance,p:{regX:152.2,regY:189.3,rotation:4.1,x:19.9,y:51.9}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76.5}},{t:this.instance_3,p:{y:77.4}},{t:this.instance_2,p:{regX:55.7,regY:59.1,rotation:1.9,x:59.3,y:59.2}},{t:this.instance_1,p:{x:40.7,y:54.2}},{t:this.instance,p:{regX:152.2,regY:189.1,rotation:6.1,x:19.9,y:51.1}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76.7}},{t:this.instance_3,p:{y:77.2}},{t:this.instance_2,p:{regX:56,regY:59.3,rotation:2.5,x:59.1,y:58.9}},{t:this.instance_1,p:{x:40.7,y:54.1}},{t:this.instance,p:{regX:152,regY:188.8,rotation:8.2,x:19.9,y:50.4}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76.8}},{t:this.instance_3,p:{y:77}},{t:this.instance_2,p:{regX:55.9,regY:59.1,rotation:3.2,x:58.8,y:58.5}},{t:this.instance_1,p:{x:40.7,y:54}},{t:this.instance,p:{regX:152,regY:189.2,rotation:10.2,x:20,y:49.8}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:77}},{t:this.instance_3,p:{y:76.9}},{t:this.instance_2,p:{regX:56.1,regY:59.4,rotation:3.8,x:58.5,y:58.1}},{t:this.instance_1,p:{x:40.7,y:53.9}},{t:this.instance,p:{regX:152.2,regY:189.3,rotation:12.3,x:20,y:49.1}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:77.2}},{t:this.instance_3,p:{y:76.7}},{t:this.instance_2,p:{regX:56,regY:59.2,rotation:4.5,x:58.2,y:57.7}},{t:this.instance_1,p:{x:40.7,y:53.8}},{t:this.instance,p:{regX:152.4,regY:189.3,rotation:14.3,x:20.2,y:48.5}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:77.3}},{t:this.instance_3,p:{y:76.5}},{t:this.instance_2,p:{regX:55.9,regY:59.1,rotation:5.1,x:57.9,y:57.3}},{t:this.instance_1,p:{x:40.7,y:53.7}},{t:this.instance,p:{regX:152,regY:189.3,rotation:16.4,x:20.2,y:47.8}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:77.5}},{t:this.instance_3,p:{y:76.3}},{t:this.instance_2,p:{regX:55.7,regY:59,rotation:5.7,x:57.7,y:56.9}},{t:this.instance_1,p:{x:40.7,y:53.7}},{t:this.instance,p:{regX:152.4,regY:189,rotation:18.4,x:20.3,y:47.1}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:77.3}},{t:this.instance_3,p:{y:76.5}},{t:this.instance_2,p:{regX:55.9,regY:59.1,rotation:5.1,x:57.9,y:57.3}},{t:this.instance_1,p:{x:40.7,y:53.7}},{t:this.instance,p:{regX:152,regY:189.3,rotation:16.4,x:20.2,y:47.8}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:77.2}},{t:this.instance_3,p:{y:76.7}},{t:this.instance_2,p:{regX:56,regY:59.2,rotation:4.5,x:58.2,y:57.7}},{t:this.instance_1,p:{x:40.7,y:53.8}},{t:this.instance,p:{regX:152.4,regY:189.3,rotation:14.3,x:20.2,y:48.5}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:77}},{t:this.instance_3,p:{y:76.8}},{t:this.instance_2,p:{regX:56.1,regY:59.4,rotation:3.8,x:58.5,y:58.1}},{t:this.instance_1,p:{x:40.7,y:53.9}},{t:this.instance,p:{regX:152.2,regY:189.3,rotation:12.3,x:20,y:49.1}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76.8}},{t:this.instance_3,p:{y:77}},{t:this.instance_2,p:{regX:55.9,regY:59.1,rotation:3.2,x:58.8,y:58.5}},{t:this.instance_1,p:{x:40.7,y:54}},{t:this.instance,p:{regX:152,regY:189.2,rotation:10.2,x:19.9,y:49.7}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76.6}},{t:this.instance_3,p:{y:77.2}},{t:this.instance_2,p:{regX:56,regY:59.3,rotation:2.5,x:59,y:58.9}},{t:this.instance_1,p:{x:40.7,y:54}},{t:this.instance,p:{regX:152,regY:188.8,rotation:8.2,x:19.9,y:50.4}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76.5}},{t:this.instance_3,p:{y:77.4}},{t:this.instance_2,p:{regX:55.7,regY:59.1,rotation:1.9,x:59.3,y:59.2}},{t:this.instance_1,p:{x:40.7,y:54.1}},{t:this.instance,p:{regX:152.2,regY:189.1,rotation:6.1,x:19.8,y:51.1}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76.3}},{t:this.instance_3,p:{y:77.5}},{t:this.instance_2,p:{regX:55.9,regY:59.2,rotation:1.3,x:59.5,y:59.7}},{t:this.instance_1,p:{x:40.7,y:54.2}},{t:this.instance,p:{regX:152.2,regY:189.3,rotation:4.1,x:19.8,y:51.8}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76.1}},{t:this.instance_3,p:{y:77.7}},{t:this.instance_2,p:{regX:55.6,regY:59,rotation:0.6,x:59.7,y:60}},{t:this.instance_1,p:{x:40.7,y:54.3}},{t:this.instance,p:{regX:152.3,regY:189.3,rotation:2,x:19.8,y:52.4}}]},1).to({state:[{t:this.instance_4,p:{x:33.3,y:76}},{t:this.instance_3,p:{y:77.9}},{t:this.instance_2,p:{regX:55.8,regY:59.1,rotation:0,x:60.1,y:60.4}},{t:this.instance_1,p:{x:40.7,y:54.3}},{t:this.instance,p:{regX:152.2,regY:189.2,rotation:0,x:19.9,y:53.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.4,50.9,72.5,98);
// library properties:
lib.properties = {
	width: 75,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/back_atlas_.png", id:"back_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
