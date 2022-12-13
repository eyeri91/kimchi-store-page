import { createElement, getImageSourceAndStyle } from "../utils/utility.js";
import kimchiHomeImg from "../imgs/kimchi-history.jpg";

function openHomePage() {
  const contentBodyContainer = document.getElementById("content-body");

  const kimchiImageForHomeTab = getImageSourceAndStyle(kimchiHomeImg, 500);
  contentBodyContainer.append(kimchiImageForHomeTab);

  const storeHomeParagraph = createElement(
    "p",
    "The history has started since 1991. The best kimchi in the town. That was the aim of the ...."
  );
  storeHomeParagraph.classList.add("my-3", "px-2", "w-3/4");
  contentBodyContainer.append(storeHomeParagraph);

  const homeTabButton = document.getElementById("home-tab-btn");
  homeTabButton.classList.add("bg-cream", "bg-opacity-40");
}

export default openHomePage;
