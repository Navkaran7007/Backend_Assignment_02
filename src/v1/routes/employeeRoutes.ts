import { Router } from "express";
import { createEmployeeController, 
        getAllEmployeeController} from "../controllers/employeeControllers";


const router = Router();


router.post("/", createEmployeeController);
router.get("/", getAllEmployeeController);



export default router;