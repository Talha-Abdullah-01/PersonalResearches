loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	
	var commonImages = [{name:"top.jpg",
							x:205,
							y:4, 
							width:227.1,
							height:127,
							type:""}];
	
	var commonTexts = [{compId:"ID_txt01",
							x:157,
							y:19.35, 
							width:65.5,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"}];
													
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"4_1_1_1_A.jpg",
							x:12.6,
							y:82.05, 
							width:414.5,
							height:232.8,
							type:""},
							{name:"arrows.png",
							x:100.45,
							y:100.65, 
							width:204.2,
							height:203.55,
							type:""}
							];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:2,
							y:5, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt01",
							x:120.7,
							y:295.35, 
							width:92,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_s1_txt02",
							x:241.2,
							y:294.85,
							width:147.5,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_s1_txt03",
							x:258.45,
							y:94.65, 
							width:147.5,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"}];	
							
	var graphic_1_slide = [];						
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							graphics:graphic_1_slide};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"4_1_1_1_B.jpg",
							x:7.95,
							y:115, 
							width:423.9,
							height:170,
							type:""},
							{name:"arrows_B.png",
							x:70,
							y:151, 
							width:9.95,
							height:58.8,
							type:""}
							];					
	var slide_2_texts = [{compId:"ID_s2_title",
							x:2,
							y:5, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_txt01",
							x:2+38,
							y:5+123, 
							width:149,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"}
							];
							
	var graphic_1_slide = [];									
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							graphics:graphic_1_slide};
							
	var slides = [slide_1_object,slide_2_object];
					
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			slideObject:slides};
	
}