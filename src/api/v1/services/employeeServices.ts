import { employees, employeesData } from "../../../data/employees";

export const createEmployee = (newEmployee: Omit<employeesData, "id">): employeesData => {
  let id = 1;
  if (employees.length > 0) {
    id = employees[employees.length - 1].id + 1;
  }

  const employee: employeesData = {
    id,
    ...newEmployee,
  };

  employees.push(employee);
  return employee;
};

export const getAllEmployees = (): employeesData[] => {
          return structuredClone(employees);
  };

export const getEmployeebyId = (id: number): employeesData | undefined => {
  return employees.find(emp => emp.id === id);
};

export const updateEmployeeById = (
                                    id: number,
                                    updateData: Partial<employeesData>
                                  ): employeesData | null => {
  const emp = employees.find(e => e.id === id);
  if (!emp) return null;
  Object.assign(emp, updateData);
  return emp;
};

export const deleteEmployeeById = (id: number): any => {
  const idx = employees.findIndex(emp => emp.id === id);
  if (idx === -1) {
    return { ok: false, code: "NOT_FOUND", message: "Employee not found" };
  }

  const [deleted] = employees.splice(idx, 1);
  return { ok: true, data: deleted, message: "Employee deleted" };
};

export const getEmployeesByBranch = (branchId: number): employeesData[] => {
  return getAllEmployees().filter((e: any) => e.branchId === branchId);
};

export const getEmployeesByDepartment = (department: string): employeesData[] => {
  return getAllEmployees().filter((e: any) => e.department === department);
};