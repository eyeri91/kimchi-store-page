export function createElement(elementType, elementText = "") {
  const element = document.createElement(elementType);
  element.innerText = elementText;
  return element;
}

export function makeSemiTitle(semiTitleName) {
  const semiTitleCotainer = createElement("div", semiTitleName);
  semiTitleCotainer.classList.add(
    "text-lg",
    "border-b",
    "border-dotted",
    "border-neutral-400",
    "pb-1/2",
    "w-2/5"
  );
  return semiTitleCotainer;
}
