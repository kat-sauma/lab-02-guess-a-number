// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

import { guessesLeft, compareNumbers } from '../utils.js';

// test number of input tries countdown
test('it should return total tries - 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = guessesLeft(4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


// test guess too high
test('it should return the number 15 is too high for the secret number 10', (expect) => {
    //Arrange
    //Set up your arguments and expectations
    const expected = 1;
    //Act
    //Call the function you're testing and set the result to a const
    const actual = compareNumbers(15, 10);
    //Expect
    //Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// test guess too low
test('it should return the number 1 is too low for the secret number 10', (expect) => {
    //Arrange
    //Set up your arguments and expectations
    const expected = -1;
    //Act
    //Call the function you're testing and set the result to a const
    const actual = compareNumbers(1, 10);
    //Expect
    //Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// test guess just right!
test('it should return the number 10 is just right for the secret number 10', (expect) => {
    //Arrange
    //Set up your arguments and expectations
    const expected = 0;
    //Act
    //Call the function you're testing and set the result to a const
    const actual = compareNumbers(10, 10);
    //Expect
    //Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
