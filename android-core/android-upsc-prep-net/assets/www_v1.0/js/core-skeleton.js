var IS_ADMINISTRATOR=true; // Global Variables

function initCore() {
  // $("#wrapper").removeClass("toggled");  /* Left-Menu (Graphics) */
   sideMenuToggle();
  $('[data-toggle="tooltip"]').tooltip();   /* Tool-Tip */ 
}
function sideMenuToggle(){
  if($("#wrapper").hasClass("toggled")) {  
       $("#wrapper").removeClass("toggled"); 
     /* Code is here: */ 
     document.getElementById("website").style.overflowX = "hidden";
     document.getElementById("website").style.overflowY = "hidden";
  } 
  else { $("#wrapper").addClass("toggled");
  	document.getElementById("website").style.overflowX = "scroll";
     document.getElementById("website").style.overflowY = "hidden";
   }
  
}
function mainMenuSelection(id){
  var arr_id=["dn_home","dn_myprofile","dn_mybookmark","dn_appfeedback","dn_logout"];
  for(var index=0;index<arr_id.length;index++){
	if(arr_id[index]===id) { $('#'+arr_id[index]).addClass('active'); }
	else { $('#'+arr_id[index]).removeClass('active');  }
  }
}
function mainTabSelection(id){
  var arr_id=["dn_home_notifications","dn_home_dashboard","dn_home_favourite","dn_home_message","dn_home_approvals"];
  for(var index=0;index<arr_id.length;index++){
	if(arr_id[index]===id) { $('#'+arr_id[index]).addClass('active'); }
	else { $('#'+arr_id[index]).removeClass('active');  }
  }
}

function load_dnMenu() {
	var content='<ul class="sidebar-nav">';
		content+='<li><a id="dn_home" href="dashboard.html" onclick="javascript:mainMenuSelection(this.id);">Home</a></li>';
		content+='<li><a id="dn_myprofile" href="myprofile.html" onclick="javascript:mainMenuSelection(this.id);">My Profile</a></li>';
		content+='<li><a id="dn_mybookmark" href="mybookmark.html" onclick="javascript:mainMenuSelection(this.id);">My Bookmarks</a></li>';
		content+='<li><a id="dn_appfeedback" href="appfeedback.html" onclick="javascript:mainMenuSelection(this.id);">App Feedback</a></li>';
		content+='<li><a id="dn_logout" href="#" onclick="javascript:mainMenuSelection(this.id);">Log out</a></li>';
		content+='</ul>';
	document.getElementById("sidebar-wrapper").innerHTML=content;
}

function homeHeaderTabs() {
  var content='<ul class="nav nav-tabs">';
	  content+='<li id="dn_home_notifications" onclick="javascript:mainTabSelection(this.id)"><a href="#" data-toggle="tooltip" title="Notifications"><span class="glyphicon glyphicon-bell"></span></a></li>';
	  content+='<li id="dn_home_dashboard" onclick="javascript:mainTabSelection(this.id)"><a href="dashboard.html" data-toggle="tooltip" title="Dashboard"><span class="glyphicon glyphicon-book"></span></a></li>';
	  content+='<li id="dn_home_favourite" onclick="javascript:mainTabSelection(this.id)"><a href="#" data-toggle="tooltip" title="Favourite Messages"><span class="glyphicon glyphicon-star"></span></a></li>';
	  content+='<li id="dn_home_message" onclick="javascript:mainTabSelection(this.id)"><a href="writeMessage.html" data-toggle="tooltip" title="Write Messages"><span class="glyphicon glyphicon-pencil"></span></a></li>';
								
  if(IS_ADMINISTRATOR===true) {
	  content+='<li id="dn_home_approvals" onclick="javascript:mainTabSelection(this.id)"><a href="approvals.html" data-toggle="tooltip" title="Accept Approvals"><span class="glyphicon glyphicon-ok"></span></a></li>';
  }
	  content+='</ul>';
	document.getElementById("dashboard-header-tabs").innerHTML=content;
	
}