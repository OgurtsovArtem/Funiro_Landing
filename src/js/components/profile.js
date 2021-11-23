export default class Profile {
  constructor({ profileIcon, profileButton }) {
    this.profileIcon = profileIcon;
    this.profileButton = profileButton;
    this.listener();
  }

  settings() {

  }

  openingStatus() {
    this.profileIcon.classList.toggle("_active");
  }

  authCheck() {

  }

  listener() {
    this.profileButton.addEventListener("click", this.openingStatus.bind(this));
  }
}
