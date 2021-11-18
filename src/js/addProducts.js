class AddProducts {
    constructor({ container, button }) {
        this.container = container;
        this.button = button;
    }

    async getProducts() {
        const res = await fetch('./products.json', {
            method: "GET",
        })
        if (res.ok) {
            const json = await res.json()
            this._template(json)
        }
        else {
            console.log(err);
            return err
        }
    }


    _template(data) {
        console.log(data)

        // const templateCard = `
        // <div class="products__card product-card">
        //     <div class="product-card__image">
        //     <img src="${data.img}" alt="card-image">
        //     <span class="product-card__discount">${data.discount}</span>
        //     <span class="product-card__status">${data.status}</span>
        //     <div class="product-card__backside">
        //         <button type="button" class="product-card__button button">Add to cart</button>
        //         <button type="button" class="product-card__button-share _icon-share">Share</button>
        //         <button type="button" class="product-card__button-like _icon-favorite">Like</button>
        //     </div>
        //     </div>
        //     <div class="product-card__footer">
        //     <h2 class="product-card__title">${data.title}</h2>
        //     <p class="product-card__subtitle">${data.description}</p>
        //     <div class="product-card__price">
        //         <span class="product-card__current-price">${data.currentPrice}</span>
        //         <span class="product-card__old-price">${data.oldPrice}</span>
        //     </div>
        //     </div>
        // </div>
        // `
    }

    addButton() {
        this.button.addEventListener('click', this.getProducts.bind(this))
    }
}

const ADD_PRODUCTS_SETTINGS = {
    container: document.querySelector('.products__body'),
    button: document.querySelector('.products__button')
};
const addProducts = new AddProducts(ADD_PRODUCTS_SETTINGS);