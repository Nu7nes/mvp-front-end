export class ConcludeScheduleModel {
    constructor(data) {
        this.data = data;
    }

    async save() {
        const existingData = await JSON.parse(localStorage.getItem('schedule')) || [];
        existingData.push(this.data);
        const dataJson = await JSON.stringify(existingData);
        localStorage.setItem("schedule", dataJson);
    }
}
