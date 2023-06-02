
var popover = function(data)
{

	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	
	
	var temp = "";
	temp +='<div id="maincontainer"><div id="imagecontainer">';
	temp +='<div id="circle"><img src="circle.png" width="439" height="275" usemap="#Symbol-5" border="0"/><map id="Symbol-5" name="Symbol-5"><area shape="circle" coords="138,138,76" href="#" id="small" /><area shape="circle" coords="137,138,106" href="#" id="middle" /><area shape="circle" coords="138,137,137" href="#" id="big" /></map></div>';
	temp +='<div id="shadow"></div>';
	temp +='<div id="img1"><span></span></div>';
	temp +='<div id="img2"><span></span></div>';
	temp +='<div id="text"><span></span></div>';
	temp +='<div id="text1"><span></span></div>';
	temp +='<div id="text2"><span></span></div>';	
	temp +='<div id="circle1"></div>';
	temp +='<div id="circle2"></div>';
	temp +='<div id="circle3"></div>';
	temp +='<div id="ID_inst"></div>';
	temp +='</div></div>';	
	$("#animDiv").append(temp)
	$("#circle1").html($(data).find("component#ID_txt01").text());
	$("#circle2").html($(data).find("component#ID_txt02").text());
	$("#circle3").html($(data).find("component#ID_txt03").text());
	$("#shadow").html($(data).find("component#ID_txt04").text());
	$("#img1 span").html($(data).find("component#ID_s1_txt02").text());
	$("#img2 span").html($(data).find("component#ID_s1_txt03").text());
	$("#text span").html($(data).find("component#ID_s1_txt01").text());
	$("#text1 span").html($(data).find("component#ID_s2_txt01").text());
	$("#text2 span").html($(data).find("component#ID_s3_txt01").text());
	$("#ID_inst").html($(data).find("component#ID_inst").text());
}

$("#circle1,#circle2,#circle3").live("mouseover",function(){
	
$("#circle1,#circle2,#circle3").css("cursor","pointer")	
	
});


$("#big,#circle1").live("click",function(){
	$("#img1,#img2").css("display","block");
	$("#text").css("display","block");	
	$("#text1").css("display","none");
	$("#text2").css("display","none");		
	
});

$("#middle,#circle2").live("click",function(){
	
	$("#text1").css("display","block");	
	$("#img1,#img2").css("display","none");
	$("#text").css("display","none");
	$("#text2").css("display","none");
});

$("#small,#circle3").live("click",function(){
	
	$("#text2").css("display","block");
	$("#img1,#img2").css("display","none");
	$("#text1").css("display","none");	
	$("#text").css("display","none");
});