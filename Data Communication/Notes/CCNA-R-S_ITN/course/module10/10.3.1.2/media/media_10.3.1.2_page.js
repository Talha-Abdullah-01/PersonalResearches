//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
     var template_type = "INTERACTIVEANIM";

	var slide_texts = {compId:"ID_title",
						x:15,
						y:2,
						width:413,
						height:17,
						size:14,
						textAlign:"center"};
						
	
	var slides = {animId:0,
					texts:slide_texts};
	
	return {templateType:template_type,
	slideObject:slides};
	
}