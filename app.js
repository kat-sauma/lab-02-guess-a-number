// import functions and grab DOM elements
import { compareNumbers, limit } from './utils.js';

const guessButton = document.getElementById('guess-submit');
const numberInput = document.getElementById('number-guess');
const triesLeftSpan = document.getElementById('number-span');
const messageResponse = document.getElementById('message');

// initialize state
let remainingTries = 4;
let secretNumber = Math.ceil(Math.random() * 20);


// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    --remainingTries;

    triesLeftSpan.textContent = remainingTries;

    let submitNumber = numberInput.value;
    let someNum = compareNumbers(submitNumber, secretNumber);

    if (someNum === 1) {
        messageResponse.textContent = 'oof, too high.';
    } else if (someNum === -1) {
        messageResponse.textContent = 'yikes! too low.';
    } else {
        messageResponse.textContent = 'Cat is out the bag! Looks like I am short a buck.';
    }

    // let lastTry = triesLeftSpan.value;
    // let countDown = limit(lastTry, remainingTries);
    // if (countDown === 0) {
    //     messageResponse.textContent = 'Aw geez, looks like your luck is running like a mouse from a cat...';
    // }
});