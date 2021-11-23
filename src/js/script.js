import Header from "./components/header";
import HEADER_SETTINGS from "./contstants/headerSettings";

import AddProducts from "./components/addProducts";
import ADD_PRODUCTS_SETTINGS from "./contstants/addProductsSettings";

import Burger from "./components/burger";
import BURGER_CONSTANT from "./contstants/burgerSettings";

import FormValidator from "./components/formValidator";
import { LOGIN_FORM_VALIDATOR_SETTINGS, REGISTRATRATION_FORM_VALIDATOR_SETTINGS } from "./contstants/formValidatorSettings";

import Popup from "./components/popup";
import POPUP_SETTINGS from "./contstants/popupSettings";

import Profile from "./components/profile";
import PROFILE_SETTINGS from "./contstants/profileSettings";

import Swiper from "./libs/swiper";

const header = new Header(HEADER_SETTINGS);

const addProducts = new AddProducts(ADD_PRODUCTS_SETTINGS);

const burger = new Burger(BURGER_CONSTANT);

const loginValidator = new FormValidator(LOGIN_FORM_VALIDATOR_SETTINGS);
const registrationValidator = new FormValidator(REGISTRATRATION_FORM_VALIDATOR_SETTINGS);

const popup = new Popup(POPUP_SETTINGS);

const profile = new Profile(PROFILE_SETTINGS);
