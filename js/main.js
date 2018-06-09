$(document).ready(function(){
	$('#nav').slicknav(); // mobile nave
	
	//menu animate hoye niche namar jonno
	$('#nav').onePageNav();
	
				/*END*/
	
	
	/*menu fade hoye ashar code*/
	
		$("ul#nav ul.sub-menu").css('opacity', 0.0);
	$("ul#nav li").hover(function() {
		$(this).find(".sub-menu").stop().animate({opacity:1});
	},
	function() {
		$(this).find(".sub-menu").stop().animate({opacity:0});
	});
	
	
	  $('.mainmenu_area ul#nav li a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
  
						/*END*/
						
		/* menu selection korbe stick animation er shathe*/ // kori nai

  
  // grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = $('#sticky_menu').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#sticky_menu').css({ 'position': 'fixed', 'top':0, 'left':0 });
		} else {
			$('#sticky_menu').css({ 'position': 'relative' }); 
		}   
	};
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});
	
				/*END*/
				
				
		/* pricing table*/
		
		$(".single_table").hover(function() {
			
			$(".single_table").removeClass("active");
			$(this).addClass("active");
			
		});
		
		//my job; pricing table hover sara active thakbe; emon class add kora
		
		/* 
		
		//body te hover
		$("body").hover(function() {
		
			$(".single_table.magenta_color").addClass("active");
		});
		
		*/
		
		$(".pricing_table").hover(function() {
			
			$(".single_table").removeClass("active");
			$(".single_table.magenta_color").addClass("active");
		});
		
		
					/*END*/
	
});
