import { ValidadeFormModel } from "../model/ValidateFormModel.js";
import { FormatNumberPhoneController } from "./FormatNumberPhoneController.js";
import { ConcludeScheduleModel } from "../model/ConcludeScheduleModel.js";

export class ConcludeScheduleButtonController {
    constructor() {
        this.submitScheduleForm = document.querySelector('#submitScheduleForm');
        this.submitScheduleForm.addEventListener('submit', this.concludeSchedule.bind(this));
    }

    concludeSchedule(event) {
        event.preventDefault();
        const formData = new FormData(this.submitScheduleForm);
        const data = Object.fromEntries(formData);

        const formatNumberPhoneController = new FormatNumberPhoneController();
        data.phone = formatNumberPhoneController.formatToPost(data.phone);
        
        try {
            const validateFormModel = new ValidadeFormModel(data);
            const validation = validateFormModel.validateForm();
            if(validation) {
                const concludeScheduleModel = new ConcludeScheduleModel(data);
                concludeScheduleModel.save();
            }
        } catch (error) {
            console.log(error);
        }
        // const dataJson = JSON.stringify(data);
       
        // this.postSchedule(dataJson);
    }
}