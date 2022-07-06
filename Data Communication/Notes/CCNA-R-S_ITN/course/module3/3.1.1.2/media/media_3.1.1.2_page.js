loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "MULTI_BAR";
    var commonTexts = [];
    
	var slide_1_type = "MULTI_BUTTON";	
	var slide_1_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
								overSkinImage:"../../../common/images/text_button_gradient_selected.png",
								normalTextStyle:'#FFFFFF',
								overTextStyle:'#006699',
								cornorRadius:5,
								selected:0};
						
	var slide_1_buttons = [{compId:"ID_btn02",/*2*/
								x:170.35,
								y:239.85,
								width:107.95,
								height:21,
								size:11,
								textAlign:"center"},
								
						   {compId:"ID_btn01",/*1*/
								x:170.35,
								y:239.85,
								width:107.95,
								height:21,
								size:11,
								textAlign:"center"}];
								
	var slide_1_buttonObject = {style:slide_1_buttonStyle,
								buttons:slide_1_buttons,
								type:"toggle"};
	
	var common_images = [{name:"3.1.1.2.jpg",
							x:30,
							y:50.5,
							width:400,
							height:155.05,
							type:"STD"}];
							
	var commonTexts = [];
	var slide_texts = [];
	
	var slide_1_1_type = "DESCRIPTION";
	var slide_1_1_images = [];	
												
	var slide_1_1_dragtextboxs = [];
	
	var slide_1_1_textboxs = [];	
													
	var slide_1_1_texts = [{compId:"ID_bullet01",
							x:13.85+36,
							y:73.35+10, 
							width:386.05,
							height:150,
							size:11,
							textAlign:"left"},
		{compId:"ID_inst",
        x:13.85,
        y:375.85,
        width:413.9,
        height:17,
        size:11,
        textAlign:"left"},
		];
							
	var slide_1_1_graphics = [];	

	var slide_1_1_object = {templateType:slide_1_1_type,
							x:0,
							y:0,
							images:slide_1_1_images,							
							dragtextboxs:slide_1_1_dragtextboxs,
							textboxs:slide_1_1_textboxs,
							graphics:slide_1_1_graphics,
							texts:slide_1_1_texts};
								
	var slide_1_2_type = "DESCRIPTION";
	var slide_1_2_images = [];							
	var slide_1_2_dragtextboxs = [];
	var slide_1_2_textboxs = [];
															
	var slide_1_2_texts = [{compId:"ID_bullet02",
							x:13.85+36,
							y:73.35+10, 
							width:385.05,
							height:150,
							size:11,
							textAlign:"left"},
		{compId:"ID_inst",
        x:13.85,
        y:375.85,
        width:413.9,
        height:17,
        size:11,
        textAlign:"left"}];	
													
	var slide_1_2_object = {templateType:slide_1_2_type,
							x:0,
							y:0,
							images:slide_1_2_images,							
							dragtextboxs:slide_1_2_dragtextboxs,
							textboxs:slide_1_2_textboxs,
							texts:slide_1_2_texts};							
	
										
	var slide_1_slides = [slide_1_1_object,slide_1_2_object];
						
	var slide_1_object = {templateType:slide_1_type,
							 x:0,
							 y:0,
							textObject:slide_texts,
							images:common_images,
							buttonObject:slide_1_buttonObject,
							slideObject:slide_1_slides};

/* Second slide*/

	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"bg2.png",
							x:66.2,
							y:75,
							width:309.6,
							height:219.15,
							type:""}];
															
	var slide_2_texts = [{compId:"ID_timing",
							x:10+23,
							y:260.3, 
							width:132,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_delivery",
							x:10+23-20,
							y:132.3, 
							width:152,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_encoding",
							x:157.35,
							y:75.85, 
							width:132,
							height:17,
							size:11,
							textAlign:"center"},
		{compId:"ID_protocols",
							x:169.45+5,
							y:176.95+18, 
							width:108,
							height:50,
							size:11,
							textAlign:"center"},
		{compId:"ID_encapsulation",
							x:305.35-22,
							y:129.85, 
							width:155,
							height:17,
							size:11,
							textAlign:"center"},
		{compId:"ID_unitSize",
							x:305.35-22,
							y:260.3, 
							width:132,
							height:17,
							size:11,
							textAlign:"center",
		expand:"left+right"}];	
		
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};

/* second Slide ends*/


	var slides = [slide_1_object,slide_2_object];
	  
    return {templateType:template_type,
        textObject:commonTexts,		
        slideObject:slides};
}