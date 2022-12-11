import { createElement, getImageSourceAndStyle } from "../utils/utility";
import kimchiHistoryImg from "../imgs/kimchi-history.jpg";

function openHistoryPage() {
  const contentBodyContainer = document.getElementById("content-body");

  const kimchiImageForHistoryTab = getImageSourceAndStyle(
    kimchiHistoryImg,
    500
  );
  contentBodyContainer.append(kimchiImageForHistoryTab);

  const storeHistoryParagraph = createElement(
    "p",
    "The history has started since 1991. The best kimchi in the town. That was the aim of the ...."
  );
  storeHistoryParagraph.classList.add("my-3", "px-2", "w-3/4");
  contentBodyContainer.append(storeHistoryParagraph);

  const historyTabButton = document.getElementById("history-tab-btn");
  historyTabButton.classList.add("bg-cream", "bg-opacity-40");
}

export default openHistoryPage;
