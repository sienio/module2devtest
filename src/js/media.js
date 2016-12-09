$(document).ready(function() {
  var menu = $('.nav_menu');
  var mobileMenu = $('.mobile_menu');
  var sliderImage = $('.slider--image');
  var pricesPlan = $('.our_prices--plans');
  var summaryImg = $('.our_prices--summary').find('img');
  var footerLogo = $('.footer_logo').find('p');

  function hide() {
    if ($(this).width() < 860) {
      menu.addClass('hidden');
      mobileMenu.removeClass('hidden');
      sliderImage.addClass('hidden');
      pricesPlan.css('display', 'block');
      summaryImg.addClass('hidden');
      footerLogo.addClass('hidden');
    }else {
      menu.removeClass('hidden');
      mobileMenu.addClass('hidden');
      sliderImage.removeClass('hidden');
      pricesPlan.css('display', 'flex');
      summaryImg.removeClass('hidden');
      footerLogo.removeClass('hidden');
    }
  }



  hide();
  $(window).on('resize', function(e) {
    hide();
  });

});
