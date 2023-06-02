loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "POPOVER";

    var slide_texts = {compId:"ID_title",
						x:-50,
						y:2,
						width:413,
						height:17,
						size:14,
						textAlign:"center"};
						
	
	var slides = {texts:slide_texts};
	
	
	return {templateType:template_type,
	slideObject:slides};

}
