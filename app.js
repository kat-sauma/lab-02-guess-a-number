import { compareNumbers, guessesLeft } from './utils.js';

const guessButton = document.getElementById('guess-submit');
const numberInput = document.getElementById('number-guess');
const triesLeftSpan = document.getElementById('number-span');
const messageResponse = document.getElementById('message');
const LoseContainer = document.getElementById('loser-message');
const loserResponse = document.getElementById('lose');
const resetButton = document.getElementById('reset-game');

let remainingTries = 4;
let secretNumber = Math.ceil(Math.random() * 20);

guessButton.addEventListener('click', () => {
    --remainingTries;
    //decrementing number of attempts
    triesLeftSpan.textContent = remainingTries;
    //store user input in a variable and compare to the correct answer
    let submitNumber = numberInput.value;
    let someNum = compareNumbers(submitNumber, secretNumber);
    //if/then view for guessing hints and winning
    messageResponse.classList.remove('hidden');
    if (someNum === 1) {
        messageResponse.textContent = 'oof, too high.';
    } else if (someNum === -1) {
        messageResponse.textContent = 'yikes! too low.';
    } else {
        messageResponse.textContent = 'Cat is out the bag! Looks like I am short a buck.';
    }

    //lose and end game
    if (remainingTries === 0) {
        LoseContainer.classList.remove('hidden');
        loserResponse.classList.remove('hidden');
        messageResponse.classList.add('hidden');
        guessButton.disabled = true;
        resetButton.classList.remove('hidden');
    }
});

resetButton.addEventListener('click', () => {
    remainingTries = 4;
    triesLeftSpan.textContent = remainingTries;
    numberInput.value = '';
    messageResponse.classList.add('hidden');
    loserResponse.classList.add('hidden');
    secretNumber = Math.ceil(Math.random() * 20);
    guessButton.disabled = false;
});

// to view computer's guess
// console.log(secretNumber);