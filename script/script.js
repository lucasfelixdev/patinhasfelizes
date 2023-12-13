

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
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

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        525: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

let show = true;
const menuSection = document.querySelector(".nav_ul_estilo")
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () =>{

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

