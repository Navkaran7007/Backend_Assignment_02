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

router.post("/",validateBody(createEmployeeSchema),createEmployeeController);
router.get("/", getAllEmployeeController);
router.get("/branch/:branchId", validateParams(branchParamSchema),getEmployeesByBranch);
router.get("/department/:department",validateParams(departmentParamSchema),getEmployeesByDepartment);
router.get("/:id",validateParams(idParamSchema),getEmployeeByIdController);
router.put("/:id",validateParams(idParamSchema),validateBody(updateEmployeeSchema),UpdateEmployeeByIdController);
router.delete("/:id",validateParams(idParamSchema),deleteEmployeeController);

export default router;
