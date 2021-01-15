import { sendGuess, playAgain } from './handlers.js';

const guessButton = document.getElementById('guess-submit');
guessButton.addEventListener('click', sendGuess);

const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', playAgain);