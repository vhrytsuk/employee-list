import { useState, useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";

import { Employee } from "@/types/Employee";
import { EmployeeContext } from "@/context/EmployeeContext";

const useEmployeeHandlers = () => {
  const {
    selectedEmployee,
    deleteEmployeeById,
    updateEmployeeData,
    selectEmployeeByUserName,
  } = useContext(EmployeeContext);

  const { username } = useParams<{ username: string }>();

  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const [updateAccountOpen, setUpdateAccountOpen] = useState(false);

  const handleOpenDeleteDialog = () => setDeleteAccountOpen(true);
  const handleOpenUpdateDialog = () => setUpdateAccountOpen(true);

  const handleDeleteEmployee = useCallback(() => {
    if (selectedEmployee) {
      try {
        deleteEmployeeById(selectedEmployee.id);
      } catch (error) {
        console.error("Failed to delete employee:", error);
      } finally {
        setDeleteAccountOpen(false);
      }
    }
  }, [selectedEmployee, deleteEmployeeById]);

  const handleUpdateEmployee = useCallback(
    (values: Partial<Employee>) => {
      if (selectedEmployee) {
        const updatedData = { ...selectedEmployee, ...values };

        try {
          updateEmployeeData(selectedEmployee.id, updatedData);
        } catch (error) {
          console.error("Failed to update employee:", error);
        } finally {
          setUpdateAccountOpen(false);
        }
      }
    },
    [selectedEmployee, updateEmployeeData]
  );

  useEffect(() => {
    if (username) {
      selectEmployeeByUserName(username);
    }
  }, [username, selectEmployeeByUserName]);

  return {
    deleteAccountOpen,
    setDeleteAccountOpen,
    updateAccountOpen,
    setUpdateAccountOpen,
    handleOpenDeleteDialog,
    handleOpenUpdateDialog,
    handleDeleteEmployee,
    handleUpdateEmployee,
    selectedEmployee,
  };
};

export default useEmployeeHandlers;
