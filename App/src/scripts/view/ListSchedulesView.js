import { ListSchedulesModel } from "../model/ListSchedulesModel.js";

export class ListScheduleView {
    constructor(list) {
        this.list = list;
        this.availableTimesDiv = document.querySelector('#availableTimes');
    }

    emptyTimes() {
        this.availableTimesDiv.innerHTML = `<p>Não há horários disponíveis para a data escolida.</p>`;
    }

    async render() {
        this.availableTimesDiv.innerHTML = '';  
        const morningArticle = document.createElement('article');
        const afternoonArticle = document.createElement('article');

        const morningH4 = document.createElement('h4');
        morningH4.innerText = 'Manhã:';
        morningArticle.appendChild(morningH4);

        const afteroonH4 = document.createElement('h4')
        afteroonH4.innerText = 'Tarde:';
        afternoonArticle.appendChild(afteroonH4);

        await this.list.forEach((schedule) => {
            const formatedHour = schedule.hour.toFixed(2).replace('.', ':');

            const listSchedulesModel = new ListSchedulesModel();
            const updatedListSchedules = listSchedulesModel.crossHoursData(this.list);
            this.list = updatedListSchedules;

            const label = document.createElement('label');
            label.classList.add('time');
            label.className += schedule.available ? '' : ' inactive'
            label.innerHTML = `
                    <h6>${formatedHour}</h6>
                    <p>Polo UNIFESO</p>
                    <input 
                        type="radio"
                        name="hour"
                        value="${schedule.hour}" ${schedule.available ? '' : 'disabled'}>
                `;

            if (schedule.hour < 12) {
                morningArticle.appendChild(label);
            } else if (schedule.hour >= 12 && schedule.hour < 18) {
                afternoonArticle.appendChild(label);
            }
        });

        this.availableTimesDiv.appendChild(morningArticle);
        this.availableTimesDiv.appendChild(afternoonArticle);
    }
}