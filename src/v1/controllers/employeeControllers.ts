import { Request, Response } from "express";
import { createEmployee, getAllEmployees} from "../services/employeeServices";

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

export const getAllEmployeeController = ( req: Request, res: Response): void => {
  try {
    const data = getAllEmployees();
    res.status(200).json({ message: "Employees fetched", data });
  } catch {
    res.status(500).json({ message: "Error fetching employees" });
  }
};
