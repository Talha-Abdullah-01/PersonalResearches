var animation1 = function (data)
{
}
function animation()
	{   

			
	}
	

var animation2 = function (data)
{
	$('#activityDiv').remove();
	var headerDiv = document.createElement('div');
	headerDiv.id = "headerDiv";			
	mainDiv.appendChild(headerDiv);	
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	headerDiv.appendChild(animDiv);
	var temp ='';
	temp = '<div id="ID_s2_inst"></div><div id="imagecontainer1">';
	temp += '<img id="lock1" src="log.png"><img id="lock2" src="log.png">';
	temp += '<div id="ID_s2_txt02"></div>';
	temp += '<div id="ID_s2_txt03"></div>';
	temp += '<div id="ID_s2_txt04"></div>';
	temp += '</div></div>';
	
	$("#animDiv").html(temp);
	$("#ID_s2_inst").html($(data).find("component#ID_s2_inst").text());
	$("#ID_s2_txt02").html($(data).find("component#ID_s2_txt02").text());
	$("#ID_s2_txt03").html($(data).find("component#ID_s2_txt03").text());
	$("#ID_s2_txt04").html($(data).find("component#ID_s2_txt02").text());
}
function animation3()
	{  
	pause = $("#pauseBtn");
	play  = $("#playBtn")
	restart= $("#restartBtn");  
	tl.append([
				new TweenLite(lock1,2, {css:{opacity:1}}),
				new TweenLite(lock2,2,{css:{opacity:1}})])
	tl.to(ID_s2_txt02,2,{css:{opacity:1}})
	.to(ID_s2_txt02,2,{css:{left:112,top:104}})
	tl.append([new TweenLite(ID_s2_txt02,.5,{css:{opacity:0}}),
			  
			 new TweenLite(ID_s2_txt03,.5,{css:{opacity:1}})])
	.to([ID_s2_txt03],2,{css:{left:188,top:188}})
	tl.append([new TweenLite(ID_s2_txt03,.5,{css:{opacity:0}}),
			 new TweenLite(ID_s2_txt04,.5,{css:{opacity:1}})])
	.to(ID_s2_txt04,2,{css:{left:250,top:243}})	
	
	
	.to(ID_s2_txt03,.1,{css:{"display":"none"}})	
	.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
	
var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];