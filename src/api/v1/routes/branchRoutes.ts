import { Router } from "express";
import { createBranchController, 
    getAllBranchesController,
    getBranchByIdController,
    updateBranchByIdController,
    deleteBranchController} from "../controllers/branchControllers";
import { validateBody, validateParams } from "../middleware/validate";
import {
  createBranchSchema,
  updateBranchSchema,
  idParamSchema,
} from "../validation/branchSchemas";

const router = Router();
router.post("/", validateBody(createBranchSchema), createBranchController);
router.get("/", getAllBranchesController);
router.get("/:id", validateParams(idParamSchema), getBranchByIdController);
router.put("/:id",validateParams(idParamSchema),validateBody(updateBranchSchema),updateBranchByIdController);
router.delete("/:id", validateParams(idParamSchema), deleteBranchController);

export default router;