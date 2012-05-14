/* Author: LiveWork */

$(document).ready(function(){

var menu=false;

$("a#menu").click(function () {
	if (menu==false) {
		$('ul.menu').appendTo('nav.primary');
		$('ul.menu').removeClass('hide');
		menu=true;
	}
	else {
		$('ul.menu').prependTo('nav.primary');
		$('ul.home').prependTo('nav.primary');
		$('ul.menu').addClass('hide');
		menu=false;
	}
});


 });