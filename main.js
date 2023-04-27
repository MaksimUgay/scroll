class Scroll {
    constructor({ element, top, unit }) {
        if (typeof element == 'string') {
            this.item = document.querySelector(element);
        } else if ( element instanceof HTMLElement) {
            this.item = element;
        }
        this.range = top;
        this.unit = unit;
        this.item.style.position = 'fixed';
        this.item.style.top = this.getUnit() + 'px';
        
        window.addEventListener('scroll', () => this.move());
    }
    
    getUnit() {
        if(this.unit == 'px') {
            return this.range > 0 ? this.range : 0;
        } else if(this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.range;
        }
    }
    
    move() {
        // scrollY - отдает количество px проскроленных сверху от сайта
        this.size = this.getUnit();
        
        if(this.size - scrollY > 0) {
            this.item.style.top = this.size - scrollY + 'px';
        } else {
            this.item.style.top = 0;
        }
    }
}

let nav = document.querySelector('.header__nav');

let myScroll = new Scroll({
    element: '.header__nav',
    top: 100,
    unit: '%'
});

class Header {
    constructor (header,headerTitle) {
        this.item = document.querySelector(headerTitle);
        this.field = document.querySelector(header);
        this.item.addEventListener('mouseover', () => this.moveHeader());
    }

    moveHeader() {
        this.width = window.innerWidth - this.item.offsetWidth;
        this.height = window.innerHeight - this.item.offsetHeight;
        this.x = rand(0, this.width);
        this.y = rand(0, this.height);

        this.item.style.position = 'absolute';
        this.item.style.top = this.y + 'px';
        this.item.style.left = this.x + 'px';
    }
}

let myHeader = new Header('.header','.header__content');

function rand(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min);
}