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

let header = document.querySelector('.header');
let headerTitle = document.querySelector('.header__content');

headerTitle.addEventListener('mouseover',() => {
    moveHeader();
});

function moveHeader() {
    headerTitle.style.width = 233 + 'px';
    headerTitle.style.height = 55 + 'px';
    let sizeX = headerTitle.style.width.split('p')[0];
    let sizeY = headerTitle.style.height.split('p')[0];


    let cor = header.getBoundingClientRect();
    let {width, height} = cor;


    let x = rand(0, width - sizeX);
    let y = rand(0, height - sizeY);

    headerTitle.style.top = y + 'px';
    headerTitle.style.left = x + 'px';

    console.log(sizeX);
}

function rand(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min);
}
// let cor = header.getBoundingClientRect();
// console.log(cor);