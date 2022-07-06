//$(function(){ 

var _data ;
var animation1 = function(data)
{

	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

_data = data;
var temp ='';
temp+='<div id="main_wrapper">';
temp+='<div id="main_container">'; 

temp+='<div id="dvStamp"/>'; 
temp+='<img id="imgStamp" src="images/stamp.png" />';
temp+='<div id="ID_txt01"/><div id="ID_txt02"/><div id="ID_txt03"/><div id="ID_txt04"/>';
temp+='<div id="ID_txt05"/><div id="ID_txt06"/><div id="ID_txt07"/><div id="ID_txt08"/>'; 

temp+='<div id="staticTxt01"/><div id="staticTxt02"/>'; 
temp+='<img id="imgLetter" src="images/letter.png" />';
temp+='<img id="imgEnvelopFlap" src="images/envelopFlap.png" />';
temp+='<img id="imgEnvelop" src="images/envelop.png" />'; 
temp+='<div id="staticTxt03"/>';


temp+='<table id="tr1">'; 
temp+='<tr>';
temp+='	<td id="th1" bgcolor="#DBECDA" height="80px"></td>';
temp+='	<td id="th2" bgcolor="#DBECDA"></td>';
temp+='	<td id="th3" bgcolor="#B5D9B3"></td>';
temp+='	<td id="th4" bgcolor="#B5D9B3"></td>';
temp+='	<td id="th5" bgcolor="#B5D9B3"></td>';
temp+='	<td id="th6" bgcolor="#B5D9B3"></td>';
temp+='	<td id="th7" bgcolor="#DBECDA"></td>';
temp+='</tr>';

temp+='<tr>';
temp+='	<td id="td11" bgcolor="#DBECDA" colspan="2" height="25px"></td>'; 
temp+='	<td id="td13" bgcolor="#B5D9B3" colspan="4"></td>'; 
temp+='	<td id="td17" bgcolor="#DBECDA"></td>';
temp+='</tr>';

temp+='<tr>';	
temp+='	<td id="td21" bgcolor="#E0D5E6" height="80px"></td>';
temp+='	<td id="td22" bgcolor="#E0D5E6"></td>';
temp+='	<td id="td23" bgcolor="#E0D5E6"></td>';
temp+='	<td id="td24" bgcolor="#E0D5E6"></td>';
temp+='	<td id="td25" bgcolor="#E0D5E6"></td>';
temp+='	<td id="td26" bgcolor="#E0D5E6"></td>';
temp+='	<td id="td27" bgcolor="#E0D5E6"></td>';
temp+='</tr>';
temp+='</table>';
 
temp+='</div></div>';
 

$("#animDiv").html(temp);

	$("#staticTxt01").html($(data).find("component#ID_sender").text());
	$("#staticTxt02").html($(data).find("component#ID_recipient").text());	
	$("#staticTxt03").html($(data).find("component#ID_letter").text()); 
	
	$("#th1").html($(data).find("component#ID_box1").text());	
	$("#th2").html($(data).find("component#ID_box2").text());	
	$("#th3").html($(data).find("component#ID_box3").text());		
	$("#th4").html($(data).find("component#ID_box4").text());	
	$("#th5").html($(data).find("component#ID_box5").text());	
	$("#th6").html($(data).find("component#ID_box6").text());	
	$("#th7").html($(data).find("component#ID_box7").text());	
	$("#td11").html($(data).find("component#ID_box8").text());	
	$("#td13").html($(data).find("component#ID_box9").text());

	 
	$("#td21").html($(data).find("component#ID_address2").text());	
	$("#td22").html($(data).find("component#ID_address1").text());	
	$("#td23").html($(data).find("component#ID_dear").text());		
	$("#td24").html($(data).find("component#ID_jane").text());	
	$("#td25").html($(data).find("component#ID_bodyText").text());	
	$("#td26").html($(data).find("component#ID_john").text());


	$("#ID_txt01").html($(data).find("component#ID_address2").text());	
	$("#ID_txt02").html($(data).find("component#ID_address1").text());	
	$("#ID_txt03").html($(data).find("component#ID_dear").text());		
	$("#ID_txt04").html($(data).find("component#ID_jane").text());	
	$("#ID_txt05").html($(data).find("component#ID_bodyText").text());	
	$("#ID_txt06").html($(data).find("component#ID_john").text());	


}


	function animation()
	{   
		pause = $("#pauseBtn");
		play = $("#playBtn")
		restart = $("#restartBtn");

		imgEnvelop = $("#imgEnvelop");
		imgEnvelopFlap = $("#imgEnvelopFlap");
		imgLetter = $("#imgLetter");
		imgStamp = $("#imgStamp");
		dvStamp = $("#dvStamp");
		
		tr1 = $("#tr1");   
 
		staticTxt01 = $("#staticTxt01");
		staticTxt02 = $("#staticTxt02");
		staticTxt03 = $("#staticTxt03");

		ID_txt01 = $("#ID_txt01");
		ID_txt02 = $("#ID_txt02");
		ID_txt03 = $("#ID_txt03");

		td21 = $("#td21");
		td22 = $("#td22");
		td23 = $("#td23");
		td24 = $("#td24");
		td25 = $("#td25");
		td26 = $("#td26");
		 
	
	tl.call(initAnim);
	tl.append([  
		new TweenLite(imgEnvelop,1,{css:{top:145}}),
		new TweenLite([staticTxt01,staticTxt02],1,{css:{top:"+=86"}}),
	])
	.from(imgEnvelopFlap,1,{css:{height:0}})//10px 
	.append([  
		new TweenLite([imgLetter,staticTxt03],.1,{css:{opacity:1}}),
		new TweenLite(imgLetter,1,{css:{top:10}}), 
		new TweenLite(staticTxt03,1,{css:{top:"-=120"}}),
	])
	.to(imgEnvelopFlap,1,{css:{height:0},delay:.5})

	.append([  
		new TweenLite(imgEnvelop,1.5,{css:{scale:.58}}), 
		new TweenLite([staticTxt01,staticTxt02],1,{css:{scale:.58},delay:.1}), 
		new TweenLite(imgEnvelop,1,{css:{top:-35,left:-40},delay:.3}), 
		new TweenLite(staticTxt01,1,{css:{top:5,left:11},delay:.3}),
		new TweenLite(staticTxt02,1,{css:{top:54,left:74},delay:.3}),
		new TweenLite(imgLetter,1,{css:{top:145,scale:1.25},delay:.4}), 
		new TweenLite(staticTxt03,1,{css:{top:170,scale:1.25,width:208,left:112},delay:.4}),
	])

	.append([  
		new TweenLite(imgLetter,1.5,{css:{scale:.68}}), 
		new TweenLite(imgLetter,1,{css:{top:-22,left:165},delay:.3}),
		new TweenLite(staticTxt03,1,{css:{top:15,left:173,scale:.58,width:257},delay:.3}),
		new TweenLite(tr1,.5,{css:{opacity:1},delay:1.3}),
	])

	.append([  
		new TweenLite(ID_txt01,1,{css:{opacity:1}}), 
		new TweenLite(ID_txt01,1,{css:{opacity:0},delay:1}), 
		new TweenLite(ID_txt01,1,{css:{opacity:1},delay:2}), 
		new TweenLite(ID_txt01,1,{css:{opacity:0},delay:3}),  
		new TweenLite(ID_txt01,1,{css:{opacity:1},delay:4}), 
		new TweenLite(ID_txt01,1,{css:{opacity:0},delay:5}), 
		new TweenLite(ID_txt01,1,{css:{opacity:1},delay:6}),  
		new TweenLite(ID_txt01,1.5,{css:{scale:1.2,left:122,top:209},delay:7}),
	 	new TweenLite(ID_txt01,1.5,{css:{scale:.45,left:-46,top:240},delay:10.5}),
		new TweenLite(ID_txt01,.5,{css:{opacity:0},delay:11.5}),    
		new TweenLite(td21,.1,{css:{color:'#000'},delay:12})  
	 ]) 
	 
	.append([  
		new TweenLite(ID_txt02,1,{css:{opacity:1}}), 
		new TweenLite(ID_txt02,1,{css:{opacity:0},delay:1}), 
		new TweenLite(ID_txt02,1,{css:{opacity:1},delay:2}), 
		new TweenLite(ID_txt02,1,{css:{opacity:0},delay:3}),  
		new TweenLite(ID_txt02,1,{css:{opacity:1},delay:4}), 
		new TweenLite(ID_txt02,1,{css:{opacity:0},delay:5}), 
		new TweenLite(ID_txt02,1,{css:{opacity:1},delay:6}),  
		new TweenLite(ID_txt02,1.5,{css:{scale:1.2,left:122,top:209},delay:7}),
		new TweenLite(ID_txt02,1.5,{css:{scale:.45,left:19,top:240},delay:10.5}),
		new TweenLite(ID_txt02,.5,{css:{opacity:0},delay:11.5}),    
		new TweenLite(td22,.1,{css:{color:'#000'},delay:12})
	])

	 .append([  
		new TweenLite(ID_txt03,1,{css:{opacity:1}}), 
		new TweenLite(ID_txt03,1,{css:{opacity:0},delay:1}), 
		new TweenLite(ID_txt03,1,{css:{opacity:1},delay:2}), 
		new TweenLite(ID_txt03,1,{css:{opacity:0},delay:3}),  
		new TweenLite(ID_txt03,1,{css:{opacity:1},delay:4}), 
		new TweenLite(ID_txt03,1,{css:{opacity:0},delay:5}), 
		new TweenLite(ID_txt03,1,{css:{opacity:1},delay:6}),  
		new TweenLite(ID_txt03,1.5,{css:{scale:1.2,left:122,top:209},delay:7}),
		new TweenLite(ID_txt03,1.5,{css:{scale:.45,left:92,top:242},delay:10.5}),
		new TweenLite(ID_txt03,.5,{css:{opacity:0},delay:11.5}),    
		new TweenLite(td23,.1,{css:{color:'#000'},delay:12})

	])

	.append([  
		new TweenLite(ID_txt04,1,{css:{opacity:1}}), 
		new TweenLite(ID_txt04,1,{css:{opacity:0},delay:1}), 
		new TweenLite(ID_txt04,1,{css:{opacity:1},delay:2}), 
		new TweenLite(ID_txt04,1,{css:{opacity:0},delay:3}),  
		new TweenLite(ID_txt04,1,{css:{opacity:1},delay:4}), 
		new TweenLite(ID_txt04,1,{css:{opacity:0},delay:5}), 
		new TweenLite(ID_txt04,1,{css:{opacity:1},delay:6}),  
		new TweenLite(ID_txt04,1.5,{css:{scale:1.2,left:122,top:209},delay:7}),
		new TweenLite(ID_txt04,1.5,{css:{scale:.45,left:155,top:242},delay:10.5}),
		new TweenLite(ID_txt04,.5,{css:{opacity:0},delay:11.5}),    
		new TweenLite(td24,.1,{css:{color:'#000'},delay:12})
	])

	.append([  
		new TweenLite(ID_txt05,1,{css:{opacity:1}}), 
		new TweenLite(ID_txt05,1,{css:{opacity:0},delay:1}), 
		new TweenLite(ID_txt05,1,{css:{opacity:1},delay:2}), 
		new TweenLite(ID_txt05,1,{css:{opacity:0},delay:3}),  
		new TweenLite(ID_txt05,1,{css:{opacity:1},delay:4}), 
		new TweenLite(ID_txt05,1,{css:{opacity:0},delay:5}), 
		new TweenLite(ID_txt05,1,{css:{opacity:1},delay:6}),  
		new TweenLite(ID_txt05,1.5,{css:{scale:1.2,left:39.5,top:209},delay:7}),
		new TweenLite(ID_txt05,1.5,{css:{scale:.45,left:143.5,top:233},delay:10.5}),
		new TweenLite(ID_txt05,.5,{css:{opacity:0},delay:11.5}),    
		new TweenLite(td25,.1,{css:{color:'#000'},delay:12})
	])

.append([  
		new TweenLite(ID_txt06,1,{css:{opacity:1}}), 
		new TweenLite(ID_txt06,1,{css:{opacity:0},delay:1}), 
		new TweenLite(ID_txt06,1,{css:{opacity:1},delay:2}), 
		new TweenLite(ID_txt06,1,{css:{opacity:0},delay:3}),  
		new TweenLite(ID_txt06,1,{css:{opacity:1},delay:4}), 
		new TweenLite(ID_txt06,1,{css:{opacity:0},delay:5}), 
		new TweenLite(ID_txt06,1,{css:{opacity:1},delay:6}),  
		new TweenLite(ID_txt06,1.5,{css:{scale:1.2,left:122,top:209},delay:7}),
		new TweenLite(ID_txt06,1.5,{css:{scale:.45,left:293,top:243},delay:10.5}),
		new TweenLite(ID_txt06,.5,{css:{opacity:0},delay:11.5}),    
		new TweenLite(td26,.1,{css:{color:'#000'},delay:12})
	])

	.append([  
		new TweenLite(dvStamp,1,{css:{opacity:1}}), 
		new TweenLite(dvStamp,1,{css:{opacity:0},delay:1}), 
		new TweenLite(dvStamp,1,{css:{opacity:1},delay:2}), 
		new TweenLite(dvStamp,1,{css:{opacity:0},delay:3}),  
		new TweenLite(dvStamp,1,{css:{opacity:1},delay:4}), 
		new TweenLite(dvStamp,1,{css:{opacity:0},delay:5}), 
		new TweenLite(imgStamp,.2,{css:{opacity:1},delay:6}),  
		new TweenLite(imgStamp,1.5,{css:{scale:1.5,left:122,top:209,},delay:6.2}),
		new TweenLite(imgStamp,1.5,{css:{scale:.60,left:347,top:243},delay:7.7}),
	])
/*	*/


	.to(pause,.05,{onComplete:myFunction});
	}

	function initAnim()
	{
		//$("#td21,#td22,#td23,#td24,#td25,#td26").html('');
	}
	function myFunction()
	{
		
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	} 

	/*obj.setTextVal = function(val) {
	currVal = parseInt(val, 10);
	$text.text(currVal);
	};*/

	function loadData(x) {
	  
	  switch(x){ 
		case 1: 
			/*var textData = $(_data).find("component#ID_address2").text();
			tl.to(td21,.1,{html:textData});*/

			//alert($(_data).find("component#ID_address2").text());
		 
			 
		break;
		case 2:
			$("#td22").html($(_data).find("component#ID_address1").text()); 
		break;
		case 3:
			$("#td23").html($(_data).find("component#ID_dear").text()); 
		break;
		case 4:
			$("#td24").html($(_data).find("component#ID_jane").text()); 
		break;
		case 5:
			$("#td25").html($(_data).find("component#ID_bodyText").text()); 
		break;
		case 6:
			$("#td26").html($(_data).find("component#ID_john").text()); 
		break;
	  }

	  

	}

var animeArray = [{name:animation1,animFunction:animation}];

//});