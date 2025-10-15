import { branches, Branch } from "../../../data/branches";
import {
  createDocument,
  updateDocument,
  getDocuments
} from "../repositories/firestoreRepository";

const COLLECTION = "branch";

export const createBranch = async (
  newBranch: Omit<Branch, "id">
): Promise<Branch> => {
  const numericId = Date.now();
  await createDocument<Branch>(COLLECTION, newBranch, String(numericId));
  return { id: numericId, ...newBranch };
};

export const getAllBranches = async (): Promise<Branch[]> => {
  const snapshot = await getDocuments(COLLECTION);
  return snapshot.docs.map((doc) => ({
    id: Number(doc.id) || 0,
    ...(doc.data() as Omit<Branch, "id">),
  }));
};

export const getBranchById = (id: number): Branch | undefined => {
  return branches.find(b => b.id === id);
};

export const updateBranchById = async (
  id: number,
  updateData: Partial<Branch>
): Promise<void> => {
  await updateDocument<Branch>(COLLECTION, String(id), updateData);
};

export const deleteBranchById = (id: number): any => {
  const idx = branches.findIndex(b => b.id === id);
  if (idx === -1) {
    return { ok: false, code: "NOT_FOUND", message: "Branch not found" };
  }

  const [deleted] = branches.splice(idx, 1);
  return { ok: true, data: deleted, message: "Branch deleted" };
};

