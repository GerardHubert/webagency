class Menu {

    constructor() {
        this.menu = document.getElementById('navigation');
        this.links = document.querySelector('.menu_links')
        window.addEventListener('scroll', () => {
            this.stylish(window.pageYOffset);
        })
        //this.menu.className = 'nav_fixed';
    }

    stylish(offset) {
        if (offset > 10) {
            this.menu.className = 'nav_onScroll';
            this.links.className = 'a_onScroll';
        } else {
            this.menu.className = 'nav_fixed';
        }
    }

}

let menu = new Menu();