import { Request, Response } from "express";
import { createEmployee, 
  getAllEmployees, 
  getEmployeebyId, 
  updateEmployeeById,
  deleteEmployeeById,
} from "../services/employeeServices";
import { employees, type employeesData } from "../../data/employees";
import * as employeeServices from "../services/employeeServices";

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
      return;
    }
    res.status(404).json({ message: "Employee not found" });
    return;
  } catch {
    res.status(500).json({ message: "Failed to fetch employee" });
    return;
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

export const deleteEmployeeController = (req: Request, res: Response): void => {
  const { id } = req.params;
  const result = deleteEmployeeById(Number(id));

  if (result.ok) {
    res.status(200).json({ message: result.message, data: result.data });
  } else if (result.code === "NOT_FOUND") {
    res.status(404).json({ message: result.message });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
}

export const getEmployeesByBranch = (req: Request, res: Response): void => {
  const branchId = Number(req.params.branchId);
  if (isNaN(branchId)) {
    res.status(404).json({ message: "Employees not found" });
    return;
  }
  const data = employeeServices.getEmployeesByBranch(branchId);
   res.status(200).json({ message: "Employees fetched for branch", data });
   return;
};

export const getEmployeesByDepartment = (req: Request, res: Response): void => {
  const department = req.params.department;
  if (!department || department === "undefined" || department === "null") {
    res.status(404).json({ message: "Department not found" });
    return;
  }
  const data = employeeServices.getEmployeesByDepartment(department);
    res.status(200).json({ message: "Employees fetched for department", data });
    return;
};
