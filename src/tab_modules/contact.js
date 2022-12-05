import {
  createElemet,
  makeSemiTitle,
  getImageSourceAndStyle,
} from "../utils/utility";

import dubaiImage from "../imgs/dubai.jpg";
import seoulImage from "../imgs/seoul.jpg";
import budapestImage from "../imgs/budapest.jpg";

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

  const dubaiBranchTitleContainer = makeSemiTitle("Dubai branch");
  contentBodyContainer.append(dubaiBranchTitleContainer);
  const dubaiBranchImage = getImageSourceAndStyle(dubaiImage, 400);
  contentBodyContainer.append(dubaiBranchImage);

  const seoulBranchTitleContainer = makeSemiTitle("Seoul Branch");
  contentBodyContainer.append(seoulBranchTitleContainer);
  const seoulBranchImage = getImageSourceAndStyle(seoulImage, 400);
  contentBodyContainer.append(seoulBranchImage);

  const budapestBranchTitleContainer = makeSemiTitle("Budapest Branch");
  contentBodyContainer.append(budapestBranchTitleContainer);
  const budapestBranchImage = getImageSourceAndStyle(budapestImage, 400);
  contentBodyContainer.append(budapestBranchImage);
}

export default openContactPage;
