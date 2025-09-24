import express, { Express } from "express";

// Initialize Express application
const app: Express = express();

// Importing morgan
import morgan from "morgan";

// Use morgan for HTTP request logging
app.use(morgan("combined"));

// Define a route
// @ts-ignore
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;