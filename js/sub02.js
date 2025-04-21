// header 고정
/* $(window).on('scroll', function () {

    if ($(this).scrollTop() > 0) {
        $('header').addClass('on')
    } else {
        $('header').removeClass('on')
    }
}); */


// top_nav
$('nav .gnb').on('mouseover', () => {
    $('.sub').stop().slideDown();
});
$('.sub').on('mouseleave', function () {
    $('.sub').stop().slideUp();
})
$('.header_top').on('mouseover', function () {
    $('.sub').stop().slideUp();
})






//footer - top button
const $topbtn = document.querySelector('.go_top');

$('topbtn').on('click', function(){
  window.stop().scrollTop({top:0})
});
