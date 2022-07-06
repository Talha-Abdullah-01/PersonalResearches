loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");
loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");


function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "MULTI_BAR";
    var commonTexts = [];
	var commonImages = [{name:"3_1_1_6.jpg",
							x:60,
							y:120, 
							width:350,
							height:270.05,
							type:"none"}];
	
    var slide_1_type = "INTERACTIVEANIM";
			
	var slide_1_texts = {};							
	var slide_1_object = {templateType:slide_1_type,
									x:0,
									y:0,
									animId:0,
									texts:slide_1_texts};
									
	var slide_2_type = "INTERACTIVEANIM";
	var slide_2_texts = {};							
	var slide_2_object = {templateType:slide_2_type,
									x:0,
									y:0,
									animId:1,
									texts:slide_2_texts};
									
	var slide_3_type = "INTERACTIVEANIM";
	var slide_3_texts = {};							
	var slide_3_object = {templateType:slide_3_type,
									x:0,
									y:0,
									animId:2,
									texts:slide_3_texts};
						
		
	var slides = [slide_1_object,slide_2_object,slide_3_object];
	

   
   
    return {templateType:template_type,
				textObject:commonTexts,
				images:commonImages,
				slideObject:slides};

}