import { ListSchedulesModel } from "../model/ListSchedulesModel.js";
import { ListScheduleView } from "../view/ListSchedulesView.js";
import { ChooseTimeButtonView } from "../view/ChooseTimeButtonView.js";
import { DateInputScheduleControler } from "./DateInputScheduleController.js";
import { ConcludeScheduleButtonController } from "./ConcludeScheduleButtonController.js";

export class ChooseTimeButtonController {
    constructor() {
        this.chooseTimeButton = document.querySelector('#chooseTimeButton');
        this.chooseTimeButton.addEventListener('click', this.displayTimes.bind(this));
        this.dateInput = document.querySelector('#date');
        this.dateInput.addEventListener('change', this.updateTimes.bind(this));
    }

    displayTimes() {
        // console.log(date);
        const listSchedulesModel = new ListSchedulesModel()
        const dateInputScheduleControler = new DateInputScheduleControler();
        listSchedulesModel.getConfig()
            .then(() => {
                listSchedulesModel.calculateOpeningHours();
                const listScheduleView = new ListScheduleView(listSchedulesModel.hours)
                if (dateInputScheduleControler.checkDay(listSchedulesModel.days)) {
                    listScheduleView.render();
                    const concludeScheduleButtonController = new ConcludeScheduleButtonController();
                } else {
                    listScheduleView.emptyTimes();
                }
            })
            .catch(error => console.log(error));

        const chooseTimeButtonView = new ChooseTimeButtonView();
        chooseTimeButtonView.render();
    }

    updateTimes(event) {
        const newDate = event.target.value;
        const dateInputScheduleControler = new DateInputScheduleControler();
        dateInputScheduleControler.date = newDate;
        this.displayTimes();
    }
}