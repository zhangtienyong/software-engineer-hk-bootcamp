import express, { Request, Response, NextFunction } from "express";
import path from "path";
import session, { SessionData } from "express-session";

interface CustomSessionData extends SessionData {
  counter?: number;
}

const app = express();

// Middleware to initialize and increment counter
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  const sessionData = req.session as CustomSessionData;

  if (!sessionData.counter) {
    sessionData.counter = 1;
  } else {
    sessionData.counter++;
  }
  console.log("Counter:", sessionData.counter);
  next();
});

const publicPath: string = path.join(__dirname, "public");
app.use(express.static(publicPath));

// Middleware for logging static file requests
app.use("/static", (req: Request, res: Response, next: NextFunction) => {
  console.log(`[Request ${new Date().toISOString()}]`, req.path);
  next();
});

app.get("/", function (req: Request, res: Response): void {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Catch-all middleware for handling 404 errors
app.use((req: Request, res: Response) => {
  res.status(404).sendFile(path.join(publicPath, "404.html"));
});

const PORT = 8080;
app.listen(PORT, (): void => {
  console.log(`Listening at http://localhost:${PORT}/`);
});