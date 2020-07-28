const binaryInput = document.getElementById('binary-input');
const decimalInput = document.getElementById('decimal-output');
const form = document.getElementById('main-form');
const errParagraph = document.getElementById('err');

form.addEventListener('submit', calculate);

function calculate(e) {
    e.preventDefault();
    let binary = binaryInput.value;
    if(validInput(binary)){
        errParagraph.innerText = null;
        let decimal= 0;
        let length = binaryInput.value.length-1;
        for(let i = 0; length >= 0; i++) {
            decimal = decimal + (Math.pow(2, length) * binary[i]);
            length--;
        }
        decimalInput.value = decimal;
    } else {
        errParagraph.innerText = `${binary} is not a valid binary value, please enter a valid binary value`;
        binaryInput.value = null;
    }
}

function validInput(str) {
    for(let i = 0; i < str.length; i++) {
        if(str[i] != 0 && str[i] != 1){
            return false;
        }
    }
    return true;
}