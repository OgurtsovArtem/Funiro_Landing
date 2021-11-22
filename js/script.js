"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Swiper, _Swiper2, _Swiper3;

var Header = /*#__PURE__*/function () {
  function Header(_ref) {
    var searchButton = _ref.searchButton,
        searchForm = _ref.searchForm,
        subMenuButtons = _ref.subMenuButtons,
        menuClass = _ref.menuClass;
    (0, _classCallCheck2["default"])(this, Header);
    this.searchButton = searchButton;
    this.searchForm = searchForm;
    this.subMenuButtons = subMenuButtons;
    this.menuClass = menuClass;
    this.listener();
  }

  (0, _createClass2["default"])(Header, [{
    key: "searchHandler",
    value: function searchHandler() {
      this.searchForm.classList.toggle("_active");
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "subMenuHandler",
    value: function subMenuHandler(event) {
      var target = event.target;

      if (target.closest(this.menuClass)) {
        var list = target.closest(this.menuClass);
        list.classList.toggle("_active");
      }
    }
  }, {
    key: "listener",
    value: function listener() {
      var _this = this;

      this.searchButton.addEventListener("click", this.searchHandler.bind(this));
      this.subMenuButtons.forEach(function (button) {
        button.addEventListener("click", _this.subMenuHandler.bind(_this));
      });
    }
  }]);
  return Header;
}();

var HEADER_SETTINGS = {
  searchButton: document.querySelector(".search__button"),
  searchForm: document.querySelector(".search__from"),
  subMenuButtons: (0, _toConsumableArray2["default"])(document.querySelectorAll(".menu__button")),
  menuClass: ".menu__item"
};
var searchForm = new Header(HEADER_SETTINGS);
;

var Burger = /*#__PURE__*/function () {
  function Burger(_ref2) {
    var burger = _ref2.burger,
        menu = _ref2.menu;
    (0, _classCallCheck2["default"])(this, Burger);
    this.burger = burger;
    this.menu = menu;
    this.listener();
  }

  (0, _createClass2["default"])(Burger, [{
    key: "toggle",
    value: function toggle() {
      this.menu.classList.toggle("_active");
      this.burger.classList.toggle("_active");
    }
  }, {
    key: "listener",
    value: function listener() {
      this.burger.addEventListener("click", this.toggle.bind(this));
    }
  }]);
  return Burger;
}();

var BURGER_CONSTANT = {
  burger: document.querySelector(".burger"),
  menu: document.querySelector(".menu")
};
var burger = new Burger(BURGER_CONSTANT);
;

var Profile = /*#__PURE__*/function () {
  function Profile(_ref3) {
    var profileIcon = _ref3.profileIcon,
        profileButton = _ref3.profileButton;
    (0, _classCallCheck2["default"])(this, Profile);
    this.profileIcon = profileIcon;
    this.profileButton = profileButton;
    this.listener();
  }

  (0, _createClass2["default"])(Profile, [{
    key: "settings",
    value: function settings() {}
  }, {
    key: "openingStatus",
    value: function openingStatus() {
      this.profileIcon.classList.toggle("_active");
    }
  }, {
    key: "authCheck",
    value: function authCheck() {}
  }, {
    key: "listener",
    value: function listener() {
      this.profileButton.addEventListener("click", this.openingStatus.bind(this));
    }
  }]);
  return Profile;
}();

var PROFILE_SETTINGS = {
  profileIcon: document.querySelector(".user-block"),
  profileButton: document.querySelector(".user-block__profile")
};
var profile = new Profile(PROFILE_SETTINGS);
;

var Popup = /*#__PURE__*/function () {
  function Popup(_ref4) {
    var openButton = _ref4.openButton,
        popupList = _ref4.popupList,
        popupDataName = _ref4.popupDataName,
        popupCloseBtnClass = _ref4.popupCloseBtnClass;
    (0, _classCallCheck2["default"])(this, Popup);
    this.openButton = openButton;
    this.popupList = popupList;
    this.popupDataName = popupDataName;
    this.popupCloseBtnClass = popupCloseBtnClass;
    this.closeBtn;
    this.popup; // Сохраняет ссылку на обьект для удаления слушателя

    this.closeLink = this.close.bind(this);
    this.listener();
  }

  (0, _createClass2["default"])(Popup, [{
    key: "open",
    value: function open() {
      this.popup.classList.add('_active');
    }
  }, {
    key: "close",
    value: function close() {
      this.popup.classList.remove('_active');
      this.removeListener();
    }
  }, {
    key: "searchForm",
    value: function searchForm(event) {
      var _this2 = this;

      var buttonName = event.target.getAttribute(this.popupDataName);
      this.popupList.forEach(function (popup) {
        var popupName = popup.getAttribute(_this2.popupDataName);

        if (popup.classList.contains('_active')) {
          popup.classList.remove('_active');
        }

        if (popupName === buttonName) {
          _this2.closeBtn = popup.querySelector(".".concat(_this2.popupCloseBtnClass));
          _this2.popup = popup;

          if (_this2.closeBtn && _this2.popup) {
            _this2.open();

            _this2.setListener();
          } else if (!_this2.closeBtn) {
            throw new Error("\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F popup'a \u043F\u0440\u043E\u0432\u0435\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u044F \"popupCloseBtnClass\" \u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430 \u0432 DOM");
          } else {
            throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 this.popup = ".concat(_this2.popup));
          }
        }
      });
    }
  }, {
    key: "setListener",
    value: function setListener() {
      this.closeBtn.addEventListener('click', this.closeLink);
    }
  }, {
    key: "removeListener",
    value: function removeListener() {
      this.closeBtn.removeEventListener('click', this.closeLink);
    }
  }, {
    key: "listener",
    value: function listener() {
      var _this3 = this;

      this.openButton.forEach(function (button) {
        button.addEventListener('click', _this3.searchForm.bind(_this3));
      });
    }
  }]);
  return Popup;
}();

var POPUP_SETTINGS = {
  openButton: (0, _toConsumableArray2["default"])(document.querySelectorAll('._popup-btn')),
  popupList: (0, _toConsumableArray2["default"])(document.querySelectorAll('._popup')),
  popupDataName: 'data-popup-name',
  //Передаем дата-атрибут
  popupCloseBtnClass: '_popup-close' //Передаем имя class'a

};
var poup = new Popup(POPUP_SETTINGS);
;

var ChangeForm = /*#__PURE__*/function () {
  function ChangeForm(_ref5) {
    var changeFormBtn = _ref5.changeFormBtn,
        formList = _ref5.formList,
        dataName = _ref5.dataName;
    (0, _classCallCheck2["default"])(this, ChangeForm);
    this.changeFormBtn = changeFormBtn;
    this.formList = formList;
    this.dataName = dataName;
    this.form;
    this.listener();
  }

  (0, _createClass2["default"])(ChangeForm, [{
    key: "open",
    value: function open() {
      this.form.classList.add('_active');
    }
  }, {
    key: "close",
    value: function close() {}
  }, {
    key: "change",
    value: function change(event) {
      var _this4 = this;

      var btnDataName = event.target.getAttribute(this.dataName);
      this.formList.forEach(function (form) {
        var formDataName = form.getAttribute(_this4.dataName);

        if (btnDataName && formDataName) {
          if (form.classList.contains('_active')) {
            form.classList.remove('_active');
          }

          if (btnDataName === formDataName) {
            _this4.form = form;

            _this4.open();
          }
        } else if (!btnDataName) {
          throw new Error("\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 data-\u0430\u0442\u0440\u0438\u0431\u0443\u0442(".concat(_this4.dataName, ")  \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432\u044B\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0448\u0435 ").concat(console.log(event.target), ". \u041F\u0440\u043E\u0432\u0435\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432"));
        } else {
          throw new SyntaxError("\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 data-\u0430\u0442\u0440\u0438\u0431\u0443\u0442 (".concat(_this4.dataName, "), \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432\u044B\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0448\u0435 ").concat(console.log(form), ". \u041F\u0440\u043E\u0432\u0435\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432"));
        }
      });
    }
  }, {
    key: "listener",
    value: function listener() {
      var _this5 = this;

      this.changeFormBtn.forEach(function (button) {
        button.addEventListener('click', _this5.change.bind(_this5));
      });
    }
  }]);
  return ChangeForm;
}();

var CHANGE_FORM_SETTINGS = {
  changeFormBtn: (0, _toConsumableArray2["default"])(document.querySelectorAll('._change-form-btn')),
  formList: (0, _toConsumableArray2["default"])(document.querySelectorAll('._change-form')),
  dataName: 'data-change-form' //Передаем дата-атрибут

};
;

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(_ref6) {
    var form = _ref6.form;
    (0, _classCallCheck2["default"])(this, FormValidator);
    this.form = form;
    this.inputs = (0, _toConsumableArray2["default"])(this.form.getElementsByTagName("input"));
    this.submithButton = this.form.querySelector('button[type="submit"]');
    this.flag = true;
    this.setlistener();
  }

  (0, _createClass2["default"])(FormValidator, [{
    key: "checkInputValidity",
    value: function checkInputValidity(input) {
      if (input.validity.tooShort === true) {
        return false;
      }

      if (input.validity.valueMissing === true) {
        return false;
      }

      ;

      if (input.validity.typeMismatch === true) {
        return false;
      }

      return true;
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this6 = this;

      this.flag = true;
      this.inputs.forEach(function (input) {
        if (!_this6.checkInputValidity(input)) _this6.flag = false;
      });
      this.setSubmitButtonState();
    }
  }, {
    key: "setSubmitButtonState",
    value: function setSubmitButtonState() {
      if (this.flag === true) {
        this.submithButton.removeAttribute('disabled');
      } else {
        this.submithButton.setAttribute('disabled', true);
      }
    }
  }, {
    key: "setlistener",
    value: function setlistener() {
      this.form.addEventListener('input', this.validate.bind(this));
    }
  }]);
  return FormValidator;
}();

