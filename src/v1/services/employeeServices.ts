import { employees, employeesData } from "../../data/employees";

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