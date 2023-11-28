export class ValidadeFormModel {
    constructor({ name, email, phone, date, hour }) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.hour = hour;
    }

    validateForm() {
        return this.name === '' || this.email === '' || this.phone === '' || this.date === '' || !this.hour ? false : true;
    }
}