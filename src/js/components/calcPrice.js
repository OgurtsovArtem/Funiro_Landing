import Count from "./count";
import DomObserver from "./DomObserver";

export default class CalcPrice extends Count {
  constructor({
    counter,
    next,
    prev,
    price,
    oldPrice,
  }) {
    super({ counter, next, prev });

    const changeCount = new DomObserver(this.counter);
    this.price = price;
    this.oldPrice = oldPrice || null;
    this.priceForOne = this.price.dataset.price;
    console.log(this.priceForOne);
    this.setlistener();
    this.calc();
  }

  calc() {
    console.log();
    this.price.textContent = (this.priceForOne * this.counter.value).toLocaleString();
  }

  render() {

  }

  setlistener() {
    this.counter.addEventListener("change", this.calc.bind(this));
    this.next.addEventListener("click", this.calc.bind(this));
    this.prev.addEventListener("click", this.calc.bind(this));
  }
}
