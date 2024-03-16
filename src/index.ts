import "./stylesSlider.css";
import "./style.css";
import "./slider";

const slide: Element | null = document.querySelector("#slide");
const menu: Element | null = document.querySelector("#menu");

if (slide) {
  slide.addEventListener("click", () => {
    menu?.classList.toggle("disp");
  });
}
