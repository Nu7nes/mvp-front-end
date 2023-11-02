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
            this.menuBtn.innerHTML = `<span class="material-symbols-outlined">
                                        menu
                                    </span>`
            setTimeout(() => { this.menu.classList.remove('open') }, 300);
            this.isOpen = false;
        }
        else {
            this.menu.classList.add('open');
            this.menuBtn.innerHTML = `<span class="material-symbols-outlined">
                                        close
                                    </span>`
            this.menu.classList.remove('close');
            this.isOpen = true;
        }
    }
}