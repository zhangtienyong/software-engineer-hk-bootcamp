import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();

const publicPath: string = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.use((req: Request, res: Response, next: NextFunction): void => {
  res.sendFile(path.resolve("./public/404.html"));
});

const PORT = 8080;
app.listen(PORT, (): void => {
  console.log(`Listening at http://localhost:${PORT}/`);
});

