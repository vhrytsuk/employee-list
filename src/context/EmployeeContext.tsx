import React, { createContext, useCallback, useState } from "react";
import { Employee, EmployeeContextType } from "@/types/Employee";
import {
  deleteEmployeeAccount,
  fetchEmployeeAccounts,
  updateEmployeeAccount,
} from "@/actions/employeeActions";

const defaultValue: EmployeeContextType = {
  employees: [],
  selectedEmployee: null,
  loading: false,
  error: null,
  fetchEmployees: async () => {},
  selectEmployeeByUserName: () => {},
  deleteEmployeeById: async () => {},
  updateEmployeeData: async () => {},
};

export const EmployeeContext = createContext<EmployeeContextType>(defaultValue);

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  const handleError = useCallback((message: string, error: unknown) => {
    console.error(message, error);
    setError(message);
  }, []);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchEmployeeAccounts();
      setEmployees(data);
    } catch (error) {
      handleError("Failed to fetch employees", error);
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  const selectEmployeeByUserName = useCallback(
    (username: string) => {
      const employee = employees.find(
        (employee) => employee.username === username
      );
      setSelectedEmployee(employee || null);
    },
    [employees]
  );

  const filterDeletedEmployee = (id: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  const deleteEmployeeById = useCallback(
    async (id: string) => {
      try {
        await deleteEmployeeAccount(id);
        filterDeletedEmployee(id);
        setSelectedEmployee(null);
      } catch (error) {
        handleError("Failed to delete employee", error);
      }
    },
    [handleError]
  );

  const updateEmployeeData = async (id: string, updatedData: Employee) => {
    setLoading(true);
    setError(null);

    try {
      const updatedEmployee = await updateEmployeeAccount(id, updatedData);

      setEmployees((prevEmployees) => {
        const index = prevEmployees.findIndex((employee) => employee.id === id);

        if (index === -1) {
          return prevEmployees;
        }

        const newEmployees = [...prevEmployees];
        newEmployees[index] = updatedEmployee;

        return newEmployees;
      });

      if (selectedEmployee?.id === id) {
        setSelectedEmployee(updatedEmployee);
      }
    } catch (error) {
      setError("Failed to update employee");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        fetchEmployees,
        loading,
        error,
        selectEmployeeByUserName,
        selectedEmployee,
        deleteEmployeeById,
        updateEmployeeData,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
