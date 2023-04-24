function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const containerOfControls = document.querySelector("#controls");
const input = containerOfControls.firstElementChild;
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divForBoxes = document.querySelector('#boxes');


input.addEventListener('change', (event) => {
  let amountValue = 0;

  if (Number(event.currentTarget.value) >= Number(event.currentTarget.min) && Number(event.currentTarget.value) <= Number(event.currentTarget.max)){
    amountValue = Number(event.currentTarget.value);
  btnCreate.addEventListener('click', createBoxes(amountValue));
  }
  else {
    alert('Ввели невірне число!')
  }
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for(let i = 0; i < amount; i += Number(input.step)){
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor(),
    boxEl.style.width = 30 + i * 10 + 'px';
    boxEl.style.height = 30 + i * 10 + 'px';
    boxEl.classList.add('box')
    divForBoxes.append(boxEl);
  }
}

function destroyBoxes() {
  divForBoxes.innerHTML = '';
  input.value = '';
};









