(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"right_atlas_", frames: [[0,0,518,527],[0,529,267,135],[269,529,103,224],[895,439,103,224],[520,439,373,344],[520,0,439,437]]}
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



(lib.圣诞老人侧面 = function() {
	this.spriteSheet = ss["right_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.圣诞老人侧面2png复制2 = function() {
	this.spriteSheet = ss["right_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.圣诞老人侧面3png复制2 = function() {
	this.spriteSheet = ss["right_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圣诞老人侧面3png复制3 = function() {
	this.spriteSheet = ss["right_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.圣诞老人侧面4 = function() {
	this.spriteSheet = ss["right_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.圣诞老人侧面6 = function() {
	this.spriteSheet = ss["right_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.左腿 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.圣诞老人侧面3png复制2();
	this.instance.parent = this;
	this.instance.setTransform(-100.1,-72.2,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.1,-123.7,201.2,245.5);


(lib.右腿 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.圣诞老人侧面3png复制3();
	this.instance.parent = this;
	this.instance.setTransform(-47,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-105,103,224);


(lib.右手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.圣诞老人侧面2png复制2();
	this.instance.parent = this;
	this.instance.setTransform(-133,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-69,267,135);


(lib.tou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.圣诞老人侧面();
	this.instance.parent = this;
	this.instance.setTransform(-268,-273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268,-273,518,527);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.圣诞老人侧面4();
	this.instance.parent = this;
	this.instance.setTransform(-189,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189,-170,373,344);


(lib.bucket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.圣诞老人侧面6();
	this.instance.parent = this;
	this.instance.setTransform(-193,-212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-212,439,437);


// stage content:
(lib.恢复_无标题1_20161220103022 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 骨架_13
	this.instance = new lib.右手("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90.8,84.6,0.131,0.131,0,0,0,62.4,17.9);

	this.instance_1 = new lib.tou("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.2,55.5,0.131,0.131,-1.5,0,0,60.3,133.5);

	this.instance_2 = new lib.bucket("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.8,72.2,0.131,0.131,0,0,0,27,6.9);

	this.instance_3 = new lib.元件1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.2,78.5,0.131,0.131,0,0,0,-2.3,2.3);

	this.instance_4 = new lib.左腿("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(74.4,108.2,0.131,0.131,4.9,0,0,9.7,27.9);

	this.instance_5 = new lib.右腿("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(50.5,109,0.131,0.131,22.2,0,0,9.3,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{regY:37.1,rotation:22.2,x:50.5,y:109,regX:9.3}},{t:this.instance_4,p:{regY:27.9,rotation:4.9,x:74.4,y:108.2,regX:9.7}},{t:this.instance_3,p:{x:61.2}},{t:this.instance_2,p:{regX:27,rotation:0,y:72.2,regY:6.9,x:29.8}},{t:this.instance_1,p:{regX:60.3,regY:133.5,rotation:-1.5,x:60.2,y:55.5}},{t:this.instance,p:{regX:62.4,regY:17.9,rotation:0,x:90.8,y:84.6}}]}).to({state:[{t:this.instance_5,p:{regY:37.3,rotation:19.2,x:51.8,y:109.4,regX:9.3}},{t:this.instance_4,p:{regY:28.1,rotation:7.1,x:72.9,y:108.7,regX:9.7}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.1,rotation:0.6,y:71.8,regY:6.9,x:29.8}},{t:this.instance_1,p:{regX:60.6,regY:133.4,rotation:-2.1,x:59.9,y:55.4}},{t:this.instance,p:{regX:62.3,regY:17.7,rotation:0.9,x:90.5,y:85.3}}]},1).to({state:[{t:this.instance_5,p:{regY:37.1,rotation:16.1,x:53.1,y:109.7,regX:9.5}},{t:this.instance_4,p:{regY:27.9,rotation:9.3,x:71.4,y:109.2,regX:9.6}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.2,rotation:1.3,y:71.4,regY:7,x:29.8}},{t:this.instance_1,p:{regX:60.4,regY:133.7,rotation:-2.6,x:59.5,y:55.5}},{t:this.instance,p:{regX:62.6,regY:17.9,rotation:1.8,x:90.3,y:86}}]},1).to({state:[{t:this.instance_5,p:{regY:37.5,rotation:13.1,x:54.4,y:110.1,regX:9.5}},{t:this.instance_4,p:{regY:28.1,rotation:11.5,x:69.9,y:109.7,regX:9.6}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:26.9,rotation:2,y:71,regY:6.7,x:29.8}},{t:this.instance_1,p:{regX:60.6,regY:133.6,rotation:-3.2,x:59.2,y:55.4}},{t:this.instance,p:{regX:62.6,regY:18.1,rotation:2.7,x:90.1,y:86.8}}]},1).to({state:[{t:this.instance_5,p:{regY:37.2,rotation:10,x:55.7,y:110.2,regX:9.3}},{t:this.instance_4,p:{regY:27.9,rotation:13.7,x:68.5,y:110.1,regX:10}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27,rotation:2.6,y:70.6,regY:6.8,x:29.9}},{t:this.instance_1,p:{regX:60.5,regY:133.8,rotation:-3.8,x:58.9,y:55.5}},{t:this.instance,p:{regX:62.5,regY:17.9,rotation:3.5,x:89.8,y:87.5}}]},1).to({state:[{t:this.instance_5,p:{regY:37,rotation:6.9,x:57,y:110.4,regX:9.1}},{t:this.instance_4,p:{regY:27.8,rotation:15.9,x:66.9,y:110.4,regX:9.9}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.1,rotation:3.3,y:70.2,regY:6.9,x:30}},{t:this.instance_1,p:{regX:60.4,regY:133.8,rotation:-4.3,x:58.6,y:55.5}},{t:this.instance,p:{regX:62.1,regY:18.1,rotation:4.4,x:89.5,y:88.2}}]},1).to({state:[{t:this.instance_5,p:{regY:37.3,rotation:3.9,x:58.4,y:110.5,regX:9.4}},{t:this.instance_4,p:{regY:28.2,rotation:18.1,x:65.3,y:110.7,regX:9.7}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.2,rotation:3.9,y:69.8,regY:6.9,x:30}},{t:this.instance_1,p:{regX:60.3,regY:133.3,rotation:-4.9,x:58.2,y:55.5}},{t:this.instance,p:{regX:62.5,regY:17.9,rotation:5.3,x:89.3,y:88.9}}]},1).to({state:[{t:this.instance_5,p:{regY:37,rotation:0.8,x:59.7,y:110.6,regX:9.7}},{t:this.instance_4,p:{regY:28.1,rotation:20.3,x:63.8,y:110.8,regX:10}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.3,rotation:4.6,y:69.4,regY:7,x:30.2}},{t:this.instance_1,p:{regX:60.1,regY:133.7,rotation:-5.5,x:57.9,y:55.5}},{t:this.instance,p:{regX:62.5,regY:18.1,rotation:6.2,x:88.9,y:89.6}}]},1).to({state:[{t:this.instance_5,p:{regY:37.1,rotation:-2.2,x:61,y:110.6,regX:9.7}},{t:this.instance_4,p:{regY:28.1,rotation:22.5,x:62.3,y:110.9,regX:10}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27,rotation:5.3,y:68.9,regY:7,x:30.2}},{t:this.instance_1,p:{regX:60.4,regY:133.7,rotation:-6.1,x:57.6,y:55.5}},{t:this.instance,p:{regX:62.5,regY:17.9,rotation:7.1,x:88.6,y:90.2}}]},1).to({state:[{t:this.instance_5,p:{regY:37.3,rotation:-5.3,x:62.3,y:110.6,regX:9.2}},{t:this.instance_4,p:{regY:28,rotation:24.7,x:60.7,y:110.9,regX:9.5}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.1,rotation:5.9,y:68.6,regY:6.8,x:30.3}},{t:this.instance_1,p:{regX:60.3,regY:133.6,rotation:-6.6,x:57.2,y:55.6}},{t:this.instance,p:{regX:62.1,regY:18.2,rotation:8,x:88.2,y:91}}]},1).to({state:[{t:this.instance_5,p:{regY:37,rotation:-1.8,x:60.9,y:110.6,regX:9.5}},{t:this.instance_4,p:{regY:28.2,rotation:22.2,x:62.4,y:110.9,regX:9.8}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:26.9,rotation:5.2,y:69,regY:6.8,x:30.2}},{t:this.instance_1,p:{regX:60.1,regY:133.9,rotation:-6,x:57.5,y:55.6}},{t:this.instance,p:{regX:62.4,regY:18,rotation:7,x:88.6,y:90.3}}]},1).to({state:[{t:this.instance_5,p:{regY:37.2,rotation:1.6,x:59.4,y:110.6,regX:9.5}},{t:this.instance_4,p:{regY:28.2,rotation:19.8,x:64.2,y:110.8,regX:9.7}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.3,rotation:4.4,y:69.6,regY:6.7,x:30.2}},{t:this.instance_1,p:{regX:60.5,regY:133.5,rotation:-5.3,x:58,y:55.5}},{t:this.instance,p:{regX:62.4,regY:17.9,rotation:6,x:89,y:89.5}}]},1).to({state:[{t:this.instance_5,p:{regY:37.1,rotation:5,x:57.8,y:110.6,regX:9.4}},{t:this.instance_4,p:{regY:28.2,rotation:17.3,x:65.9,y:110.6,regX:9.6}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.2,rotation:3.7,y:70,regY:7,x:30.1}},{t:this.instance_1,p:{regX:60.4,regY:133.4,rotation:-4.7,x:58.3,y:55.5}},{t:this.instance,p:{regX:62.3,regY:17.9,rotation:5,x:89.4,y:88.7}}]},1).to({state:[{t:this.instance_5,p:{regY:37.3,rotation:8.5,x:56.3,y:110.5,regX:9.4}},{t:this.instance_4,p:{regY:28.2,rotation:14.8,x:67.6,y:110.3,regX:9.8}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.1,rotation:3,y:70.5,regY:7,x:30}},{t:this.instance_1,p:{regX:60.2,regY:133.8,rotation:-4.1,x:58.7,y:55.5}},{t:this.instance,p:{regX:62.6,regY:17.8,rotation:4,x:89.9,y:87.9}}]},1).to({state:[{t:this.instance_5,p:{regY:37.1,rotation:11.9,x:54.8,y:110.2,regX:9.4}},{t:this.instance_4,p:{regY:27.6,rotation:12.4,x:69.4,y:109.9,regX:9.6}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:26.9,rotation:2.2,y:71,regY:7,x:30}},{t:this.instance_1,p:{regX:60.5,regY:133.4,rotation:-3.5,x:59.1,y:55.4}},{t:this.instance,p:{regX:62.6,regY:18.1,rotation:3,x:90.1,y:87.3}}]},1).to({state:[{t:this.instance_5,p:{regY:37.5,rotation:15.4,x:53.4,y:110,regX:9.5}},{t:this.instance_4,p:{regY:27.8,rotation:9.9,x:71,y:109.4,regX:9.5}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.2,rotation:1.5,y:71.5,regY:6.9,x:30}},{t:this.instance_1,p:{regX:60.4,regY:133.5,rotation:-2.8,x:59.5,y:55.5}},{t:this.instance,p:{regX:62.3,regY:18,rotation:2,x:90.4,y:86.4}}]},1).to({state:[{t:this.instance_5,p:{regY:37.1,rotation:18.8,x:52,y:109.5,regX:9.5}},{t:this.instance_4,p:{regY:28,rotation:7.4,x:72.7,y:108.9,regX:9.8}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27.1,rotation:0.7,y:72,regY:6.9,x:29.9}},{t:this.instance_1,p:{regX:60.3,regY:133.5,rotation:-2.2,x:59.8,y:55.5}},{t:this.instance,p:{regX:62.4,regY:17.9,rotation:1,x:90.7,y:85.6}}]},1).to({state:[{t:this.instance_5,p:{regY:37.1,rotation:22.2,x:50.5,y:109.1,regX:9.3}},{t:this.instance_4,p:{regY:27.9,rotation:4.9,x:74.3,y:108.2,regX:9.7}},{t:this.instance_3,p:{x:61.1}},{t:this.instance_2,p:{regX:27,rotation:0,y:72.5,regY:6.9,x:30}},{t:this.instance_1,p:{regX:60.3,regY:133.6,rotation:-1.6,x:60.2,y:55.5}},{t:this.instance,p:{regX:62.4,regY:17.9,rotation:0,x:91,y:84.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.8,64.6,99.4,119.6);
// library properties:
lib.properties = {
	width: 100,
	height: 126,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/right_atlas_.png", id:"right_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;