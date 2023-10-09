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
    await client.connect();

    const user = {
        username: "user1",
        password: "pwd1",
    };

    await client.query(
        "INSERT INTO users (username,password) VALUES ($1,$2)",
        [user.username, user.password]
    );

    const result = await client.query(
        "SELECT * FROM users WHERE username = $1",
        ["user1"]
    );

    console.log(result.rows[0].username);
    await client.end();
};

main();
