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
	
	temp +='</div>';

/* Anim divs */
temp+='<div id="imageContainer">';
temp+='<div id="bgPic"><img src="bg1-1.png" width="176px" height="241px" /></div>';
temp+='<div id="monitor"><img src="monitor.png" width="108px" height="177px" /></div>';
temp+='<div id="monitorglow"><img src="monitorglow.png" width="108px" height="177px" /></div>';

temp+='<div id="apa1"><img src="apa.png" width="86px" height="66px" /></div>';
temp+='<div id="apaglow"><img src="apa1.png" width="86px" height="66px" /></div>';

temp+='<div id="router1"><img src="router.png" width="90px" height="72px" /></div>';
temp+='<div id="routerglow"><img src="router1.png" width="90px" height="72px" /></div>';

temp+='<div id="swg1"><img src="switchworkgroup.png" width="109px" height="66px" /></div>';
temp+='<div id="switchglow"><img src="switchworkgroup1.png" width="109px" height="66px" /></div>';

temp+='<div id="line1"><img src="line1.png" width="200px" height="17px" /></div>';
temp+='<div id="line2"><img src="line2.png" width="100px" height="110px" /></div>';

temp +='</div>'
	
				
			$("#animDiv").html(temp);
			$("#text1").html($(data).find("component#ID_s1_txt01").text());
			$("#text2").html($(data).find("component#ID_s1_txt02").text());
			$("#text3").html($(data).find("component#ID_s1_txt03").text());
			$("#text4").html($(data).find("component#ID_s1_instructions").text());
			}

	
	function animation()
	{   
	
		bgPicanim = $("#bgPic");
		monitoranim = $("#monitor");
		monitorglowanim = $("#monitorglow");

		apa1anim = $("#apa1");
		apaglowanim = $("#apaglow");

		routeranim = $("#router1");
		routerglowanim = $("#routerglow");

		swganim = $("#swg1");
		switchglowanim = $("#switchglow");

		line1anim = $("#line1");
		line2anim = $("#line2");	
		
        var textaccess = $("#text1");
		var textrouter = $("#text2");
		var textswitch = $("#text3");

		pulse = $("#pulse");
		pause = $("#pauseBtn");
		play  = $("#playBtn")
		restart= $("#restartBtn"); 
	
	
	tl.to(monitoranim, 1, {css:{opacity:"1"}})
	tl.to(monitorglowanim, .5, {css:{opacity:"1"}})
    tl.to(monitorglowanim, .5, {css:{opacity:"0"}})
	tl.to(monitoranim, 1, {css:{left:"39px",top:"134px",opacity:"1"}})
	
	.append([
		new TweenLite(apa1anim,1,{css:{left:"139px",top:"131px",opacity:"1"}}),
        new TweenLite(routeranim,1,{css:{left:"288px",top:"144px",opacity:"1"},delay:.5}),
		new TweenLite(swganim,1,{css:{left:"200px",top:"227px",opacity:"1"},delay:1})	

	])

	tl.to(line1, 1, {css:{opacity:"1"}})

	/* apa */
	.append([
		new TweenLite(line2,1,{css:{opacity:"1"}}),
		new TweenLite(apaglowanim,.7,{css:{opacity:"1"},delay:.5}),
		new TweenLite(textaccess,.5,{css:{opacity:"1"},delay:.8}),
		new TweenLite(apaglowanim,.7,{css:{opacity:"0"},delay:1.3}),
	])
	/* router */
	.append([
		
		new TweenLite(routerglowanim,.7,{css:{opacity:"1"},delay:.5}),
		new TweenLite(textrouter,.5,{css:{opacity:"1"},delay:.8}),
		new TweenLite(routerglowanim,.7,{css:{opacity:"0"},delay:1.3}),
	])
		/* switch */
	.append([		
		new TweenLite(switchglowanim,.7,{css:{opacity:"1"},delay:.5}),
		new TweenLite(textswitch,.5,{css:{opacity:"1"},delay:.8}),
		new TweenLite(switchglowanim,.7,{css:{opacity:"0"},delay:1.3}),
	])

	tl.to(line2, .8, {css:{opacity:"0"},delay:2})
	tl.to(line1, .8, {css:{opacity:"0"}})

	.append([		
		new TweenLite(swganim,.8,{css:{left:"218px",top:"200px",opacity:"0"}}),
		new TweenLite(textswitch,.3,{css:{opacity:"0"},delay:.3})
		
	])

	.append([		
		new TweenLite(routeranim,1,{css:{left:"218px",top:"194px",opacity:"0"}}),
		new TweenLite(textrouter,.3,{css:{opacity:"0"},delay:.3})
		
	])

.append([		
		new TweenLite(apa1anim,.8,{css:{left:"218px",top:"183px",opacity:"0"}}),
		new TweenLite(textaccess,.3,{css:{opacity:"0"},delay:.3})
		
	])

tl.to(monitoranim, .8, {css:{left:"207px",top:"134px",opacity:"1"}});
tl.to(monitorglowanim, .5, {css:{opacity:"1"}})
tl.to(monitorglowanim, .5, {css:{opacity:"0"}})

	.to(pause,.1,{onComplete:myFunction})
	}
	
	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	
	
	
	
	
	

var animeArray = [{name:animation1,animFunction:animation}];