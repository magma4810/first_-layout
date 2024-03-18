import "./stylesSlider.css";
import "./style.css";
import "./slider";

const headerList = document.querySelector(".header-list");
const headerBurger = document.querySelector(".header-burger");

headerBurger?.addEventListener("click", () => {
  headerList!.classList.toggle("active");
  headerBurger!.classList.toggle("active");
  document.body.classList.toggle("lock");
});
