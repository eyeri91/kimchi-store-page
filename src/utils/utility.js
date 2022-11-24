export function createElement(elementType, elementText = "") {
  const element = document.createElement(elementType);
  element.innerText = elementText;
  return element;
}
