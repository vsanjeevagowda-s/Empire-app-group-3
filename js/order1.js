function plus(field) {
	debugger
 nr = parseInt(document.getElementById(field).value);
 document.getElementById(field).value = nr + 1;
}
 
function minus(field) {
 nr = parseInt(document.getElementById(field).value);
 if (nr > 0) {
   if( (nr - 1) >= 0) {
     document.getElementById(field).value = nr - 1;
   }
 }
}
$(".nonveg").hide();
$("#VeG").click(function(){
	$(".veg").show();
	$(".nonveg").hide();
});
$("#NonVeg").click(function(){
	$(".nonveg").show();
	$(".veg").hide();
});
$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});