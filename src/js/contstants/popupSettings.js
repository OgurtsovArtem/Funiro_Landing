const POPUP_SETTINGS = {
  openButton: [...document.querySelectorAll("._popup-btn")],
  popupList: [...document.querySelectorAll("._popup")],
  popupDataName: "data-popup-name", // Передаем дата-атрибут
  popupCloseBtnClass: "_popup-close", // Передаем имя class'a
};

export default POPUP_SETTINGS;
