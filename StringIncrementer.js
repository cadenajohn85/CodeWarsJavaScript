// Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString (strng) {
    let array = strng.split("");
    if (isNaN(array[array.length - 1])) {
        return strng + "1";
    } else {
        let match = strng.match(/\d+$/);
        match = match[0];
        return match;
    }
}

console.log(incrementString("foobar000"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar99"));
console.log(incrementString("foobar099"));
console.log(incrementString(""));