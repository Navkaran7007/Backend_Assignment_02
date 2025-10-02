import { Request, Response } from "express";
import { createBranch } from "../services/branchServices";

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
