import { Request, Response } from "express";
import { createBranch, 
  getAllBranches, 
  getBranchById, 
  updateBranchById, 
  deleteBranchById } from "../services/branchServices";
import { successResponse, errorResponse } from "../models/responseModel";

export const createBranchController = (req: Request, res: Response): void => {
  try {
    if (!req.body.name) {
      res.status(400).json(errorResponse("Branch name is required"));
      return;
    }

    const created = createBranch(req.body);
    res.status(201).json(successResponse(created, "Branch created successfully"));
    return;
  } catch {
    res.status(500).json(errorResponse("Error creating branch"));
    return;
  }
};

export const getAllBranchesController = (req: Request, res: Response): void => {
  try {
    const data = getAllBranches();
    res.status(200).json(successResponse(data, "Branches fetched"));
  } catch {
    res.status(500).json(errorResponse("Error fetching branches"));
  }
};

export const getBranchByIdController = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const branch = getBranchById(Number(id));

    if (branch) {
      res.status(200).json(successResponse(branch, "Branch found"));
      return;
    }

    res.status(404).json(errorResponse("Branch not found"));
  } catch {
    res.status(500).json(errorResponse("Error fetching branch"));
  }
};

export const updateBranchByIdController = (req: Request, res: Response): void => {
  try {
    const id = Number(req.params.id);
    const result = updateBranchById(id, req.body);

    if (result) {
      res.status(200).json(successResponse(result, "Branch updated"));
      return;
    }

    res.status(404).json(errorResponse("Branch not found"));
  } catch {
    res.status(500).json(errorResponse("Error updating branch"));
  }
};

export const deleteBranchController = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const result = deleteBranchById(Number(id));

    if (result.ok) {
      res.status(200).json(successResponse(result.data, result.message));
      return;
    }

    if (result.code === "NOT_FOUND") {
      res.status(404).json(errorResponse(result.message));
      return;
    }

    res.status(500).json(errorResponse("Something went wrong"));
  } catch {
    res.status(500).json(errorResponse("Failed to delete branch"));
  }
};
