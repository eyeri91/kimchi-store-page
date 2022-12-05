import {
  createElemet,
  makeSemiTitle,
  getImageSourceAndStyle,
} from "../utils/utility";

import dubaiImage from "../imgs/dubai.jpg";
import seoulImage from "../imgs/seoul.jpg";
import budapestImage from "../imgs/budapest.jpg";

const branchObjectsList = [
  {
    title: "Dusbai",
    image: dubaiImage,
  },
  {
    title: "Seoul",
    image: seoulImage,
  },
  {
    title: "Budapest",
    image: budapestImage,
  },
];

function openContactPage() {
  const contentTitle = document.getElementById("content-title");
  contentTitle.textContent = "Contact";

  const contentBodyContainer = document.getElementById("content-body");
  contentBodyContainer.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );

  for (const branch of branchObjectsList) {
    const branchDiv = makeSemiTitle(`${branch.title} ` + "Branch");
    contentBodyContainer.append(branchDiv);
    const branchImage = getImageSourceAndStyle(branch.image, 400);
    contentBodyContainer.append(branchImage);
  }
}

export default openContactPage;
