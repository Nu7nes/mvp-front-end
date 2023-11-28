import { Icon } from "../view/ToogleMenuView.js";

export class ToggleMenu {
    constructor() {
        this.menu = document.querySelector('.menu');
        this.menuBtn = document.querySelector('.menuButton');
        this.isOpen = false;
        this.menuBtn.addEventListener('click', this.toogleMenu.bind(this));
    }

    toogleMenu() {
        if (this.isOpen) {
            this.menu.classList.add('close');
            this.menuBtn.innerHTML = new Icon('menu').getIcon();
            setTimeout(() => { this.menu.classList.remove('open') }, 300);
            this.isOpen = false;
        }
        else {
            this.menu.classList.add('open');
            this.menuBtn.innerHTML = new Icon('close').getIcon();
            this.menu.classList.remove('close');
            this.isOpen = true;
        }
    }
}