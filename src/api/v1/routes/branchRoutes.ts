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
/**
 * @openapi
 * /branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *     responses:
 *       '201':
 *         description: Branch created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 *       '400':
 *         description: Invalid branch data or missing name
 *       '500':
 *         description: Error creating branch
 */
router.post("/", validateBody(createBranchSchema), createBranchController);
/**
 * @openapi
 * /branches:
 *   get:
 *     summary: Retrieve all branches
 *     tags: [Branches]
 *     responses:
 *       '200':
 *         description: Branches fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Branch'
 *       '500':
 *         description: Error fetching branches
 */
router.get("/", getAllBranchesController);
/**
 * @openapi
 * /branches/{id}:
 *   get:
 *     summary: Retrieve a branch by its ID
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The numeric identifier of the branch
 *     responses:
 *       '200':
 *         description: Branch found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 *       '404':
 *         description: Branch not found
 *       '500':
 *         description: Error fetching branch
 */
router.get("/:id", validateParams(idParamSchema), getBranchByIdController);
/**
 * @openapi
 * /branches/{id}:
 *   put:
 *     summary: Update an existing branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The numeric identifier of the branch
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BranchUpdate'
 *     responses:
 *       '200':
 *         description: Branch updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 *       '404':
 *         description: Branch not found
 *       '500':
 *         description: Error updating branch
 */
router.put("/:id",validateParams(idParamSchema),validateBody(updateBranchSchema),updateBranchByIdController);
/**
 * @openapi
 * /branches/{id}:
 *   delete:
 *     summary: Delete a branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The numeric identifier of the branch
 *     responses:
 *       '200':
 *         description: Branch deleted successfully
 *       '404':
 *         description: Branch not found
 *       '500':
 *         description: Failed to delete branch
 */
router.delete("/:id", validateParams(idParamSchema), deleteBranchController);

export default router;