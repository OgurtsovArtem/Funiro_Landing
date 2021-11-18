class Burger {
  constructor({
    burger,
    menu,
  }) {
    this.burger = burger;
    this.menu = menu;
    this.listener();
  }

  toggle() {
    this.menu.classList.toggle("_active");
    this.burger.classList.toggle("_active");
  }

  listener() {
    this.burger.addEventListener("click", this.toggle.bind(this));
  }
}
const BURGER_CONSTANT = {
  burger: document.querySelector(".burger"),
  menu: document.querySelector(".menu"),
};

const burger = new Burger(BURGER_CONSTANT);
