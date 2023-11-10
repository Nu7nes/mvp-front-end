export class ConcludeScheduleModel {
    constructor(data) {
        this.data = data
    }

    save() {
        const existingData = JSON.parse(localStorage.getItem('schedule')) || [];
        existingData.push(this.data);
        const dataJson = JSON.stringify(existingData);
        localStorage.setItem("schedule", dataJson);
    }
}
