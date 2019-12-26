// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format
// (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(intervalInSeconds) {
    const SECONDS_IN_HOUR = 3600;
    const SECONDS_IN_MINUTE = 60;

    let readableHours = Math.floor(intervalInSeconds / SECONDS_IN_HOUR);
    let remainder = intervalInSeconds % SECONDS_IN_HOUR;

    let readableMinutes = Math.floor(remainder / SECONDS_IN_MINUTE);
    let readableSeconds = remainder % SECONDS_IN_MINUTE;

    return formatTimeComponent(readableHours) + ":" + formatTimeComponent(readableMinutes) + ":" + formatTimeComponent(readableSeconds);
}

function formatTimeComponent(timeComponent) {
    if (timeComponent < 10) {
        return "0" + timeComponent;
    } else {
        return timeComponent;
    }
}

console.log(humanReadable(86399));