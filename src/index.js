// Add a function to open each tab and wipe out
// the current contents and run the correct tab module.

// div #content

//  div #content have same padding x and y axis.
//  Create buttons for each tabs.

// div #title
// tab title heading and the border bottom should be the same.

// div # content-body
import "./input.css";
import { createElement } from "./utility";

const contentContainer = document.getElementById("content");

const historyTabButton = createElement("button", "History");
const menuTabButton = createElement("button", "Menu");
const contactTabButton = createElement("button", "Contact");
const tabButtonsContainer = createElement("div");
tabButtonsContainer.id = "tab-btns-container";
tabButtonsContainer.classList.add(
  "border",
  "border-solid",
  "border-yellow-900",
  "rounded-lg",
  "rounded-b-none",
  "absolute",
  "-left-[1px]",
  "-top-[50px]"
);

const tabButtons = [historyTabButton, menuTabButton, contactTabButton];
for (const button of tabButtons) {
  tabButtonsContainer.append(button);
  button.classList.add("m-2");
}

const contentTitle = createElement("div", "Content Title");
contentTitle.id = "content-title";
contentTitle.classList.add(
  "text-2xl",
  "border-b",
  "border-solid",
  "border-yellow-900",
  "pb-1"
);

const contentBodyContainer = createElement("div", "Content body is here");
contentBodyContainer.id = "content-body";
contentBodyContainer.classList.add("mt-4");

contentContainer.append(
  tabButtonsContainer,
  contentTitle,
  contentBodyContainer
);
