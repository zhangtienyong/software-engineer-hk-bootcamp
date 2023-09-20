export default function checkMarkSix(markSixNumbers: number[], bidNumbers: number[]): boolean {
    const sortedMarkSixNumbers: number [] = markSixNumbers.slice().sort((a: number, b: number): number => a - b);
    const sortedBidNumbers: number[] = bidNumbers.slice().sort((a: number, b: number): number => a - b);
  
    for (let i:number = 0; i < sortedBidNumbers.length; i++) {
      if (sortedMarkSixNumbers.indexOf(sortedBidNumbers[i]) === -1) {
        return false;
      }
    }

    return true;
}

// returns: true
//console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]));
// returns: false
//console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3])); 
// returns: true
//console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]));
