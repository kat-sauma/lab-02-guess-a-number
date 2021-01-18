// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const guessButton = document.getElementById('guess-submit');
const numberInput = document.getElementById('number-guess');
const triesLeftSpan = document.getElementById('number-span');
const messageResponse = document.getElementById('message');
const LoseContainer = document.getElementById('loser-message');
const loserResponse = document.getElementById('lose');
const resetButton = document.getElementById('reset-game');

// initialize state
let remainingTries = 4;
let secretNumber = Math.ceil(Math.random() * 20);

console.log(secretNumber);
// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    --remainingTries;
    //decrementing number of attempts
    triesLeftSpan.textContent = remainingTries;
    messageResponse.classList.remove('hidden');
    resetButton.classList.add('hidden');
    //store user input in a variable and compare to the correct answer
    let submitNumber = numberInput.value;
    let someNum = compareNumbers(submitNumber, secretNumber);
    //if/then view for guessing hints and winning
    if (someNum === 1) {
        messageResponse.textContent = 'oof, too high.';
    } else if (someNum === -1) {
        messageResponse.textContent = 'yikes! too low.';
    } else {
        messageResponse.textContent = 'Cat is out the bag! Looks like I am short a buck.';
        resetButton.classList.remove('hidden');
        guessButton.style.display = 'none';
        // LoseContainer.classList.add('hidden');
    }

    //lose and end game
    if (remainingTries === 0) {
        LoseContainer.classList.remove('hidden');
        loserResponse.classList.remove('hidden');
        messageResponse.classList.add('hidden');
        guessButton.disabled = true;
        resetButton.disabled = false;
        resetButton.classList.remove('hidden');
    }

});

//reset game
resetButton.addEventListener('click', () => {
    remainingTries = 4;
    triesLeftSpan.textContent = remainingTries;
    numberInput.value = '';
    messageResponse.classList.add('hidden');
    loserResponse.classList.add('hidden');
    secretNumber = Math.ceil(Math.random() * 20);
    guessButton.disabled = false;
    guessButton.style.display = '';
    console.log(secretNumber);
});

