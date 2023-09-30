import fs from "fs";

async function readQuotes() {
    try {
        const data = await fs.promises.readFile("quotes.txt");
        console.log(data.toString("utf8"));
    } catch (error) {
        console.log(error);
    }
    
}

console.log("The readQuotes function: ");
readQuotes();

async function writeQuotes() {
    const dijkstraQuote1 = "Computer science is no more about computers than astronomy is about telescopes.\n";
    const dijkstraQuote2 = "Simplicity is prerequisite for reliability.\n";

    try {
        await fs.promises.writeFile("quote-dijikstra.txt", dijkstraQuote1, {flag: "w", });
        await fs.promises.writeFile("quote-dijikstra.txt", dijkstraQuote2, { flag: "a+", });
    } catch (error) {
        console.log(error);
    }
}

console.log("The writeQuotes function: ");
writeQuotes();