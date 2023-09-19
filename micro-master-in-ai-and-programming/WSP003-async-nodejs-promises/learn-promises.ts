import fs from "fs";

console.log("Step 1");

fs.promises.writeFile(
    "quotes-dijkstra.txt", 
    "Simplicity is prerequisite for reliability.\n", 
    { flag: "w" })
    .then(function (): number {
        console.log("Step 3");
        return 12345678;
    })
    .then(function (value: number): number {
        console.log("Step 4");
        console.log(`Return value here same as return value of step 3 promise ${value}`);
        return value;
    })
    .catch(function (error: any): void {
        console.log("Step 5");
        console.log(error);
    });

console.log("Step 2");
