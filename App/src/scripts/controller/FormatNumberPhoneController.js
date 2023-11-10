export class FormatNumberPhoneController {
    constructor() {
        this.inputPhone = document.querySelector('input[name="phone"]');
        this.inputPhone.addEventListener('input', this.formatInput.bind(this));
    }

    formatInput(input) {
        const number = input.target.value.replace(/\D/g, '');
        if (number.length <= 2) {
            this.inputPhone.value = `(${number}`;
        } else if (number.length <= 7) {
            this.inputPhone.value = `(${number.slice(0, 2)}) ${number.slice(2)}`;
        } else {
            this.inputPhone.value = `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7)}`;
        }
    }

    formatToPost() {
        const number = this.inputPhone.value.replace(/\D/g, '');
        return number;
    }
}