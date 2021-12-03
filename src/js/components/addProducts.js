export default class AddProducts {
  constructor({ container, button, showToInit = 1, showOnclick = 3, }, Popup) {
    this.container = container;
    this.button = button;
    this.showToInit = showToInit;
    this.showOnclick = showOnclick;
    this.Popup = Popup;

    this.countCard = showToInit;
    this.json = {};

    this.addButton();
    this.getProducts()
  }

  async getProducts() {
    try {
      const res = await fetch("./products.json", {
        method: "GET",
      });
      if (res.ok) {
        const json = await res.json();
        this.json = json?.products;
        this.filterArrayOnInit();
      }
    } catch (err) {
      console.log(err);
    }
  }
  filterArrayOnClick() {
    if (this.countCard < this.json.length) {

      const filteredArray = this.json.slice(this.countCard, this.countCard + this.showOnclick)

      this.arrayProcessing(filteredArray)

      this.countCard += filteredArray.length;

    }
    if (this.countCard === this.json.length) {
      this.button.disabled = true;
      this.button.classList.add('_jsonEnd');
    }
  }
  filterArrayOnInit() {
    const filteredArray = this.json.slice(0, this.showToInit)
    this.arrayProcessing(filteredArray)
  }

  arrayProcessing(filteredArray) {
    filteredArray.forEach(card => {
      this._templateCard(card);
    });
  }

  _templateCard(card) {
    console.log(card)

    const templateCard = `
    <div class="products__card product-card" data-id=${card?.id}>
        <div class="product-card__image">
        <img src="./images/products/${card?.image}" alt="card-image">
        <span class="product-card__discount">${card?.discount}</span>
        <span class="product-card__status">${card?.status}</span>
        <div class="product-card__backside">
            <button type="button" class="product-card__button button">Add to cart</button>
            <button type="button" class="product-card__button-share _icon-share">Share</button>
            <button type="button" class="product-card__button-like _icon-favorite">Like</button>
        </div>
        </div>
        <div class="product-card__footer _popup-btn" data-popup-name='popup-card-detail'>
        <h2 class="product-card__title">${card?.title}</h2>
        <p class="product-card__subtitle">${card?.text}</p>
        <div class="product-card__price">
            <span class="product-card__current-price">${card?.price}</span>
            <span class="product-card__old-price">${card?.priceOld}</span>
        </div>
        </div>
    </div>
    `

    this.container.insertAdjacentHTML('beforeend', templateCard.trim());

    this.Popup.render()
    console.log( )
  }

  addButton() {
    this.button.addEventListener("click", this.filterArrayOnClick.bind(this));
  }
}
