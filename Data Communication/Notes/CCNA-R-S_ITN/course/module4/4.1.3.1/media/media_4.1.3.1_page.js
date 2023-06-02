loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;
var TYPE = 'MULTI_BAR'

function getData()
{

	$('#mainDiv').data("yt", true);
	
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "TABLE";
	var slide_1_tables = [{compId:"ID_table",
							x:1,
							y:40,
							width:438,
							height:358}];				
	var slide_1_texts = [{compId:"ID_txt01",
							x:35,
							y:320+11,
							width:200,
							height:17,
							size:11,
							color:"#FFFFFF"},
							{compId:"ID_txt02",
							x:251+3,
							y:322+9,
							width:191,
							height:17,
							size:11,
							color:"#FFFFFF"},
							{compId:"ID_txt03",
							x:37.35-3,
							y:305.85,
							width:104,
							height:17,
							size:11,}];			
													
	var slide_1_object = {templateType:slide_1_type,
									x:0,
									y:0,
							tables:slide_1_tables,
							texts:slide_1_texts};
							
								
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"4_1_3_1.png",
							x:23.9,
							y:102.4, 
							width:387.25,
							height:235.95,
							type:""}]
															
	var slide_2_texts = [{compId:"ID_s2_txt01",
							x:52.35,
							y:44, 
							width:338.1,
							height:17,
							size:12,
							textAlign:"center"},
							
						{compId:"ID_s2_txt02",
							x:23.5+15,
							y:74, 
							width:100.25,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s2_txt03",
							x:151.75+15,
							y:74, 
							width:85.25,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s2_txt04",
							x:283.1,
							y:74, 
							width:127.3,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s2_txt05",
							x:52.35,
							y:222.95, 
							width:338.1,
							height:17,
							size:12,
							textAlign:"center"},
							
						{compId:"ID_s2_txt06",
							x:15.9+15,
							y:252.95, 
							width:122.25,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s2_txt07",
							x:144.15,
							y:252.95, 
							width:122.25,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s2_txt08",
							x:275.5+15,
							y:252.95, 
							width:127.25,
							height:17,
							size:11,
							textAlign:"center"}];	
													
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
	
																
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
