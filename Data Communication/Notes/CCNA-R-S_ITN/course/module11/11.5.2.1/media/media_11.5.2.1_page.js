loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"11_5_2_1.png",
        x:78.85,
        y:148.9,
        width:327.3,
        height:111.75,
        type:""},
		{name:"logo.png",
        x:103.85,
        y:205,
        width:30,
        height:22.55,
        type:""},
		{name:"logo.png",
        x:307.85,
        y:168.9,
        width:30,
        height:24.55,
        type:""}];

    var slide_texts = [{compId:"ID_txt01",
            x:72+5,
            y:270-40,
            width:104,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt02",
            x:310-29,
            y:270-40,
            width:104,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt03",
            x:100,
            y:248,
            width:51.05,
            height:17,
            size:11,
			color:"#FFFFFF",
            textAlign:"center"},		
		{compId:"ID_txt04",
			x:335,
			y:216, 
			width:43.8,
			height:17,
			size:11,
			color:"#FFFFFF",
			textAlign:"center"}]
		
				

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
