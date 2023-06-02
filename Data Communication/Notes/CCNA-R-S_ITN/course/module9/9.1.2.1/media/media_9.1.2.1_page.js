loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_1_2_1.jpg",
							x:1,
							y:33.8,
							width:467.15,
							height:238.7,
							type:""}];

    var slide_texts = [{compId:"ID_tx01",
							x:1+35,
							y:286-46, 
							width:100,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							
						{compId:"ID_tx02",
							x:161.6+35,
							y:286-46, 
							width:100,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							
						{compId:"ID_tx03",
							x:320.85+35-4,
							y:286-46, 
							width:100,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							
						{compId:"ID_tx04",
							x:10,
							y:330.05, 
							width:457.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
