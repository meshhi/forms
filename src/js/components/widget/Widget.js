import './widget.css';
import popover from "../popover/Popover";

class Widget {
    constructor() {
        this.listeners = [{
            action: 'click',
            handler: this.onClickHandler
        }];
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        this.widget.innerHTML = 'Click to toggle popover';
    }

    bindToDOM = (elContainer) => {
        elContainer.appendChild(this.widget);
        this.initListeners();
    }

    initListeners = () => {
        for (let listener of this.listeners) {
            this.widget.addEventListener(listener.action, listener.handler);
        }
    }

    onClickHandler = (e) => {
        popover.togglePopoverOnElement(this.widget);
    }
}

export default Widget;