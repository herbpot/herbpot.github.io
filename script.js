let currentIndex = 0;

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // 3초마다 슬라이드 이동
