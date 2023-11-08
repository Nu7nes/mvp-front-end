import { SubmitScheduleModel } from "../model/SubmitScheduleModel.js";

export class ListSchedulesController {
    constructor() {
        this.loadHoursListButton = document.getElementById('loadHoursListButton');
    }

    loadHoursList() {
        const submitScheduleModel = new SubmitScheduleModel();
        submitScheduleModel.getConfig().then(() => {
            submitScheduleModel.calculateOpeningHours()
        }).then(()=>{
            console.log('foi');
        })
    }
}