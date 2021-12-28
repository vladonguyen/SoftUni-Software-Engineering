function time (input) {
let hour = Number(input[0]);
let minutes = Number(input[1]) + 15;

// if minutes become more than hour
if (minutes >= 60) {
    hour += 1;
    minutes = minutes % 60;
}

// if hour is greater than 23 than restart to 0

if (hour > 23) {
    hour = 0;
}

// if minutes are less than 10
if (minutes < 10) {
    console.log(`${hour}:0${minutes}`);
} else {
console.log(`${hour}:${minutes}`)}
}

time (["23", "59"]);