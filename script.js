let displayValue = [];

const display = document.querySelector('.display');

function equals(callback) {
    console.log('equals was pressed!');
    const result = eval(displayValue.join(''));
    
    callback(result);
    result.classList.add('displayContent');
    displayValue.splice(0, displayValue.length);
    displayValue.push(result);
    }

function backSpace() {
    console.log('backspace was pressed!');
    displayValue.splice(displayValue.length - 1, displayValue.length);
    console.log(displayValue);
    let lastChild = display.lastElementChild;
    display.removeChild(lastChild);

}

function deleteAllElements() {
    console.log('clear is pressed!');
    displayValue.splice(0, displayValue.length);
    console.log(displayValue);
    return display.innerHTML = '';
}

function plus() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '+';
    displayValue.push('+');
    return display.appendChild(displayContent);
}

function minus() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '-';
    displayValue.push('-');
    return display.appendChild(displayContent);
}

function times() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = 'x';
    displayValue.push('*');
    return display.appendChild(displayContent);
}

function dividedBy() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '÷';
    displayValue.push('/');
    return display.appendChild(displayContent);
}

function one() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '1';
    displayValue.push('1');
    return display.appendChild(displayContent);
}

function two() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '2';
    displayValue.push('2');
    return display.appendChild(displayContent);
}

function three() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '3';
    displayValue.push('3');
    return display.appendChild(displayContent);
}

function four() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '4';
    displayValue.push('4');
    return display.appendChild(displayContent);
}

function five() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '5';
    displayValue.push('5');
    return display.appendChild(displayContent);
}

function six() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '6';
    displayValue.push('6');
    return display.appendChild(displayContent);
}

function seven() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '7';
    displayValue.push('7');
    return display.appendChild(displayContent);
}

function eight() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '8';
    displayValue.push('8');
    return display.appendChild(displayContent);
}

function nine() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '9';
    displayValue.push('9');
    return display.appendChild(displayContent);
}

function zero() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '0';
    displayValue.push('0');
    return display.appendChild(displayContent);
}

// displayValue will calculate equation and display the outcome