import { employees, employeesData } from "../../../data/employees";
import { createDocument,updateDocument,getDocuments } from "../repositories/firestoreRepository";


export const createEmployee = async (
  newEmployee: Omit<employeesData, "id">
): Promise<employeesData> => {
  try {
    const newId = await createDocument<employeesData>("employee", newEmployee);
    return {
      id: Number(newId), ...newEmployee,
      ...newEmployee,
    };
  } catch (error) {
    console.error("Error creating employee:", error);
    throw new Error("Failed to create employee");
  }
};

export const getAllEmployees = async (): Promise<employeesData[]> => {
  const snapshot = await getDocuments("employee");
  return snapshot.docs.map((doc: any) => ({
    id: Number(doc.id) || 0,
    ...(doc.data() as Omit<employeesData, "id">),
  }));
};

export const getEmployeebyId = (id: number): employeesData | undefined => {
  return employees.find((emp) => emp.id === id);
};

export const updateEmployeeById = async (
  id: number,
  updateData: Partial<employeesData>
): Promise<void> => {
  await updateDocument<employeesData>("employee", String(id), updateData);
};

export const deleteEmployeeById = (id: number): any => {
  const idx = employees.findIndex((emp) => emp.id === id);
  if (idx === -1) {
    return { ok: false, code: "NOT_FOUND", message: "Employee not found" };
  }

  const [deleted] = employees.splice(idx, 1);
  return { ok: true, data: deleted, message: "Employee deleted" };
};

export const getEmployeesByBranch = async (branchId: number): Promise<employeesData[]> => {
  const all = await getAllEmployees();
  return all.filter((e) => e.branchId === branchId);
};

export const getEmployeesByDepartment = async (department: string): Promise<employeesData[]> => {
  const all = await getAllEmployees();
  return all.filter((e) => e.department === department);
};
