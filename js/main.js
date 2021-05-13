$(document).ready(function(){
      $('.client__slider').slick({
          dots: true,
          arrows:false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      $('.header__btn-menu').click(function(){
          $('.header__btn-menu').toggleClass("close-menu");
          $('.main__nav').toggleClass("main__nav--open")
        });
      $('.main__nav--contact-click').click(function(){
          $(".main__nav--contact").slideToggle("500");
        });
      $('.header__banner--scrollDown').click(function(){
        $('html,body').animate({
          scrollTop:$('.intro').offset().top
        },300);
      });
})