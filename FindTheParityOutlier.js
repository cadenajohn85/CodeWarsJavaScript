// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The
// array is either entirely comprised of odd integers or entirely comprised of even integers except for a single
// integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    let oddCounter = 0, evenCounter = 0;
    let isMostlyOdd;
    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 === 0) {
            evenCounter++;
        } else {
            oddCounter++;
        }
    }
    if (oddCounter > evenCounter) {
        isMostlyOdd = true;
    } else {
        isMostlyOdd = false;
    }
    if (isMostlyOdd) {
        for (let integer of integers) {
            if (integer % 2 === 0) {
                return integer;
            }
        }
    } else {
        for (let integer of integers) {
            if (integer % 2 !== 0) {
                return integer;
            }
        }
    }
}

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
