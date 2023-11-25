import { DateInputScheduleControler } from "../controller/DateInputScheduleController.js";

export class ListSchedulesModel {
    constructor() {
        this.dayHours = 24;
        this.config = {};
        this.openingHours = [];
    }

    get hours() {
        this.crossHoursData();
        return this.openingHours;
    }

    get days() {
        return this.config.days;
    }

    async getConfig() {
        try {
            const response = await fetch('/mvp-front-end/App//api/data.json');
            const data = await response.json();
            this.config = data.config;
        } catch (error) {
            console.log(error);
        }
    }

    calculateOpeningHours() {
        const endPauseHour = this.config.pause_hour + this.config.pause_time;
        const hoursArray = Array.from({ length: this.dayHours }, (value, index) => index + 1);
        hoursArray.map((hour) => {
            if (hour >= this.config.init_hour && hour < this.config.end_hour) {
                if (hour < this.config.pause_hour || hour >= endPauseHour) {
                    const dateInputScheduleControler = new DateInputScheduleControler();
                    const todayDate = dateInputScheduleControler.date;
                    this.openingHours.push({ hour: hour, available: true, date: todayDate });
                }
            }
        })
    }

    crossHoursData(scheduleList) {
        const dateInputScheduleControler = new DateInputScheduleControler();
        const selectedDate = dateInputScheduleControler.date;

        const existingData = JSON.parse(localStorage.getItem('schedule')) || [];
        if (existingData.length === 0) return;

        const currentDatesInvalid = existingData.map(existingItem => existingItem.date === selectedDate ? existingItem : '');

        const schedules = scheduleList;
        if (scheduleList) {
            scheduleList.find(item => {
                for (let i in currentDatesInvalid) {
                    if (item.date === selectedDate && item.hour == Number(currentDatesInvalid[i].hour)) {
                        item.available = false;
                    }
                }
            })
        }
        return schedules;
    }
}








