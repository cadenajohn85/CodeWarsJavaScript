// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
//     It should remove all values from list a, which are present in list b.

function array_diff(a, b) {
    // Original Solution

    // for (let i = 0; i < b.length; i++) {
    //     while (a.indexOf(b[i]) !== -1) {
    //         a.splice(a.indexOf(b[i]), 1);
    //     }
    // }
    // return a;

    // Refactor using .filter()

    return a.filter(element => !b.includes(element));
}

console.log(array_diff([3, 4], [3]));
console.log(array_diff([1, 8, 2], []));
console.log(array_diff([], [4, 5]));