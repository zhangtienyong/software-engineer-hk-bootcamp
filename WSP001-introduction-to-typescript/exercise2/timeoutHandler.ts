/*
const timeoutHandler = () => {
  console.log("Timeout happens!");
};

const timeout = 1000;

setTimeout(timeoutHandler, timeout);
*/

const timeoutHandler = (): void => {
    console.log("Timeout happens!");
};

const timeout: number = 1000;

setTimeout(timeoutHandler, timeout);