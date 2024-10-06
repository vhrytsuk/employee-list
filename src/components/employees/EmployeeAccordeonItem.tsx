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
  onToggle: (value: string) => void;
}

const EmployeeAccordionItem: React.FC<EmployeeAccordionItemProps> = ({
  employee,
  onToggle,
}) => {
  const hasSubordinates = employee.subordinates.length > 0;

  return (
    <AccordionItem key={employee.id} value={String(employee.id)}>
      <AccordionTrigger
        isActiveTrigger={hasSubordinates}
        onClick={() => onToggle(String(employee.id))}
      >
        <EmployeesItem employee={employee} />
      </AccordionTrigger>
      <AccordionContent>
        {hasSubordinates ? (
          <div>
            {employee.subordinates.map((subordinate) => (
              <EmployeeAccordionItem
                key={subordinate.id}
                employee={subordinate}
                onToggle={onToggle}
              />
            ))}
          </div>
        ) : null}
      </AccordionContent>
    </AccordionItem>
  );
};

export default EmployeeAccordionItem;
