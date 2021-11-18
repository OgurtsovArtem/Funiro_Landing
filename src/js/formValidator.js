class FormValidator {
    constructor({ form }) {
        this.form = form;

        this.inputs = [...this.form.getElementsByTagName("input")];
        this.submithButton = this.form.querySelector('button[type="submit"]');
        this.flag = true;

        this.setlistener()
    }
    checkInputValidity(input) {

        if (input.validity.tooShort === true) {
            return false;
        }
        if (input.validity.valueMissing === true) {
            return false;
        };
        if (input.validity.typeMismatch === true) {
            return false;
        }

        return true;
    }
    validate() {
        this.flag = true;
        this.inputs.forEach((input) => {
            if (!this.checkInputValidity(input)) this.flag = false;
        });
        this.setSubmitButtonState()

    }
    setSubmitButtonState() {
        if (this.flag === true) {
            this.submithButton.removeAttribute('disabled');
        } else {
            this.submithButton.setAttribute('disabled', true);
        }
    }
    setlistener() {
        this.form.addEventListener('input', this.validate.bind(this))
    }

}

const LOGIN_FORM_VALIDATOR_SETTINGS = {
    form: document.forms.login,
}
const REGISTRATRATION_FORM_VALIDATOR_SETTINGS = {
    form: document.forms.registration,
}

const loginValidator = new FormValidator(LOGIN_FORM_VALIDATOR_SETTINGS);
const registrationValidator = new FormValidator(REGISTRATRATION_FORM_VALIDATOR_SETTINGS);