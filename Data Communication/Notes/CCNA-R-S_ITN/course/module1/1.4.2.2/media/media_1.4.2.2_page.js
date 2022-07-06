loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_4_2_2.jpg",
							x:30.95,
							y:79.25,
							width:406,
							height:241.7,
							type:"STD"},
							{name:"line.png",
							x:140+10,
							y:290,
							width:28,
							height:14,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							x:30,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
		
							{compId:"ID_text1",
							x:71.35-44,
							y:99.85+32, 
							width:104,
							height:17,
							size:10,
							textAlign:"right",
							expand:"up"},
							
							{compId:"ID_text2",
							x:71.35,
							y:113.85, 
							width:104,
							height:17,
							size:10,
							textAlign:"left"},
								
							{compId:"ID_text3",
							x:217.3-1-33+10,
							y:206.85+30+20, 
							width:78,
							height:45,
							size:10,
							textAlign:"right",
							expand:"up+down"},
								
							
							{compId:"ID_text4",
							x:217.35-6+7,
							y:220.85, 
							width:104,
							height:17,
							size:10,
							textAlign:"left"},
								
							{compId:"ID_text5",
							x:52.35+24-10,
							y:206.85, 
							width:104,
							height:17,
							size:10,
							textAlign:"right",
							expand:"down"},
								
							{compId:"ID_text6",
							x:38-56+24+21+7,
							y:156.85+11, 
							width:79,
							height:17,
							size:10,
							textAlign:"right",
							expand:"up"},
								
							{compId:"ID_text7",
							x:10+10,
							y:275.85+9, 
							width:136,
							height:17,
							size:10,
							textAlign:"right",
							expand:"up"},
							{compId:"ID_text8",
							x:10+10,
							y:275.85+21, 
							width:136,
							height:17,
							size:10,
							textAlign:"right",
							expand:"up"}];

    var slide_object = {images:slide_images,
        				texts:slide_texts};

    return {templateType:template_type,
       			 slideObject:slide_object};

}
