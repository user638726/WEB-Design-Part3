$(function () {
  $('.burger').on('click', function () {
    $('.header').toggleClass('is-open');
  });

  $('.header ul a').on('click', function () {
    $('.header').removeClass('is-open');
  });
});