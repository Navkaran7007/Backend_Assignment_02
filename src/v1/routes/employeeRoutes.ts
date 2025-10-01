import { Router } from "express";
import { createEmployeeController} from "../controllers/employeeControllers";

const router = Router();


router.post("/", createEmployeeController);


export default router;