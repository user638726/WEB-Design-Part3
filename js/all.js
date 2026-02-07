$(function () {
  $('.burger').on('click', function () {
    $('.header').toggleClass('is-open');
  });

  $('.header ul a').on('click', function () {
    $('.header').removeClass('is-open');
  });
});
const asideItems = document.querySelectorAll('.aside-bar ul li');

  asideItems.forEach(item => {
    item.addEventListener('click', () => {
      // 移除所有 active
      asideItems.forEach(li => li.classList.remove('active'));

      // 幫被點擊的加上 active
      item.classList.add('active');
    });
  });