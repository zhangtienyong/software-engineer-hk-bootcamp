//Continued with the Quick Pick function, do not return the result immediately. Instead, print the result one by one with one second interval.
//The mark six result: 1, 3, 5, 7, 9 , 11
// After 1 second
//Your quick pick: [1,3]
//WIN
// After 2 seconds
//Your quick pick: [9, 21]
//LOSE

import checkMarkSix from './mark-six-checker';

function quickPicks(markSixResult: number[], numberOfBids: number): void {
    console.log("The mark six result: " + markSixResult.join(", "));
  
    for (let i: number = 0; i < numberOfBids; i++) {
      setTimeout((): void => {
        const bid: number[] = generateRandomBid();
        const win: boolean = checkMarkSix(markSixResult, bid);
        console.log(`Your quick pick: [${bid.join(", ")}]`);
        console.log(win ? "WIN" : "LOSE");
      }, (i + 1) * 1000);
    }
  }
  
  function generateRandomBid(): number[] {
    const bid: number[] = [];
    while (bid.length < 2) {
      const randomNum: number = Math.floor(Math.random() * 20) + 1;
      if (!bid.includes(randomNum)) {
        bid.push(randomNum);
      }
    }
    return bid;
  }
  
quickPicks([1, 3, 5, 7, 9, 11], 2);
  