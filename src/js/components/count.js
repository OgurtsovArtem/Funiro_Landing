/* eslint-disable class-methods-use-this */
/* eslint-disable radix */
export default class Count {
  constructor({ counter, next, prev }) {
    this.counter = counter;
    this.next = next;
    this.prev = prev;

    this.maxValue = null;
    this.minValue = null;
    this.step = null;
    this.saveCurrentValue = null;

    this.start();
  }

  start() {
    this.checkValue();
    this.setUnicId();
    this.setLimiter();
    this.setListener();
  }

  setUnicId() {
    this.counter.classList.value += ` ${this.generator()}`;
    this.next.classList.value += ` ${this.generator()}`;
    this.prev.classList.value += ` ${this.generator()}`;
  }

  setLimiter() {
    this.maxValue = parseInt(this.counter.getAttribute("max"));
    this.minValue = parseInt(this.counter.getAttribute("min"));
    this.step = parseInt(this.counter.getAttribute("step"));
  }

  checkValue() {
    if (this.counter.getAttribute("value") === null) {
      this.counter.setAttribute("value", 1);
      this.saveCurrentValue = 1;
    }
  }

  increase() {
    if (this.counter.value < this.maxValue) {
      this.counter.value = Number(this.counter.value) + this.step;
      this.counter.setAttribute("value", (parseInt(this.counter.getAttribute("value")) + this.step).toString());
      this.saveCurrentValue = Number(this.counter.value);
    }
  }

  decrease() {
    if (this.counter.value > this.minValue) {
      this.counter.value = Number(this.counter.value) - this.step;
      this.counter.setAttribute("value", (parseInt(this.counter.getAttribute("value")) - this.step).toString());
      this.saveCurrentValue = Number(this.counter.value);
    }
  }

  monitoring() {
    if (this.counter.value > this.minValue && this.counter.value < this.maxValue) {
      this.counter.setAttribute("value", parseInt(this.counter.value));
      this.saveCurrentValue = Number(this.counter.value);
    } else {
      this.counter.value = this.saveCurrentValue;
    }
  }

  generator() {
    return `_${Math.random().toString(36).substr(2, 4)}`;
  }

  setListener() {
    this.counter.addEventListener("change", this.monitoring.bind(this));
    this.next.addEventListener("click", this.increase.bind(this));
    this.prev.addEventListener("click", this.decrease.bind(this));
  }
}
