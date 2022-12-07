import "./style.css";
import { createElement } from "./utils/utility";
import openHistoryPage from "./tab_modules/history";
import openMenuPage from "./tab_modules/menu";
import openContactPage from "./tab_modules/contact";

const contentContainer = document.getElementById("content");

const tabButtonObjectsList = [
  {
    buttonText: "History",
    buttonId: "history-tab-btn",
    connectedPage: () => openHistoryPage(),
  },
  {
    buttonText: "Menu",
    buttonId: "menu-tab-btn",
    connectedPage: () => openMenuPage(),
  },
  {
    buttonText: "contact",
    buttonId: "contact-tab-btn",
    connectedPage: () => openContactPage(),
  },
];

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

const removeAllChildNodes = (id) => () => {
  const contentBody = document.getElementById(id);
  if (contentBody.hasChildNodes()) contentBody.replaceChildren();
};

const removeAllChildNodesOfContentBody = removeAllChildNodes("content-body");

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

for (const tabButtonObject of tabButtonObjectsList) {
  const tabButton = createElement("button", tabButtonObject.buttonText);
  tabButton.id = tabButtonObject.buttonId;
  tabButton.classList.add(
    "py-2",
    "px-3",
    "border",
    "rounded-t-md",
    "border-solid",
    "border-yellow-700",
    "bg-lightPink",
    "bg-opacity-60"
  );
  tabButtonsContainer.append(tabButton);

  // Add event handlers to each tab button.
  tabButton.addEventListener("click", () => {
    removeAllChildNodesOfContentBody();
    tabButtonObject.connectedPage();
  });
}

// # Apply currying to common functions for all tabs.
// const updateElementText = (id) => (text) =>
//   (document.getElementById(id).textContent = text);

// const updateContenTitleTextContent = updateElementText('content-title');
// updateContenTitleTextContent('History')

// const removeAllChildNotes = (id)=> () => {
// const contentBody = document.getElementById(id)
// if (contentBody.hasChildNodes()) contentBody.replaceChildren();
// }
//  if (this.appContainer.hasChildNodes()) this.appContainer.replaceChildren();

// const addClassToElement =
//   (selector) =>
//   (...classes) =>
//     document.querySelector(selector).classList.add(...classes);

// Add a functiont to toggle
// the bg-colors of active and inavtive tab buttons
// and call it inside of eventhandler for tab-click events.

// Add a function to open each tab and wipe out
// Call updateElementText to update content Title.
// the current contents and run the correct tab module.

openHistoryPage();
// openMenuPage();
// openContactPage();
