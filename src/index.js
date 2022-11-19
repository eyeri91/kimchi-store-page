// Add a function to open each tab and wipe out
// the current contents and run the correct tab module.

// div #content

//  div #content have same padding x and y axis.
//  Create buttons for each tabs.

// div #title
// tab title heading and the border bottom should be the same.

// div # content-body
import { createElement } from "./utility";

const contentContainer = document.getElementById("content");

const historyTabButton = createElement("button", "History");
const menuTabButton = createElement("button", "Menu");
const contactTabButton = createElement("button", "Contact");
contentContainer.append(historyTabButton, menuTabButton, contactTabButton);

const contentTitle = createElement("div", "Content title is here");
contentTitle.id = "content-title";

const contentBodyContainer = createElement("div", "Content body is here");
contentBodyContainer.id = "content-body";
contentContainer.append(contentTitle, contentBodyContainer);
