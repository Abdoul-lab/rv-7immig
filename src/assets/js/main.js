(function($) {
    'use strict';
	   
//Toggle Nav for mobile  menu
    $('.menu-toggle').click(function(){
        $('.menu-wrapper').toggleClass('active-nav');
    })

    //Toggle Nav for mobile menu
    $('.open_bar').click(function(){
        $('nav').addClass('active-nav');
        $('.menu-toggle').addClass('closee');
    });
    $('.close_bar').click(function(){
        $('nav').removeClass('active-nav');
        $('.menu-toggle').removeClass('closee');
    });
	
    
	 // Slider Active
$('.slider_list').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout:3000,
        dots: false,
        smartSpeed:2500,
        nav: true,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })	

     // Slider Active
$('.slider_list2').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout:3000,
        dots: false,
        animateOut:'fadeOut',
        animateIn:'animate__fadeIn',
        nav: true,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })	
// Slider Active
$('.slider_list4').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout:3000,
        smartSpeed:2500,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })  
 // Slider Active
   $('.service_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:3000,
        dots:true,
        smartSpeed:2500,
		dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1365: {
                items: 2
            },
            1600: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })      
    // Slider Active
   $('.service_list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:3000,
        smartSpeed:2500,
        dots:true,
        dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
             1365: {
                items: 3
            },
             1600: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    }) 

  $('.country_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:3000,
        smartSpeed:2500,
        dots: true,
		dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1365: {
                items: 3
            },
            1600: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })  
  // course aection
     $('.course_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:6000,
        smartSpeed:3000,
        dots:true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
             1365: {
                items: 3
            },
             1600: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })     

  $('.brand_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:4000,
        smartSpeed:3000,
        dots: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1365: {
                items: 5
            },
            1600: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    }) 
	    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  $('.testimonials_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })  

  $('.testimonials_list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:4000,
        smartSpeed:3000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })    

     $('.testimonials_list4').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:6000,
        smartSpeed:3000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1365: {
                items: 3
            },
             1600: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    }) 

       $('.blog_list4').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:6000,
        smartSpeed:3000,
        dots: true,
        nav:true,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1365: {
                items: 3
            },
             1600: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    }) 

     $('.blog_list5').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:6000,
        smartSpeed:3000,
        dots: true,
        nav:false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1365: {
                items: 3
            },
             1600: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    }) 
	 $('.visa_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
		dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

        // sticky
        var wind = $(window);
        var sticky = $('#sticky-header');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 100) {
                sticky.removeClass('sticky-nav');
            } else {
                sticky.addClass('sticky-nav');
            }
        }); 
		
    // video section
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

        //Header Search
        if($('.search-box-outer').length) {
            $('.search-box-outer').on('click', function() {
                $('body').addClass('search-active');
            });
            $('.close-search').on('click', function() {
                $('body').removeClass('search-active');
            });
        }

        $('.venobox_custom').venobox({
            framewidth : '400px',                            // default: ''
            frameheight: '300px',                            // default: ''
            border     : '10px',                             // default: '0'
            bgcolor    : '#5dff5e',                          // default: '#fff'
            titleattr  : 'data-title',                       // default: 'title'
            numeratio  : true,                               // default: false
            infinigall : true,                               // default: false
            share      : ['facebook', 'twitter', 'download'] // default: []
        });

            // to wow Jquery
        new WOW().init();
		
	
            
})(jQuery);