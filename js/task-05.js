const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

const onInputChange = (event) => {
event.currentTarget.value === '' || event.currentTarget.value.trim() === '' 
? nameLabelRef.textContent = 'Anonymous' 
: nameLabelRef.textContent = event.currentTarget.value.trim();
};

inputRef.addEventListener('input', onInputChange);