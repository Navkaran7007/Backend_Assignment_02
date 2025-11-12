import express, { Express } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import { getHelmetConfig } from "../config/helmetConfig";
// Load environment variables BEFORE your internal imports!
dotenv.config();
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";

// Initialize Express application
const app: Express = express();
app.use(express.json());
// Importing morgan
import morgan from "morgan";

app.use(helmet());
app.use(getHelmetConfig())
// Use morgan for HTTP request logging
app.use(morgan("combined"));

app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/branch', branchRoutes)

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