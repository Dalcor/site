$(document).ready(function(){
    $('.slider').slick({
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 3500
});
});

$('.side-slider').slick({
    dots:true,
    arrows: false,
    autoplay: true,
    autoplaySpeed:2000
});

window.onload = function() {
    let btn = document.querySelector('.menu-btn');
    let list = document.querySelector('.drop-list');

    btn.addEventListener('click',function () {
        list.classList.toggle('hidden');
    });

};



