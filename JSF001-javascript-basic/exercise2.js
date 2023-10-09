// String .length
console.log("STRING".length); // 6

// String .substring(begin)
console.log("STRING".substring(2)); // RING

// String .substring(begin, end)
console.log("STRING".substring(2, 6)); // RING
console.log("STRING".substring(2, 0)); // ST
console.log("STRING".substring(2, 3)); // R

// String .toLowerCase() & .toUpperCase()
console.log("stringlow".toLowerCase());
console.log("stringupper".toUpperCase());

// Combine above altogether
console.log("This is "+ "Hong Kong");

// Constant Variable


// Exercise
const sentence = "Tecky Academy is the best coding school in Hong Kong";
console.log(sentence.substring(0,5));
console.log(sentence.substring(6,13));
console.log(sentence.substring(0,13).toLowerCase() + sentence.substring(13,43) + sentence.substring(43).toUpperCase());