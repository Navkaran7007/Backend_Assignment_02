import { Router } from "express";
import { createEmployeeController, 
        getAllEmployeeController,
        getEmployeeByIdController} from "../controllers/employeeControllers";


const router = Router();


router.post("/", createEmployeeController);
router.get("/", getAllEmployeeController);
router.get("/:id", getEmployeeByIdController);



export default router;