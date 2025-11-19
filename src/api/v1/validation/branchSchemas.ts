import Joi from "joi";
import { BranchRequestModel } from "../models/branchRequestModel";
/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the branch
 *           example: "Downtown"
 *         address:
 *           type: string
 *           description: Physical address of the branch
 *           example: "Downtown"
 *         phone:
 *           type: string
 *           description: Contact phone number of the branch
 *           example: "+1 111-111-1111"
 */
export const createBranchSchema = Joi.object<BranchRequestModel>({
  name: Joi.string().trim().required(),
  address: Joi.string().trim().optional(),
  phone: Joi.string().trim().optional(),
});

/**
 * @openapi
 * components:
 *   schemas:
 *     BranchUpdate:
 *       type: object
 *       description: Fields allowed when updating a branch
 *       properties:
 *         name:
 *           type: string
 *           example: "Updated Branch Name"
 *         address:
 *           type: string
 *           example: "123"
 *         phone:
 *           type: string
 *           example: "+1 111-111-1111"
 */
export const updateBranchSchema = Joi.object<BranchRequestModel>({
  name: Joi.string().trim(),
  address: Joi.string().trim(),
  phone: Joi.string().trim(),
}).min(1);

/**
 * @openapi
 * components:
 *   schemas:
 *     BranchIdParam:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: Numeric identifier for the branch
 *           example: 7
 */
export const idParamSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});
