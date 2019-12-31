// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

function pigIt(str){
    str = str.split(" ");
    str.forEach((word, index) => {
        if (word === "." || word === "," || word === "!" || word === "?") {
            return;
        }
        str[index] = word.substring(1) + word.charAt(0) + "ay";
    });
    return str.join(' ');
}

console.log(pigIt("Hello world !"));