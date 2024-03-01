/*
Author       : theme_ocean
Template Name: Quader - Personal Portfolio Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
		
		$('.main-menu').meanmenu();		
        
        /*START CHANGE MENU BACKGROUND JS*/
			var headertopoption = $(window);
			var headTop = $('.header-top-area');

			headertopoption.on('scroll', function () {
				if (headertopoption.scrollTop() > 200) {
					headTop.addClass('menu-bg');
				} else {
					headTop.removeClass('menu-bg');
				}
			});
		 /*END CHANGE MENU BACKGROUND JS*/

		/*START SKILL JS*/
		$(function() {
			$(".skill-knob").knob({
				'min':0,
				'max':100,
				'width': 120,
				'height': 120,
				'readOnly': true,
				'lineCap': 'round',
				'displayPrevious': true,
				'angleOffset': 0,
				'bgColor': '#f9f9f9',
				'fgColor': '#35ac39',
				'thickness': 0.15
			});
					
			/* Skill way point */
			$('.skill-item').waypoint(function(down){
				$('.skill-knob').each(function(){
				var $skill_knob = $(this);
					
					// Check knob value
					if($skill_knob.val() == 0){
						$({value: 0}).animate({value: $skill_knob.attr("data-end")}, {
							duration: 2000,
							easing:'swing',
							step: function() 
							{
								$skill_knob.val(Math.ceil(this.value)).trigger('change');
								$skill_knob.val($skill_knob.val() + '%');
							}
						})
					}
				});
			}, { offset: '90%' });
		});	
		/*END SKILL JS*/	
								
		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */	

		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
		   items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[980,1],
			itemsTablet:[768,1],
			itemsMobile:[650,1],
			pagination:true,
			navigation:true,
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/			
			
	}); 					
			
})(jQuery);


  

