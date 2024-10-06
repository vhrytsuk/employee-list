import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";

import { Employee } from "@/types/Employee";

interface EmployeesItemProps {
  employee: Employee;
}

const EmployeesItem: React.FC<EmployeesItemProps> = ({ employee }) => {
  const { first_name, last_name, email, profile_pic, username } = employee;

  return (
    <Box width='100%'>
      <Link to={`/${username}`}>
        <Flex gap='3' align='center'>
          <Avatar size='3' src={profile_pic} radius='full' fallback='T' />
          <Box>
            <Text as='div' size='2' weight='bold' className='text-left'>
              {first_name} {last_name}
            </Text>
            <Text as='div' size='2' color='gray'>
              {email}
            </Text>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};

export default EmployeesItem;
