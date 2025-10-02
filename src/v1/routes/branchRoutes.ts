import { Router } from "express";
import { createBranchController, 
    getAllBranchesController,
    getBranchByIdController,
    updateBranchByIdController,
    deleteBranchController} from "../controllers/branchControllers";


const router = Router();


router.post("/",createBranchController);
router.get("/",getAllBranchesController);
router.get("/:id", getBranchByIdController);
router.put("/:id", updateBranchByIdController);
router.delete("/:id", deleteBranchController);



export default router;