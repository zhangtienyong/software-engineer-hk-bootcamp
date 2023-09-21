import express, { Request, Response, NextFunction } from "express";
import path from "path";
import session, { SessionData } from "express-session";

const app = express();
interface CustomSessionData extends SessionData {
  counter?: number;
}

// 1. Middleware to initialize and increment counter
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req: Request, res: Response, next: NextFunction): void => {

  const sessionData = req.session as CustomSessionData;

  if (!sessionData.counter) {
    sessionData.counter = 1;
  } else {
    sessionData.counter = sessionData.counter + 1;
  }
  console.log("Counter: ", sessionData.counter);
  next();
});

// 3. Middleware for logging static file requests
app.get("/", function (req: Request, res: Response): void {
  console.log(`[${new Date().toISOString()}] Request `, req.path);
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/404.html", (req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toISOString()}] Request `, req.path);
  next();
});


app.get("/index.html", (req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toISOString()}] Request `, req.path);
  next();
});

app.get("/css/index.css", (req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toISOString()}] Request `, req.path);
  next();
});

app.get("/img/wall.jpg", (req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toISOString()}] Request `, req.path);
  next();
});

app.get("/js/index.js", (req: Request, res: Response, next: NextFunction): void => {
  console.log(`[${new Date().toISOString()}] Request `, req.path);
  next();
});

const publicPath: string = path.join(__dirname, "public");
app.use(express.static(publicPath));

// 2. Catch-all middleware for handling 404 errors
app.use( function(req: Request, res: Response, next: NextFunction): void {
  res.sendFile(path.resolve("./public/404.html"));
});

const PORT = 8080;
app.listen(PORT, (): void => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
