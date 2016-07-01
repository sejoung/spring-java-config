$(document).ready(function(){	
	
	$(".pop_tab_cont").hide(); 
	$("ul.pop_tabs li:first").addClass("on").show(); 
	$(".pop_tab_cont:first").show(); 
	$("ul.pop_tabs li").click(function() {
		$("ul.pop_tabs li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".pop_tab_cont").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(0); 
		return false;
	});

});
