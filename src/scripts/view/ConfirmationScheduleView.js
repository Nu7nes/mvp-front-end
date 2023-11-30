import { formatDate } from "../model/Formatation.js";

export class ConfirmationScheduleView {
    constructor(data) {
        this.data = data;
    }

    render() {
        const body = document.querySelector("body");
        const confirmationScheduleModal = document.createElement("div");
        confirmationScheduleModal.classList.add("bg-confirmation-schedule");
        confirmationScheduleModal.innerHTML = `
        <div class="confirmation-schedule-modal">
            <h2 class="confirmation-schedule__title">Agendamento realizado com sucesso!</h2>
            <div class="confirmation-schedule__content">
                <div class="confirmation-schedule__item">
                    <span class="confirmation-schedule__item__title">Nome:</span>
                    <span class="confirmation-schedule__item__value">${
                        this.data.name
                    }</span>
                </div>
                <div class="confirmation-schedule__item">
                    <span class="confirmation-schedule__item__title">Email:</span>
                    <span class="confirmation-schedule__item__value">${
                        this.data.email
                    }</span>
                </div>
                <div class="confirmation-schedule__item">
                    <span class="confirmation-schedule__item__title">Telefone:</span>
                    <span class="confirmation-schedule__item__value">${
                        this.data.phone
                    }</span>
                </div>
                <div class="confirmation-schedule__item">
                    <span class="confirmation-schedule__item__title">Data:</span>
                    <span class="confirmation-schedule__item__value">${formatDate(
                        this.data.date
                    )}</span>
                </div>
                <div class="confirmation-schedule__item">
                    <span class="confirmation-schedule__item__title">Horário:</span>
                    <span class="confirmation-schedule__item__value">${Number(
                        this.data.hour
                    )
                        .toFixed(2)
                        .replace(".", ":")}</span>
                </div>
            </div>
            <form>
                <input type="submit" class="confirmation-schedule__input" value="Ok">
            </form>
        <div>
        `;
        body.appendChild(confirmationScheduleModal);
    }
}

// date: "2023-12-01";
// email: "a@e.m";
// hour: "16";
// name: "asdasd";
// phone: "3213213213121";
