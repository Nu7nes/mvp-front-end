export class CancelScheduleButton {
    constructor() {
        this.cancelScheduleButton = document.querySelector('.cancelButton');
        this.cancelScheduleButton.addEventListener('click', this.cancelSchedule.bind(this));
    }

    cancelSchedule() {
        window.location.reload();
    }
}