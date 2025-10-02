import { Router } from "express";
import { createBranchController} from "../controllers/branchControllers";

const router = Router();


router.post("/",createBranchController)



export default router;