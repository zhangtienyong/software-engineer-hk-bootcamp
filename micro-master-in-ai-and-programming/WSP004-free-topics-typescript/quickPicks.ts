import checkMarkSix from './mark-six-checker';

//console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]));

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
  
  console.log(quickPicks([1, 3, 5, 7, 9, 11], 1));
  console.log(quickPicks([1, 3, 5, 7, 9, 11], 3));
