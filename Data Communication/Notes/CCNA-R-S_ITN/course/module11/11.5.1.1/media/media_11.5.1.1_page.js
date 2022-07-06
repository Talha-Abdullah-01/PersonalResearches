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
	
	var commonImages = [];
	var commonTexts = [];	
	

	var slide_1_type = "INTERACTIVEANIM";
			
			var slide_1_texts = {compId:"ID_s1_title",
			x:0,
			y:2,
			width:150,
			height:17,
			size:14,
			textAlign:"center"};
			
			var slide_1_object = {templateType:slide_1_type,
			x:0,
			y:0,
			animId:0,
			texts:slide_1_texts};						
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"bg2.png",
							 x:45.85,
							 y:41.85, 
							 width:388.75,
							 height:228,
							 size:11,							 
							 type:""},
							{name:"textbox.jpg",
							 x:18.5,
							 y:282.85, 
							  width:421,
							 height:109,
							 size:11,							 
							 type:""}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							 x:165-30,
							 y:5, 
							 width:202,
							 height:17,
							 size:14,
							 textAlign:"center"},
						{compId:"ID_s2_text1",
						x:-42.65,
						y:48.85,
						width:104,
						height:17,
						size:11,
						textAlign:"right"},
						{compId:"ID_s2_text2",
						x:-41.65,
						y:111.85,
						width:104,
						height:17,
						size:11,
						textAlign:"right"},
		{compId:"ID_s2_text3",
						x:-39.65,
						y:174.85,
						width:104,
						height:17,
						size:11,
						textAlign:"right"},
		{compId:"ID_s2_text4",
						x:-39.65,
						y:232.85,
						width:104,
						height:17,
						size:11,
						textAlign:"right"},
		{compId:"ID_s2_text5",
						x:198.3+4,
						y:240.85,
						width:104,
						height:17,
						size:11,
						textAlign:"left"},
		{compId:"ID_s2_text6",
						x:226.35+26,
						y:187.85,
						width:104,
						height:17,
						size:11,
						textAlign:"left"},
				{compId:"ID_s2_text",
						x:336.35+40,
						y:240.85-86,
						width:104,
						height:17,
						size:11,
						textAlign:"left"},
								
			{compId:"ID_s2_TB1_title",
						x:40-3,
						y:290,
						width:216,
						height:17,
						size:11,
						color:"#482f56",
						textAlign:"left"},
				{compId:"ID_s2_TB1_body",
						x:23,
						y:298+15,
						width:416,
						height:61,
						size:11,
						textAlign:"left"},
		];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};

	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"bg3.png",
							 x:45.85,
							 y:41.85, 
							 width:388.75,
							 height:228,
							 size:11,							 
							 type:""},
							{name:"textbox.jpg",
							 x:18.5,
							 y:282.85, 
							  width:421,
							 height:109,
							 size:11,							 
							 type:""}];								
	var slide_3_texts = [
				{compId:"ID_s3_title",
							 x:165-30,
							 y:5, 
							 width:202,
							 height:17,
							 size:14,
							 textAlign:"center"},
				{compId:"ID_s3_TB1_title",
						x:40-3,
						y:290,
						width:233,
						height:17,
						size:11,
						color:"#482f56",
						textAlign:"left"},
				{compId:"ID_s3_TB1_body",
						x:23,
						y:298+15,
						width:416,
						height:61,
						size:11,
						textAlign:"left"},];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
	
							
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			slideObject:slides};
	
}
