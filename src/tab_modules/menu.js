import {
  createElement,
  makeSemiTitle,
  getImageSourceAndStyle,
} from "../utils/utility";

import cabbageKimchi1 from "../imgs/cab-baechu-kimchi.jpg";
import cabbageKimchi2 from "../imgs/cab-dongchimi.jpg";
import nonCabbageKimchi1 from "../imgs/non-cab-kkakdugi.jpg";
import nonCabbageKimchi2 from "../imgs/non-cab-pakimchi.jpg";
import sideDish1 from "../imgs/side-veggi.jpg";
import sideDish2 from "../imgs/side-non-veggi.jpg";

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

  // Img source for cabbage kimchi
  const cabbageKimchiImage1 = getImageSourceAndStyle(cabbageKimchi1);
  const cabbageKimchiImage2 = getImageSourceAndStyle(cabbageKimchi2);

  // Kimchi grid
  const cabbageKimchiGrid = createImageGrid("cabbage");
  setTimeout(() => {
    const cabbageKimchiImage1Div = document.getElementById("cabbage-0");
    cabbageKimchiImage1Div.append(cabbageKimchiImage1), 0;
  });
  setTimeout(() => {
    const cabbageKimchiImage2Div = document.getElementById("cabbage-1");
    cabbageKimchiImage2Div.append(cabbageKimchiImage2);
  });
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
    "grid-rows-1",
    "grid-cols-2",
    "gap-4"
  );

  for (let i = 0; i < 2; i++) {
    const kimchiImageDiv = createElement("div");
    kimchiImageDiv.id = `${menuName}-${i}`;
    imageGridContainer.append(kimchiImageDiv);
  }
  return imageGridContainer;
}

export default openMenuPage;
