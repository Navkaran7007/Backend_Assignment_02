import { Router } from "express";
import { createBranchController, 
    getAllBranchesController,
    getBranchByIdController,
    updateBranchByIdController} from "../controllers/branchControllers";


const router = Router();


router.post("/",createBranchController);
router.get("/",getAllBranchesController);
router.get("/:id", getBranchByIdController);
router.put("/:id", updateBranchByIdController);



export default router;