const track = document.querySelector('.product__items');
const slides = document.querySelectorAll('.product__item');
const slideCount = slides.length;
let index = 0;

track.innerHTML += track.innerHTML;

function moveSlider() {
  index++;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${index * 20}%)`;

  if (index >= slideCount) {
    setTimeout(() => {
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      index = 0;
    }, 500);
  }
}

setInterval(moveSlider, 3000);