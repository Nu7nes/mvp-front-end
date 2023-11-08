
export class DateInputScheduleControler {
    constructor() {
        this.dateInput = document.querySelector('#date');
    }

    init() {
        const date = new Date();
        const todayData = date.toISOString().slice(0, 10);
        this.dateInput.value = todayData;
    }

    checkDay(days) {
        const date = new Date(this.dateInput.value).getDay();
        const isDay = days.filter(day => day === date);
        return isDay.length > 0 ? true : false;
    }

    
}