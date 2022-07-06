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

    var slide_images = [{name:"../../../common/images/html/Server_file.png",
							x:28.6,
							y:36,
							width:41.15,
							height:57.9,
							type:""},
						
						{name:"../../../common/images/html/computer.png", /* COM-1*/
							x:21.55,
							y:320.3-35,
							width:58,
							height:48.1,
							type:""},
							
						{name:"../../../common/images/html/computer.png", /* COM-2*/
							x:167.5,
							y:273.05-30,
							width:58,
							height:48.1,
							type:""},
							
						{name:"../../../common/images/html/computer.png", /* COM-3*/
							x:283.5,
							y:186.4-30,
							width:58,
							height:48.1,
							type:""},
							
						{name:"../../../common/images/html/computer.png", /* COM-4*/
							x:345.7,
							y:57.25+5,
							width:58,
							height:48.1,
							type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:17.7+12,
							y:331.65+8, 
							width:100,
							height:180.05,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt02",
							x:163.9+12,
							y:284.65+10,
							width:89.05,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt03",
							x:280.95+12,
							y:197.65+10, 
							width:74.15,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt04",
							x:342.95+12,
							y:99+14, 
							width:95.1,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt05",
							x:72.95+12,
							y:36, 
							width:67.05,
							height:17,
							size:11,
							textAlign:"left"}];
							
	var graphic_slide= [{	x:63.5,
							y:80,
							x1:357.5,
							y1:80, 
							lineWidth:2,
							type:"line"}, /*COM-4*/
							
						{	x:50,
							y:66.5+13,
							x1:309,
							y1:167.55+13, 
							lineWidth:2,
							type:"line"}, /*COM-3*/
							
						{	x:45,
							y:57.05+13,
							x1:199,
							y1:237.55+13, 
							lineWidth:2,
							type:"line"}, /*COM-2*/
							
						{	x:45,
							y:65.05,
							x1:45.2,
							y1:287.05, 
							lineWidth:2,
							type:"line"}];/*COM-1*/
							
    var slide_object = {images:slide_images,
						graphics:graphic_slide,
        				texts:slide_texts};

    return {templateType:template_type,
       			 slideObject:slide_object};

}
