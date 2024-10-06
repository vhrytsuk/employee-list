import { Employee, EmployeeSubordinates } from "@/types/Employee";

export function buildHierarchy(
  employeesList: Employee[]
): EmployeeSubordinates[] {
  const employeeMap: { [key: string]: EmployeeSubordinates } = {};
  const hierarchy: EmployeeSubordinates[] = [];

  if (!employeesList.length) {
    return hierarchy;
  }

  employeesList.forEach((employee) => {
    employeeMap[employee.id] = { ...employee, subordinates: [] };
  });

  employeesList.forEach((employee) => {
    if (employee.manager_id && employeeMap[employee.manager_id]) {
      employeeMap[employee.manager_id].subordinates.push(
        employeeMap[employee.id]
      );
    } else {
      hierarchy.push(employeeMap[employee.id]);
    }
  });

  return hierarchy;
}
