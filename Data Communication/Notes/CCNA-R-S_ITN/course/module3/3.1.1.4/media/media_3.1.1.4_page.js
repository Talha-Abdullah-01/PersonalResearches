//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
} 

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

	function getData()
	{
	
	var template_type = "MULTI_BAR";
	var commonTexts = [];						
	
	var slide_1_type = "INTERACTIVEANIM";
	
			var slide_1_texts = {};			
			var slide_1_object = {templateType:slide_1_type,
			x:0,
			y:0,
			animId:0,
			texts:slide_1_texts};
	
	
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table",
							x:30,
							y:60, 
							width:20,
							height:224}];				
	var slide_2_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts};

	
	var slides = [slide_1_object,slide_2_object];
	
	return {
		templateType:template_type,
		textObject:commonTexts,
		slideObject:slides};
	}

