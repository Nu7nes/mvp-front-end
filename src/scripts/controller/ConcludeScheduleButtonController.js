import { ValidadeFormModel } from "../model/ValidateFormModel.js";
import { FormatNumberPhoneController } from "./FormatNumberPhoneController.js";
import { ConcludeScheduleModel } from "../model/ConcludeScheduleModel.js";

export class ConcludeScheduleButtonController {
    constructor() {
        this.submitScheduleForm = document.querySelector("#submitScheduleForm");
        this.submitScheduleForm.addEventListener(
            "submit",
            this.concludeSchedule.bind(this)
        );
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
            if (!validation) return window.alert("Preencha todos os campos!");
            const concludeScheduleModel = new ConcludeScheduleModel(data);
            concludeScheduleModel.save();
            alert("Agendamento realizado com sucesso!");
            window.location.reload();
        } catch (error) {
            throw new Error(error);
        }
    }
}
