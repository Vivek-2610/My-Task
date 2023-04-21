$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,dots:true,
  fade: true,
  asNavFor: '.left-side-slider'
});
$('.left-side-slider').slick({
  slidesToShow: 6,
  asNavFor: '.slider-for',
  focusOnSelect: true
});