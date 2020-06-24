/**
 * Sticky menu
 * */

$(document).ready(function(){
    $(window).bind('scroll', function() {
          if ($(window).scrollTop() > 100) {
            $('.header .navbar').addClass('sticky')
            $('#search-form-main').addClass('sticky-search')
            $('.nav-placeholder').css('height', 100);

          }
          else {
              $('.header .navbar').removeClass('sticky');
              $('#search-form-main').removeClass('sticky-search')
              $('.nav-placeholder').css('height', 0);
          }
     });
 });

 /**
 * Preloader
 * */
$(window).on('load', function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(10).fadeOut(700 ); // will fade out the white DIV that covers the website.
    $('body').delay(50).css({'overflow':'visible'});
})


$(".search-button-main").on('click', function(){
  // $("#bs-example-navbar-collapse-1").fadeOut()
  // $('#search-form-main').fadeIn()
  //$(this).fadeOut('fast')
  //$('#search-form-main').fadeIn({queue: false, duration: 'slow'});
  if($('#search-form-main').hasClass("search-form-main-display")){
    $('#search-form-main').removeClass("search-form-main-display")
    $('.search-button-main i').addClass("fa-search")
    $('.search-button-main i').removeClass("fa-times")
  }else{
    $('#search-form-main').addClass("search-form-main-display")
    $('.search-button-main i').removeClass("fa-search")
    $('.search-button-main i').addClass("fa-times")
  }
  //$('#search-form-main').animate({ top: "-10px" }, 'slow');
})
