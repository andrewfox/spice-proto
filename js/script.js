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
	
	//expands:
	$(this).siblings('.details').slideToggle();
		
});

$('#advanced-expanded').hide();

	
$("#advanced h3").click(function () {
	
	//expands:
	$(this).siblings('#advanced-expanded').toggle();
		
});

$(".dismiss").click(function () {
	
	$(this).parent().parent().parent().hide();
	
});

$(".cancel").click(function () {
	
	$(this).parent().parent().hide();
	
});
	
$("#join-form form.join-now input").click(function () {
	
	alert("hi");
	window.location.href = '4.2.Sign-up-confirm-and-form.html';
	
});
	
	

});