//loadScript("../../../common/scripts/templates/slide/PopOverSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "POP_OVER_SLIDE";

    var slide_images = [{name:"11.5.1.3.jpg",
							x:7,
							y:20,  
							width:458,
							height:388,
							type:"STD"},
							{name:"btn_default.png",
							x:110,
							y:137,  
							width:49,
							height:13,
							type:""},
							{name:"btn_default1.png",
							x:110,
							y:151,  
							width:75,
							height:13,
							type:""},
							{name:"btn_default.png",
							x:110,
							y:192,  
							width:59,
							height:13,
							type:""},
							{name:"btn_default.png",
							x:111,
							y:208,  
							width:49,
							height:13,
							type:""}];
	var graphic_slide = [];
    var slide_texts = [{compId:"ID_inst",
							x:17,
							y:389.95,  
							width:400,
							height:17,
							size:11,
							textAlign:"left"}];
							
	var hotSpots = [{hotImage:"",
							div:[],
							x:110,
							y:137,  
							width:49,
							height:13,
							closeBtn:{x:438,y:278},
							popupImage:{name:"BUTN1.png", x:105,y:132,width:65,	height:24,},
							popupImage2:{name:"pop_up.png",x:0,y:275.35,width:468,height:388,type:""},
							popupText:{compId:"ID_title01",
							x:10+10,
							y:275.35+8,
							width:400,
							height:17, 
							size:11,
							textAlign:"left"},
							popupText2:{compId:"ID_txt01",
							x:10+14,
							y:295.35+13,
							width:400,
							height:17, 
							size:11,
							textAlign:"left"}},
						{hotImage:"",
							div:[],
							x:110,
							y:151,  
							width:75,
							height:13, 
							closeBtn:{x:438,y:278},
							popupImage:{name:"BUTN3.png", x:109,y:150,width:75,	height:13,},
							popupImage2:{name:"pop_up.png",x:0,y:275.35,width:468,height:388,type:""},
							popupText:{compId:"ID_title02",
							x:10+10,
							y:275.35+8,
							width:400,
							height:17,
							closeBtn:{x:438,y:278},
							size:11,
							textAlign:"left"},
							popupText2:{compId:"ID_txt02",
							x:10+14,
							y:295.35+13,
							width:400,
							height:17, 
							size:11,
							textAlign:"left"}},
						{hotImage:"",
							div:[],
							x:110,
							y:192,  
							width:59,
							height:13,
							closeBtn:{x:438,y:278},
							popupImage:{name:"BUTN2.png", x:105,y:188,width:74,	height:24,},
							popupImage2:{name:"pop_up.png",x:0,y:275.35,width:468,height:388,type:""},
							popupText:{compId:"ID_title03",
							x:10+10,
							y:275.35+8,
							width:400,
							height:17, 
							size:11,
							textAlign:"left"},
							popupText2:{compId:"ID_txt03",
							x:10+14,
							y:295.35+13,
							width:400,
							height:17, 
							size:11,
							textAlign:"left"}},
							{hotImage:"",
							div:[],
							x:111,
							y:208,  
							width:49,
							height:13, 
							closeBtn:{x:438,y:278},
							popupImage:{name:"BUTN1.png", x:106,y:203,width:65,	height:24,},
							popupImage2:{name:"pop_up.png",x:0,y:275.35,width:468,height:388,type:""},
							popupText:{compId:"ID_title04",
							x:10+10,
							y:275.35+8,
							width:400,
							height:17,
							closeBtn:{x:438,y:278},
							size:11,
							textAlign:"left"},
							popupText2:
						{compId:"ID_txt04",
							x:10+14,
							y:295.35+13,
							width:400,
							height:17,
							size:11,
							textAlign:"left"}}];
							
							
	

    var slide_object = {images:slide_images,
		hotSpots:hotSpots,
        texts:slide_texts,
		graphics:graphic_slide};

    return {templateType:template_type,
        slideObject:slide_object};

}