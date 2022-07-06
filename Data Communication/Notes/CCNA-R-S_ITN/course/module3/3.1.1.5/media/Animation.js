var sun_girl,sun_boy_empty,sun_boy,pulse;
var light,fistsun,lastsun,envelop;
var pause,play,restart;

var animation1 = function(data)
{
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp ='';
	
	temp+='<div id="main_wrapper"><div id="text4"></div><div id="text1"></div><div id="text2"></div><div id="text3"></div></div>'
	
	temp+='<div id="boyandgirlcontaioner"><div id="pulse" style="opacity:0;"><img src="singelpulse.gif" height="37" width="101" /></div><div id="boyandgirl"><div id="girlsun" style="opacity:0"><img src="sunset.png" height=81 width="80"></div><div id="boysun1" style="opacity:0"><img src="sunset1.png" height=81 width="80"></div><div id="boysun" style="opacity:0"><img src="sunsetempty.png" height=81 width="80"></div><div id="boysun_ques" style="opacity:0"><img src="sunsetempty_question.png" height=81 width="80"></div></div><div id="girlText"></div><div id="boyText"></div></div></div>'
temp += '<div id="text5showdow"></div>';
	
/*temp+='<div id="main_wrapper"><div id="text1"></div><div id="text2"></div><div id="text3"></div><div id="text4"></div><div id="text5"></div><div id="text7"></div><div id="text8"></div><div id="text9"></div><div id="text10"></div><div id="text11"></div><div id="boysun" style="opacity:0"><img src="sunsetempty.png" height=81 width="80"></div><div id="boysun1" style="opacity:0"><img src="sunset1.png" height=81 width="80"></div><div id="main_container"><div id="girlsun" style="opacity:0"><img src="sunset.png" height=81 width="80"></div>'; 
temp+='';
temp+='';
temp +='</div></div>'*/
				
			$("#animDiv").html(temp);
			$("#text1").html($(data).find("component#ID_s1_txt01").text());
			$("#text2").html($(data).find("component#ID_s1_txt02").text());
			$("#text3").html($(data).find("component#ID_s1_txt03").text());
			$("#text4").html($(data).find("component#ID_s1_txt04").text());
			$("#text5").html($(data).find("component#ID_s1_txt05").text());
			$("#text6").html($(data).find("component#ID_s1_txt06").text());
			$("#text7").html($(data).find("component#ID_s1_txt07").text());
			$("#text8").html($(data).find("component#ID_s1_txt08").text());
			$("#text9").html($(data).find("component#ID_s1_txt09").text());
			$("#text10").html($(data).find("component#ID_s1_txt10").text());
			$("#text11").html($(data).find("component#ID_s1_txt11").text());
			$("#girlText").html($(data).find("component#ID_s1_txt12").text());
			$("#boyText").html($(data).find("component#ID_s1_txt13").text());

}

		


	
	function animation()
	{   
	
		sun_girl = $("#girlsun");
		sun_boy_empty = $("#boysun");
		sun_boy_question = $("#boysun_ques");
		sun_boy = $("#boysun1");
		pulse = $("#pulse");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn");
		var text1 = $("#text1>p");
		var text2 = $("#text2");
		var text3 = $("#text3");
		var text4 = $("#text4");
		var text5 = $("#text5");
				
    tl.append([new TweenLite(sun_girl, .08, {css:{opacity:"1"}}),
       new TweenLite(sun_boy_empty,.08,{css:{opacity:"1"}})])
	 tl.to(text4,.9,{css:{opacity:"1"}})
	.to(pulse,2,{css:{opacity:"1"}})
	tl.to(text1,3,{css:{left:"104px",top:"0px"}})
	.to(sun_boy_question,.5,{css:{opacity:"1"}})
	.to(text2,1,{css:{opacity:"1"}})
	.to(text2,1,{css:{opacity:"1"}})
	
	.append([new TweenLite(sun_boy_question,.1,{css:{opacity:"0"}})])
	.to(text2,.1,{css:{opacity:"0"}})
	.to(sun_boy_question,.5,{css:{opacity:"0"}})
	.to(sun_boy_question,.5,{css:{opacity:"0"}})
	.to(sun_boy_question,.5,{css:{opacity:"0"}})
	.to(sun_boy_empty,.08,{css:{opacity:"1"}})	
	.to(sun_boy_question,.5,{css:{opacity:"0"}})
	.to(sun_boy_question,.5,{css:{opacity:"0"}})
	.to(text3,.3,{css:{opacity:"1"}})
	.to(sun_boy_question,.5,{css:{opacity:"0"}})
	.to(sun_boy_question,.5,{css:{opacity:"0"}})
	.append([new TweenLite(sun_boy,.5,{css:{opacity:"1"}})])
	.append([new TweenLite(pulse,.1,{css:{opacity:"0"}}),
	new TweenLite(text3,.1,{css:{opacity:"0"}})])
	.to(pause,.05,{onComplete:myFunction})
		
		
	
	}
	
	// 
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
	
	
	var animation2 = function(data)
{
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

				var temp ='';
	
	temp+='<div id="main_wrapper"></div>'
	
	temp+='<div id="computercontiner"><div id="line"><img src="line.png" width="215" height="107" /></div><div id="envlope"><img src="envelope.png" width="116" height="62" /></div><div class="block"></div><div class="block2"></div><div id="envlope_cross"  style="opacity:1; z-index:0"><img src="envelop_cross.png" width="65" height="59" /></div><div id="computercomp"><div id="light" style="opacity:0"><img src="camera_light.png" width="5" height="5" /></div><div id="sysimage" style="opacity:0;z-index:1"><img src="sunset8.png" width="50" height="36" /></div><div id="sourtext"></div></div><div id="secondcomp"><div id="question"><img src="question.png" width="44" height="34" style="opacity:1" /></div><div id="sysimagelast" style="opacity:0"><img src="sunset8.png" width="50" height="36" style="opacity:1" /></div><div id="desttext"></div></div></div></div>'
	
	temp += '<div id="text5showdow"></div>';
					
			$("#animDiv").html(temp);
			$("#text1").html($(data).find("component#ID_s1_txt01").text());
			$("#sourtext").html($(data).find("component#ID_s1_txt12").text());
			$("#desttext").html($(data).find("component#ID_s1_txt13").text());
}

	
	
	function animation3()
	{   
	
	light   = $("#light");
	fistsun = $("#sysimage");
	lastsun = $("#sysimagelast");
	envelop = $("#envlope");
	envelopcross = $("#envlope_cross");
	question = $("#question");
	pause = $("#pauseBtn");
	play  = $("#playBtn")
	restart= $("#restartBtn"); 
	var text5 = $("#text5showdow");
			
	tl.to(light, .08, {css:{opacity:"1"}})
	tl.to(light, .08, {css:{opacity:"0"}})
	tl.to(light, .08, {css:{opacity:"1"}})
	tl.to(light, .08, {css:{opacity:"0"}})
	tl.to(light, .08, {css:{opacity:"1"}})
	tl.to(light, .08, {css:{opacity:"0"}})
	tl.to(fistsun, .9, {css:{opacity:"1"}})
	/*tl.to(envelop2,.1,{css:{opacity:"1"}})
	tl.to(envelop3,.1,{css:{opacity:"1"}})*/
	tl.to(envelop, .08, {css:{opacity:"1"}})
	
	.append([
				new TweenLite(envelopcross, 1.5, {css:{left:"246px",top:"180px"}}),
				])
	tl.to(question, .9, {css:{opacity:"1"}});
	tl.to(question, .9, {css:{opacity:"0"}})
	
			
	.append([
				new TweenLite(envelop,3,{css:{left:"250px",top:"213px"}})])
			   
	tl.to(lastsun, .9, {css:{opacity:"1"}})
	
	.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
	

var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];