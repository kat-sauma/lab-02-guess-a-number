export function guessesLeft(totalTries) {
    return totalTries - 1;
}

export function compareNumbers(theirGuess, myNumber) {
    if (theirGuess > myNumber) {
        return 1;
    } else if (theirGuess < myNumber) {
        return -1;
    } else {
        return 0;
    }
}

// export function limit(tries, zero) {
//     if (tries < zero)
//         return 0;
}