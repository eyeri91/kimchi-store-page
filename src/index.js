// Add a function to open each tab and wipe out
// the current contents and run the correct tab module.

// div #content

//  Create buttons for each tabs.

// div #title

// div # content-body
import "./style.css";
import { createElement } from "./utils/utility";

// const styleClass = {
//   borderColor:
// };

const contentContainer = document.getElementById("content");

const historyTabButton = createElement("button", "History");
const menuTabButton = createElement("button", "Menu");
const contactTabButton = createElement("button", "Contact");
const tabButtonsContainer = createElement("div");
tabButtonsContainer.id = "tab-btns-container";
tabButtonsContainer.classList.add(
  "rounded-lg",
  "rounded-b-none",
  "absolute",
  "-left-[1px]",
  "-top-[50px]"
);

const tabButtons = [historyTabButton, menuTabButton, contactTabButton];
for (const button of tabButtons) {
  tabButtonsContainer.append(button);
  button.classList.add(
    "mr-3",
    "py-2",
    "px-3",
    "border",
    "rounded-t-md",
    "border-solid",
    "border-yellow-700",
    "bg-lightPink"
  );
}

const contentTitle = createElement("div", "Content Title");
contentTitle.id = "content-title";
contentTitle.classList.add(
  "text-2xl",
  "border-b",
  "border-solid",
  "border-yellow-700",
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
