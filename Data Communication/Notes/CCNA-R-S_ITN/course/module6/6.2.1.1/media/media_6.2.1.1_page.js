loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6.2.1.1.png",
        x:21.35,
        y:108.65,
        width:422,
        height:184,
        type:""}];

    var slide_texts = [{compId:"ID_txt01",
            x:104+11,
            y:247+9,
            width:59,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt02",
            x:377,
            y:125.3+14,
            width:43,
            height:13,
            size:11,
            textAlign:"center"},
			
		{compId:"staticTxt1",
			bodyText:"<b>PC1</b>",
				x:112.95-57,
				y:190-43, 
				width:32.05,
				height:13,
				size:11,
				color:"#fff",
				textAlign:"left"},
		{compId:"staticTxt3",
			bodyText:"<b>PC2</b>",
			x:110.95-57+80,
				y:187-43+68, 
				width:32.05,
				height:13,
				size:11,
				color:"#fff",
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:".10",
				x:144.95-53,
				y:185.95-39, 
				width:32.05,
				height:13,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:".15",
				x:182-53,
				y:226-39, 
				width:32.05,
				height:13,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:".1",
				x:272-49,
				y:185.95-38, 
				width:32.05,
				height:13,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:"<b>R1</b>",
				x:144.95-53+160,
				y:185.95-39+23-6, 
				width:32.05,
				height:17,
				size:11,
			    font:"bold",
				color:"#fff",
				textAlign:"left"}
	]
		
				

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
