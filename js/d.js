(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"forward_atlas_", frames: [[159,98,26,16],[0,0,114,161],[116,0,96,96],[116,98,41,60],[214,73,26,71],[214,0,26,71]]}
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



(lib.资源3 = function() {
	this.spriteSheet = ss["forward_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.资源4 = function() {
	this.spriteSheet = ss["forward_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.资源5 = function() {
	this.spriteSheet = ss["forward_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.资源6 = function() {
	this.spriteSheet = ss["forward_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.资源7 = function() {
	this.spriteSheet = ss["forward_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.资源8 = function() {
	this.spriteSheet = ss["forward_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.资源8();
	this.instance.parent = this;
	this.instance.setTransform(-14,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-35,26,71);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.资源7();
	this.instance.parent = this;
	this.instance.setTransform(-12,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-35,26,71);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.资源6();
	this.instance.parent = this;
	this.instance.setTransform(-18,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-35,41,60);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.资源5();
	this.instance.parent = this;
	this.instance.setTransform(-47,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-52,96,96);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.资源3();
	this.instance.parent = this;
	this.instance.setTransform(-15,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-8,26,16);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.资源4();
	this.instance.parent = this;
	this.instance.setTransform(-59,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-75,114,161);


// stage content:
(lib.无标题2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 骨架_1
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(54.4,53.2,0.5,0.5,0,0,0,-2,0.1);

	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.4,48.6,0.5,0.5,0,0,0,2.2,22.2);

	this.instance_2 = new lib.元件3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.5,47.4,0.5,0.5,0,0,0,8.9,-2);

	this.instance_3 = new lib.元件4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.2,61.6,0.5,0.5,0,0,0,10.4,-18.1);

	this.instance_4 = new lib.元件5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(44.2,73.4,0.5,0.5,0,0,0,0.8,-13);

	this.instance_5 = new lib.元件6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(29.5,73.9,0.5,0.5,0,0,0,1.1,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{x:29.5,y:73.9}},{t:this.instance_4,p:{y:73.4}},{t:this.instance_3,p:{regY:-18.1,rotation:0,x:14.2,y:61.6,regX:10.4}},{t:this.instance_2,p:{y:47.4,x:56.5}},{t:this.instance_1,p:{y:48.6}},{t:this.instance,p:{y:53.2}}]}).to({state:[{t:this.instance_5,p:{x:29.4,y:74.2}},{t:this.instance_4,p:{y:73.1}},{t:this.instance_3,p:{regY:-18.2,rotation:-1,x:14.4,y:61.2,regX:10.4}},{t:this.instance_2,p:{y:47,x:56.5}},{t:this.instance_1,p:{y:48.7}},{t:this.instance,p:{y:53.4}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:74.5}},{t:this.instance_4,p:{y:72.8}},{t:this.instance_3,p:{regY:-18.2,rotation:-2,x:14.6,y:60.8,regX:10.5}},{t:this.instance_2,p:{y:46.7,x:56.6}},{t:this.instance_1,p:{y:48.9}},{t:this.instance,p:{y:53.6}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:74.7}},{t:this.instance_4,p:{y:72.5}},{t:this.instance_3,p:{regY:-18.1,rotation:-2.9,x:14.7,y:60.6,regX:10.5}},{t:this.instance_2,p:{y:46.4,x:56.6}},{t:this.instance_1,p:{y:49}},{t:this.instance,p:{y:53.9}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:75}},{t:this.instance_4,p:{y:72.2}},{t:this.instance_3,p:{regY:-18.2,rotation:-3.9,x:14.9,y:60.2,regX:10.5}},{t:this.instance_2,p:{y:46.1,x:56.6}},{t:this.instance_1,p:{y:49.1}},{t:this.instance,p:{y:54.1}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:75.3}},{t:this.instance_4,p:{y:72}},{t:this.instance_3,p:{regY:-18.1,rotation:-4.9,x:15.1,y:59.9,regX:10.5}},{t:this.instance_2,p:{y:45.8,x:56.6}},{t:this.instance_1,p:{y:49.2}},{t:this.instance,p:{y:54.3}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:75.6}},{t:this.instance_4,p:{y:71.7}},{t:this.instance_3,p:{regY:-18.2,rotation:-5.9,x:15,y:59.5,regX:10.3}},{t:this.instance_2,p:{y:45.5,x:56.6}},{t:this.instance_1,p:{y:49.4}},{t:this.instance,p:{y:54.5}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:75.8}},{t:this.instance_4,p:{y:71.4}},{t:this.instance_3,p:{regY:-18.1,rotation:-6.8,x:15.3,y:59.2,regX:10.4}},{t:this.instance_2,p:{y:45.2,x:56.6}},{t:this.instance_1,p:{y:49.5}},{t:this.instance,p:{y:54.7}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:76.1}},{t:this.instance_4,p:{y:71.1}},{t:this.instance_3,p:{regY:-18.1,rotation:-7.8,x:15.5,y:58.9,regX:10.4}},{t:this.instance_2,p:{y:44.9,x:56.5}},{t:this.instance_1,p:{y:49.6}},{t:this.instance,p:{y:54.9}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:76.4}},{t:this.instance_4,p:{y:70.9}},{t:this.instance_3,p:{regY:-18.1,rotation:-8.8,x:15.7,y:58.5,regX:10.4}},{t:this.instance_2,p:{y:44.6,x:56.5}},{t:this.instance_1,p:{y:49.8}},{t:this.instance,p:{y:55.2}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:76.1}},{t:this.instance_4,p:{y:71.1}},{t:this.instance_3,p:{regY:-18.1,rotation:-7.8,x:15.5,y:58.9,regX:10.4}},{t:this.instance_2,p:{y:44.9,x:56.5}},{t:this.instance_1,p:{y:49.6}},{t:this.instance,p:{y:54.9}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:75.8}},{t:this.instance_4,p:{y:71.4}},{t:this.instance_3,p:{regY:-18.1,rotation:-6.8,x:15.3,y:59.2,regX:10.4}},{t:this.instance_2,p:{y:45.2,x:56.6}},{t:this.instance_1,p:{y:49.5}},{t:this.instance,p:{y:54.7}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:75.6}},{t:this.instance_4,p:{y:71.7}},{t:this.instance_3,p:{regY:-18.2,rotation:-5.9,x:15,y:59.5,regX:10.3}},{t:this.instance_2,p:{y:45.5,x:56.6}},{t:this.instance_1,p:{y:49.4}},{t:this.instance,p:{y:54.5}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:75.3}},{t:this.instance_4,p:{y:72}},{t:this.instance_3,p:{regY:-18.1,rotation:-4.9,x:15.1,y:59.9,regX:10.5}},{t:this.instance_2,p:{y:45.8,x:56.6}},{t:this.instance_1,p:{y:49.2}},{t:this.instance,p:{y:54.3}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:75}},{t:this.instance_4,p:{y:72.2}},{t:this.instance_3,p:{regY:-18.2,rotation:-3.9,x:14.9,y:60.2,regX:10.5}},{t:this.instance_2,p:{y:46.1,x:56.6}},{t:this.instance_1,p:{y:49.1}},{t:this.instance,p:{y:54.1}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:74.7}},{t:this.instance_4,p:{y:72.5}},{t:this.instance_3,p:{regY:-18.1,rotation:-2.9,x:14.7,y:60.6,regX:10.5}},{t:this.instance_2,p:{y:46.4,x:56.6}},{t:this.instance_1,p:{y:49}},{t:this.instance,p:{y:53.9}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:74.5}},{t:this.instance_4,p:{y:72.8}},{t:this.instance_3,p:{regY:-18.2,rotation:-2,x:14.6,y:60.8,regX:10.5}},{t:this.instance_2,p:{y:46.7,x:56.6}},{t:this.instance_1,p:{y:48.9}},{t:this.instance,p:{y:53.6}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:74.2}},{t:this.instance_4,p:{y:73.1}},{t:this.instance_3,p:{regY:-18.2,rotation:-1,x:14.4,y:61.2,regX:10.4}},{t:this.instance_2,p:{y:47,x:56.5}},{t:this.instance_1,p:{y:48.7}},{t:this.instance,p:{y:53.4}}]},1).to({state:[{t:this.instance_5,p:{x:29.4,y:73.9}},{t:this.instance_4,p:{y:73.4}},{t:this.instance_3,p:{regY:-18.1,rotation:0,x:14.2,y:61.6,regX:10.4}},{t:this.instance_2,p:{y:47.4,x:56.5}},{t:this.instance_1,p:{y:48.6}},{t:this.instance,p:{y:53.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.5,50.5,76.6,97.9);
// library properties:
lib.properties = {
	width: 79,
	height: 101,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/forward_atlas_.png", id:"forward_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;