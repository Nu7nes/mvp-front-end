export class ChooseTimeButtonView {
    constructor() {
        this.chooseTimeButton = document.querySelector('#chooseTimeButton');
        this.formSchedule = document.querySelector('.formSchedule');
        this.cardComponent = document.querySelector('.card:first-of-type');
        this.extraComponents = [document.querySelector('#cardVoluntary'),
                                document.querySelector('.mainDivisor')];
    }

    render() {
        this.extraComponents.forEach(component => {
            component.classList.add('hidden');
            setTimeout(() => { component.style.display = 'none' }, 300);
        });
        this.chooseTimeButton.classList.add('close');
        setTimeout(() => { this.chooseTimeButton.style.display = 'none'}, 100);
        
        setTimeout(() => { this.cardComponent.classList.add('changeWidth');}, 500);
        setTimeout(() => { this.formSchedule.classList.add('openTimesForm')}, 500);
    }
}