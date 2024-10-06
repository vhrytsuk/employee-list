import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/common";

import { EmployeeSubordinates } from "@/types/Employee";
import EmployeesItem from "./EmployeesItem";

interface EmployeeAccordionItemProps {
  employee: EmployeeSubordinates;
}

const EmployeeAccordionItem: React.FC<EmployeeAccordionItemProps> = ({
  employee,
}) => {
  const hasSubordinates = employee.subordinates.length > 0;

  return (
    <AccordionItem key={employee.id} value={String(employee.id)}>
      <AccordionTrigger isActiveTrigger={hasSubordinates}>
        <EmployeesItem employee={employee} />
      </AccordionTrigger>
      <AccordionContent>
        {hasSubordinates ? (
          <div>
            {employee.subordinates.map((subordinate) => (
              <EmployeeAccordionItem
                key={subordinate.id}
                employee={subordinate}
              />
            ))}
          </div>
        ) : null}
      </AccordionContent>
    </AccordionItem>
  );
};

export default EmployeeAccordionItem;
