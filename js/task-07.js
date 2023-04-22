const inputRangeRef = document.querySelector('#font-size-control');
const textChangingSizeRef = document.querySelector('#text');



function onChangeFontSize(event) {
    textChangingSizeRef.style.fontSize = event.target.value + 'px';
};

inputRangeRef.addEventListener('input', onChangeFontSize);