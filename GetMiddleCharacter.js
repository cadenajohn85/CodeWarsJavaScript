// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(word)
{
    // Original Solution

    // if (word.length % 2 === 0) {
    //     return word.substring(word.length / 2 - 1, word.length / 2 + 1);
    // } else {
    //     return word.substring(word.length / 2 - .5, word.length / 2 + .5);
    // }

    // Refactor to increase readability by using variable for middle index

    let middleIndex = word.length / 2;
    if (word.length % 2 === 0) {
        return word.substring(middleIndex - 1, middleIndex + 1);
    } else {
        return word.charAt(middleIndex);
    }
}

console.log(getMiddle("coder"));