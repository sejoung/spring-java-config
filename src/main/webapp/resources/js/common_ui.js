$(document).ready(function(){	
	
	(function($){
		var clientWidth = 0;
		var slidemenu = function(sm, only_close) {
			if($('#container').attr('rData') == 'displayMenu'){
				$('.left_area').show();
				$('.left_area').css('visibility', 'visible');
				$('#contents').css('padding-left', 230);
				$('#footer').css('margin-left', 210);
				$('.menu_close').removeClass('on');
				$('#container').css('left', 0);
				$('#container').attr('rData','');
			}else{
				$('#container').attr('rData','displayMenu');
				$('.left_area').hide();
				$('.left_area').css('visibility', 'hidden');
				$('#contents').css('padding-left', 75);
				$('#footer').css('margin-left', 55);
				$('.menu_close').addClass('on');
				//$('.left_area').height($('#wrap').height());
				$('#container').animate({left: clientWidth, avoidTransforms: false, useTranslate3d: true}, 'fast');
			}
		};
		var eventHandlers = function(){
			$('.menu_close').live({
				click : function(e){
					e.preventDefault();
					var sm = $('#left_area');
					slidemenu(sm);
				}
			});
			$('.menu_open,.left_quick li a').live({
				click : function(e){
					e.preventDefault();
					var sm = $('#left_area');
					slidemenu(sm);
				}
			});
		};
		$('document').ready(function(){
			eventHandlers();
		});
	})(jQuery);

	var atc = $('.accmenu .menu');
		atc.addClass('hidden');
		atc.find('.cont').hide();
		//atc.eq(0).removeClass('hidden').find('.cont').show();
	$('.accmenu .menu a.act').click (function() {
		var accatc = $(this).parents('.menu:first');
		if(accatc.hasClass('hidden')) {
			atc.addClass('hidden').removeClass('on').find('.cont').slideUp(100);
			accatc.removeClass('hidden').addClass('on').find('.cont').slideDown(100);
		} else {
			accatc.removeClass('on').addClass('hidden').find('.cont').slideUp(100);
		}
		return false;
	});
	$('.lnb .menu.on').removeClass('hidden').find('.cont').show();

	$('.accmenu .cont li a').addClass('depact');
	$('.dep_menu li a').removeClass('depact');
	var atc1 = $('.accmenu .cont li');
		atc1.addClass('hidden');
		atc1.find('.dep_menu').hide();
		//atc.eq(0).removeClass('hidden').find('.cont').show();
	$('.accmenu .cont li a.depact').click (function() {
		var accatc1 = $(this).parents('li:first');
		if(accatc1.hasClass('hidden')) {
			atc1.addClass('hidden').removeClass('on').find('.dep_menu').slideUp(100);
			accatc1.removeClass('hidden').addClass('on').find('.dep_menu').slideDown(100);
		} else {
			accatc1.removeClass('on').addClass('hidden').find('.dep_menu').slideUp(100);
		}
		return false;
	});
	$('.accmenu .cont li.on').removeClass('hidden').find('.dep_menu').show();
	
	$('.catamenu .cont li a').addClass('depact');
	$('.dep_menu li a').removeClass('depact');
	var atc2 = $('.catamenu .menu');
		atc2.addClass('hidden');
		atc2.find('.cont').hide();
		//atc.eq(0).removeClass('hidden').find('.cont').show();
	$('.catamenu .menu a.act').click (function() {
		var accatc2 = $(this).parents('.menu:first');
		if(accatc2.hasClass('hidden')) {
			atc2.addClass('hidden').removeClass('on').find('.cont').slideUp(100);
			accatc2.removeClass('hidden').addClass('on').find('.cont').slideDown(100);
		} else {
			accatc2.removeClass('on').addClass('hidden').find('.cont').slideUp(100);
		}
		return false;
	});
	$('.catalist .menu.on').removeClass('hidden').find('.cont').show();

	//ele_tab
	$(".ele_tab_cont").hide(); 
	$("ul.ele_tabs li:first").addClass("on").show(); 
	$(".ele_tab_cont:first").show(); 
	$("ul.ele_tabs li").click(function() {
		$("ul.ele_tabs li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".ele_tab_cont").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});

	//tab
	$(".tab_cont01").hide(); 
	$("ul.tabs01 li:first").addClass("on").show(); 
	$(".tab_cont01:first").show(); 
	$("ul.tabs01 li").click(function() {
		$("ul.tabs01 li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".tab_cont01").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});
	
	$(".tab_cont02").hide(); 
	$("ul.tabs02 li:first").addClass("on").show(); 
	$(".tab_cont02:first").show(); 
	$("ul.tabs02 li").click(function() {
		$("ul.tabs02 li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".tab_cont02").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});

	$(".tab_cont03").hide(); 
	$("ul.tabs03 li:first").addClass("on").show(); 
	$(".tab_cont03:first").show(); 
	$("ul.tabs03 li").click(function() {
		$("ul.tabs03 li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".tab_cont03").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});

	$(".tab_cont04").hide(); 
	$("ul.tabs04 li:first").addClass("on").show(); 
	$(".tab_cont04:first").show(); 
	$("ul.tabs04 li").click(function() {
		$("ul.tabs04 li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".tab_cont04").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});

	$(".tab_cont05").hide(); 
	$("ul.tabs05 li:first").addClass("on").show(); 
	$(".tab_cont05:first").show(); 
	$("ul.tabs05 li").click(function() {
		$("ul.tabs05 li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".tab_cont05").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});
	$(".tab_cont05").hide(); 
	$("ul.tabs05_01 li:first").addClass("on").show(); 
	$(".tab_cont05:first").show(); 
	$("ul.tabs05_01 li").click(function() {
		$("ul.tabs05_01 li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".tab_cont05").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});
	$(".tab_cont05").hide(); 
	$("ul.tabs05_02 li:first").addClass("on").show(); 
	$(".tab_cont05:first").show(); 
	$("ul.tabs05_02 li").click(function() {
		$("ul.tabs05_02 li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".tab_cont05").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});
	$(".tab_cont05").hide(); 
	$("ul.tabs05_03 li:first").addClass("on").show(); 
	$(".tab_cont05:first").show(); 
	$("ul.tabs05_03 li").click(function() {
		$("ul.tabs05_03 li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".tab_cont05").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});
	
	$(".tab_cont06").hide(); 
	$("ul.tabs06 li:first").addClass("on").show(); 
	$(".tab_cont06:first").show(); 
	$("ul.tabs06 li").click(function() {
		$("ul.tabs06 li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".tab_cont06").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(); 
		return false;
	});
	
	$("ul.tabs01 li a > img").click(function(){
		$("ul.tabs01 li a > img").attr({ src: function() { 
			return $(this).attr("src").replace('_on.gif', '.gif'); } 
		});
		$(this).attr({ src: function() { 
			return $(this).attr("src").replace('.gif', '_on.gif'); } 
		});
	});

	$("ul.ele_tabs li a > img").click(function(){
		$("ul.ele_tabs li a > img").attr({ src: function() { 
			return $(this).attr("src").replace('_on.gif', '.gif'); } 
		});
		$(this).attr({ src: function() { 
			return $(this).attr("src").replace('.gif', '_on.gif'); } 
		});
	});

	$("ul.tabs02 li a > img").click(function(){
		$("ul.tabs02 li a > img").attr({ src: function() { 
			return $(this).attr("src").replace('_on.gif', '.gif'); } 
		});
		$(this).attr({ src: function() { 
			return $(this).attr("src").replace('.gif', '_on.gif'); } 
		});
	});

	$(".user_tab_cont").hide(); 
	$("ul.user_tabs li:first").addClass("on").show(); 
	$(".user_tab_cont:first").show(); 
	$("ul.user_tabs li").click(function() {
		$("ul.user_tabs li").removeClass("on"); 
		$(this).addClass("on"); 
		$(".user_tab_cont").hide(); 
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(0); 
		return false;
	});

});

function equalHeight(group) {
   tallest = 0;
   group.each(function() {
      thisHeight = $(this).height();
      if(thisHeight > tallest) {
         tallest = thisHeight;
      }
   });
   group.height(tallest);
}
$(document).ready(function() {
   equalHeight($(".column"));
});

/* quick_menu */
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function") {
		window.onload = func;
	}else{
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

var scroll_pixel,div_pixel,gtpos,gbpos,loop,moving_spd, f, k, glimit, bottom_margin;
var top_margin = 400;				
var bottom_margin = 0;	
var moving_speed = 10;		
var interval_time = 15;		
var quickDivHeight = 40;		

function start_scrollmove() {
	tidSlide = setInterval("check_scrollmove()",interval_time);
}

function check_scrollmove() {
	if(document.body && (document.body.scrollLeft || document.scrollTop)) {
		scroll_pixel = document.body.scrollTop;
		gtpos = document.body.scrollTop+top_margin;
		glimit = document.body.scrollHeight - bottom_margin - quickDivHeight;
	} else if(document.documentElement &&(document.documentElement.scrollLeft||document.documentElement.scrollTop)) {
		scroll_pixel = document.documentElement.scrollTop;
		gtpos = document.documentElement.scrollTop+top_margin;
		glimit = document.documentElement.scrollHeight - bottom_margin - quickDivHeight;
	} else {
		scroll_pixel = document.body.scrollTop;
		gtpos = document.body.scrollTop+top_margin;
		glimit = document.body.scrollHeight - bottom_margin - quickDivHeight;
	}
	if (gtpos > glimit) {
		gtpos = glimit;
	}
	
	var divTop = parseInt( document.getElementById("menu_open").style.top.replace("px","") );
	if( divTop < gtpos){
		moving_spd=(gtpos-divTop)/moving_speed;
		document.getElementById("menu_open").style.top = parseInt((divTop + moving_spd)) + "px"
	} else if(divTop > gtpos) {
		if(divTop > top_margin) {
			moving_spd=(divTop-gtpos)/moving_speed;
			document.getElementById("menu_open").style.top = parseInt((divTop - moving_spd)) + "px";
		} else {
			document.getElementById("menu_open").style.top = top_margin + "px";
		}
	}

}
addLoadEvent(start_scrollmove);

//ÆË¾÷Ã¢ ¶ç¿ì±â
function openWindow(anchor, options) {

	var args = '';

	if (typeof(options) == 'undefined') { var options = new Object(); }
	if (typeof(options.name) == 'undefined') { options.name = 'win' + Math.round(Math.random()*100000); }

	if (typeof(options.height) != 'undefined' && typeof(options.fullscreen) == 'undefined') {
		args += "height=" + options.height + ",";
	}

	if (typeof(options.width) != 'undefined' && typeof(options.fullscreen) == 'undefined') {
		args += "width=" + options.width + ",";
	}

	if (typeof(options.fullscreen) != 'undefined') {
		args += "width=" + screen.availWidth + ",";
		args += "height=" + screen.availHeight + ",";
	}

	if (typeof(options.center) == 'undefined') {
		options.x = 0;
		options.y = 0;
		args += "screenx=" + options.x + ",";
		args += "screeny=" + options.y + ",";
		args += "left=" + options.x + ",";
		args += "top=" + options.y + ",";
	}

	if (typeof(options.center) != 'undefined' && typeof(options.fullscreen) == 'undefined') {
		options.y=Math.floor((screen.availHeight-(options.height || screen.height))/2)-(screen.height-screen.availHeight);
		options.x=Math.floor((screen.availWidth-(options.width || screen.width))/2)-(screen.width-screen.availWidth);
		args += "screenx=" + options.x + ",";
		args += "screeny=" + options.y + ",";
		args += "left=" + options.x + ",";
		args += "top=" + options.y + ",";
	}

	if (typeof(options.scrollbars) != 'undefined') { args += "scrollbars=1,"; }
	if (typeof(options.menubar) != 'undefined') { args += "menubar=1,"; }
	if (typeof(options.locationbar) != 'undefined') { args += "location=1,"; }
	if (typeof(options.resizable) != 'undefined') { args += "resizable=1,"; }

	var win = window.open(anchor, options.name, args);
	return false;
}