import "./style.css";
import { createElement } from "./utils/utility.js";
import openHomePage from "./tab_modules/home.js";
import openMenuPage from "./tab_modules/menu.js";
import openContactPage from "./tab_modules/contact.js";

const contentContainer = document.getElementById("content");

const tabButtonObjectsList = [
  {
    buttonText: "Home",
    buttonId: "home-tab-btn",
    connectedPage: () => openHomePage(),
  },
  {
    buttonText: "Menu",
    buttonId: "menu-tab-btn",
    connectedPage: () => openMenuPage(),
  },
  {
    buttonText: "Contact",
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

// # Apply currying to common functions for all tabs.
const removeAllChildNodes = (id) => () => {
  const contentBody = document.getElementById(id);
  if (contentBody.hasChildNodes()) contentBody.replaceChildren();
};

const removeAllChildNodesOfContentBody = removeAllChildNodes("content-body");

const updateElementText = (id) => (text) =>
  (document.getElementById(id).textContent = text);

const updateContenTitleTextContent = updateElementText("content-title");

// const addClassToElement =
//   (selector) =>
//   (...classes) =>
//     document.querySelector(selector).classList.add(...classes);

const contentTitle = createElement("div", "Home");
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
contentBodyContainer.classList.add(
  "mt-4",
  "flex",
  "flex-col",
  "justify-center",
  "items-center"
);

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
    toggleTabButtonColor(tabButton);
    updateContenTitleTextContent(tabButtonObject.buttonText);
    tabButtonObject.connectedPage();
  });
}

function toggleTabButtonColor(tabButton) {
  for (const button of tabButtonObjectsList) {
    if (button.buttonId === tabButton.id) {
      tabButton.classList.add("bg-cream", "bg-opacity-40");
    } else {
      const otherButton = document.getElementById(button.buttonId);
      otherButton.classList.remove("bg-cream", "bg-opacity-40");
    }
  }
}

openHomePage();
