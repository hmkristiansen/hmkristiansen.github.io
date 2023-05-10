const container = document.querySelector("#container");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  const element = document.createElement("div");
  element.classList.add("draggable");
  element.addEventListener("mousedown", onMouseDown);

  const removeButton = document.createElement("div");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "-";
  removeButton.addEventListener("click", onRemoveButtonClick);
  element.appendChild(removeButton);

  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.innerText = "Drag me!";
  element.appendChild(caption);

  container.appendChild(element);
});

let currentElement = null;
let initialX = 0;
let initialY = 0;
let xOffset = 0;
let yOffset = 0;

function onMouseDown(event) {
  currentElement = event.target;
  initialX = currentElement.offsetLeft;
  initialY = currentElement.offsetTop;
  xOffset = event.clientX - initialX;
  yOffset = event.clientY - initialY;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(event) {
  const x = event.clientX - xOffset;
  const y = event.clientY - yOffset;

  currentElement.style.left = `${x}px`;
  currentElement.style.top = `${y}px`;
}

function onMouseUp() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

function onRemoveButtonClick(event) {
  event.stopPropagation();
  const element = event.target.parentElement;
  element.parentNode.removeChild(element);
}
