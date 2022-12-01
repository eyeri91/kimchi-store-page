import { createElement, makeSemiTitle } from "../utils/utility";

function openMenuPage() {
  const contentTitle = document.getElementById("content-title");
  contentTitle.textContent = " Menu";

  const contentBodyContainer = document.getElementById("content-body");
  contentBodyContainer.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );

  const redKimchiTitleContainer = makeSemiTitle("Red Kimchi");
  contentBodyContainer.append(redKimchiTitleContainer);
  const whiteKimchiTitleContainer = makeSemiTitle("White Kimchi");
  contentBodyContainer.append(whiteKimchiTitleContainer);
  const otherDishesTitleContainer = makeSemiTitle("Other dishes");
  contentBodyContainer.append(otherDishesTitleContainer);
}

export default openMenuPage;
