// Add a function to open each tab and wipe out
// the current contents and run the correct tab module.

// div #content

// div #title

// div # content-body
import "./style.css";
import { createElement } from "./utils/utility";
import openHistoryPage from "./tab_modules/history";

// const styleClass = {
//   borderColor:
// };

const contentContainer = document.getElementById("content");

const historyTabButton = createElement("button", "History");
historyTabButton.id = "history-btn";
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
    "py-2",
    "px-3",
    "border",
    "rounded-t-md",
    "border-solid",
    "border-yellow-700",
    "bg-lightPink",
    "bg-opacity-60",
    "relative"
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

// History button is clicked =>
// History button's border bottom should get a class for

openHistoryPage();
