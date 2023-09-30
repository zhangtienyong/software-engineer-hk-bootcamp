// Promisify the following built-in functions:

import fs, { ReadStream } from 'fs';
import papa from 'papaparse';

const file:ReadStream = fs.createReadStream("anycsv.csv");
papa.parse(file, {
    worker: true,
    complete: function (results, file: ReadStream): void {
        console.log(results);
    },
});