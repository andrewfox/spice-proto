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

$(".remove-member").click(function () {
	
	$(this).parent().parent().hide();
	
});

	
//$("#join-form form.join-now input").click(function () {
//	
//	window.location.href = '4.2.Sign-up-confirm-and-form.html';
//	
//});
//	

$('#activity-new').hide();
$("#add-new-activity").hide();
$("#select-branch").hide();

var newactivity=false

$("#new-activity").click(function () {

if (newactivity==false) {
	$("#activity-new").show();
	$("#list").hide();
	$(this).prop('value', 'Existing activity');
	$('.members').hide();
	$('.members-list').hide();
	newactivity=true;
    $('#activity').hide();
	$("#add-new-activity").show();
	$("#select-branch").show();
	$("#enter-details").show();
	
}

else {
	$("#list").show();
	$("#activity-new").hide();
	$(this).prop('value', 'New activity');
	$("#select-branch").hide();
	newactivity=false;
}
	
});


//if ("#new-activity") {
//	
//}	

$('.members').hide();

$('.members-list').hide();

$('.add-mem').hide();

$('.be').hide();

$('#activity').hide();

$('#advanced').hide();

$('#activity-address').hide();

$('#enter-details').hide();



//if (("orange").selected=true) {
//	alert("hi")
//}


//  if (!$("#list option:selected").length)
//    $("#list option[value='4']").attr('selected', 'selected');

//if ($("#list").val(3)) {
//	alert("hi")
//}

//
//var foo = document.getElementById('div.list');
//if (foo)
//{
//   if (foo.selectedIndex == 3)
//   {
//       alert("hi");
//   } 
//}
//
//
//
//if ($('select.list 3').length > 0) {
  // There are options inside <select class="my_select">
//         alert("hi");
//  
//  
//}


$(".action").click(function () {

	$(".add-mem").show();
	$(".addmember").hide();

});

var newmem = ""

//$('#new-mem').keyup(function() {
//  $('#new-mem').val(text) = newmem
//});




$('#new-mem').keyup(function() {
   newmem = this.value; // omit "var" to make it global
   if (newmem=="be") {
   	$('.be').show();
   }
   else {
   	$('.be').hide();
   }
});

//-------------------------------
//Change cash for each member
//-------------------------------




//$('#new-mem').change(function() {
//    if ($(this).val() === 'be') {
        // Do something for option "b"
//        $('.be').show();
//    }
//});


var creditspermem = 2

$('#no-of-credits').keyup(function() {
   creditspermem = this.value; 
   $('.credit').replaceWith('<li class="credit">'+ creditspermem + '</li>');
});


$("#open-advanced").click(function () {
	

	$("#advanced").slideToggle();

});

//-------------------------------
//Add new activity
//-------------------------------
var activitytitle = ""

$('#activity-new').keyup(function() {
   activitytitle = this.value; 
   
});


$("#add-new-activity").click(function () {
	
	$('#activity').replaceWith('<div id="activity"><div id="activity-x"></div><article class="register"><header><h3>' + activitytitle + '</h3><h5>Today | <a href="m.2.1.hub.html">Alexander School &#9660;</a></header></article></div>');
	$('#activity').show();
	$('.members-list').show();
	$('.litter').hide();
	$('#members-litter').show();
	$('.member.addmember').show();
	$('.action.addmember').hide();
	$(".add-mem").show();
	$("#select-activity").hide();
	$('#activity-address').show();

});



$("#activity-x").click(function () {
	$("#select-activity").show();
	$("#activity").hide();
	$("#enter-details").hide();

});

//-------------------------------
//Calculate sum
//-------------------------------

var sum = 0;
var mems = 0;
var creds = 0;

$("#no-of-members").keyup(function () {
      mems = $(this).val();
    });  
    
$("#no-of-credits-per-member").keyup(function () {
      creds = $(this).val();
    });  


      
$(".keyup").keyup(function () {
	sum=0
	var memcred = Number(mems) * Number(creds);
	sum = sum + memcred;
	           
	   $('.credit').each(function() {              
	    var total = $(this).text();
	    sum = sum + Number(total);
	    
	});
	
//	$('#sum').replaceWith('<div id="sum"><h3>Total:</h3><h3 id="total">' + sum + '</h3></div>');
		
	$('#total').replaceWith('<span id="total">' + sum + '</span>');
	
});



//-------------------------------
//Show members for each activity
//-------------------------------

$('#list').change(function() {
    if ($(this).val() === '01') {
        // Do something for option "b"
        $('.members-list').hide();
    }
});

$('#list').change(function() {
    if ($(this).val() != '01') {
        // Do something for option "b"
        $('.members-list').show();
    }
});

$('#list').change(function() {
    if ($(this).val() === '02') {
        // Do something for option "b"
        $('#members-litter').show();
        $('#activity').show();
        $("#select-activity").hide();
        $("#enter-details").show();
        
    }
});

$('#list').change(function() {
    if ($(this).val() != '02') {
        // Do something for option "b"
        $('#members-litter').hide();
        $('#activity').hide();
    }
});

$('#list').change(function() {
    if ($(this).val() === '03') {
        // Do something for option "b"
        $('#members-dusting').show();
    }
});

$('#list').change(function() {
    if ($(this).val() != '03') {
        // Do something for option "b"
        $('#members-dusting').hide();
    }
});

$('#list').change(function() {
    if ($(this).val() === '04') {
        // Do something for option "b"
        $('#members-walls').show();
    }
});

$('#list').change(function() {
    if ($(this).val() != '04') {
        // Do something for option "b"
        $('#members-walls').hide();
    }
});

$('#list').change(function() {
    if ($(this).val() === '05') {
        // Do something for option "b"
        $('#members-beans').show();
    }
});

$('#list').change(function() {
    if ($(this).val() != '05') {
        // Do something for option "b"
        $('#members-beans').hide();
    }
});


});