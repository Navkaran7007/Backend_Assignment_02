import { Request, Response } from "express";
import { createBranch, getAllBranches , getBranchById, updateBranchById, deleteBranchById} from "../services/branchServices";
import { branches, Branch } from "../../data/branches";

export const createBranchController = (req: Request, res: Response): void => {
  try {
    if (!req.body.name) {
      res.status(400).json({ message: "Branch name is required" });
      return;
    }

    const created = createBranch(req.body);
    res.status(201).json({ message: "Branch created successfully", data: created });
    return;
  } catch {
    res.status(500).json({ message: "Error creating branch" });
    return;
  }
};

export const getAllBranchesController = (_req: Request, res: Response): void => {
  try {
    const data = getAllBranches();
    res.status(200).json({ message: "Branches fetched", data });
  } catch {
    res.status(500).json({ message: "Error fetching branches" });
  }
};

export const getBranchByIdController = (req: Request, res: Response): void => {
  const { id } = req.params;
  const branch = getBranchById(Number(id));
  if (branch) {
    res.status(200).json({ message: "Branch Found", data: branch });
  } else {
    res.status(404).json({ message: "Branch not found" });
  }
};

export const updateBranchByIdController = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const result = updateBranchById(id, req.body);
  if (result) {
    res.status(200).json({ message: "Branch Updated", data: result });
  } else {
    res.status(404).json({ message: "Branch not found" });
  }
};

export const deleteBranchController = (req: Request, res: Response): void => {
  const { id } = req.params;
  const result = deleteBranchById(Number(id));

  if (result.ok) {
    res.status(200).json({ message: result.message, data: result.data });
  } else if (result.code === "NOT_FOUND") {
    res.status(404).json({ message: result.message });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
};