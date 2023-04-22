function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColorRef = document.querySelector(".change-color");
const bodyRef = document.querySelector('body');
const nameOfColorRef = document.querySelector(".color");

buttonChangeColorRef.addEventListener("click", onChangeBackground);

function onChangeBackground(getRandomColor) {
  bodyRef.style.background = getRandomHexColor();
  nameOfColorRef.textContent = bodyRef.style.background;
}