$(document).ready(function(){	
	
	var intype = $('.ov_label').next('.intype');
	$('.ov_label').css('position','absolute');
	intype.focus(function(){
		$(this).prev('.ov_label').css('visibility','hidden');
		})
		.blur(function(){
			if($(this).val() == ''){
				$(this).prev('.ov_label').css('visibility','visible');
			} else {
				$(this).prev('.ov_label').css('visibility','hidden');
			}
		})
		.change(function(){
			if($(this).val() == ''){
				$(this).prev('.ov_label').css('visibility','visible');
			} else {
				$(this).prev('.ov_label').css('visibility','hidden');
			}
		})
		.blur();

});


