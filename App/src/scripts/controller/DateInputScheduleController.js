
export class DateInputScheduleControler {
    constructor() {
        this.dateInput = document.querySelector('#date');
    }

    get date() {
        return this.dateInput.value;
    }

    set date(date) {
        this.dateInput.value = date;
    }

    init() {
        const date = new Date();
        const todayDate = date.toISOString().slice(0, 10);
        // console.log(todayDate);
        this.dateInput.value = todayDate;
        return todayDate;
    }

    checkDay(days) {
        const date = new Date(this.dateInput.value).getDay();
        const isDay = days.filter(day => day === date);
        return isDay.length > 0 ? true : false;
    }

    
}