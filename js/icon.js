$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event){
   $('this').toggleClass('active');
   $('.menu__body,.icon-menu').toggleClass('active');
   $('body').toggleClass('lock');
});