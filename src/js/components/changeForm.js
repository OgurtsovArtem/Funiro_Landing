export default class ChangeForm {
  constructor({ changeFormBtn, formList, dataName }) {
    this.changeFormBtn = changeFormBtn;
    this.formList = formList;
    this.dataName = dataName;

    this.form;
    this.listener();
  }

  open() {
    this.form.classList.add("_active");
  }

  close() {

  }

  change(event) {
    const btnDataName = event.target.getAttribute(this.dataName);
    this.formList.forEach((form) => {
      const formDataName = form.getAttribute(this.dataName);
      if (btnDataName && formDataName) {
        if (form.classList.contains("_active")) {
          form.classList.remove("_active");
        }

        if (btnDataName === formDataName) {
          this.form = form;
          this.open();
        }
      } else if (!btnDataName) {
        throw new Error(`Не найден указанный data-атрибут(${this.dataName})  у элемента выведенного выше ${console.log(event.target)}. Проверте правильность введенных атрибутов`);
      } else {
        throw new SyntaxError(`Не найден указанный data-атрибут (${this.dataName}), у элемента выведенного выше ${console.log(form)}. Проверте правильность введенных атрибутов`);
      }
    });
  }

  listener() {
    this.changeFormBtn.forEach((button) => {
      button.addEventListener("click", this.change.bind(this));
    });
  }
}
