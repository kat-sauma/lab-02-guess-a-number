# EDIT-THIS-README
Expectation: An app that guesses a correct number, between 1-20, and let them know if it is "too high" or "too low", with 4 chances to win. If they are right, or use their guessing, diable the game with a win or lose message. 

1. Number Input Area
    - user guessing and enters a number
    - takes in numbers between 1-20
    - input box
2. button
    - send guess input to be evaluated
    - event listener on click submits guess and triggers state changes
3. Response 
    - too high read response if the number is too high
    - too low read response if the number is too low
4. Message
    - winning message to disable game
    - losing message if they exceed 4 tries

Order of Events:
1) Grab DOM elements with IDs in HTML
2) Initialize State (what will change) our global 'let's
    - random number: n
    - guesses remaing: 4
3) Add Event Listener Button
    - on click
    - declare/store user guess in a variable ('Number(someInput.value)')
    - compare user guess with random number

    VIEW:
        - if/then
            - guess > random n --too high results span
                check if guesses left, disable if need be                       
            - guess < random n --too low results span
                check if guesses left, disable if need be                       
            - if guess is = random n, congratulate
                disable and display Win message
4) Stretch: add another event listener to reset button
    - on click
        - state reset remaining guesses state to 4
        - state create a new random n
        - view re-enable the inputs if they are disabled and fix the game text
