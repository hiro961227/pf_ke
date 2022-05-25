$(document).ready(function(){
	// menu
 $('ul.nav_area li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.nav_area li.now_click').removeClass('now_click');
		$('ul.nav_area li').addClass('no_click');
		$('.this_page').removeClass('openPage');

		$(this).removeClass('no_click');
		$(this).addClass('now_click');
		$("#"+tab_id).addClass('openPage');
	})

	//wheel event
	window.addEventListener("wheel", function(e){
		e.preventDefault();
	},{passive : false});

		var $html = $(".content_main");
		var page = 1;
		var lastPage = $("#aboutMe article").length;

		$html.animate({scrollTop:0},10);
		$('.content_main').on("wheel", function(e){

			if($html.is(":animated")) return;
			if(e.originalEvent.deltaY > 0){
				if(page== lastPage) return;
				page++;
			}else if(e.originalEvent.deltaY < 0){
				if(page == 1) return;
				page--;
			}
			var posTop = (page-1) * $(window).height();

			$html.animate({scrollTop : posTop});

		});
});

// morphing settings
$(function() {
	$('#section1 .its_me').morphing({
					numVert: 12,
					spring: 0.005,
					friction: 0.9,
					radius: 150,
					fps: 60
	});

	$('#section2 .img01').morphing({
					numVert: 12,
					spring: 0.003,
					friction: 0.9,
					radius: 130,
					fps: 45
	});

	$('#section2 .img02').morphing({
					numVert: 14,
					spring: 0.005,
					friction: 0.9,
					radius: 120,
					fps: 50
	});
});
