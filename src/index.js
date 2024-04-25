import "./style.css"; // Import CSS file

import { createHomeContent } from "./home.js";
import { createAboutUsContent } from "./aboutUs.js";
import { createMenuContent } from "./menu.js";

const homeBtn = document.querySelector(".home-btn");
const aboutUsBtn = document.querySelector(".aboutUs-btn");
const menuBtn = document.querySelector(".menu-btn");
const content = document.querySelector("#content");

console.log("hello");

(() => {
  // loading the first view page when user go to the web
  createHomeContent();
})();

homeBtn.addEventListener("click", () => {
  if (getClassName() != "home") {
    removeContent();
    createHomeContent();
  }
});

aboutUsBtn.addEventListener("click", () => {
  if (getClassName() != "aboutUs") {
    removeContent();
    createAboutUsContent();
  }
});

menuBtn.addEventListener("click", () => {
  if (getClassName() != "menu") {
    removeContent();
    createMenuContent();
  }
});

const getClassName = () => {
  const firstChild = content.children[0];
  return firstChild.className;
};

const removeContent = () => {
  const childToRemove = content.children[0];
  content.removeChild(childToRemove);
};
