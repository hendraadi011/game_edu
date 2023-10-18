var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 40,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },


    },
});

// toggle class active 

const navbarNav = document.querySelector('.navbar-nav');


// ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle('active');
    console.log('halo')
}

//klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})


const materiSatu = () => {
    // e.preventDefault();
    // window.location('materi/materi-satu.html')
    window.location.href = '../materi/materi-satu.html'
}