export class ValidadeFormModel {
    constructor({ name, email, phone, date, hour }) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.hour = hour;
    }

    validateForm() {

        if (this.name === '' || this.email === '' || this.phone === '' || this.date === '' || !this.hour) {
            console.log(this.hour);
            alert('Preencha todos os campos!');
            throw new Error('Preencha todos os campos!');
        } else {
            return true;
        }
    }
}