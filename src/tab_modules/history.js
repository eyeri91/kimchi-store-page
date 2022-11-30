import { createElement } from "../utils/utility";
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
  const kimchiImageForHistoryTab = new Image();
  kimchiImageForHistoryTab.src = kimchiHistoryImg;
  kimchiImageForHistoryTab.setAttribute("width", 400);
  kimchiImageForHistoryTab.classList.add("rounded-sm", "my-2");
  contentBodyContainer.append(kimchiImageForHistoryTab);

  const storeHistoryParagraph = createElement(
    "p",
    "The history has started since 1991. The best kimchi in the town. That was the aim of the ...."
  );
  storeHistoryParagraph.classList.add("my-3", "px-2", "w-3/4");
  contentBodyContainer.append(storeHistoryParagraph);
}

export default openHistoryPage;
