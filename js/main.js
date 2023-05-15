"use strict";

const DomElement = function (
  selector = ".block",
  height = 150,
  width = 150,
  bg = "blue",
  fontSize = 24
) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.createElement = function () {
    const tag = selector[0] == "." ? "div" : "p";

    const element = document.createElement(tag);
    element.innerHTML = `Любой текст ${tag}`;
    element.style.cssText = `height: ${this.height}px; width: ${this.height}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
    if (element[0] == ".") {
      element.classList.add(`${selector.split(".")[1]}`);
    } else {
      element.id = `${selector.split("#")[1]}`;
    }
    document.body.append(element);

    // if (selector[0] == ".") {
    //   const div = document.createElement("div");
    //   div.classList.add(`${selector.split(".")[1]}`);
    //   div.innerHTML = "Любой текст div";
    //   div.style.cssText = `height: ${this.height}px; width: ${this.height}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
    //   document.body.append(div);
    // }
    // if (selector[0] == "#") {
    //   const p = document.createElement("p");
    //   p.id = `${selector.split("#")[1]}`;
    //   p.innerHTML = "Любой текст p";
    //   p.style.cssText = `height: ${this.height}px; width: ${this.height}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
    //   document.body.append(p);
    // }
  };
};

const BlockDomElement = new DomElement(".block");
const ParagraphDomElement = new DomElement("#best", 100, 400, "red", 18);
BlockDomElement.createElement();
ParagraphDomElement.createElement();
