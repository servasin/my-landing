$(document).ready(function() {
  // flying elementments
  $('.elements').addClass('elements--active');

  // menu
  $('.menu__burger').click(function() {
    $('.menu--row').slideToggle();
  });

  // slider
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    dotsEach: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1025:{
            items:3,
            dots: false,
        }
    }
  });
  
  $('.slider__button--next').click(function() {
      owl.trigger('next.owl.carousel');
  });
  $('.slider__button--prev').click(function() {
      owl.trigger('prev.owl.carousel', [300]);
  });

});