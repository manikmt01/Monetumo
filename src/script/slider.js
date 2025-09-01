$(document).ready(function () {
  $('.logos-slider').slick({
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    variableWidth: true,
    centerMode: true,
  });
});
$('.choose-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: false,
  prevArrow: $('.choose-prev-arrow'),
  nextArrow: $('.choose-next-arrow'),
});
$('.revenue-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: false,
  centerMode: true,
  centerPadding: '5%',
});
$('.testimonial-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  adaptiveHeight: true,
  autoplay: true,
  prevArrow: $('.testimonial-prev-arrow'),
  nextArrow: $('.testimonial-next-arrow'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
