const displayValue = [];

const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const divide = (x, y) => x / y;

const operate = (operator, x, y) => operator(x, y);

const display = document.querySelector('.display');

function backSpace() {
    console.log('clear was clicked');
    let elementsToDelete = document.getElementsByClassName('displayContent');
    for (let i = elementsToDelete.length - 1; i >= 0; i++) {
        let elementToDelete = elementsToDelete[i];
        elementToDelete.remove();
    }
}

function deleteAllElements() {
 //must delete previous div
    console.log('back was clicked');
    let elementsToDelete = document.getElementsByClassName('displayContent');
    console.log(elementsToDelete);
    for (let i = elementsToDelete.length - 1; i >= 0; i--) {
        let elementToDelete = elementsToDelete[i];
        elementToDelete.remove();
    }
}

function plus() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '+';
    return display.appendChild(displayContent);
}

function minus() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '-';
    return display.appendChild(displayContent);
}

function times() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = 'x';
    return display.appendChild(displayContent);
}

function dividedBy() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '÷';
    return display.appendChild(displayContent);
}

function one() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '1';
    return display.appendChild(displayContent);
}

function two() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '2';
    return display.appendChild(displayContent);
}

function three() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '3';
    return display.appendChild(displayContent);
}

function four() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '4';
    return display.appendChild(displayContent);
}

function five() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '5';
    return display.appendChild(displayContent);
}

function six() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '6';
    return display.appendChild(displayContent);
}

function seven() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '7';
    return display.appendChild(displayContent);
}

function eight() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '8';
    return display.appendChild(displayContent);
}

function nine() {
    const displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = '9';
    return display.appendChild(displayContent);
}

// displayValue will calculate equation and display the outcome