import { Request, Response } from "express";
import { createBranch, getAllBranches , getBranchById} from "../services/branchServices";

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