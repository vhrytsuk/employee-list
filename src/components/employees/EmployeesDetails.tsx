import React from "react";
import { Button, Card, Flex, Text } from "@radix-ui/themes";

import { Dialog } from "@/components/common";
import { EmployeeUpdateForm } from "./EmployeeUpdateForm";
import EmployeeCard from "./EmployeeCard";
import useEmployeeHandlers from "./useEmployeeHandlers";

const EmployeesDetails: React.FC = () => {
  const {
    deleteAccountOpen,
    setDeleteAccountOpen,
    updateAccountOpen,
    setUpdateAccountOpen,
    handleOpenDeleteDialog,
    handleOpenUpdateDialog,
    handleDeleteEmployee,
    handleUpdateEmployee,
    selectedEmployee,
  } = useEmployeeHandlers();

  if (!selectedEmployee) {
    return (
      <Card variant='classic' className='p-5 w-full shadow-lg'>
        <Text size='3'>Select an employee to view details</Text>
      </Card>
    );
  }

  return (
    <>
      <EmployeeCard
        employee={selectedEmployee}
        deleteEmployee={handleOpenDeleteDialog}
        editEmployee={handleOpenUpdateDialog}
      />
      <Dialog
        title='Delete Account'
        description={`Are you sure you want to delete ${selectedEmployee.first_name} ${selectedEmployee.last_name}'s account? This action cannot be undone.`}
        isModalOpen={deleteAccountOpen}
        setIsModalOpen={setDeleteAccountOpen}
      >
        <Flex justify='end'>
          <Button
            variant='soft'
            color='gray'
            onClick={() => setDeleteAccountOpen(false)}
            className='mr-2'
          >
            Cancel
          </Button>
          <Button variant='soft' color='red' onClick={handleDeleteEmployee}>
            Confirm Delete
          </Button>
        </Flex>
      </Dialog>
      <Dialog
        title='Update Account'
        description='Fill the inpunts and submit the form'
        isModalOpen={updateAccountOpen}
        setIsModalOpen={setUpdateAccountOpen}
      >
        <EmployeeUpdateForm
          employee={selectedEmployee}
          handleUpdateEmployee={handleUpdateEmployee}
          cancelUpdate={() => setUpdateAccountOpen(false)}
        />
      </Dialog>
    </>
  );
};

export default EmployeesDetails;
