import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

// The line to serve static files
app.use("/images", express.static("uploads"));

app.get("/", function (req: Request, res: Response) {
  res.end("Hello World");
});

app.get("/text", function (req: Request, res: Response) {
    res.sendFile(path.resolve("assets", "text.txt"));
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});