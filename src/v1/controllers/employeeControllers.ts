import { Request, Response } from "express";
import { createEmployee, 
  getAllEmployees, 
  getEmployeebyId, 
  updateEmployeeById} from "../services/employeeServices";
import { employees, type employeesData } from "../../data/employees";

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

export const getEmployeeByIdController = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const employee: employeesData | undefined = getEmployeebyId(Number(id));

    if (employee) {
      res.status(200).json({ message: "Employee Found", data: employee });
    }
    res.status(404).json({ message: "Employee not found" });
  } catch {
    res.status(500).json({ message: "Failed to fetch employee" });
  }
};

export const UpdateEmployeeByIdController = (req: Request, res: Response): void => {
  try {
    const id = Number(req.params.id);
    const result = updateEmployeeById(id, req.body);

    if (result) {
      res.status(200).json({ message: "Contact Updated", data: result });
      return;
    }
      res.status(404).json({ message: "contact not found" });
      return;
  } catch {
      res.status(500).json({ message: "Failed to update employee" });
      return;
  }
};