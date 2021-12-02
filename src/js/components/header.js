export default class headerHeightHeader {
  constructor({
    searchButton,
    searchForm,
    subMenuButtons,
    menuClass,
    header,
  }) {
    this.searchButton = searchButton;
    this.searchForm = searchForm;
    this.subMenuButtons = subMenuButtons;
    this.menuClass = menuClass;
    this.header = header;
    this.listener();
    // this.scroll();
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

  scroll() {
    const headerObserver = new IntersectionObserver(this.addScrollClass.bind(this));
    headerObserver.observe(this.header);
  }

  addScrollClass(entries, observer) {
    console.log(entries[0].isIntersecting, observer);
    if (entries[0].isIntersecting) {
      this.header.classList.remove("_scroll");
    } else {
      this.header.classList.add("_scroll");
    }
  }

  listener() {
    this.searchButton.addEventListener("click", this.searchHandler.bind(this));
    this.subMenuButtons.forEach((button) => {
      button.addEventListener("click", this.subMenuHandler.bind(this));
    });
    document.addEventListener("scroll", () => {
      return console.log("asdasd");
    });
  }
}
