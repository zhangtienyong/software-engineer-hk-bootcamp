// This file contains the main application logic, including routing and middleware configuration.
import express from 'express';
import path from 'path';

const app = express();

// 1. Third party middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 2. custom middleware

// 3. Define routes handler
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/restaurant', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'restaurant.html'));
});

// 4. Serve static files
app.use(express.static(path.join(__dirname, "public")));

export default app;