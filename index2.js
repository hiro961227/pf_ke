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

	//about_wheel event
	window.addEventListener("wheel", function(e){
		e.preventDefault();
	},{passive : false});

		var $html = $(".content_main");
		var page = 1;
		var lastPage = $("#aboutMe article").length;

		$html.animate({scrollTop:0},10);
		$('.content_main #aboutMe').on("wheel", function(e){
			if($html.is(":animated")) return;
			if(e.originalEvent.deltaY > 0){
				if($("#section3")){
					if(!$('.s03').hasClass('circle_delay')){
						setTimeout(() => {
							//skill circle
								draw(85,'.pie-chart1','#7887D1');
								draw(80,'.pie-chart2','#7887D1');
								draw(70,'.pie-chart3','#7887D1');
								draw(70,'.pie-chart4','#7887D1');

								function draw(max, classname, colorname){
									var i=1;
										var func1 = setInterval(function(){
												if(i<max){
																color1(i,classname,colorname);
																i++;
												} else{
														clearInterval(func1);
												}
										},10);
								}
								function color1(i, classname,colorname){
									$(classname).css({
														"background":"conic-gradient("+colorname+" 0% "+i+"%, rgba(120,135,209,.12) "+i+"% 100%)"
									});
								}
						}, 500);
					}else if($('#section4')){
						$('.s03').addClass('circle_delay');
					}
				}

				if(page== lastPage) return;
				page++;
			}else if(e.originalEvent.deltaY < 0){
				if(page == 1) return;
				page--;
			}
			var posTop = (page-1) * $(window).height();

			$html.animate({scrollTop : posTop});

		});

	//project_wheel event
	$(".content_main #project").on('mousewheel',function(e){
		var wheelDelta = e.originalEvent.wheelDelta;
		if(wheelDelta > 0){
			console.log("up");
			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
		}else{
				console.log("down");
					$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
		}});
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

//fadeIn