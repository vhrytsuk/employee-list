import employeesAPI from "@/api/employeesApi";
import { Employee } from "@/types/Employee";

const employeesAPIUrl = "/employee-list";

export const fetchEmployeeAccounts = async (): Promise<Employee[]> => {
  try {
    const response = await employeesAPI.get<Employee[]>(employeesAPIUrl);
    return response.data;
  } catch {
    throw new Error("Failed to fetch employee accounts");
  }
};

export const deleteEmployeeAccount = async (id: string) => {
  try {
    const response = await employeesAPI.delete<{ id: string }>(
      `${employeesAPIUrl}/${id}`
    );

    return response.data.id;
  } catch {
    throw new Error("Failed to fetch employee accounts");
  }
};

export const updateEmployeeAccount = async (
  id: string,
  updatedData: Partial<Employee>
): Promise<Employee> => {
  try {
    const response = await employeesAPI.put<Employee>(
      `${employeesAPIUrl}/${id}`,
      updatedData
    );

    return response.data;
  } catch {
    throw new Error("Failed to update employee account");
  }
};
