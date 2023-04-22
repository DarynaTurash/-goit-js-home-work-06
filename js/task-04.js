const counterValue = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');


const onDecrementBtnClick = () => {
return counterValue.textContent = Number(counterValue.textContent) - 1;
};

console.log(Number(counterValue.textContent));

btnDecrement.addEventListener('click', onDecrementBtnClick);

const onIncrementBtnClick = () => {
    return counterValue.textContent = Number(counterValue.textContent) + 1;
}

btnIncrement.addEventListener('click', onIncrementBtnClick);