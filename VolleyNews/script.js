let index = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % dots.length;
  updateCarousel();
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + dots.length) % dots.length;
  updateCarousel();
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;
    updateCarousel();
  };
});