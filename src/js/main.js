
$(document).ready(function(){

  $('.top-menu-block>ul>li>ul').hover(function(){
    $(this).prev().addClass('hovered');
  });

  $('.top-menu-block>ul>li>ul').mouseleave(function(){
    $(this).prev().removeClass('hovered');
  });

  $('#simpleDrawer').simpleDrawer({width:220});
  $('#simpleDrawer').show();
  $('.slider-main').bxSlider();

  $('.portfolio-slider .bxslider').bxSlider({
    pagerCustom: '.portfolio-slider .bx-pager',
    captions: true,
    slideWidth: 737
  });
  $('.product-detail-slider .bxslider').bxSlider({
    pagerCustom: '.product-detail-slide .bx-pager',
    captions: true,
  });
  $('.pather .pather-list').slick({
    dots: false,
     infinite: false,
     speed: 300,
     slidesToShow: 5,
     slidesToScroll: 5,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]

  });

});
