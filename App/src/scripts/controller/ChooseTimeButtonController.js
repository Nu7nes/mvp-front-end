import { ListSchedulesModel } from "../model/ListSchedulesModel.js";
import { ListScheduleView } from "../view/ListSchedulesView.js";
import { ChooseTimeButtonView } from "../view/ChooseTimeButtonView.js";
import { DateInputScheduleControler } from "./DateInputScheduleController.js";

export class ChooseTime {
    constructor() {
        this.chooseTimeButton = document.querySelector('#chooseTimeButton');
        this.chooseTimeButton.addEventListener('click', this.chooseTime.bind(this));
        this.dateInput = document.querySelector('#date');
        this.dateInput.addEventListener('change', this.chooseTime.bind(this));
    }

    chooseTime() {
        const listSchedulesModel = new ListSchedulesModel()
        const dateInputScheduleControler = new DateInputScheduleControler();
        listSchedulesModel.getConfig()
            .then(() => {
                listSchedulesModel.calculateOpeningHours();
                const listScheduleView = new ListScheduleView(listSchedulesModel.hours)
                if (dateInputScheduleControler.checkDay(listSchedulesModel.days)) {
                    listScheduleView.render();
                } else {
                    listScheduleView.emptyTimes();
                }
            })
            .catch(error => console.log(error));

        const chooseTimeButtonView = new ChooseTimeButtonView();
        chooseTimeButtonView.render();

    }
}