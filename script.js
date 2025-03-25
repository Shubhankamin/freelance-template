document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop", 
    perPage: 3, 
    perMove: 1, 
    autoplay: true,
    interval: 3000, 
    pauseOnHover: true, 
    gap: "20px",
    pagination: false,
    arrows: true, 

    breakpoints: {
      1440: { perPage: 3 },
      1024: { perPage: 2 }, 
      768: { perPage: 2 }, 
      480: { perPage: 1 }, 
    },
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");

  hamburgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      hamburgerBtn.innerHTML = "✖"; 
    } else {
      hamburgerBtn.innerHTML = "☰"; 
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#sponsor-carousel", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    autoplay: true,
    interval: 2500,
    pauseOnHover: true,
    gap: "30px",
    pagination: false,
    arrows: false, 
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 },
    },
  }).mount();
});
