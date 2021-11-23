export default class Popup {
  constructor({
    openButton, popupList, popupDataName, popupCloseBtnClass,
  }) {
    this.openButton = openButton;
    this.popupList = popupList;
    this.popupDataName = popupDataName;
    this.popupCloseBtnClass = popupCloseBtnClass;

    this.closeBtn;
    this.popup;

    // Сохраняет ссылку на обьект для удаления слушателя
    this.closeLink = this.close.bind(this);

    this.listener();
  }

  open() {
    this.popup.classList.add("_active");
  }

  close() {
    this.popup.classList.remove("_active");
    this.removeListener();
  }

  searchForm(event) {
    const buttonName = event.target.getAttribute(this.popupDataName);

    this.popupList.forEach((popup) => {
      const popupName = popup.getAttribute(this.popupDataName);

      if (popup.classList.contains("_active")) {
        popup.classList.remove("_active");
      }

      if (popupName === buttonName) {
        this.closeBtn = popup.querySelector(`.${this.popupCloseBtnClass}`);
        this.popup = popup;
        if (this.closeBtn && this.popup) {
          this.open();
          this.setListener();
        } else if (!this.closeBtn) {
          throw new Error("Не найден элемент закрытия popup'a проверте правильность поля \"popupCloseBtnClass\" и наличие передаваемого класса в DOM");
        } else {
          throw new Error(`Ошибка элемента this.popup = ${this.popup}`);
        }
      }
    });
  }

  setListener() {
    this.closeBtn.addEventListener("click", this.closeLink);
  }

  removeListener() {
    this.closeBtn.removeEventListener("click", this.closeLink);
  }

  listener() {
    this.openButton.forEach((button) => {
      button.addEventListener("click", this.searchForm.bind(this));
    });
  }
}