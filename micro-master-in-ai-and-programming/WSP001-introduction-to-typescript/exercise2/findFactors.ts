/*
function findFactors(num) {
  let factors = [];
  for (let factor = 2; factor <= num / 2; factor++) {
    if (num % factor === 0) {
      factors.push(factor);
    }
  }
  return factors;
}
*/

function findFactors(num: number): number[] {
    let factors: number[] = [];
    for (let factor: number = 2; factor <= num / 2; factor++) {
      if (num % factor === 0) {
        factors.push(factor);
      }
    }
    return factors;
  }