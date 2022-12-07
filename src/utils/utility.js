export function createElement(elementType, elementText = "") {
  const element = document.createElement(elementType);
  element.innerText = elementText;
  return element;
}

export function makeSemiTitle(semiTitleName) {
  const semiTitleCotainer = createElement("div", semiTitleName);
  semiTitleCotainer.classList.add(
    "text-xl",
    "border-b",
    "border-dotted",
    "border-neutral-400",
    "pb-1/2",
    "w-2/5",
    "mb-3",
    "mt-3"
  );
  return semiTitleCotainer;
}

export function getImageSourceAndStyle(imgSource, width = 300) {
  const imgElement = new Image();
  imgElement.src = imgSource;
  imgElement.setAttribute("width", width);
  imgElement.classList.add("rounded-sm", "my-2");
  return imgElement;
}
