$(function(){
  $('.testimonials__items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

  let header = $("#header");
  let intro = $("#intro");
  let introHeight = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  let nav = $("#nav");
  let navToggle = $("#navToggle");

  checkScroll(scrollPos, introHeight);

    $(window).on("scroll resize", function(){

      introHeight = intro.innerHeight();
      scrollPos = $(this).scrollTop();
      checkScroll(scrollPos, introHeight);

      nav.removeClass("show");

    });

  function checkScroll(scrollPos, introHeight){
    if(scrollPos > introHeight){
      header.addClass("fixed");
    }
    else{
      header.removeClass("fixed");
    }
  }

  navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId = $(this).data("scroll");

    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
      scrollTop: elementOffset - 66
    }, 700);

    nav.removeClass("show");
  });
  
});