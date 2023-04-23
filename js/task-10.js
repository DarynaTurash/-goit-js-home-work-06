function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const containerOfControls = document.querySelector("#controls");
const input = containerOfControls.firstElementChild;
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');


btnCreate.addEventListener("input", onCreateCollection);

function onCreateCollection(event) {
  const newDiv = document.createElement("div");
  newDiv.width = "30px";
  newDiv.height = "30px";
};





