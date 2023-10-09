// Promisify the following built-in functions:

import readline, { Interface } from 'readline';

const readLineInterface: Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLineInterface.question("What is your name?", (answer: string): void => {
    console.log(`Your name is ${answer}`);
    readLineInterface.close();
});