var LOGIN_FORM_VALIDATOR_SETTINGS = {
  form: document.forms.login
};
var REGISTRATRATION_FORM_VALIDATOR_SETTINGS = {
  form: document.forms.registration
};
var loginValidator = new FormValidator(LOGIN_FORM_VALIDATOR_SETTINGS);
var registrationValidator = new FormValidator(REGISTRATRATION_FORM_VALIDATOR_SETTINGS);
;
/* eslint-disable no-dupe-keys */

var introSlider = new Swiper(".slider-block__swiper", (_Swiper = {
  // Optional parameters
  loop: true,
  observer: true,
  observerParents: true,
  slidesPerView: 1,
  spaceBetween: 32,
  watchOverflow: true,
  speed: 800
}, (0, _defineProperty2["default"])(_Swiper, "loop", true), (0, _defineProperty2["default"])(_Swiper, "loopAdditionalSlides", 5), (0, _defineProperty2["default"])(_Swiper, "preloadImages", false), (0, _defineProperty2["default"])(_Swiper, "parallax", true), (0, _defineProperty2["default"])(_Swiper, "pagination", {
  el: ".slider-block__pagination",
  clickable: true
}), (0, _defineProperty2["default"])(_Swiper, "navigation", {
  nextEl: ".slider-block__arrow-right",
  prevEl: ".slider-block__arrow-left"
}), _Swiper));
var compilationSlider = new Swiper(".compilation-slider", (_Swiper2 = {
  // Optional parameters
  loop: true,
  observer: true,
  observerParents: true,
  slidesPerView: 'auto',
  spaceBetween: 24,
  watchOverflow: true
}, (0, _defineProperty2["default"])(_Swiper2, "loop", true), (0, _defineProperty2["default"])(_Swiper2, "speed", 1000), (0, _defineProperty2["default"])(_Swiper2, "loopAdditionalSlides", 5), (0, _defineProperty2["default"])(_Swiper2, "preloadImages", false), (0, _defineProperty2["default"])(_Swiper2, "parallax", true), (0, _defineProperty2["default"])(_Swiper2, "breakpoints", {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  540: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is >= 640px
  780: {
    slidesPerView: "auto",
    spaceBetween: 24
  }
}), _Swiper2));
var blogSlider = new Swiper(".blog-slider__items", (_Swiper3 = {
  // Optional parameters
  loop: true,
  observer: true,
  observerParents: true,
  slidesPerView: 1,
  spaceBetween: 32,
  watchOverflow: true
}, (0, _defineProperty2["default"])(_Swiper3, "loop", true), (0, _defineProperty2["default"])(_Swiper3, "speed", 1000), (0, _defineProperty2["default"])(_Swiper3, "loopAdditionalSlides", 5), (0, _defineProperty2["default"])(_Swiper3, "preloadImages", false), (0, _defineProperty2["default"])(_Swiper3, "parallax", true), (0, _defineProperty2["default"])(_Swiper3, "centeredSlides", true), (0, _defineProperty2["default"])(_Swiper3, "pagination", {
  el: ".blog-slider__pagination",
  clickable: true
}), (0, _defineProperty2["default"])(_Swiper3, "navigation", {
  nextEl: ".blog-slider__arrow-right",
  prevEl: ".blog-slider__arrow-left"
}), (0, _defineProperty2["default"])(_Swiper3, "breakpoints", {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  540: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is >= 640px
  780: {
    slidesPerView: 3,
    spaceBetween: 32
  }
}), _Swiper3));
;

