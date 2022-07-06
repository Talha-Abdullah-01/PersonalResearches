var preload,canvasXML,mediaXML;
var folderId;

function init()
{
	document.getElementById("flashContent").style.setProperty("visibility", "hidden", null);
	// if we can't find a cookie that indicates that they're good for the day then check netacad for a current login
	if(!checkCookie()){
		console.log("Cookie not exist");
		sendRequest("https://www.netacad.com/group/landing/learn?p_p_id=omni_WAR_omniportlet&p_p_lifecycle=2&p_p_state=maximized&_omni_WAR_omniportlet_action=crossDomainAuth&_omni_WAR_omniportlet_jspPage=%2Fteach%2Fcross_domain_auth.jsp");
		//sendRequest("https://liferay-dev.cisco.instructure.com/group/landing/learn?p_p_id=omni_WAR_omniportlet&p_p_lifecycle=2&p_p_state=maximized&_omni_WAR_omniportlet_action=crossDomainAuth&_omni_WAR_omniportlet_jspPage=%2Fteach%2Fcross_domain_auth.jsp");
	}else{
		console.log("Cookie exist");
		document.getElementById("flashContent").style.setProperty("visibility", "visible", "important");
		var runtime = getUrlVars()["display"];
		if (runtime && runtime == "html") 
		{		
			loadHTMLVersion();
		}
		else if(swfobject && !swfobject.hasFlashPlayerVersion("1"))
		{
			loadHTMLVersion();					
		}
	}
}

function loadHTMLVersion()
{
	var newImage=new Image();
		newImage.src='../../../common/images/preloader.gif';		
		newImage.onload=function()
		{	
			var img = document.createElement('img');
			img.src='../../../common/images/preloader.gif';
			img.id='preloader';			
			img.style.position='absolute';
			img.style.top='50%';
			img.style.left='50%';	
			document.body.appendChild(img);
			document.body.setAttribute("spellcheck","false");
			//loadTemplate();
			loadScript("../../../common/scripts/jquery-1.7.2.min.js", jqueryLoaded);		
		};	
}

function jqueryLoaded()
{
	folderId= $("[name = 'movie']")[0].value;

	var runtime = getUrlVars()["display"];
	if (runtime && runtime == "html") {
		var _w = $("#canvas").attr("width");
		var _h = $("#canvas").attr("height");

		$("#myId").remove();
		$("#flashContent").append('<canvas id="canvas" width="'+_w+'" height="'+_h+'" style="background-color:#ffffff"></canvas>')
	}

	loadScript("../../../common/scripts/createJS_bundle_060.min.js", loadTemplate);	
	
	$.noConflict();
}

//To load template files
function loadTemplate()
{
	var templateFile;	
	//For Deployment
	//tF = "../../../common/scripts/templates_base_min.js";
	//For Developement
	templateFile = "../../../common/scripts/templates_base_dev.js";
	
	var url=location.href;	
	var mediaPath = url.split("index.html")[0];
	
	var langPath = getUrlVars()['lang'];
	if(langPath)
	{
		//select the language folder
		mediaPath = mediaPath.replace("trans_1",langPath);		
	};
	//var folderId= document.getElementsByName("movie").item(0).value;
	//var folderId= $("[name = 'movie']")[0].value;
	var xmlPath = folderId.split(".swf")[0];
	var fileName = xmlPath;
	xmlPath = mediaPath+xmlPath;
	/*
	var url= document.getElementsByName("movie").item(0).value;
	var xmlPath = url.split(".swf")[0];
	//{id:"jquery", src:"../../../common/scripts/jquery-1.7.2.min.js"},
	*/
	var manifest = [{id:"mediaXML", src:xmlPath+'.xml'},
					{id:"canvasXML", src:fileName+'_canvas.xml'},
					{id:"templateFile", src:templateFile}];	
	
	preload = new createjs.LoadQueue(false);
	preload.addEventListener("fileload", hLoaded);
   	preload.addEventListener("error", hError);	
	preload.addEventListener("complete", hComplete);
	preload.loadManifest(manifest);	
}

function hLoaded(event) {
	switch (event.item.type){	
		case createjs.LoadQueue.IMAGE:
			break;	
		case createjs.LoadQueue.JAVASCRIPT:
			document.body.appendChild(event.result);
			break;		
		case createjs.LoadQueue.XML:
			if(event.item.id == "mediaXML") mediaXML = event.result;
			if(event.item.id == "canvasXML") canvasXML = event.result;
			break;	
	}
}

