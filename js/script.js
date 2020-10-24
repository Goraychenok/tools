var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  jQuery(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').addClass('active');
    });
});
function slowScroll(id){
	var offset = 10;
	$('html,body').animate ({
		scrollTop: $(id).offset ().top - offset
	},1000);
	$('body').removeClass('lock');
	$('.header__burger,.header__menu').removeClass('active');
	return false;
}

$('.popup-btn').on('click',  function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
	$('body').addClass('stop');
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var popup = $("#popup-dialog"); // тут указываем ID элемента
    var close = $(".popup-close");
    $('body').addClass('stop');
    if (!popup.is(e.target)// если клик был не по нашему блоку
        && popup.has(e.target).length === 0 // и не по его дочерним элементам
        || close.is(e.target)) { 
            $('body').addClass('stop');
            event.preventDefault();
            $('.popup').fadeOut();
			$('body').removeClass('stop');
    }
});