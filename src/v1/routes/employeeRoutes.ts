import { Router } from "express";
import { createEmployeeController, 
        getAllEmployeeController,
        getEmployeeByIdController,
        UpdateEmployeeByIdController} from "../controllers/employeeControllers";

const router = Router();


router.post("/", createEmployeeController);
router.get("/", getAllEmployeeController);
router.get("/:id", getEmployeeByIdController);
router.put("/:id", UpdateEmployeeByIdController);



export default router;