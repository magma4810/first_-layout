const point: NodeListOf<Element> = document.querySelectorAll(".point");
const image: NodeListOf<Element> = document.querySelectorAll(".card-img-work");
const leftBtn: Element | null = document.getElementById("left-button");
const rightBtn: Element | null = document.getElementById("right-button");

point[0].classList.add("active-point");
image[0].classList.add("active-img");

let count: number = 0,j: number,i: number;

for (i = 0; i < point.length; i++) {
  point[i].addEventListener("click", () => {
    for (j = 0; j < image.length; j++) {
      point[j].classList.remove("active-point");
      image[j].classList.remove("active-img");
    }
    count = i;
    image[count].classList.add("active-img");
    point[count].classList.add("active-point");
  });
}

leftBtn?.addEventListener("click", () => {
  for (j = 0; j < image.length; j++) {
    point[j].classList.remove("active-point");
    image[j].classList.remove("active-img");
  }
  count--;
  if (count < 0) {
    count = image.length - 1;
  }
  image[count].classList.add("active-img");
  point[count].classList.add("active-point");
});

rightBtn?.addEventListener("click", () => {
  slowSlider();
});

function slowSlider() {
  for (let j = 0; j < image.length; j++) {
    point[j].classList.remove("active-point");
    image[j].classList.remove("active-img");
  }
  count++;
  if (count >= image.length) {
    count = 0;
  }
  image[count].classList.add("active-img");
  point[count].classList.add("active-point");
}

let timerImage = setInterval(() => slowSlider(), 3000);

const slider: Element | null = document.querySelector(".third-container");

slider?.addEventListener("mouseover", () => {
  clearInterval(timerImage);
});

slider?.addEventListener("mouseleave", () => {
  timerImage = setInterval(() => slowSlider(), 3000);
});
