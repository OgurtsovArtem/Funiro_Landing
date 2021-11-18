class Header {
  constructor({
    searchButton,
    searchForm,
    subMenuButtons,
    menuClass,
  }) {
    this.searchButton = searchButton;
    this.searchForm = searchForm;
    this.subMenuButtons = subMenuButtons;
    this.menuClass = menuClass;
    this.listener();
  }

  searchHandler() {
    this.searchForm.classList.toggle("_active");
  }

  // eslint-disable-next-line class-methods-use-this
  subMenuHandler(event) {
    const { target } = event;
    if (target.closest(this.menuClass)) {
      const list = target.closest(this.menuClass);
      list.classList.toggle("_active");
    }
  }

  listener() {
    this.searchButton.addEventListener("click", this.searchHandler.bind(this));
    this.subMenuButtons.forEach((button) => {
      button.addEventListener("click", this.subMenuHandler.bind(this));
    });
  }
}

const HEADER_SETTINGS = {
  searchButton: document.querySelector(".search__button"),
  searchForm: document.querySelector(".search__from"),
  subMenuButtons: [...document.querySelectorAll(".menu__button")],
  menuClass: ".menu__item",
};

const searchForm = new Header(HEADER_SETTINGS);
