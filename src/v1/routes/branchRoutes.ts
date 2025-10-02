import { Router } from "express";
import { createBranchController, getAllBranchesController} from "../controllers/branchControllers";

const router = Router();


router.post("/",createBranchController);
router.get("/",getAllBranchesController)



export default router;