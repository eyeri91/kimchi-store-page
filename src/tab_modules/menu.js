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

  const cabbageKimchiTitleContainer = makeSemiTitle("Cabbage Kimchi");
  cabbageKimchiTitleContainer.classList.remove("mt-3");
  contentBodyContainer.append(cabbageKimchiTitleContainer);
  const cabbageKimchiGrid = createImageGrid("cabbage");
  contentBodyContainer.append(cabbageKimchiGrid);

  const otherKimchiTitleContainer = makeSemiTitle("Other Kimchi");
  contentBodyContainer.append(otherKimchiTitleContainer);
  const otherKimchiGrid = createImageGrid("non-cabbage");
  contentBodyContainer.append(otherKimchiGrid);

  const otherDishesTitleContainer = makeSemiTitle("Other dishes");
  contentBodyContainer.append(otherDishesTitleContainer);
  const otherDishesGrid = createImageGrid("other-dishes");
  contentBodyContainer.append(otherDishesGrid);
}

function createImageGrid(menuName) {
  const imageGridContainer = createElement("div");
  imageGridContainer.classList.add(
    "grid",
    "grid-rows-2",
    "grid-cols-3",
    "gap-4",
    "border",
    "border-solid",
    "border-yellow-900"
  );

  for (let i = 0; i < 2; i++) {
    const kimchiImageDiv = createElement("div");
    kimchiImageDiv.id = `${menuName}-${i}`;
    imageGridContainer.append(kimchiImageDiv);
  }
  return imageGridContainer;
}

export default openMenuPage;
