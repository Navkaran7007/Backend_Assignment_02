import { Router } from "express";
import { createEmployeeController, 
        getAllEmployeeController,
        getEmployeeByIdController,
        UpdateEmployeeByIdController,
        deleteEmployeeController,
getEmployeesByBranch,
getEmployeesByDepartment} from "../controllers/employeeControllers";

const router = Router();


router.post("/", createEmployeeController);
router.get("/", getAllEmployeeController);
router.get("/:id", getEmployeeByIdController);
router.put("/:id", UpdateEmployeeByIdController);
router.delete("/:id", deleteEmployeeController);
router.get("/branch/:branchId", getEmployeesByBranch);
router.get("/department/:department", getEmployeesByDepartment);



export default router;