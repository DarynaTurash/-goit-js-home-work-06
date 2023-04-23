const inputRangeRef = document.querySelector('#font-size-control');
const textChangingSizeRef = document.querySelector('#text');

textChangingSizeRef.style.fontSize = inputRangeRef.value + 'px';

function onChangeFontSize(event) {
    textChangingSizeRef.style.fontSize = event.target.value + 'px';
};

inputRangeRef.addEventListener('input', onChangeFontSize);