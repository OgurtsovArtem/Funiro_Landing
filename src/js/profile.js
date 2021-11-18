class Profile {
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

const PROFILE_SETTINGS = {
    profileIcon: document.querySelector(".user-block"),
    profileButton: document.querySelector(".user-block__profile"),
};

const profile = new Profile(PROFILE_SETTINGS);