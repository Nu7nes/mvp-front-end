export class ConcludeScheduleButtonController {
    constructor() {
        this.submitScheduleForm = document.querySelector('#submitScheduleForm');
        this.submitScheduleForm.addEventListener('submit', this.concludeSchedule.bind(this));
    }

    concludeSchedule(event) {
        event.preventDefault();

        const OBJETIVO = 'validar o formulário e após salvar tudo no localStorage';


        // const submitScheduleForm = document.querySelector('#submitScheduleForm');
        // const formData = new FormData(submitScheduleForm);
        // const data = Object.fromEntries(formData);
        // const dataJson = JSON.stringify(data);
        // this.postSchedule(dataJson);
    }
}