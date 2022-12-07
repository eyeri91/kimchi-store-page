// Add a function to open each tab and wipe out
// the current contents and run the correct tab module.

// div #content

// div #title

// div # content-body
import "./style.css";
import { createElement } from "./utils/utility";
import openHistoryPage from "./tab_modules/history";
import openMenuPage from "./tab_modules/menu";
import openContactPage from "./tab_modules/contact";

// const styleClass = {
//   borderColor:
// };

const contentContainer = document.getElementById("content");

const historyTabButton = createElement("button", "History");
historyTabButton.id = "history-tab-btn";
const menuTabButton = createElement("button", "Menu");
menuTabButton.id = "menu-tab-btn";
const contactTabButton = createElement("button", "Contact");
contactTabButton.id = "contact-tab-btn";
const tabButtonsContainer = createElement("div");
tabButtonsContainer.id = "tab-btns-container";
tabButtonsContainer.classList.add(
  "rounded-lg",
  "rounded-b-none",
  "absolute",
  "-left-[1px]",
  "-top-[50px]",
  "tab-buttons-container-bottom"
);

const tabButtons = [historyTabButton, menuTabButton, contactTabButton];
for (const button of tabButtons) {
  tabButtonsContainer.append(button);
  button.classList.add(
    "py-2",
    "px-3",
    "border",
    "rounded-t-md",
    "border-solid",
    "border-yellow-700",
    "bg-lightPink",
    "bg-opacity-60"
  );
}

const contentTitle = createElement("div", "Content Title");
contentTitle.id = "content-title";
contentTitle.classList.add(
  "text-2xl",
  "border-b-2",
  "border-dotted",
  "border-yellow-700",
  "pb-1"
);

const contentBodyContainer = createElement("div");
contentBodyContainer.id = "content-body";
contentBodyContainer.classList.add("mt-4");

contentContainer.append(
  tabButtonsContainer,
  contentTitle,
  contentBodyContainer
);

// # Apply currying to common functions for all tabs.
// const updateElementText = (id) => (text) =>
//   (document.getElementById(id).textContent = text);

// const updateContenTitleTextContent = updateElementText('content-title');
// updateContenTitleTextContent('History')

// const addClassToElement =
//   (selector) =>
//   (...classes) =>
//     document.querySelector(selector).classList.add(...classes);

// Add a functiont to toggle
// the bg-colors of active and inavtive tab buttons

// openHistoryPage();
// openMenuPage();
openContactPage();
