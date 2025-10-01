import { Router } from "express";
import { createEmployeeController, 
        getAllEmployeeController,
        getEmployeeByIdController,
        UpdateEmployeeByIdController,
        deleteEmployeeController} from "../controllers/employeeControllers";

const router = Router();


router.post("/", createEmployeeController);
router.get("/", getAllEmployeeController);
router.get("/:id", getEmployeeByIdController);
router.put("/:id", UpdateEmployeeByIdController);
router.delete("/:id", deleteEmployeeController);



export default router;