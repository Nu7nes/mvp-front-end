export class Icon {
    constructor(name) {
        this.icon = name
        this.iconElement = `<span class="material-symbols-outlined">
                                ${this.icon}
                            </span>`
    }
    getIcon() {
        return this.iconElement;
    }
}