import Joi from "joi";
import { EmployeeRequestModel } from "../models/employeeRequestModel";

export const createEmployeeSchema = Joi.object<EmployeeRequestModel>({
  name: Joi.string().trim().required(),
  position: Joi.string().trim().required(),
  email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
  branchId: Joi.number().optional(),
});

export const updateEmployeeSchema = Joi.object<EmployeeRequestModel>({
  name: Joi.string().trim(),
  position: Joi.string().trim(),
  email: Joi.string().trim().email({ tlds: { allow: false } }),
  branchId: Joi.number(),
}).min(1);

export const idParamSchema = Joi.object({
  id: Joi.number().required(),
});

export const branchParamSchema = Joi.object({
  branchId: Joi.number().required(),
});

export const departmentParamSchema = Joi.object({
  department: Joi.string().trim().min(1).required(),
});
