const dotenv = require("dotenv");
dotenv.config();

const apiOptions = {
    apiKey: process.env.YOUR_API_KEY
};

console.log(apiOptions.apiKey);