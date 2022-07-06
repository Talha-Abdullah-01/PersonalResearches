loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
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
	
			var slide_1_texts = {compId:"ID_s1_title",
			x:0,
			y:2,
			width:430,
			height:17,
			size:14,
			textAlign:"center"};			
			var slide_1_object = {templateType:slide_1_type,
			x:0,
			y:0,
			animId:0,
			texts:slide_1_texts};
	
	
	var slide_2_type = "INTERACTIVEANIM";
			
			var slide_2_texts = {compId:"ID_s1_title",
			x:0,
			y:2,
			width:430,
			height:17,
			size:14,
			textAlign:"center"};
			
			var slide_2_object = {templateType:slide_2_type,
			x:0,
			y:0,
			animId:1,
			texts:slide_2_texts};	
	
	var slides = [slide_1_object,slide_2_object];
	
	return {templateType:template_type,
	textObject:commonTexts,
	slideObject:slides};
	
	}

loadScript("../../../common/scripts/swfobject.js", registerSWF);