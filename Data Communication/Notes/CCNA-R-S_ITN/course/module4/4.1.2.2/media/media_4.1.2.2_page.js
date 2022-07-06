loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"4_1_2_2_A.png",
							x:46,
							y:28,
							width:293,
							height:85,
							type:"STD"},
							
							{name:"4_1_2_2_B.png",
							x:46,
							y:150+5,
							width:293,
							height:85,
							type:"STD"},
							
							{name:"4_1_2_2_C.png",
							x:46,
							y:220+5,
							width:293,
							height:155,
							type:"STD"}];

    var slide_texts = [{compId:"ID_txt01",
							x:331.90+38,
							y:57.85+2, 
							width:126.35,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt02",
							x:41+32,
							y:30, 
							width:104,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left"},
							{compId:"ID_txt03",
							x:331.90+38,
							y:57.85+2+105, 
							width:126.35,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt04",
							x:331.90+38,
							y:57.85+2+105+131-12, 
							width:126.35,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt05",
							x:331.90+32-341+38,
							y:57.85+2+105+131-12-35, 
							width:41.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt06",
							x:331.90+32-341+38-1,
							y:57.85+2+105+131-12-35+40, 
							width:18.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_txt07",
							x:331.90+32-341+38-1,
							y:57.85+2+105+131-12-35+40+25, 
							width:18.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
							{compId:"ID_txt08",
							x:331.90+32-341+38-1,
							y:57.85+2+105+131-12-35+40+25+25, 
							width:18.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"right"},
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
