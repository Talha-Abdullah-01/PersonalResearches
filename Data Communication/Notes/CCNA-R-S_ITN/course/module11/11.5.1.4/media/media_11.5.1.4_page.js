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
	
	var slide_1_type = "INTERACTIVE";		
			
			var slide_1_texts = {};			
			var slide_1_images = [{name:"11_5_1_4.jpg",x:0,y:100,width:420,height:291},
								  ];
			var slide_1_1_object = {type:"CUSTOM",
						texts:slide_1_texts,
						images:slide_1_images}
						
			var slide_1_object = {templateType:slide_1_type,
			x:0,
			y:0,
			slideObject:slide_1_1_object};
	
	
	var slide_2_type = "INTERACTIVEANIM";
			
			var slide_2_texts = {};
			
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

