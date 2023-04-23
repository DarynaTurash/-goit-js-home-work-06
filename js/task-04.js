const counterRef = document.querySelector("#value");
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const onDecrementBtnClick = () => {
counterValue -= 1;
counterRef.textContent = counterValue;
};

btnDecrementRef.addEventListener('click', onDecrementBtnClick);

const onIncrementBtnClick = () => {
counterValue += 1;
counterRef.textContent = counterValue;
}

btnIncrementRef.addEventListener('click', onIncrementBtnClick);