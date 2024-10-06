import React, { useContext, useEffect, useMemo } from "react";
import { Accordion } from "@radix-ui/react-accordion";

import { EmployeeContext } from "@/context/EmployeeContext";
import { buildHierarchy } from "@/utils/buildHierarchy";
import { EmployeeSubordinates } from "@/types/Employee";
import EmployeeAccordionItem from "./EmployeeAccordeonItem";

const EmployeesList: React.FC = () => {
  const { employees, fetchEmployees, loading } = useContext(EmployeeContext);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const hierarchy: EmployeeSubordinates[] = useMemo(() => {
    return buildHierarchy(employees);
  }, [employees]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hierarchy.length) {
    return <div>No employees found</div>;
  }

  return (
    <div className='shadow-lg'>
      <Accordion type='multiple'>
        {hierarchy.map((employee) => (
          <EmployeeAccordionItem key={employee.id} employee={employee} />
        ))}
      </Accordion>
    </div>
  );
};

export default EmployeesList;
