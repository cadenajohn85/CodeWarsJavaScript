function duplicateEncode(word){
    let output = "";
    let lcWord = word.toLowerCase();
    for (let i = 0; i < lcWord.length; i++) {
        let nextLetter = lcWord.substring(i, i + 1);
        if (lcWord.indexOf(nextLetter) === lcWord.lastIndexOf(nextLetter)) {
            output += "(";
        } else {
            output += ")";
        }
    }
    return output;
}
