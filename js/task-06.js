const inputRef = document.querySelector("#validation-input");
const correctLengthOfSymbols = Number(inputRef.dataset.length);


inputRef.addEventListener('blur', onValidationOfSymbolLength);

function onValidationOfSymbolLength(event) {
    const symbolsEnteredLength = event.target.value.trim().length;

    if (symbolsEnteredLength !== correctLengthOfSymbols) {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    } else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    };
};




