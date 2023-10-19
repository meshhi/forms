/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/popover/Popover.js

class Popover {
  constructor() {
    this.popover = document.createElement("div");
    this.popover.classList.add("popover");
    this.popoverTitle = document.createElement("h1");
    this.popoverTitle.classList.add("popover-title");
    this.popoverTitle.innerHTML = "Popover title";
    this.popoverText = document.createElement("span");
    this.popoverText.classList.add("popover-text");
    this.popoverText.innerHTML = "And here is amazing content";
    this.popover.appendChild(this.popoverTitle);
    this.popover.appendChild(this.popoverText);
    document.body.appendChild(this.popover);
  }
  togglePopoverOnElement = element => {
    let {
      top,
      left
    } = element.getBoundingClientRect();
    this.popover.style.top = top - this.popover.offsetHeight - this.popover.offsetHeight / 2 + "px";
    this.popover.style.left = left + element.offsetWidth / 2 - this.popover.offsetWidth / 2 + "px";
    this.popover.classList.toggle("show");
  };
}
/* harmony default export */ const popover_Popover = (new Popover());
;// CONCATENATED MODULE: ./src/js/components/widget/Widget.js


class Widget {
  constructor() {
    this.listeners = [{
      action: "click",
      handler: this.onClickHandler
    }];
    this.widget = document.createElement("div");
    this.widget.classList.add("widget");
    this.widget.innerHTML = "Click to toggle popover";
  }
  bindToDOM = elContainer => {
    elContainer.appendChild(this.widget);
    this.initListeners();
  };
  initListeners = () => {
    for (let listener of this.listeners) {
      this.widget.addEventListener(listener.action, listener.handler);
    }
  };
  onClickHandler = e => {
    popover_Popover.togglePopoverOnElement(this.widget);
  };
}
/* harmony default export */ const widget_Widget = (Widget);
;// CONCATENATED MODULE: ./src/js/app.js


const start = () => {
  const widget = new widget_Widget();
  widget.bindToDOM(document.body);
};
start();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;