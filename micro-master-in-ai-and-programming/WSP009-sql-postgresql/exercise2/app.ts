import pg from "pg";
import xlsx from "xlsx";
import dotenv from "dotenv";

dotenv.config();

const client = new pg.Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

const main = async() => {
    try {
        await client.connect();
        const filePath = "./WSP009-exercise.xlsx";
        const workbook = xlsx.readFile(filePath);
        // user data
        const user = xlsx.utils.sheet_to_json(workbook.Sheets["user"]);
        // memo data
        const memo = xlsx.utils.sheet_to_json(workbook.Sheets["memo"]);
        // Read data from sheet then store to database.

        console.log("Data imported successfully.");
    } catch (error) {
        console.error("Error importing data: ", error);
    } finally {
        await client.end();
    }
};

main();


// for (const row of sheetData) {
//     await client.query(
//       "INSERT INTO memo_wall (column1, column2, column3) VALUES ($1, $2, $3)",
//       [row.column1, row.column2, row.column3]
//     );
//   }