export class ListSchedulesModel {
    constructor() {
        this.config = {};
        this.dayHours = 24;
        this.openingHours = [];
    }

    get hours() {
        return this.openingHours;
    }

    get days() {
        return this.config.days;
    }

    async getConfig() {
        try {
            const response = await fetch('/App/api/data.json');
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
                    this.openingHours.push(hour);
                }
            }
        })
    }
}








