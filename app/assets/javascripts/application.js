/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})



$(document).on('ready', function() {

  $('.about-slick').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2.2,
  centerMode: false,

  variableWidth: true
});




    $('.calc-slick').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2.2,
  centerMode: false,

  variableWidth: true
});



});