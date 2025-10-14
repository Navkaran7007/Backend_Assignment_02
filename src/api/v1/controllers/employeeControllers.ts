import { Request, Response } from "express";
import { createEmployee, 
  getAllEmployees, 
  getEmployeebyId, 
  updateEmployeeById,
  deleteEmployeeById,
} from "../services/employeeServices";
import { employees, type employeesData } from "../../../data/employees";
import * as employeeServices from "../services/employeeServices";
import { successResponse, errorResponse } from "../models/responseModel";

export const createEmployeeController = (req: Request, res: Response): void => {
  try {
    if (!req.body.name) {
      res.status(400).json(errorResponse);
      return;
    }
    const newEmployee = createEmployee(req.body);

    res.status(201).json(successResponse(newEmployee ,"Employee created successfully" ));
  } catch {
    res.status(500).json(errorResponse(("Failed to create employee")));
  }
};

export const getAllEmployeeController = ( req: Request, res: Response): void => {
  try {
    const data = getAllEmployees();
    res.status(200).json(successResponse( data,"Employees fetched"));
  } catch {
    res.status(500).json(errorResponse("Error fetching employees"));
  }
};

export const getEmployeeByIdController = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const employee: employeesData | undefined = getEmployeebyId(Number(id));

    if (employee) {
      res.status(200).json(successResponse(employee));
      return;
    }
    res.status(404).json(errorResponse("Employee not found"));
    return;
  } catch {
    res.status(500).json(errorResponse("Failed to fetch employee"));
    return;
  }
};

export const UpdateEmployeeByIdController = (req: Request, res: Response): void => {
  try {
    const id = Number(req.params.id);
    const result = updateEmployeeById(id, req.body);

    if (result) {
      res.status(200).json(successResponse(result));
      return;
    }
      res.status(404).json(errorResponse("contact not found"));
      return;
  } catch {
      res.status(500).json({ message: "Failed to update employee" });
      return;
  }
};

export const deleteEmployeeController = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const result = deleteEmployeeById(Number(id));

    if (result.ok) {
      res.status(200).json(successResponse(result.data, result.message));
      return;
    }
    if (result.code === "NOT_FOUND") {
      res.status(404).json(errorResponse(result.message));
      return;
    }
    res.status(500).json(errorResponse("Something went wrong"));
  } catch {
    res.status(500).json(errorResponse("Failed to delete employee"));
  }
};

export const getEmployeesByBranch = (req: Request, res: Response): void => {
  try {
    const branchId = Number(req.params.branchId);
    if (isNaN(branchId)) {
      res.status(400).json(errorResponse("Invalid branch id"));
      return;
    }

    const data = employeeServices.getEmployeesByBranch(branchId);

    if (!data || data.length === 0) {
      res.status(404).json(errorResponse("Employees not found for branch"));
      return;
    }

    res.status(200).json(successResponse(data, "Employees fetched for branch"));
  } catch {
    res.status(500).json(errorResponse("Failed to fetch employees by branch"));
  }
};

export const getEmployeesByDepartment = (req: Request, res: Response): void => {
  try {
    const department = req.params.department?.trim();

    if (!department) {
      res.status(400).json(errorResponse("Department is required"));
      return;
    }

    const data = employeeServices.getEmployeesByDepartment(department);

    if (!data || data.length === 0) {
      res.status(404).json(errorResponse("Employees not found for department"));
      return;
    }

    res.status(200).json(successResponse(data, "Employees fetched for department"));
  } catch {
    res.status(500).json(errorResponse("Failed to fetch employees by department"));
  }
};