var AddProducts = /*#__PURE__*/function () {
  function AddProducts(_ref7) {
    var container = _ref7.container,
        button = _ref7.button;
    (0, _classCallCheck2["default"])(this, AddProducts);
    this.container = container;
    this.button = button;
  }

  (0, _createClass2["default"])(AddProducts, [{
    key: "getProducts",
    value: function () {
      var _getProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res, json;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("./products.json", {
                  method: "GET"
                });

              case 2:
                res = _context.sent;

                if (!res.ok) {
                  _context.next = 10;
                  break;
                }

                _context.next = 6;
                return res.json();

              case 6:
                json = _context.sent;

                this._template(json);

                _context.next = 12;
                break;

              case 10:
                console.log(err);
                return _context.abrupt("return", err);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProducts() {
        return _getProducts.apply(this, arguments);
      }

      return getProducts;
    }()
  }, {
    key: "_template",
    value: function _template(data) {
      console.log(data); // const templateCard = `
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
  }, {
    key: "addButton",
    value: function addButton() {
      this.button.addEventListener("click", this.getProducts.bind(this));
    }
  }]);
  return AddProducts;
}();

var ADD_PRODUCTS_SETTINGS = {
  container: document.querySelector(".products__body"),
  button: document.querySelector(".products__button")
};
var addProducts = new AddProducts(ADD_PRODUCTS_SETTINGS);
;