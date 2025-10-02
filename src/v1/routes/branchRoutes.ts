import { Router } from "express";
import { createBranchController, 
    getAllBranchesController,
    getBranchByIdController} from "../controllers/branchControllers";


const router = Router();


router.post("/",createBranchController);
router.get("/",getAllBranchesController);
router.get("/:id", getBranchByIdController);



export default router;