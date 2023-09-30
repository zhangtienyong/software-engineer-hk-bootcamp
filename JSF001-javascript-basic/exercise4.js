// seat 1- 70

// Registration number: 1
// Row: 1
// Column: 1

const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const col = [1, 2, 3, 4, 5, 6, 7];

function registrationNumber() {
  let seat = 1;
  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < col.length; j++) {
      console.log(`Seat: ${seat}`);
      console.log(`Registration number:`);
      console.log(`Row: ${row[i]}`);
      console.log(`Column: ${col[j]}`);
      seat++;
    }
  }
}

registrationNumber();