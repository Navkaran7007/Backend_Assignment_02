import { branches, Branch } from "../../../data/branches";

export const createBranch = (newBranch: Omit<Branch, "id">): Branch => {
  const id = branches.length ? branches[branches.length - 1].id + 1 : 1;
  const branch: Branch = { id, ...newBranch };
  branches.push(branch);
  return branch;
};

export const getAllBranches = (): Branch[] => {
  return structuredClone(branches);
};

export const getBranchById = (id: number): Branch | undefined => {
  return branches.find(b => b.id === id);
};

export const updateBranchById = (id: number, updateData: Partial<Branch>): Branch | null => {
  const b = branches.find(br => br.id === id);
  return b ? Object.assign(b, updateData) : null;
};

export const deleteBranchById = (id: number): any => {
  const idx = branches.findIndex(b => b.id === id);
  if (idx === -1) {
    return { ok: false, code: "NOT_FOUND", message: "Branch not found" };
  }

  const [deleted] = branches.splice(idx, 1);
  return { ok: true, data: deleted, message: "Branch deleted" };
};

