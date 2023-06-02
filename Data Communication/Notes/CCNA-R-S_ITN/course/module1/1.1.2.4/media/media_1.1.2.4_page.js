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

    var slide_images = [{name:"../../../common/images/html/printer.png",
							x:9,
							y:112.85,
							width:106.15,
							height:44.8,
							type:""},
						
						{name:"../../../common/images/html/computer.png", /* COM-1*/
							x:167.75,
							y:111.5,
							width:71.6,
							height:59.35,
							type:""},
							
						{name:"../../../common/images/html/computer.png", /* COM-2*/
							x:333.45,
							y:111.5,
							width:71.6,
							height:59.35,
							type:""},
							
						{name:"text_output.png", 
							x:0,
							y:201.35,
							width:460,
							height:345,
							type:""},
							
						{name:"down_arrow.png",
							x:140,
							y:38, 
							width:125,
							height:73,
							type:""},
							
						{name:"down_arrow.png",
							x:300,
							y:38, 
						   width:125,
							height:73,
							type:""}
						];

    var slide_texts = [{compId:"ID_txt01",
							x:167.75+10-18,
							y:30.3+22+6, 
							width:100,
							height:180.05,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt02",
							x:333.45+10-16,
							y:30.3+22+6,
							width:89.05,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt03",
							x:57.75+118,
							y:99+14+63, 
							width:74.15,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt04",
							x:342.95+12-15,
							y:99+14+63, 
							width:95.1,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_table01",
							x:9+22,
							y:201.35+19,
							width:430,
							height:284.9,
							size:11,
							textAlign:"left"}];
							
	var graphic_slide= [{	x:22.75,
							y:140.5,
							x1:183.5,
							y1:141.75, 
							lineWidth:2,
							type:"line"}, /*Printer to COM-1*/
							
						{	x:210.75,
							y:140,
							x1:373.05,
							y1:143.25, 
							lineWidth:2,
							type:"line"}];/*COM-1 to COM-2*/
							
    var slide_object = {images:slide_images,
						graphics:graphic_slide,
        				texts:slide_texts};

    return {templateType:template_type,
       			 slideObject:slide_object};

}
