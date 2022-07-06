var animation1 = function(data)
{
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);
	var temp ='';	
	temp+='<div id="main_wrapper">';
	/* static Text */
	temp = '<div id="textContainer">';
	temp +='<div id="text1"></div>';
	temp +='<div id="text2"></div>';
	temp +='<div id="text3"></div>';	
	temp +='<div id="text4"></div>';
	temp +='<div id="text5"></div>';
	temp +='<img src="arrow.png" class="arrow" style="position:absolute;top:27px;left:72px;" />';
	temp +='<div id="text6"></div>';
	temp +='<img src="arrow.png" class="arrow" style="position:absolute;top:27px;left:151px;" />';
	temp +='<div id="text7"></div>';
	temp +='<img src="arrow.png" class="arrow" style="position:absolute;top:27px;left:236px;" />';
	temp +='<div id="text8"></div>';
	temp +='<img src="arrow.png" class="arrow" style="position:absolute;top:27px;left:306px;" />';
	temp +='<div id="text9"></div>';
	temp +='</div>';

/* Anim divs */
temp+='<div id="imageContainer">';
temp+='<div id="bgPic"></div>';
temp+='<div id="bulb"><img src="bulb.png" widht="33px" height="37px" /></div>';
temp+='<div id="blurbulb"><img src="bulbBlur.png" widht="69px" height="37px" /></div>';
temp+='<div id="bulbglow"><img src="bulb1.png" widht="69px" height="37px" /></div>';
temp+='<div id="bulbglow2"><img src="bulb2.png" widht="49px" height="60px" /></div>';
temp +='</div>'
	
				
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
			

}

	
	function animation()
	{   
	
		bulbanim = $("#bulb");
		bluranim = $("#blurbulb");
		bglowanim = $("#bulbglow");
		bglow2anim = $("#bulbglow2");
		pulse = $("#pulse");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
	
		
    tl.to(bulbanim, 1, {css:{opacity:"1",clip:"rect(0px 50px 50px 0px)"}})
	.to(bulbanim,1,{css:{opacity:"1",clip:"rect(0px 50px 50px 0px)"}})
		
	tl.append([
		new TweenLite(bulbanim,1,{css:{clip:"rect(0px 0px 50px 0px)"},delay:.5}),
      	new TweenLite(bluranim,1,{css:{opacity:"1",left:"132px",top:"27px"},delay:1}),
		new TweenLite(bglowanim,2,{css:{opacity:"1",clip:"rect(0px 50px 50px 0px)"},delay:1.5}),
		new TweenLite(bluranim,.5,{css:{opacity:"0",left:"145px",top:"27px"},delay:2}),
		new TweenLite(bglowanim,.5,{css:{opacity:"0"},delay:.5}),
		new TweenLite(bglow2anim,1,{css:{opacity:"1"},delay:2.5}),
		new TweenLite(bglow2anim,1,{css:{opacity:"0"},delay:5.5}),
		new TweenLite(bglowanim,1,{css:{opacity:"0"},delay:5.5}),		
		])
	.to(pause,.1,{onComplete:myFunction})
	}
	
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
	temp+='<div id="main_wrapper">';
	/* static Text */
	temp = '<div id="textContainer">';
	temp +='<div id="text1"></div>';
	temp +='<div id="text2"></div>';
	temp +='<div id="text3"></div>';	
	temp +='<div id="text4"></div>';
	temp +='<div id="text5"></div>';
	temp +='<img src="arrow.png" class="arrow" style="position:absolute;top:27px;left:72px;" />';
	temp +='<div id="text6"></div>';
	temp +='<img src="arrow.png" class="arrow" style="position:absolute;top:27px;left:151px;" />';
	temp +='<div id="text7"></div>';
	temp +='<img src="arrow.png" class="arrow" style="position:absolute;top:27px;left:236px;" />';
	temp +='<div id="text8"></div>';
	temp +='<img src="arrow.png" class="arrow" style="position:absolute;top:27px;left:306px;" />';
	temp +='<div id="text9"></div>';
	temp +='</div>';

	/* Anim divs */
temp+='<div id="contentWrapper">';
temp+='<div id="bgImg"><img src="laptop.png" width="90px" height="61px" style="position:absolute;left:-21px;top:-16px;z-index:1;" /><img src="computer.png" widht="80px" height="67px" style="position:absolute;left:92px;top:125px;z-index:1;" /></div>';
temp+='<div id="bulb2"><img src="bulb2_1.png" width="28px" height="30px" /></div>';
temp+='<div id="envelop"><img src="en.png" width="29px" height="18px" /></div>';
temp+='<div id="bulb2_2"><img src="bulb2_2.png" width="28px" height="33px" /></div>';
temp +='</div>'


				
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
			
}

	
	
	function animation3()

	{   
	
		bulb2Anim = $("#bulb2");
		envelopanim = $("#envelop");
		bulb2_2Anim = $("#bulb2_2");
		
		pulse = $("#pulse");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
		
		
    tl.to(bulb2Anim, 1.5, {css:{opacity:"1"}})
	tl.to(bulb2Anim, .8, {css:{opacity:"0"},delay:1})
	tl.to(envelopanim, 2, {css:{opacity:"1",left:"214px",top:"151px"}})
	tl.to(envelopanim, 1, {css:{opacity:"1",left:"128px",top:"192px"}})
	tl.to(bulb2_2Anim, 1.5, {css:{opacity:"1"}})
	tl.to(bulb2_2Anim,.8, {css:{opacity:"0"},delay:1})
	.to(pause,.1,{onComplete:myFunction})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
	
	

var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];