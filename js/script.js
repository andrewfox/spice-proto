/* Author: LiveWork */

$(document).ready(function(){

var menu=false;

$("a.menua").click(function () {
	if (menu==false) {
		menu=true;
		$('ul.menu.hide')
			.clone()
			.addClass('cloned')
			.appendTo('nav.primary')
		$('ul.cloned').removeClass('hide');
		$('ul.cloned li.menu-link').remove();
	}
	else {
		$('ul.cloned').remove();
		menu=false;
	}
});




$('.notifications li .details').hide();

$(".notifications h3").click(function () {
	
	//this turns allows expanding only when scoring mode is off
	$(this).siblings('.details').slideToggle();
		
});
	


});