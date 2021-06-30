(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 


  var owl = $('#slider-header');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: false,
		dots: false,
		loop: true
		// navText: ["<span class='arrow-icon-left'></span>", "<span class='arrow-icon-right'></span>"],
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

//////////////// slider news



var owl = $('#owl-demo');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    },
    loop:true,
    margin:15,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: true,
		dots: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: ["<span class='arrow-icon-left'></span>", "<span class='arrow-icon-right'></span>"],
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
