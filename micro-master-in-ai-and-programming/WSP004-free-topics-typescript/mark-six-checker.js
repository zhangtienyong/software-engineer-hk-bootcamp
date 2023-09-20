function checkMarkSix(markSixNumbers, bidNumbers) {
    var sortedMarkSixNumbers = markSixNumbers.slice().sort(function (a, b) { return a - b; });
    var sortedBidNumbers = bidNumbers.slice().sort(function (a, b) { return a - b; });
    for (var i = 0; i < sortedBidNumbers.length; i++) {
        if (sortedMarkSixNumbers.indexOf(sortedBidNumbers[i]) === -1) {
            return false;
        }
    }
    return true;
}
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]));
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]));
console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]));
