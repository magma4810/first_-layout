const slider: Element | null = document.querySelector(".slider");
const image: NodeListOf<Element> = document.querySelectorAll(".card-img-work");

const points: Element | null = document.createElement("div");
points.className = "points";
for (let i = 0; i < image.length; i++) {
  let span = document.createElement("span");
  span.className = "point";
  if (points) {
    points.append(span);
  }
}

const sliderButtons: Element = document.createElement("div");
sliderButtons.className = "slider-buttons";
sliderButtons.innerHTML = `<div class="block-arrow" id="left-button">
<i class="fa fa-angle-left"></i>
</div>
<div class="block-arrow" id="right-button">
<i class="fa fa-angle-right"></i>
</div>`;

slider?.append(points);
slider?.append(sliderButtons);

const point: NodeListOf<Element> = document.querySelectorAll(".point");
const leftBtn: Element | null = document.getElementById("left-button");
const rightBtn: Element | null = document.getElementById("right-button");

point[0].classList.add("active-point");
image[0].classList.add("active-img");

let indexActivePoint: number = 0,
  j: number;

for (let i = 0; i < point.length; i++) {
  if (point[i]) {
    point[i].addEventListener("click", () => {
      point[indexActivePoint].classList.remove("active-point");
      image[indexActivePoint].classList.remove("active-img");
      indexActivePoint = i;
      if (image[indexActivePoint] && point[indexActivePoint]) {
        image[indexActivePoint].classList.add("active-img");
        point[indexActivePoint].classList.add("active-point");
      }
    });
  }
}

leftBtn?.addEventListener("click", () => {
  point[indexActivePoint].classList.remove("active-point");
  image[indexActivePoint].classList.remove("active-img");
  indexActivePoint--;
  if (indexActivePoint < 0) {
    indexActivePoint = image.length - 1;
  }
  image[indexActivePoint].classList.add("active-img");
  point[indexActivePoint].classList.add("active-point");
});

rightBtn?.addEventListener("click", () => {
  slowSlider();
});

function slowSlider() {
  point[indexActivePoint].classList.remove("active-point");
  image[indexActivePoint].classList.remove("active-img");
  indexActivePoint++;
  if (indexActivePoint >= image.length) {
    indexActivePoint = 0;
  }
  image[indexActivePoint].classList.add("active-img");
  point[indexActivePoint].classList.add("active-point");
}

let timerImage = setInterval(() => slowSlider(), 3000);

slider?.addEventListener("mouseover", () => {
  clearInterval(timerImage);
});

slider?.addEventListener("mouseleave", () => {
  timerImage = setInterval(() => slowSlider(), 3000);
});
