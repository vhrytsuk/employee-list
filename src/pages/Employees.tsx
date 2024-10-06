import React from "react";
import { Grid } from "@radix-ui/themes";

import { Main, SideBar, Wrapper } from "@/components/common";
import { EmployeeProvider } from "@/context/EmployeeContext";
import EmployeesList from "@/components/employees/EmployeesList";
import EmployeesDetails from "@/components/employees/EmployeesDetails";

const Employees: React.FC = () => {
  return (
    <EmployeeProvider>
      <Wrapper>
        <Grid columns={{ xs: "1fr", md: "35% 1fr" }} gap='5' width='100%'>
          <SideBar>
            <EmployeesList />
          </SideBar>
          <Main>
            <EmployeesDetails />
          </Main>
        </Grid>
      </Wrapper>
    </EmployeeProvider>
  );
};

export default Employees;
