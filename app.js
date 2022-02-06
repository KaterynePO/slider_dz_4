const prev = document.getElementById("btn-prev"),
  next = document.getElementById("btn-next"),
  slides = document.querySelectorAll(".slide"),
  dots = document.querySelectorAll(".dot");

let index = 0;

//console.log(slides);

const activeSlide = (n) => {
  // console.log(n);
  for (slide of slides) {
    // console.log(slide);
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const activeDot = (n) => {
  // console.log(n);
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const currentSlide = (i) => {
  activeSlide(index);
  activeDot(index);
  makeTimer();
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    currentSlide(index);
  } else {
    index++;
    currentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    currentSlide(index);
  } else {
    index--;
    currentSlide(index);
  }
};

// принимает 3 параметра но не все обязательные, 1 параметр сам элемент и 2 параметр индекс

dots.forEach((el, i) => {
  el.addEventListener("click", () => {
    //console.log(el); // <span>....</span>
    //console.log(i); // index масива
    index = i;
    currentSlide(index);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

setInterval(nextSlide, 2000);
