class AppFooter {
 appFooter_view(){
  return ('<style>.footer { font-size:12px;position: fixed;left:0;bottom:0;width:100%;color:#000; }</style>'
    +'<div class="footer" style="height:auto;background-color:#fff;border-top:1px solid #ccc;overflow-x:scroll;overflow-y:hidden;">'
	+'<ul id="appMenuList" class="list-inline" style="padding-left:15px;">'
	+'<li id="appMenuList_home" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-orange">'
	+'<div><i class="fa fa-2x fa-home"></i></div>'
	+'<div>Home</div>'
	+'</a>' 
	+'</li>'
	+'<li id="appMenuList_profile" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
    +'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-user"></i></div>'
	+'<div>Profile</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_pursuit" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-archive"></i></div>'
	+'<div>Pursuit</div>'
	+'</a>' 
	+'</li>'
	+'<li id="appMenuList_property" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-university"></i></div>'
	+'<div>Property</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_career" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
    +'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-graduation-cap"></i></div>'
	+'<div>Career</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_job" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-briefcase"></i></div>'
	+'<div>Job</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_profession" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-suitcase"></i></div>'
	+'<div>Profession</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_market" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-industry"></i></div>'
	+'<div>Market</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_bank" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-money"></i></div>'
	+'<div>Bank</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_neighborhood" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-group"></i></div>'
	+'<div>My Neighborhood</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_shopping" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'	
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-shopping-basket"></i></div>'
	+'<div>Shopping</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_education" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-book"></i></div>'
	+'<div>Education</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_entertainment" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-film"></i></div>'
	+'<div>Entertainment</div>'
	+'</a>'
	+'</li>'    
	+'<li id="appMenuList_society" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'  
	+'<a href="#" class="font-grey">'  
	+'<div><i class="fa fa-2x fa-globe"></i></div>'
	+'<div>Society</div>'	
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_govt" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-briefcase"></i></div>'
	+'<div>Government</div>'
	+'</a>'
	+'</li>'
	+'<li id="appMenuList_inviteFriends" align="center" onclick="javascript:utility.appFooterMenu_sel(this.id);">'
	+'<a href="#" class="font-grey">'
	+'<div><i class="fa fa-2x fa-group"></i></div>'
	+'<div>Invite Friends</div>'
	+'</a>'
	+'</li>'
	+'</ul>'
	+'</div>'  
  );
 }
 appFooterMenu_sel(id){
   var menuIds=["appMenuList_home","appMenuList_profile","appMenuList_pursuit","appMenuList_property","appMenuList_career","appMenuList_job",
				"appMenuList_profession","appMenuList_market","appMenuList_bank","appMenuList_neighborhood","appMenuList_shopping",
				"appMenuList_education","appMenuList_entertainment","appMenuList_society","appMenuList_govt",
				"appMenuList_inviteFriends"];
   var displayIds=["appMenuPage_home","appMenuPage_profile","appMenuPage_pursuit","appMenuPage_property","appMenuPage_career","appMenuPage_job",
				   "appMenuPage_profession","appMenuPage_market","appMenuPage_bank","appMenuPage_neighborhood","appMenuPage_shopping",
				   "appMenuPage_education","appMenuPage_entertainment","appMenuPage_society","appMenuPage_govt",
				   "appMenuPage_inviteFriends"];
   for(var index=0;index<menuIds.length;index++){
	if(menuIds[index]===id){
		if($('li#'+menuIds[index]+'>a').hasClass('font-grey')){ $('li#'+menuIds[index]+'>a').removeClass('font-grey'); }
		if(!$('li#'+menuIds[index]+'>a').hasClass('font-yellow')){ $('li#'+menuIds[index]+'>a').addClass('font-yellow'); }
		if($("#"+displayIds[index]).hasClass('hide-block')){ $("#"+displayIds[index]).removeClass('hide-block'); }
	} else {
		if(!$('li#'+menuIds[index]+'>a').hasClass('font-grey')){ $('li#'+menuIds[index]+'>a').addClass('font-grey'); }
		if($('li#'+menuIds[index]+'>a').hasClass('font-yellow')){ $('li#'+menuIds[index]+'>a').removeClass('font-yellow'); }
		if(!$("#"+displayIds[index]).hasClass('hide-block')){ $("#"+displayIds[index]).addClass('hide-block'); }
	}
   }
 }
}

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
  var content='<div><ul class="sidebar-nav f12p font-grey">';
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
      content+='<li id="sm-aboutUpscExam"><a href="app-user-aboutUpscExam.html" class="font-grey"><i class="fa fa-dashboard" aria-hidden="true"></i>&nbsp;&nbsp;<span><b>About UPSC Exam</b></span></a></li>';	
      content+='<li id="sm-syllabus"><a href="#" class="font-grey"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;<span><b>Syllabus</b></span></a></li>';
      content+='<li id="sm-home"><a href="app-user-home.html" class="font-grey"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;<span><b>Home</b></span></a></li>';
	  content+='</ul></div>';
	document.getElementById(id).innerHTML = content;
	if(!$('#'+act).hasClass('active')){ 
	  $('#'+act).addClass('active'); 
	  if($('#'+act+'>a').hasClass('font-grey')){ $('#'+act+'>a').addClass('font-black'); }
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
var appFooter = new AppFooter();
