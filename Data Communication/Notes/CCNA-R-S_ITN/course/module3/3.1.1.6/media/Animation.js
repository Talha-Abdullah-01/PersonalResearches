/* Core variables for all slides */
/*****************************************/

var pause,play,restart;
var s1t1,s1t2,s1t3,s1t4,s2t1,s2t2,s3t1,s3t2;

/* Animation for Slide 1 */
/*****************************************/

var animation1 = function (data)
{
		$("#animDiv").remove();
		var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="ID_s1_title" class="title"></div><div id="ID_s1_txt01" class="box"></div><div id="ID_s1_txt02" class="box"></div><div id="ID_s1_txt03" class="box"></div><div id="ID_s1_txt04" class="box"></div>';
		temp += '</div></div>';
		
		temp += '<div id="inetbox" ></div>'
		temp += '<div id="captiontext"></div>'

	$("#animDiv").html(temp);
	//alert('got one '+$(data).find("component#ID_s1_title").text());
		$("#ID_s1_title").html($(data).find("component#ID_s1_title").text());
		$("#ID_s1_txt01").html($(data).find("component#ID_s1_txt01").text());
		$("#ID_s1_txt02").html($(data).find("component#ID_s1_txt02").text());	
		$("#ID_s1_txt03").html($(data).find("component#ID_s1_txt03").text());
		$("#ID_s1_txt04").html($(data).find("component#ID_s1_txt04").text());
	
	}

	function animation_1_fun()
		{   
		
		
		pause = $("#pauseBtn");
		play = $("#playBtn")
		restart = $("#restartBtn");
	
		s1t1 = $("#ID_s1_txt01");
		s1t2 = $("#ID_s1_txt02");
		s1t3 = $("#ID_s1_txt03");
		s1t4 = $("#ID_s1_txt04"); 
		
		t_anim = new TimelineMax();
		t_anim.to([s1t1,s1t2],.5,{css:{opacity: 1}})
		t_anim.to([s1t1,s1t2],.5,{css:{opacity:0},delay:2})
		t_anim.to([s1t3,s1t4],.5,{css:{opacity: 1}})
		t_anim.to([s1t3,s1t4],.5,{css:{opacity:0},delay:2})
		 
		t_anim.repeat(-1);
		
		t_anim.play();
	
	}

	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

/* Animation for Slide 2 */
/*****************************************/

var animation2 = function (data)
{
		$("#animDiv").remove();
		var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="ID_s2_title" class="title"></div><div id="ID_s2_txt01" class="box"></div><div id="ID_s2_txt02" class="box"></div>';
		temp += '</div></div>';
		
		temp += '<div id="inetbox" ></div>'
		temp += '<div id="captiontext"></div>'

	$("#animDiv").html(temp);
	//alert('got one '+$(data).find("component#ID_s1_title").text());
		$("#ID_s2_title").html($(data).find("component#ID_s2_title").text());
		$("#ID_s2_txt01").html($(data).find("component#ID_s2_txt01").text());
		$("#ID_s2_txt02").html($(data).find("component#ID_s2_txt02").text());
	
	}

	function animation_2_fun()
		{ 
		pause = $("#pauseBtn");
		play = $("#playBtn")
		restart = $("#restartBtn");
	
		s2t1 = $("#ID_s2_txt01");
		s2t2 = $("#ID_s2_txt02");
		
		t_anim = new TimelineMax();
		t_anim.to([s2t1],.5,{css:{opacity: 1}})
		t_anim.to([s2t1],.5,{css:{opacity:0},delay:2})
		t_anim.to([s2t1],.5,{css:{opacity: 1}})
		t_anim.to([s2t1],.5,{css:{opacity:0},delay:2})
		t_anim.to([s2t2],.5,{css:{opacity: 1}})
		t_anim.to([s2t2],.5,{css:{opacity:0},delay:2})
		 
		t_anim.repeat(-1);
		
		t_anim.play();
	
	}

	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}



/* Animation for Slide 3 */
/*****************************************/

var animation3 = function (data)
{
		$("#animDiv").remove();
		var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div id="ID_s3_title" class="title"></div><div id="ID_s3_txt01" class="box"></div><div id="ID_s3_txt02" class="box"></div>';
		temp += '</div></div>';
		
		temp += '<div id="inetbox" ></div>'
		temp += '<div id="captiontext"></div>'

	$("#animDiv").html(temp);
	//alert('got one '+$(data).find("component#ID_s1_title").text());
		$("#ID_s3_title").html($(data).find("component#ID_s3_title").text());
		$("#ID_s3_txt01").html($(data).find("component#ID_s3_txt01").text());
		$("#ID_s3_txt02").html($(data).find("component#ID_s3_txt02").text());
	
	}

	function animation_3_fun()
		{ 
		pause = $("#pauseBtn");
		play = $("#playBtn")
		restart = $("#restartBtn");
	
		s3t1 = $("#ID_s3_txt01");
		s3t2 = $("#ID_s3_txt02");
		
		t_anim = new TimelineMax();
		t_anim.to([s3t1],.5,{css:{opacity: 1}})
		t_anim.to([s3t1],.5,{css:{opacity:0},delay:2})
		t_anim.to([s3t2],.5,{css:{opacity: 1}})
		t_anim.to([s3t2],.5,{css:{opacity:0},delay:2})
		 
		t_anim.repeat(-1);
		
		t_anim.play();
	
	}

	function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}

var animeArray = [{name:animation1,animFunction:animation_1_fun},{name:animation2,animFunction:animation_2_fun},{name:animation3,animFunction:animation_3_fun}];