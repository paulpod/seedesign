/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})




$(document).ready(function() {

  var s_round = '.s_round';

  var cancel_c50 = '.cancel_c50';
  var cancel_other = '.cancel_other';

  var c50_round = '.c50_oneclick';
  var c_other = '.c_other';

  $(s_round).hover(function() {
    $('.b_round').toggleClass('b_round_hover');
    return false;
  });

 

  
  // flip the front and show the back for each button

  $(c50_round).click(function() {
    $('.flip_box').toggleClass('flipped');
    $('#c50_back').toggleClass('display_none');
    $('#c50_back').toggleClass('hidden_back');
    //$(this).addClass('s_round_click');
    $('.s_arrow').toggleClass('s_arrow_rotate');
    $('.b_round').toggleClass('b_round_back_hover');
    return false;
  });

  $(c_other).click(function() {
    $('.flip_box').toggleClass('flipped');
    $('#c_otherback').toggleClass('display_none');
    $('#c_otherback').toggleClass('hidden_back');
    //$(this).addClass('s_round_click');
    $('.s_arrow').toggleClass('s_arrow_rotate');
    $('.b_round').toggleClass('b_round_back_hover');
    return false;
  });


  // now cancel, flip back, re-hide when moved

  $(cancel_c50).click(function() {
    $('.flip_box').toggleClass('flipped');
    $('#c50_back').toggleClass('hidden_back');

    $('#c50_back').one('transitionend', function() {
      console.log('done 50');
      $('#c50_back').toggleClass('display_none');
    });

    return false;
  });

  $(cancel_other).click(function() {
    $('.flip_box').toggleClass('flipped');
    $('#c_otherback').toggleClass('hidden_back');

    $('#c_otherback').one('transitionend', function() {
      console.log('done other');
      $('#c_otherback').toggleClass('display_none');
    });

    return false;
  });

  





  $(s_round).on('transitionend', function() {
    $(this).removeClass('s_round_click');
    $(this).addClass('s_round_back');
    return false;
  });
});






$(document).on('ready', function() {

  $('.about-slick').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,

  variableWidth: true
});




  $('.calc-slick').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  centerMode: false,

  variableWidth: true
});


  $('.hero-slick').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,

});



});