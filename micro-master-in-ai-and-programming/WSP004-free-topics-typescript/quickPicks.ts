//Create another function quickPicks() that may quickly pick several bids randomly and check against one single result.
//The first parameter is the mark six result. The second parameter is the number of bids.
//The function should return an array of the result object with the bid generated and the result from checkMarkSix().

import checkMarkSix from './mark-six-checker';

function quickPicks(markSixResult: number[], numberOfBids: number): { bid: number[], win: boolean }[] {
    const result: { bid: number[], win: boolean }[] = [];
  
    for (let i: number = 0; i < numberOfBids; i++) {
      const bid: number[] = generateRandomBid();
      const win: boolean = checkMarkSix(markSixResult, bid);
      result.push({ bid, win });
    }
  
    return result;
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

// returns: [{"bid": [1, 3], "win": true}]
//console.log(quickPicks([1, 3, 5, 7, 9, 11], 1));
// returns: [{"bid": [2, 4], "win": false}, {"bid": [2, 5], "win": false}, {"bid": [7, 9], "win": true}]
//console.log(quickPicks([1, 3, 5, 7, 9, 11], 3));
