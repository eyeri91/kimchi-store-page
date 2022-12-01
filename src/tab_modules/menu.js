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
  redKimchiTitleContainer.classList.remove("mt-3");
  contentBodyContainer.append(redKimchiTitleContainer);
  const redKimchiGrid = createImageGrid();
  contentBodyContainer.append(redKimchiGrid);

  const whiteKimchiTitleContainer = makeSemiTitle("White Kimchi");
  contentBodyContainer.append(whiteKimchiTitleContainer);
  const whiteKimchiGrid = createImageGrid();
  contentBodyContainer.append(whiteKimchiGrid);

  const otherDishesTitleContainer = makeSemiTitle("Other dishes");
  contentBodyContainer.append(otherDishesTitleContainer);
  const otherDishesGrid = createImageGrid();
  contentBodyContainer.append(otherDishesGrid);
}

function createImageGrid() {
  const imageGridContainer = createElement("div");
  imageGridContainer.classList.add(
    "grid",
    "grid-rows-3",
    "grid-cols-4",
    "gap-4",
    "border",
    "border-solid",
    "border-yellow-900"
  );

  for (let i = 1; i <= 6; i++) {
    if (i / 2 !== 0) {
      const kimchiImageDiv = createElement("div");
      kimchiImageDiv.id = `image-${i}`;
      imageGridContainer.append(kimchiImageDiv);
    } else {
      const nameDiv = createElement("div");
      nameDiv.id = `kimhci-name-${i}`;
      nameDiv.classList.add(
        "flex",
        "flex-row",
        "justfify-center",
        "items-center"
      );
      imageGridContainer.append(nameDiv);
    }
  }
  return imageGridContainer;
}

export default openMenuPage;
