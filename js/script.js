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


 });