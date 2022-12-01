export function createElement(elementType, elementText = "") {
  const element = document.createElement(elementType);
  element.innerText = elementText;
  return element;
}

export function makeSemiTitle(semiTitleName) {
  const semiTitleCotainer = createElement("div", semiTitleName);
  semiTitleCotainer.classList.add(
    "text-md",
    "border-b-2",
    "border-dotted",
    "border-yellow-700",
    "pb-2",
    "w-1/2"
  );
  return semiTitleCotainer;
}
