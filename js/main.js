"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.createElement = function () {
    if (selector[0] == ".") {
      const div = document.createElement("div");
      div.classList.add(`${selector.split(".")[1]}`);
      div.innerHTML = "Любой текст div";
      document.body.append(div);
    }
    if (selector[0] == "#") {
      const p = document.createElement("p");
      p.id = `${selector}`;
      p.innerHTML = "Любой текст p";
      p.style.cssText = `height: ${this.height}px; width: ${this.height}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
      document.body.append(p);
    }
  };
};

const BlockDomElement = new DomElement(".block");
const ParagraphDomElement = new DomElement("#best", 100, 400, "red", 18);
BlockDomElement.createElement();
ParagraphDomElement.createElement();
