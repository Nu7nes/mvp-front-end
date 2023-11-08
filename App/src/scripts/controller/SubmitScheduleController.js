// import { SubmitScheduleModel } from "../model/ListSchedulesModel.js";

export class SubmitSchedule {
    constructor() {
        // this.formContent = '';
        this.submitScheduleForm = document.getElementById('submitScheduleForm');
        this.submitScheduleForm.addEventListener('submit', this.submit.bind(this));
    }

    submit(event) {
        event.preventDefault();
        // const submitScheduleModel = new SubmitScheduleModel();
        // submitScheduleModel.getConfig().then(() => {
        //     submitScheduleModel.calculateOpeningHours()
        // })
    }

}   