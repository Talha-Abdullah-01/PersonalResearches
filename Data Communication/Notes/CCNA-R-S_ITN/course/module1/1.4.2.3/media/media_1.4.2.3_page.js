loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_4_2_3.jpg",
        x:186.25,
        y:111.6,
        width:240.8,
        height:247.2,
        type:""},
		{name:"1_4_2_3_A.jpg",
        x:44.85,
        y:63.55,
        width:65,
        height:134,
        type:""}];

    var slide_texts = [{compId:"ID_title",
            x:5,
            y:5,
            width:468,
            height:17,
            size:14,
            textAlign:"center"}]
		
				

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
