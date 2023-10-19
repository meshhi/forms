import './popover.css';

class Popover {
    constructor() {
        this.popover = document.createElement('div');
        this.popover.classList.add('popover');
        this.popoverTitle = document.createElement('h1');
        this.popoverTitle.classList.add('popover-title');
        this.popoverTitle.innerHTML = 'Popover title';
        this.popoverText = document.createElement('span');
        this.popoverText.classList.add('popover-text');
        this.popoverText.innerHTML = 'And here is amazing content';
        this.popover.appendChild(this.popoverTitle);
        this.popover.appendChild(this.popoverText);
        document.body.appendChild(this.popover);
    }

    togglePopoverOnElement = (element) => {
        let {top, left} = element.getBoundingClientRect();
        this.popover.style.top = top - this.popover.offsetHeight - this.popover.offsetHeight/2 + 'px';
        this.popover.style.left = left + element.offsetWidth/2 - this.popover.offsetWidth/2 + 'px';
        this.popover.classList.toggle('show');
    }
}

export default new Popover();