function hComplete(event)
{
	preload = null;
	initiateTemplate();
}

function hError(event) {
	console.log("File loader failed");
	console.log(event);
	///alert("File loader failed "+event);
}

/*
	-------Security implementation-----
*/
function sendRequest(url) {
	var req = createXMLHTTPObject();
	if (!req) return;
	
	req.open('GET',url,true);
	req.withCredentials = "true";
	req.setRequestHeader('User-Agent','XMLHTTP/1.0');
	req.onreadystatechange = function () {
		if (req.readyState != 4) return;
			if(req.status == "0"){
				// open netacad login in new window
				//alert("Please log into netacad.com before accessing this course.");
				//window.open("http://www.netacad.com", "_blank")
				//window.open("https://liferay-dev.cisco.instructure.com/group/landing/learn", "_blank")
				//window.open("https://www.netacad.com/group/landing/learn", "_blank")
				
				var loginPanel = document.createElement("div");
				loginPanel.id = "loginPanel";
				loginPanel.style.cssText = "position:absolute;width:300px;height:100px;background-color:#F0F0F0;border-radius:5px;padding:10px;text-align:center;";
				loginPanel.style.left = (window.innerWidth-300)/2 + "px";
				loginPanel.style.top = (window.innerHeight-100)/2 + "px";
				loginPanel.innerHTML = "<p>Please log into netacad.com before accessing this course.</p>"
				document.body.appendChild(loginPanel);

				var ancher = document.createElement("a");
				ancher.style.cssText = "text-decoration:none;border-radius:5px;"
				ancher.innerHTML = "<button style='width:100px;margin-top:20px; '>Login</button>";
				ancher.target = "_blank";
				ancher.href = "https://www.netacad.com/group/landing/learn";
				document.getElementById("loginPanel").appendChild(ancher);

			}else if(req.status == "200"){
				// set cookie to todays date to indicate they're good for another day.. 
				setCookie();
				// ok to display media...
				document.getElementById("flashContent").style.setProperty("visibility", "visible", "important");
				var runtime = getUrlVars()["display"];
				if (runtime && runtime == "html") 
				{		
					loadHTMLVersion();			
				}
				else if(swfobject && !swfobject.hasFlashPlayerVersion("1"))
				{
					loadHTMLVersion();					
				}
			}
	}
	req.send();
}

var XMLHttpFactories = [
	function () {return new XMLHttpRequest()},
	function () {return new ActiveXObject("Msxml2.XMLHTTP")},
	function () {return new ActiveXObject("Msxml3.XMLHTTP")},
	function () {return new ActiveXObject("Microsoft.XMLHTTP")}
];

function createXMLHTTPObject() {
	var xmlhttp = false;
	for (var i=0;i<XMLHttpFactories.length;i++) {
		try {
			xmlhttp = XMLHttpFactories[i]();
		}
		catch (e) {
			continue;
		}
		break;
	}
	return xmlhttp;
}

function setCookie(){
	var exdate=new Date()
	var c_value = exdate.getDate();
	exdate.setDate(exdate.getDate() + 1);
	c_value += '; expires=' + exdate.toUTCString();
	document.cookie= "logincheck" + "=" + c_value;
}
function checkCookie(){
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" logincheck =");
	if (c_start == -1){
  		c_start = c_value.indexOf(" logincheck=");
	}
	if (c_start == -1){
  		c_start = c_value.indexOf("logincheck=");
	}
	if (c_start == -1){
  		c_value = null;
	}else{
  		c_start = c_value.indexOf("=", c_start) + 1;
  		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1){
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start,c_end));
	}
	var ndate=new Date().getDate();
	if(c_value == ndate){
		console.log("date match");
		return true;
	}else{
		console.log("date doesn't match");
		return false;
	}
	return false;
}

function clearCookie(){
	// this is just for testing/debugging...
	document.cookie= "logincheck=0";	
}
/*
	-------Security implementation End-----
*/



/********************************************************************************************************************************
														 Get URL Query
*********************************************************************************************************************************/
function getUrlVars() {
	var vars = {};
	var url = window.parent.parent.location.href;
	var parts = url.split("#")[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}