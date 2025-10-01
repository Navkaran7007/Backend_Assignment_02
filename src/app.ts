import express, { Express } from "express";
import employeeRoutes from "./v1/routes/employeeRoutes";
// Initialize Express application
const app: Express = express();
app.use(express.json());
// Importing morgan
import morgan from "morgan";

// Use morgan for HTTP request logging
app.use(morgan("combined"));

app.use('/api/v1/employee', employeeRoutes)

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/health", (req, res) => {
    res.json({
        status: 200,
        text: "Server is healthy"
    });
});


export default app;