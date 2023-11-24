const checkbox = document.getElementById('toggle');
const chk = document.getElementById('chk');
const body = document.body;
const icon = document.querySelector(".theme-icon i");

var swiper = new Swiper(".slide-video", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".s-videos .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".s-videos .btn-next",
        prevEl: ".s-videos .btn-prev",
    },
});

checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
    }
});