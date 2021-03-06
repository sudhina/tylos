// JavaScript Document
$(function(){
	$('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15, 
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false
  });
	$('.materialboxed').materialbox();
	$('body').css('display', 'none');
	$('body').fadeIn(200);
	$('a').click(function(e) {
		e.preventDefault();
		newLocation = this.href;
		$('body').fadeOut(200, newpage);
	});
	if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
		window.onpageshow = function(evt) {
			if (evt.persisted) {
				document.body.style.display = "none";
				location.reload();
			}
		};
	}
	$('select').material_select();
});
function prev_slide(){ 
	$('.trending-wrap').multislider('prev'); 
}
function next_slide(){ 
	$('.trending-wrap').multislider('next'); 
}
function newpage() {
window.location = newLocation;
	$('body').fadeIn(500);
}
function Reload() {
	try {
		var headElement = document.getElementsByTagName("head")[0];
		if (headElement && headElement.innerHTML)
		headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
	}
	catch (e) {}
}
function socialMediaLogin(){
	ocalogin(function(response){
		var profile = response.profile[0];
		var email = response.email[0].email;
		var mobile = response.mobile[0].mobile;
		$("#FullName").focus();
		$("#FullName").val(profile.fname+" "+profile.lname);
		$("#Gender").val(profile.gender);
		$('select').material_select();
		$("#Email").val(email);
		$("#Phone").val(mobile);
		$("#klubstaId").val(response.user_id);
		$("#Email").focus();
		$("#Phone").focus();
		$("#Password").focus();
	});
}
function Klubstasignin(){
	ocalogin(function(response){
		$.ajax({
			url:"/functions/klubsta-signin/",
			method:"post",
			type:"post",
			data:{
				klubstaId : response.user_id
			},
			success:function(data){
				if(data==='error'){
					window.location.assign('/register/?msg=notregistered');
				}
				else{
					window.location.assign('/');
				}
			}
		});
	});
}