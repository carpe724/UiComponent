$('.EggTimerSlider').slick({
    dots: false,
    arrows: false,
    infinite: false
});

let count = document.querySelector('.EggTimer__count');
let countBtn = document.querySelector('.EggTimer__button');

const eggSize = ['소란', '중란', '대란', '특란', '왕란'];
const eggTemperature = ['실온', '냉장고'];