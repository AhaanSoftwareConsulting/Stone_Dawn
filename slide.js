const totalSlides = document.querySelectorAll('.practice-swiper .swiper-slide').length;
const fractionEl = document.querySelector('.practice-fraction');
const activeTitle = document.querySelector('.active-slide-title');

const swiper = new Swiper('.practice-swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: '.practice-next',
        prevEl: '.practice-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        }
    },
    on: {
        slideChange: function () {
            const realIndex = this.realIndex + 1;
            fractionEl.textContent = `${realIndex} / ${totalSlides}`;

            const currentSlide = this.slides[this.activeIndex];
            const title = currentSlide.querySelector('.slide-title').innerText;
            activeTitle.innerText = title;
        }
    }
});