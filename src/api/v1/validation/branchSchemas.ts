import Joi from "joi";
import { BranchRequestModel } from "../models/branchRequestModel";

export const createBranchSchema = Joi.object<BranchRequestModel>({
  name: Joi.string().trim().required(),
  address: Joi.string().trim().optional(),
  phone: Joi.string().trim().optional(),
});

export const updateBranchSchema = Joi.object<BranchRequestModel>({
  name: Joi.string().trim(),
  address: Joi.string().trim(),
  phone: Joi.string().trim(),
}).min(1);

export const idParamSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});
