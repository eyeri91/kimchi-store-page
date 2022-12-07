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

const cabbageKimchiList = ["Baechu kimchi", "Dongchimi"];
const nonCabbageKimchiList = ["Kkakdugi", "Pa-kimchi"];
const otherDishesList = ["Vegetarian", "Non-vegetarian"];

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

  // Img sources for cabbage kimchi
  const cabbageKimchiImage1 = getImageSourceAndStyle(cabbageKimchi1);
  const cabbageKimchiImage2 = getImageSourceAndStyle(cabbageKimchi2);

  // Kimchi grid
  const cabbageKimchiGrid = createImageGrid("cabbage", cabbageKimchiList);
  findImageDivAndLoadImage("cabbage-0", cabbageKimchiImage1);
  findImageDivAndLoadImage("cabbage-1", cabbageKimchiImage2);

  contentBodyContainer.append(cabbageKimchiGrid);

  // Img sources for non-cabbage kimchi
  const nonCabbageKimchiImage1 = getImageSourceAndStyle(nonCabbageKimchi1);
  const nonCabbageKimchiImage2 = getImageSourceAndStyle(nonCabbageKimchi2);

  // Non-cabbage kimchi grid
  const nonCabbageKimchiTitleContainer = makeSemiTitle("Other Kimchi");
  contentBodyContainer.append(nonCabbageKimchiTitleContainer);
  const otherKimchiGrid = createImageGrid("non-cabbage", nonCabbageKimchiList);
  findImageDivAndLoadImage("non-cabbage-0", nonCabbageKimchiImage1);
  findImageDivAndLoadImage("non-cabbage-1", nonCabbageKimchiImage2);
  contentBodyContainer.append(otherKimchiGrid);

  // Img sources for other dishes
  const sideDishImage1 = getImageSourceAndStyle(sideDish1);
  const sideDishImage2 = getImageSourceAndStyle(sideDish2);

  // Side dishes grid
  const otherDishesTitleContainer = makeSemiTitle("Other dishes");
  contentBodyContainer.append(otherDishesTitleContainer);
  const otherDishesGrid = createImageGrid("other-dishes", otherDishesList);
  findImageDivAndLoadImage("other-dishes-0", sideDishImage1);
  findImageDivAndLoadImage("other-dishes-1", sideDishImage2);
  contentBodyContainer.append(otherDishesGrid);
}

function createImageGrid(menuCategory, menuList) {
  const imageGridContainer = createElement("div");
  imageGridContainer.classList.add(
    "grid",
    "grid-rows-2",
    "grid-cols-1",
    "sm:grid-rows-1",
    "sm:grid-cols-2",
    "gap-4"
  );

  for (let i = 0; i < 2; i++) {
    const kimchiImageDiv = createElement("div");
    kimchiImageDiv.id = `${menuCategory}-${i}`;
    kimchiImageDiv.textContent = menuList[i];
    imageGridContainer.append(kimchiImageDiv);
  }
  return imageGridContainer;
}

function findImageDivAndLoadImage(imageDivId, img) {
  setTimeout(() => {
    const imageDiv = document.getElementById(imageDivId);
    imageDiv.append(img), 0;
  });
}

export default openMenuPage;
