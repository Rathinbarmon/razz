/*-------------------------------------------------------------------------
    
    Theme Name: Raja One Page Minimal Resume Template
    Auther: RaLab
    Author URI: http://br-themes.com
    Version: 1.0.0

  -------------------------------------------------------------------------*/
(function ($) {
	"use strict"; 

	    /*
	     * ----------------------------------------------------------------------------------------
	     *  STICKY MENU
	     * ----------------------------------------------------------------------------------------
	     */
		    function stickyMenu(){
		        $(window).on('scroll', function(){
		            var x = $(this).scrollTop();

		            if(x > 100){
		                $('.main_nav').addClass('isActive');
		            }else{
		                $('.main_nav').removeClass('isActive');
		            }
		        });
		    }
		    stickyMenu();
	    /*
	     * ----------------------------------------------------------------------------------------
	     *  SCROLL SPY
	     * ----------------------------------------------------------------------------------------
	     */
	    	$('body').scrollspy({ target: '.navbar-ex1-collapse' });   
	    
		/*
	     * ----------------------------------------------------------------------------------------
	     *  Owl Carousel
	     * ----------------------------------------------------------------------------------------
	     */ 
	        $('.testimonials').owlCarousel({
		        items: 2,
		        nav: false,
		        loop: true,
		        autoplay: false,
		        autoplayTimeout: 3000,
				responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        600:{
			            items:1,
			        },
			        1000:{
			            items:2,
			        }
			    }
		    }); 

	     /*
	     * ----------------------------------------------------------------------------------------
	     *  Smooth Scroll
	     * ----------------------------------------------------------------------------------------
	     */
			$('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click', function() {
				if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
				    $('html, body').animate({
				      scrollTop: target.offset().top
				    }, 1000);
				    return false;
				  }
				}
			}); 
			/*
	     * ----------------------------------------------------------------------------------------
	     *  Window Load
	     * ----------------------------------------------------------------------------------------
	     */
			jQuery(window).on('load',function(){   
				
			}); 

}(jQuery));	