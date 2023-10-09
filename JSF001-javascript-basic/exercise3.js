// Exercise
// 63 seconds 1m3s
const num = 63;
const second = 60;

const sec = num % second;
const min = (num - sec) / second;
console.log(min + "m" + sec + "s");

// 27369 seconds 7h36m9s
const num1 = 27369;

const sec1 = num1 % second;
const min1 = (num1 - sec1) / second;
const hour = (min1 - min1 % second) / second;
console.log(hour + "h" + min1 % 60 + "m" + sec1 + "s");