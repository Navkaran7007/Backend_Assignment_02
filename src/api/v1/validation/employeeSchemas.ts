import Joi from "joi";
import { EmployeeRequestModel } from "../models/employeeRequestModel";

/**
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - name
 *         - position
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           description: Full name of the employee
 *           example: "Nav"
 *         position:
 *           type: string
 *           description: Job title of the employee
 *           example: "Software Engineer"
 *         email:
 *           type: string
 *           format: email
 *           description: Employee email address
 *           example: "nav@gmail.com"
 *         branchId:
 *           type: number
 *           description: Branch ID the employee belongs to
 *           example: 7
 */
export const createEmployeeSchema = Joi.object<EmployeeRequestModel>({
  name: Joi.string().trim().required(),
  position: Joi.string().trim().required(),
  email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
  branchId: Joi.number().optional(),
});
/**
 * @openapi
 * components:
 *   schemas:
 *     EmployeeUpdate:
 *       type: object
 *       description: Fields allowed when updating an employee (at least one required)
 *       properties:
 *         name:
 *           type: string
 *           example: "NAv"
 *         position:
 *           type: string
 *           example: "Junior Developer"
 *         email:
 *           type: string
 *           format: email
 *           example: "nav@gmail.com"
 *         branchId:
 *           type: number
 *           example: 2
 */
export const updateEmployeeSchema = Joi.object<EmployeeRequestModel>({
  name: Joi.string().trim(),
  position: Joi.string().trim(),
  email: Joi.string().trim().email({ tlds: { allow: false } }),
  branchId: Joi.number(),
}).min(1);

/**
 * @openapi
 * components:
 *   schemas:
 *     EmployeeIdParam:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: Employee numeric ID
 *           example: 7
 */
export const idParamSchema = Joi.object({
  id: Joi.number().required(),
});

/**
 * @openapi
 * components:
 *   schemas:
 *     BranchParam:
 *       type: object
 *       required:
 *         - branchId
 *       properties:
 *         branchId:
 *           type: integer
 *           description: Branch ID used for filtering employees
 *           example: 7
 */
export const branchParamSchema = Joi.object({
  branchId: Joi.number().required(),
});
/**
 * @openapi
 * components:
 *   schemas:
 *     DepartmentParam:
 *       type: object
 *       required:
 *         - department
 *       properties:
 *         department:
 *           type: string
 *           description: Department name for filtering employees
 *           example: "HR"
 */
export const departmentParamSchema = Joi.object({
  department: Joi.string().trim().min(1).required(),
});
