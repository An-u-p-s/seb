function initCore() {
  $("#wrapper").removeClass("toggled");
  $('[data-toggle="tooltip"]').tooltip();   /* Tool-Tip */
}
function sideMenuToggle(){
  if($("#wrapper").hasClass("toggled")) {  $("#wrapper").removeClass("toggled"); } 
  else { $("#wrapper").addClass("toggled"); }
}
function maintabSelection(id){
  var arr_id=["mt_dashboard", "mt_courses", "mt_notifications", "mt_calendar", "mt_discussion", "mt_people"];
  for(var index=0;index<arr_id.length;index++){
	if(arr_id[index]===id) { $('#'+arr_id[index]).addClass('active'); }
	else { $('#'+arr_id[index]).removeClass('active');  }
  }
}

function langselection() {
	var lang=document.getElementById("upn_language").value;
	if(lang==='English'){
		langsel_eng();
	} else {
		langsel_hindi();
	}
 }
 function langsel_eng() {
    document.getElementById("engContent").style.display='block';
	document.getElementById("hindiContent").style.display='none';
 }
 
 function langsel_hindi() {
	document.getElementById("engContent").style.display='none';
	document.getElementById("hindiContent").style.display='block';
 }