import {
  createElement,
  makeSemiTitle,
  getImageSourceAndStyle,
} from "../utils/utility";

import dubaiImage from "../imgs/dubai.jpg";
import seoulImage from "../imgs/seoul.jpg";
import budapestImage from "../imgs/budapest.jpg";

const branchObjectsList = [
  {
    title: "Dubai",
    image: dubaiImage,
    location: "SZR, Dubai, United Arab Emirates",
    phone: "123-1234-1234",
    email: "dubai_kimchi@mkbty.com",
  },
  {
    title: "Seoul",
    image: seoulImage,
    location: "Myeong-dong, Seoul, South Korea",
    phone: "456-4567-4567",
    email: "seoul_kimchi@mkbty.com",
  },
  {
    title: "Budapest",
    image: budapestImage,
    location: "Blah",
    phone: "Budapest, Hungary",
    email: "budapest_kimchi@mkbty.com",
  },
];

function openContactPage() {
  const contentBodyContainer = document.getElementById("content-body");

  for (const branch of branchObjectsList) {
    const branchDiv = makeSemiTitle(`${branch.title} ` + "Branch");
    contentBodyContainer.append(branchDiv);
    const branchImage = getImageSourceAndStyle(branch.image, 400);
    contentBodyContainer.append(branchImage);

    const branchDetailsDiv = createElement("div");
    contentBodyContainer.append(branchDetailsDiv);
    branchDetailsDiv.classList.add(
      "text-left",
      "p-2",
      "pt-1",
      "rounded-md",
      "bg-gray",
      "w-[400px]",
      "my-3"
    );
    const branchDetailsHeading = createElement("h", branch.title);
    branchDetailsHeading.classList.add("text-xl", "pb-2");
    branchDetailsDiv.append(branchDetailsHeading);
    const branchDetailsParagrapgh = createElement(
      "p",
      `Address: ${branch.location} \n Phone: ${branch.phone} \n Email: ${branch.email}`
    );
    branchDetailsDiv.append(branchDetailsParagrapgh);
  }
}

export default openContactPage;
