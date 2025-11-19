import { Router } from "express";
import { createEmployeeController, 
        getAllEmployeeController,
        getEmployeeByIdController,
        UpdateEmployeeByIdController,
        deleteEmployeeController,
getEmployeesByBranch,
getEmployeesByDepartment} from "../controllers/employeeControllers";
import { validateBody, 
         validateParams } from "../middleware/validate";
import {
  createEmployeeSchema,
  updateEmployeeSchema,
  branchParamSchema,
  idParamSchema,
  departmentParamSchema,
} from "../validation/employeeSchemas";

const router = Router();
/**
 * @openapi
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       '201':
 *         description: Employee created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Failed to create employee
 */
router.post("/",validateBody(createEmployeeSchema),createEmployeeController);
/**
 * @openapi
 * /employees:
 *   get:
 *     summary: Retrieve a list of all employees
 *     tags: [Employees]
 *     responses:
 *       '200':
 *         description: Employees fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       '500':
 *         description: Error fetching employees
 */
router.get("/", getAllEmployeeController);
/**
 * @openapi
 * /employees/branch/{branchId}:
 *   get:
 *     summary: Retrieve employees by branch ID
 *     tags: [Employees]
 *     parameters:
 *       - name: branchId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Branch ID
 *     responses:
 *       '200':
 *         description: Employees fetched for the branch
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       '400':
 *         description: Invalid branch ID
 *       '404':
 *         description: No employees found for this branch
 *       '500':
 *         description: Failed to fetch employees by branch
 */
router.get("/branch/:branchId", validateParams(branchParamSchema),getEmployeesByBranch);
/**
 * @openapi
 * /employees/department/{department}:
 *   get:
 *     summary: Retrieve employees by department
 *     tags: [Employees]
 *     parameters:
 *       - name: department
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Department name
 *     responses:
 *       '200':
 *         description: Employees fetched for the department
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       '400':
 *         description: Invalid department
 *       '404':
 *         description: No employees found in this department
 *       '500':
 *         description: Failed to fetch employees by department
 */
router.get("/department/:department",validateParams(departmentParamSchema),getEmployeesByDepartment);
/**
 * @openapi
 * /employees/{id}:
 *   get:
 *     summary: Retrieve a single employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     responses:
 *       '200':
 *         description: Employee found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Error retrieving employee
 */
router.get("/:id",validateParams(idParamSchema),getEmployeeByIdController);
/**
 * @openapi
 * /employees/{id}:
 *   put:
 *     summary: Update an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeUpdate'
 *     responses:
 *       '200':
 *         description: Employee updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Failed to update employee
 */
router.put("/:id",validateParams(idParamSchema),validateBody(updateEmployeeSchema),UpdateEmployeeByIdController);
/**
 * @openapi
 * /employees/{id}:
 *   delete:
 *     summary: Delete an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     responses:
 *       '200':
 *         description: Employee deleted successfully
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Failed to delete employee
 */
router.delete("/:id",validateParams(idParamSchema),deleteEmployeeController);

export default router;
