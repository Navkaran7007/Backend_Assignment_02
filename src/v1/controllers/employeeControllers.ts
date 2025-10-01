import { Request, Response } from "express";
import { createEmployee} from "../services/employeeServices";

export const createEmployeeController = (req: Request, res: Response): void => {
  try {
    if (!req.body.name) {
      res.status(400).json({ message: "Employee name is required" });
      return;
    }
    const newEmployee = createEmployee(req.body);

    res.status(201).json({
      message: "Employee created successfully",
      data: newEmployee,
    });
  } catch {
    res.status(500).json({ message: "Failed to create employee" });
  }
};