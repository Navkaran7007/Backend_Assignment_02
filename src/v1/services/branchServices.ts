import { branches, Branch } from "../../data/branches";

export const createBranch = (newBranch: Omit<Branch, "id">): Branch => {
  const id = branches.length ? branches[branches.length - 1].id + 1 : 1;
  const branch: Branch = { id, ...newBranch };
  branches.push(branch);
  return branch;
};

export const getAllBranches = (): Branch[] => {
  return structuredClone(branches);
};