$(function(){

  $('.news__slider').slick({
    arrows: false,
    dots: true,
  });

});

$(document).on('click', 'ul li', function(){
  $(this).addClass('active').siblings().removeClass('active')
})

