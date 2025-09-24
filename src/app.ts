import express, { Express } from "express";

// Initialize Express application
const app: Express = express();

// Define a route
// @ts-ignore
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;