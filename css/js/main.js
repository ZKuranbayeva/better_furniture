const track = document.querySelector('.product__items');
const slides = document.querySelectorAll('.product__item');
let index = 0;

function moveSlider(){
    index++;
    if(index >= slides.length) {
        index = 0;
    }
    track.style.transform = `traslateX(-${index * (slides[0].offsetWidth + 20)}px)`;
}

setInterval(moveSlider, 3000);