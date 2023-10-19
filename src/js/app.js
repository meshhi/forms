import Widget from "./components/widget/Widget";
import popover from "./components/popover/Popover";

const start = () => {
  const widget = new Widget();
  widget.bindToDOM(document.body);
}

start();