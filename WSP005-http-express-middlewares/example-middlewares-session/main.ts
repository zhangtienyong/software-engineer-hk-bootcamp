import express, { NextFunction, Request, Response } from "express";
import path from "path";
import expressSession from "express-session";

const app = express();

app.use("/", (req: Request, res: Response): void => {
  res.end("From Get Hello Path Say: Hello World");
});

app.get("/random", (req: Request, res: Response, next: NextFunction): void => {
  if (Math.random() > 0.5) {
    next();
    return;
  }
  res.end("Random value smaller than 0.5");
});

app.get("/random", (req: Request, res: Response, next: NextFunction): void => {
  if (Math.random() < 0.5) {
    next();
    return;
  }
  res.end("Random value greater than 0.5");
});

app.use(
  expressSession({
    secret: "do not use javascript",
    resave: true,
    saveUninitialized: true,
  })
);

declare module "express-session" {
  interface SessionData {
    name?: string;
  }
}

app.get("/name", (req: Request, res: Response): void => {
  req.session.name = "typescript session";
  console.log(req.session);
  res.write(req.session.name);
});

app.use((req: Request, res: Response, next: NextFunction): void => {
  res.sendFile(path.resolve("./public/404.html"));
});

const PORT = 8080;

app.listen(PORT, (): void => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
