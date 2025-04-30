$(document).ready(function() {
    $('.box').each(function(index) {
      $(this).delay(1100 * index).animate({
        left: '0'
      }, 700);
    });
  });
  