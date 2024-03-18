import "./stylesSlider.css";
import "./style.css";
import "./slider";

const headerList: Element | null = document.querySelector(".header-list");
const headerBurger: Element | null = document.querySelector(".header-burger");
const headerLink: NodeListOf<Element> =
  document.querySelectorAll(".header-link");
const headerPhone: Element | null = document.querySelector(".header-phone");
const elementsArray: Array<Element> = Array.from(headerLink);

headerBurger?.addEventListener("click", () => {
  headerList!.classList.toggle("active");
  headerBurger!.classList.toggle("active");
  headerPhone!.classList.toggle("active");
  document.body.classList.toggle("lock");
});

elementsArray!.map((el) =>
  el.addEventListener("click", () => {
    headerList!.classList.remove("active");
    headerBurger!.classList.remove("active");
    document.body.classList.remove("lock");
  }),
);
