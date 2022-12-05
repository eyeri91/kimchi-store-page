import { createElement, getImageSourceAndStyle } from "../utils/utility";
import kimchiHistoryImg from "../imgs/kimchi-history.jpg";

function openHistoryPage() {
  const contentTitle = document.getElementById("content-title");
  contentTitle.textContent = "History";

  const contentBodyContainer = document.getElementById("content-body");
  contentBodyContainer.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );

  const kimchiImageForHistoryTab = getImageSourceAndStyle(
    kimchiHistoryImg,
    500
  );
  // setTimeout(() => {
  //   const cabbageKimchiImage1Div = document.getElementById("cabbage-0");
  //   cabbageKimchiImage1Div.append(cabbageKimchiImage1), 0;
  // });
  contentBodyContainer.append(kimchiImageForHistoryTab);

  const storeHistoryParagraph = createElement(
    "p",
    "The history has started since 1991. The best kimchi in the town. That was the aim of the ...."
  );
  storeHistoryParagraph.classList.add("my-3", "px-2", "w-3/4");
  contentBodyContainer.append(storeHistoryParagraph);

  // Tab button styling
  const historyTabButton = document.getElementById("history-btn");
  historyTabButton.classList.add("history-border-bottom");
}

export default openHistoryPage;
