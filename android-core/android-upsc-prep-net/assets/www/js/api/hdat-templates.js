class HtmlCore {
 progressbar(count,type, size, msg){
  var content ='<div class="progress" style="height:'+size+'px;">'+'<div class="progress-bar progress-bar-'+type+' progress-bar-striped" '
     +'role="progressbar" aria-valuenow="'+count+'" '
     +'aria-valuemin="0" aria-valuemax="100" style="width:'+count+'%">';
	if(msg!==undefined){
      content+='&nbsp;<b>'+count+'%</b>';
    }
    content+='</div></div>';
	return content;
 }
}

class SideWrapper {
 displayMenu(id, act){
  var content='<div><ul class="sidebar-nav f12p font-white">';
      content+='<div align="center" class="sidebar-nav-profile">';
	  content+='<div><img src="images/upsc-mediumBlue.jpg" class="app-icon-s3"/></div>';
      content+='<a href="#">';
	  content+='<div class="list-group mtop15p">';
	  content+='<div class="list-group-item">';
	  content+='<div class="sidebar-wrapper-img mtop25p"></div>';
	  content+='<div align="center" class="font-black"><b>FirstName LastName</b></div>';
	  content+='<div align="center" class="f11p font-grey"><b>Locality, Location, State, Country</b></div>';
      content+='</a>';
	  
	  content+='</div>';
	  content+='</div>';
	  
      content+='</div>';
      content+='<li id="sm-aboutUpscExam"><a href="app-user-aboutUpscExam.html" class="font-white"><i class="fa fa-dashboard" aria-hidden="true"></i>&nbsp;&nbsp;<span><b>About UPSC Exam</b></span></a></li>';	
      content+='<li id="sm-syllabus"><a href="#" class="font-white"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;<span><b>Syllabus</b></span></a></li>';
      content+='<li id="sm-home"><a href="app-user-home.html" class="font-white"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;<span><b>Home</b></span></a></li>';
	  content+='</ul></div>';
	document.getElementById(id).innerHTML = content;
	if(!$('#'+act).hasClass('active')){ 
	  $('#'+act).addClass('active'); 
	  if($('#'+act+'>a').hasClass('font-white')){ $('#'+act+'>a').addClass('font-black'); }
	}
 }
}

class AppCommons {
  appInitHeader(){
    return ('<div><nav class="navbar custom-bg"><div class="container-fluid"><div class="navbar-header">'
	 +'<a href="#"><img src="images/logo-blue-flat.png" class="app-icon-s1"/></a></div></div></nav></div>');
  }
}
var appAuthForm={"001":{"english":"Enter your Phone Number"}};
class AppAuth {
  usrMobileNumInputForm(response){
   /* response format : [{"phonecode":"+91","country":"India","timezone":"Asia/Kolkatta"},{...}]*/
    var content='';
	return content;
  }

	 
} 
var htmlCore = new HtmlCore();
var appCommons = new AppCommons();
var appAuth = new AppAuth();
var sideWrapper = new SideWrapper();
