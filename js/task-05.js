const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

const onInputChange = (event) => {
nameLabelRef.textContent = event.currentTarget.value.trim();
};

inputRef.addEventListener('input', onInputChange);